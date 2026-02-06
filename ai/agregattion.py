from sqlalchemy import func, and_
from datetime import datetime, timedelta
from typing import Dict, List, Optional
import numpy as np

class ReportAggregator:
    def __init__(self, db_session, user_id: int, injury_id: int):
        self.db = db_session
        self.user_id = user_id
        self.injury_id = injury_id
    
    def get_executive_summary(self, start_date: datetime, end_date: datetime) -> Dict:
        sessions = self.db.query(WalkingSessions).filter(
            and_(
                WalkingSessions.user_id == self.user_id,
                WalkingSessions.start_time >= start_date,
                WalkingSessions.start_time <= end_date,
                WalkingSessions.is_processed == True
            )
        ).all()
        
        injury = self.db.query(Injuries).get(self.injury_id)
        
        latest_snapshot = self.db.query(ProgressSnapshots).filter(
            ProgressSnapshots.injury_id == self.injury_id
        ).order_by(ProgressSnapshots.created_at.desc()).first()
        
        prev_week_start = start_date - timedelta(days=7)
        prev_snapshot = self.db.query(ProgressSnapshots).filter(
            and_(
                ProgressSnapshots.injury_id == self.injury_id,
                ProgressSnapshots.created_at >= prev_week_start,
                ProgressSnapshots.created_at < start_date
            )
        ).order_by(ProgressSnapshots.created_at.desc()).first()
        
        score_change = None
        if latest_snapshot and prev_snapshot:
            score_change = latest_snapshot.overall_score - prev_snapshot.overall_score
        
        critical_alerts = self._detect_critical_alerts(sessions)
        
        return {
            "patient": {
                "name": f"{injury.user.first_name} {injury.user.last_name}",
                "age": self._calculate_age(injury.user.date_of_birth),
                "injury_type": injury.injury_type,
                "affected_side": injury.affected_side
            },
            "timeline": {
                "post_op_day": (datetime.now() - injury.surgery_date).days if injury.surgery_date else None,
                "recovery_phase": injury.recovery_phase,
                "report_period": f"{start_date.strftime('%d.%m.%Y')} - {end_date.strftime('%d.%m.%Y')}"
            },
            "overall_score": latest_snapshot.overall_score if latest_snapshot else None,
            "score_trend": score_change,
            "critical_alerts": critical_alerts,
            "total_sessions": len(sessions)
        }
    
    def _detect_critical_alerts(self, sessions: List[WalkingSessions]) -> List[Dict]:
        """Автоматическое обнаружение критических событий"""
        alerts = []
        
        for session in sessions:
            # Alert 1: Критический GVI
            if session.gvi and session.gvi > 150:
                alerts.append({
                    "severity": "CRITICAL",
                    "type": "high_gvi",
                    "timestamp": session.start_time,
                    "value": session.gvi,
                    "message": f"GVI превысил 150 ({session.gvi:.1f})"
                })
            
            # Alert 2: Резкое снижение ROM
            if session.knee_amplitude and session.knee_amplitude < 70:
                alerts.append({
                    "severity": "WARNING",
                    "type": "low_rom",
                    "timestamp": session.start_time,
                    "value": session.knee_amplitude,
                    "message": f"ROM ниже критического уровня ({session.knee_amplitude:.1f}°)"
                })
            
            # Alert 3: Высокая вариабельность
            if session.step_time_variability and session.step_time_variability > 15:
                alerts.append({
                    "severity": "WARNING",
                    "type": "unstable_gait",
                    "timestamp": session.start_time,
                    "value": session.step_time_variability,
                    "message": "Нестабильность походки"
                })
        
        return alerts
    
    # ============================================
    # 2. CLINICAL METRICS DASHBOARD
    # ============================================
    
    def get_primary_gait_parameters(self, sessions: List[WalkingSessions]) -> Dict:
        """Таблица основных параметров походки"""
        
        # Разделить сессии по сторонам (если есть данные)
        injured_sessions = [s for s in sessions if self._is_injured_side_session(s)]
        healthy_sessions = [s for s in sessions if not self._is_injured_side_session(s)]
        
        # Если нет разделения - использовать симметрию внутри сессии
        metrics = {
            "knee_rom": self._calculate_metric_comparison(
                sessions, "knee_amplitude", clinical_norm=120
            ),
            "cadence": self._calculate_metric_comparison(
                sessions, "cadence", clinical_norm=110
            ),
            "stride_length": self._calculate_metric_comparison(
                sessions, "avg_speed", clinical_norm=1.3  # м/с
            ),
            "gvi": {
                "injured": np.mean([s.gvi for s in sessions if s.gvi]),
                "healthy": 98,  # Норма
                "asymmetry": None,
                "clinical_norm": 110,
                "status": self._get_status_color(np.mean([s.gvi for s in sessions if s.gvi]), 110)
            }
        }
        
        return metrics
    
    def _calculate_metric_comparison(self, sessions, field_name, clinical_norm) -> Dict:
        """Универсальная функция сравнения метрик"""
        values = [getattr(s, field_name) for s in sessions if getattr(s, field_name)]
        
        if not values:
            return None
        
        avg_value = np.mean(values)
        asymmetry = abs(avg_value - clinical_norm) / clinical_norm * 100
        
        return {
            "injured": avg_value,
            "healthy": clinical_norm * 0.95,  # Условная "здоровая" нога
            "asymmetry": asymmetry,
            "clinical_norm": clinical_norm,
            "status": self._get_status_color(asymmetry, threshold=10)
        }
    
    def _get_status_color(self, value, threshold, inverse=False) -> str:
        """🟢🟡🔴 статус"""
        if inverse:
            if value < threshold: return "green"
            elif value < threshold * 1.5: return "yellow"
            else: return "red"
        else:
            if value > threshold: return "red"
            elif value > threshold * 0.7: return "yellow"
            else: return "green"
    
    # ============================================
    # 3. THREE-MATRIX COMPARISON
    # ============================================
    
    def get_three_matrix_data(self, sessions: List[WalkingSessions], metric: str = "knee_amplitude") -> Dict:
        """Данные для графика сравнения трех линий"""
        
        # 1. Clinical Norm (из литературы)
        clinical_norm = self._get_clinical_norm(metric)
        
        # 2. Personal Baseline (из is_baseline=True сессий)
        baseline_sessions = self.db.query(WalkingSessions).filter(
            and_(
                WalkingSessions.user_id == self.user_id,
                WalkingSessions.is_baseline == True
            )
        ).all()
        
        personal_baseline = None
        if baseline_sessions:
            baseline_values = [getattr(s, metric) for s in baseline_sessions if getattr(s, metric)]
            personal_baseline = np.mean(baseline_values) if baseline_values else None
        
        # 3. Current Performance (текущие сессии)
        current_values = [getattr(s, metric) for s in sessions if getattr(s, metric)]
        
        # Временная ось (группировка по дням)
        daily_data = self._group_by_days(sessions, metric)
        
        return {
            "clinical_norm": clinical_norm,
            "personal_baseline": personal_baseline,
            "current_performance": {
                "daily_values": daily_data,
                "average": np.mean(current_values) if current_values else None
            },
            "metric_name": metric,
            "unit": self._get_metric_unit(metric)
        }
    
    def _get_clinical_norm(self, metric: str) -> float:
        """Эталонные значения из литературы"""
        CLINICAL_NORMS = {
            "knee_amplitude": 120,  # градусы
            "cadence": 110,  # шагов/мин
            "avg_speed": 1.3,  # м/с
            "gvi": 100,  # %
            "step_time_variability": 5  # CV%
        }
        return CLINICAL_NORMS.get(metric, 0)
    
    def _group_by_days(self, sessions: List[WalkingSessions], metric: str) -> List[Dict]:
        """Группировка метрик по дням"""
        from collections import defaultdict
        
        daily = defaultdict(list)
        for session in sessions:
            day = session.start_time.date()
            value = getattr(session, metric)
            if value:
                daily[day].append(value)
        
        return [
            {
                "date": str(day),
                "value": np.mean(values),
                "min": np.min(values),
                "max": np.max(values)
            }
            for day, values in sorted(daily.items())
        ]
    
    # ============================================
    # 4. TREND ANALYSIS
    # ============================================
    
    def get_weekly_trends(self, weeks: int = 4) -> Dict:
        """Динамика за последние N недель"""
        
        end_date = datetime.now()
        trends = []
        
        for week_offset in range(weeks, 0, -1):
            week_end = end_date - timedelta(days=7 * (week_offset - 1))
            week_start = week_end - timedelta(days=7)
            
            sessions = self.db.query(WalkingSessions).filter(
                and_(
                    WalkingSessions.user_id == self.user_id,
                    WalkingSessions.start_time >= week_start,
                    WalkingSessions.start_time < week_end,
                    WalkingSessions.is_processed == True
                )
            ).all()
            
            if not sessions:
                continue
            
            # Агрегированные метрики за неделю
            week_data = {
                "week_number": weeks - week_offset + 1,
                "date_range": f"{week_start.strftime('%d.%m')} - {week_end.strftime('%d.%m')}",
                "rom": np.mean([s.knee_amplitude for s in sessions if s.knee_amplitude]),
                "symmetry": self._calculate_symmetry_index(sessions),
                "gvi": np.mean([s.gvi for s in sessions if s.gvi]),
                "overall_score": self._get_snapshot_for_week(week_start, week_end)
            }
            
            trends.append(week_data)
        
        return {
            "weeks": trends,
            "improvement_rate": self._calculate_improvement_rate(trends)
        }
    
    def _calculate_symmetry_index(self, sessions: List[WalkingSessions]) -> float:
        """Индекс симметрии (упрощенный)"""
        # Можно использовать stance_swing_ratio или создать композитный индекс
        ratios = [s.stance_swing_ratio for s in sessions if s.stance_swing_ratio]
        if not ratios:
            return None
        
        # Идеальное соотношение stance:swing = 60:40 = 1.5
        ideal_ratio = 1.5
        avg_ratio = np.mean(ratios)
        symmetry_index = (1 - abs(avg_ratio - ideal_ratio) / ideal_ratio) * 100
        
        return max(0, min(100, symmetry_index))
    
    def _calculate_improvement_rate(self, trends: List[Dict]) -> float:
        """% улучшения за период"""
        if len(trends) < 2:
            return 0
        
        first_score = trends[0]["overall_score"]
        last_score = trends[-1]["overall_score"]
        
        if not first_score or not last_score:
            return 0
        
        return ((last_score - first_score) / first_score) * 100
    
    # ============================================
    # 5. PAIN CORRELATION
    # ============================================
    
    def get_pain_correlation_data(self, sessions: List[WalkingSessions]) -> Dict:
        """Корреляция боли и метрик походки"""
        
        # Предполагаем, что боль хранится в notes или отдельной таблице
        # Для демо используем GVI как прокси
        
        daily_data = []
        for session in sessions:
            pain_level = self._extract_pain_from_notes(session.notes)
            
            daily_data.append({
                "date": session.start_time.strftime('%d.%m'),
                "pain": pain_level,
                "gvi": session.gvi,
                "rom": session.knee_amplitude
            })
        
        # Корреляционный анализ
        if len(daily_data) > 3:
            pain_values = [d["pain"] for d in daily_data if d["pain"]]
            gvi_values = [d["gvi"] for d in daily_data if d["gvi"]]
            
            if len(pain_values) == len(gvi_values) and len(pain_values) > 0:
                correlation = np.corrcoef(pain_values, gvi_values)[0, 1]
            else:
                correlation = None
        else:
            correlation = None
        
        return {
            "daily_data": daily_data,
            "correlation_coefficient": correlation,
            "insight": self._generate_pain_insight(correlation)
        }
    
    def _extract_pain_from_notes(self, notes: str) -> Optional[int]:
        """Извлечь уровень боли из заметок (regex или NLP)"""
        if not notes:
            return None
        
        # Простой пример: "боль 7/10"
        import re
        match = re.search(r'(\d+)/10', notes)
        if match:
            return int(match.group(1))
        
        return None
    
    def _generate_pain_insight(self, correlation: Optional[float]) -> str:
        """AI-like инсайт о корреляции"""
        if correlation is None:
            return "Недостаточно данных для анализа"
        
        if correlation > 0.5:
            return "Сильная положительная корреляция: высокая боль совпадает с нестабильностью походки"
        elif correlation < -0.5:
            return "Обратная корреляция: боль снижается при улучшении стабильности"
        else:
            return "Слабая корреляция: боль и походка могут быть независимыми факторами"
    
    # ============================================
    # 6. SESSION-BY-SESSION TABLE
    # ============================================
    
    def get_session_breakdown(self, sessions: List[WalkingSessions]) -> List[Dict]:
        """Детальная таблица всех сессий"""
        
        breakdown = []
        for session in sessions:
            pain_pre = self._extract_pain_from_notes(session.notes)  # Нужна отдельная таблица
            
            breakdown.append({
                "date": session.start_time.strftime('%d.%m'),
                "time": session.start_time.strftime('%H:%M'),
                "duration_min": round(session.duration / 60, 1) if session.duration else None,
                "rom": session.knee_amplitude,
                "gvi": session.gvi,
                "cadence": session.cadence,
                "pain_pre": pain_pre,
                "pain_post": None,  # TODO: добавить в БД
                "activity_type": session.activity_type
            })
        
        return breakdown
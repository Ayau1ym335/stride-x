import numpy as np
from typing import List, Dict, Optional, Any
import logging
from datetime import timedelta
import json

from app.data.tables import SessionStatus
from .dclass import Metadata 

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger('SessionSummary')

def calculate_session_summary(
    metrics_list: List[Dict[str, Any]],
    orientation: np.ndarray,
    activities: List[str],
    session_metadata: Metadata
) -> Optional[Dict[str, Any]]:
    
    # 1. Проверка на пустоту
    if not metrics_list or len(metrics_list) == 0:
        logger.warning("Empty metrics list - no steps detected.")
        return None

    # 2. Фильтрация артефактов (шума)
    filtering_result = _filter_artifacts(metrics_list)
    clean_metrics = filtering_result['clean_data']
    
    if not clean_metrics:
        logger.warning("All steps were filtered out as artifacts!")
        return None

    # 3. 🔥 ДЕТЕКЦИЯ ПАТОЛОГИЙ (Новая функция)
    # Ищем судороги и сбои до того, как усредним данные
    pathology_events = _detect_session_pathologies(clean_metrics)

    # 4. Расчет стандартных статистик
    basic_stats = _calculate_basic_temporal_stats(clean_metrics) 
    kinematic_stats = _calculate_kinematic_aggregation(clean_metrics)
    variability_stats = _calculate_variability_metrics(clean_metrics)
    gvi = _calculate_gvi(variability_stats)
    orientation_stats = _calculate_global_orientation(orientation)
    clinical_stats = _calculate_clinical_metrics(clean_metrics)
    avg_speed_data = _calculate_speed(clean_metrics, session_metadata)
   
    # 5. Сборка итогового словаря
    summary = {
        # --- Метаданные ---
        'user_id': session_metadata.user_id,
        'start_time': session_metadata.start_time.isoformat(),
        'end_time': (session_metadata.start_time + timedelta(seconds=basic_stats['duration'])).isoformat(),
        'duration': basic_stats['duration'],
        'user_notes': session_metadata.user_notes,
        'is_baseline': session_metadata.is_baseline,
        'is_processed': True,
        'status': SessionStatus.COMPLETED.value,
        'activity_type': activities,

        # --- 🔥 Патологии и Аномалии ---
        'pathology_log': pathology_events,          # Список конкретных проблем
        'has_anomalies': len(pathology_events) > 0, # Флаг для быстрого поиска

        # --- Основные метрики ---
        'step_count': len(clean_metrics),
        'cadence': basic_stats['cadence'],
        'avg_speed': avg_speed_data['avg_speed'],
        
        # Временные параметры
        'avg_step_time': basic_stats['avg_step_time'],
        'avg_stance_time': basic_stats['avg_stance_time'],
        'avg_swing_time': basic_stats['avg_swing_time'],
        'stance_swing_ratio': basic_stats['stance_swing_ratio'],
        
        # Кинематика (Колено)
        'knee_angle_mean': kinematic_stats['knee_angle_mean'],
        'knee_angle_std': kinematic_stats['knee_angle_std'],
        'knee_angle_max': kinematic_stats['knee_angle_max'],
        'knee_angle_min': kinematic_stats['knee_angle_min'],
        'knee_amplitude': kinematic_stats['knee_amplitude'],
        
        # Кинематика (Бедро)
        'hip_angle_mean': kinematic_stats.get('hip_angle_mean'),
        'hip_angle_std': kinematic_stats.get('hip_angle_std'),
        'hip_angle_max': kinematic_stats.get('hip_angle_max'),
        'hip_angle_min': kinematic_stats.get('hip_angle_min'),
        'hip_amplitude': kinematic_stats.get('hip_amplitude'),
        
        # Вариабельность (CV%)
        'step_time_cv': variability_stats['step_time_cv'],
        'stance_time_cv': variability_stats['stance_time_cv'],
        'swing_time_cv': variability_stats['swing_time_cv'],
        'knee_angle_cv': variability_stats['knee_angle_cv'],
        
        # GVI Score
        'gvi': gvi,
        
        # Ориентация в пространстве
        'avg_roll': orientation_stats['avg_roll'],
        'avg_pitch': orientation_stats['avg_pitch'],
        'avg_yaw': orientation_stats['avg_yaw'],
     
        # Клинические метрики
        'stride_length_variability': clinical_stats.get('stride_length_variability'),
        'double_support_time': clinical_stats.get('double_support_time'),
        'avg_impact_force': clinical_stats.get('avg_impact_force'),
        'avg_peak_angular_velocity': clinical_stats.get('avg_peak_angular_velocity'),
    }
    
    return summary


# --- НОВАЯ ФУНКЦИЯ ДЕТЕКЦИИ ---
def _detect_session_pathologies(metrics_list: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    """
    Анализирует каждый шаг сессии на отклонение от медианы.
    Находит: Судороги (ROM Drop), Спотыкания (Rhythm), Удары (Impact).
    """
    if not metrics_list or len(metrics_list) < 5:
        return []

    anomalies = []
    
    # Считаем "Норму" для этой сессии (Медиану)
    rom_values = [m['knee_rom'] for m in metrics_list if 'knee_rom' in m]
    step_times = [m['step_time'] for m in metrics_list if 'step_time' in m]
    
    median_rom = float(np.median(rom_values)) if rom_values else 0
    median_step_time = float(np.median(step_times)) if step_times else 0
    
    for i, step in enumerate(metrics_list):
        # Таймштамп или номер шага
        timestamp = step.get('timestamp', f"Step {i}") 

        # 1. СУДОРОГА / БОЛЬ (Severe ROM Drop)
        # Если амплитуда < 60% от обычной -> Критично
        if 'knee_rom' in step and median_rom > 0:
            current_rom = step['knee_rom']
            if current_rom < (median_rom * 0.6):
                anomalies.append({
                    "step_index": i,
                    "timestamp": timestamp,
                    "type": "Severe ROM Drop",
                    "metric": "knee_rom",
                    "value": round(current_rom, 1),
                    "typical_value": round(median_rom, 1),
                    "severity": "Critical",
                    "description": "Резкое ограничение движения (возможен спазм)"
                })

        # 2. СПОТЫКАНИЕ / СБОЙ РИТМА (Rhythm Instability)
        # Если время шага отличается более чем на 50%
        if 'step_time' in step and median_step_time > 0:
            current_time = step['step_time']
            if current_time < (median_step_time * 0.5) or current_time > (median_step_time * 1.5):
                anomalies.append({
                    "step_index": i,
                    "timestamp": timestamp,
                    "type": "Gait Arrhythmia",
                    "metric": "step_time",
                    "value": round(current_time, 2),
                    "typical_value": round(median_step_time, 2),
                    "severity": "Warning",
                    "description": "Сбой ритма шага (спотыкание или заминка)"
                })
                
        # 3. УДАРНАЯ ПЕРЕГРУЗКА (High Impact)
        # Абсолютный порог > 2.5g (примерно бег или прыжок)
        current_impact = step.get('impact_force', 0)
        if current_impact > 2.5:
             anomalies.append({
                "step_index": i,
                "timestamp": timestamp,
                "type": "High Impact Spike",
                "metric": "impact_force",
                "value": round(current_impact, 2),
                "severity": "Warning",
                "description": "Жесткий удар при приземлении"
            })

    return anomalies


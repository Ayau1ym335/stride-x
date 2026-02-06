ALL_METRICS_LIST = [
    "cadence", "avg_speed", "avg_peak_angular_velocity", "step_count",
    
    "knee_angle_mean", "knee_angle_max", "knee_angle_min", "knee_amplitude", "knee_angle_std",
    "hip_angle_mean", "hip_angle_max", "hip_angle_min", "hip_amplitude", "hip_angle_std",
    "avg_roll", "avg_pitch", "avg_yaw",

    "gvi", "step_time_variability", "knee_angle_variability", 
    "stance_time_variability", "swing_time_variability", "stride_length_variability",

    "avg_stance_time", "avg_swing_time", "stance_swing_ratio", 
    "double_support_time", "avg_impact_force"
]

METRIC_DOMAINS_MAP = {
    "rhythm": [
        "cadence", "avg_speed", "step_count","avg_peak_angular_velocity"
    ],
    "mechanics": [
        "knee_angle_mean", "hip_angle_mean", "knee_angle_std", "hip_angle_std", 
        "knee_angle_min", "hip_angle_min", "knee_angle_max", "hip_angle_max",
        "knee_amplitude", "hip_amplitude", "avg_roll", "avg_pitch", "avg_yaw"
    ],
    "variability": [
        "gvi", "step_time_variability", "knee_angle_variability", "stride_length_variability",
        "stance_time_variability", "swing_time_variability"
    ],
    "symmetry": [
        "stance_swing_ratio", "avg_swing_time", "avg_stance_time", "double_support_time",
        "savg_impact_force"
    ]
}
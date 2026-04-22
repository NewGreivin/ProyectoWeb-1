export default function ProgressBar({
    value = 0,                    // Valor actual del progreso
    min = 0,                      // Valor mínimo
    max = 100,                    // Valor máximo
    variant = 'primary',          // Color: primary, success, info, warning, danger
    height = '',                  // Altura: '15px', '20px', '30px', etc
    className = ''                // Clases CSS: 'mb-3', 'mt-2', 'shadow',etc
}) {
    const variantClass = variant ? `bg-${variant}` : '';
    const barClasses = `progress-bar ${variantClass}`.trim();

    const progressStyle = height ? { height } : {};
    const barStyle = { width: `${((value - min) / (max - min)) * 100}%` };

    return (
        <div
            className={`progress ${className}`}
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin={min}
            aria-valuemax={max}
            style={progressStyle}
        >
            <div className={barClasses} style={barStyle}></div>
        </div>
    );
}
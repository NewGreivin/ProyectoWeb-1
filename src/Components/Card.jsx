export default function Card({
    color_background = "black",
    color_texto = "white",
    alineado = "center",
    header,
    footer,

    chil_top,
    chil_body,
    chil_bottom
}
) {

    const isHexColor = (color) => /^#[0-9A-F]{6}$/i.test(color);

    const color_fondo = {
        "blue": "text-bg-primary",
        "grey": "text-bg-secondary",
        "green": "text-bg-success",
        "red": "text-bg-danger",
        "yellow": "text-bg-warning",
        "skyblue": "text-bg-info",
        "white": "text-bg-light",
        "black": "text-bg-dark"
    }[color_background];

    const color_text = {
        "blue": "text-primary",
        "grey": "text-secondary",
        "green": "text-success",
        "red": "text-danger",
        "yellow": "text-warning",
        "skyblue": "text-info",
        "white": "text-light",
        "black": "text-dark"
    }[color_texto];

    const alineacion = {
        "left": "text-start",
        "center": "text-center",
        "right": "text-end"
    }[alineado];

    const dynamicStyle = {
        width: "18rem",
        ...(isHexColor(color_background) && { backgroundColor: color_background }),
        ...(isHexColor(color_texto) && { color: color_texto })
    };

    return (
        <div className={`card ${!isHexColor(color_background) ? color_fondo : ''} ${!isHexColor(color_texto) ? color_text : ''} ${alineacion} shadow rounded`} style={dynamicStyle}>

            {header && <div className="card-header">{header}</div>}

            {chil_top}

            <div className="card-body">
            {chil_body}
            </div>
            {chil_bottom}
            {footer && <div className="card-footer">{footer}</div>}

        </div>
    )
}

export default function Card({
    color_background = "black",
    color_texto = "white",
    alineado = "center",
    header,
    footer,

    children
}
) {

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

    return (
        <div className={`card ${color_fondo} ${color_text} ${alineacion} shadow rounded`} style={{ width: "18rem" }}>

            {header && <div className="card-header">{header}</div>}

            <div className="card-body">
                {children}
            </div>

            {footer && <div className="card-footer">{footer}</div>}

        </div>
    )
}
export default function Card({
    color_background = "#ffff",
    color_texto = "white",
    alineado = "center",
    header,
    footer,
    card_width = "18rem",


    chil_top,
    chil_body,
    chil_bottom
}
) {

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
        <div className={`card ${color_text} ${alineacion} shadow rounded`} style={{ width: card_width, backgroundColor: color_background }}>

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
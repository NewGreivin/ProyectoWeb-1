export default function Card({
    color_background = "#ffff",
    color_texto = "white",
    alineado_card = "",
    header,
    footer,
    card_width = "18rem",
    responsivo = false,
    texto_alineado = "center",


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

    const alineacion_card = {
      "left": "me-auto",
      "center": "mx-auto",
      "right": "ms-auto"
    }[alineado_card];

    const alineado_text = {
      "left": "text-start",
      "center": "text-center",
      "right": "text-end"
    }[texto_alineado];

    const card_responsive = responsivo ? "w-100" : "";

    return (
        <div className={`card ${color_text} ${alineacion_card} ${alineado_text} shadow rounded ${card_responsive}`} style={{ width: card_width, backgroundColor: color_background }}>

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
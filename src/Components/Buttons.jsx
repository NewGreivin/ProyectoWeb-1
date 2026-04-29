export default function Button({ texto, color, tamano, posicion, mostrarBorde = false, colorBorde, colorTexto, sombra = "", onClick, paddingY, paddingX, fontSize, children }) {
  
  const buttonColor = {
    "azul": "btn-primary",
    "gris": "btn-secondary",
    "verde": "btn-success",
    "rojo": "btn-danger",
    "amarillo": "btn-warning",
    "celeste": "btn-info",
    "blanco": "btn-light",
    "negro": "btn-dark"
  }[color];

  const coloresTexto = {
    "azul": "text-primary",
    "gris": "text-secondary",
    "verde": "text-success",
    "rojo": "text-danger",
    "amarillo": "text-warning",
    "celeste": "text-info",
    "blanco": "text-light",
    "negro": "text-dark"
  }[colorTexto] || "";

  const buttonSize = {
    "grande": "btn-lg",
    "pequeño": "btn-sm"
  }[tamano];

  const buttonPosition = {
    "izquierda": "",
    "centro": "mx-auto d-block",
    "derecha": "ms-auto"
  }[posicion];

  const borderColor = {
    "azul": "border-primary",
    "gris": "border-secondary",
    "verde": "border-success",
    "rojo": "border-danger",
    "amarillo": "border-warning",
    "celeste": "border-info",
    "blanco": "border-light",
    "negro": "border-dark"
  }[colorBorde];


  const shadowType = {
    "pequeña": "shadow-sm",
    "normal": "shadow",
    "grande": "shadow-lg"
  }[sombra] || "";

  const borderClass = mostrarBorde ? `border ${borderColor}` : "";

  const customStyles = {
    ...(paddingY && { "--bs-btn-padding-y": paddingY }),
    ...(paddingX && { "--bs-btn-padding-x": paddingX }),
    ...(fontSize && { "--bs-btn-font-size": fontSize })
  };

  return (
    <button
      type="button"
      className={`btn ${buttonColor} ${buttonSize} ${buttonPosition} ${borderClass} ${shadowType} ${coloresTexto}`}
      style={customStyles}
      onClick={onClick}
    >
      {children || texto}
    </button>
  );
}
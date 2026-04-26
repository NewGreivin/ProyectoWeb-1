import Button from './Buttons';
import Texto from './Texto';
import Titulo from './Titulo';

export default function Alert({
  titulo,
  texto,
  color,
  dismissible = false,
  onDismiss
}) {

  const alertColor = {
    "azul": "alert-primary",
    "gris": "alert-secondary",
    "verde": "alert-success",
    "rojo": "alert-danger",
    "amarillo": "alert-warning",
    "celeste": "alert-info",
    "blanco": "alert-light",
    "negro": "alert-dark"
  }[color] || "azul";

  return (
    <div
      className={`alert ${alertColor} ${dismissible ? "alert-dismissible fade show" : ""}`}
      role="alert"
    >
      {titulo && <Titulo texto={titulo} />}
      {texto && <Texto texto={texto} />}

      {dismissible && (
        <Button texto="×" color={color} tamano="pequeño" onClick={onDismiss} />
      )}
    </div>
  );
}
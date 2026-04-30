import Button from './Buttons';
import Texto from './Texto';
import Titulo from './Titulo';

export default function Alert({
  titulo,
  texto,
  color,
  dismissible = false,
  onDismiss,
  acciones = []
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
    <div className={`alert ${alertColor} ${dismissible ? "alert-dismissible fade show" : ""}`} role="alert">
      {titulo && <Titulo texto={titulo} color_text="black"/>}
      {texto && <Texto texto={texto} color_text="black"/>}

      {dismissible && (
        <Button texto="×" color={color} tamano="pequeño" onClick={onDismiss} />
      )}

      {acciones && acciones.length > 0 && (
        <div className="row g-2 mt-3">
          {acciones.map((accion, index) => (
            <div key={index} className="col-md-6">
              <Button
                color={accion.color || 'gris'}
                tamano="grande"
                onClick={accion.onClick}
                children={accion.label}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
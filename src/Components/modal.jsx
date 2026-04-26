import Titulo from "./Titulo";
import Button from "./Buttons";

export default function Modal({
  isOpen = false,
  onClose,
  onSave,
  titulo = "Título del modal",
  botonCerrar = "Cerrar",
  botonGuardar = "Guardar",
  tamano = "",
  centrado = true,
  scrollable = false,
  staticBackdrop = false,
  soloCerrar = false,
  children,
}) {
  if (!isOpen) return null;

  const tamanos = {
    sm: "modal-sm",
    lg: "modal-lg",
    xl: "modal-xl",
  };

  const claseDialogo = [
    "modal-dialog",
    tamanos[tamano],
    centrado && "modal-dialog-centered",
    scrollable && "modal-dialog-scrollable",
  ]
    .filter(Boolean)
    .join(" ");

  const cerrarPorFondo = () => {
    if (!staticBackdrop) onClose?.();
  };

  const evitarCierreInterno = (e) => {
    e.stopPropagation();
  };

  const guardarYCerrar = () => {
    onSave?.();
    onClose?.();
  };

  const mostrarFooter = onClose || (!soloCerrar && onSave);

  return (
    <>
      <div className="modal-backdrop fade show"></div>

      <div
        className="modal fade show d-block"
        onClick={cerrarPorFondo}
      >
        <div className={claseDialogo} onClick={evitarCierreInterno}>
          <div className="modal-content">

            <div className="modal-header">
              <Titulo
                tipografia="h5"
                texto={titulo}
                alineado="left"
              />

              <button
                className="btn-close"
                onClick={onClose}
              />
            </div>

           
            <div className="modal-body">
              {children}
            </div>

            {mostrarFooter && (
              <div className="modal-footer">

                {onClose && (
                  <Button
                    texto={botonCerrar}
                    color="secondary"
                    tamano="sm"
                    onClick={onClose}
                  />
                )}

                {!soloCerrar && onSave && (
                  <Button
                    texto={botonGuardar}
                    color="primary"
                    tamano="sm"
                    onClick={guardarYCerrar}
                  />
                )}

              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
}
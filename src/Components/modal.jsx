import Titulo from "./Titulo";
import Button from "./Buttons";

const modalTamanos = {
  pequeno: "modal-sm",
  largo: "modal-lg",
  extraLargo: "modal-xl",
};

const modalPosiciones = {
  centro: "modal-dialog-centered",
  arriba: "mt-4",
  abajo: "mt-auto mb-4",
};

export default function Modal({
  isOpen = false,
  onClose,
  onSave,
  titulo,
  btnSecundario,
  btnPrimario,
  tamano = "",
  posicion = "centro",
  scrollable = false,
  staticBackdrop = false,
  soloCerrar = false,
  colorModal = "",
  estilosModal = {},
  propsBtnSecundario = {},
  propsBtnPrimario = {},
  children,
}) {
  if (!isOpen) return null;

  const claseDialogo = [
    "modal-dialog",
    modalTamanos[tamano],
    modalPosiciones[posicion],
    scrollable && "modal-dialog-scrollable",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <div className="modal-backdrop fade show"></div>

      <div
        className="modal fade show d-flex"
        tabIndex="-1"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        style={{ minHeight: "100vh" }}
        onClick={() => !staticBackdrop && onClose?.()}
      >
        <div className={claseDialogo} onClick={(e) => e.stopPropagation()}>
          <div className={`modal-content ${colorModal}`} style={estilosModal}>
            <div className="modal-header">
              {titulo && (
                <Titulo
                  id="modal-title"
                  className="modal-title fs-5"
                  tipografia="h5"
                  texto={titulo}
                  alineado="left"
                />
              )}

              <button
                type="button"
                className="btn-close"
                aria-label="Cerrar"
                onClick={onClose}
              />
            </div>

            <div className="modal-body">{children}</div>

            {(onClose || onSave) && (
              <div className="modal-footer">
                {onClose && btnSecundario && (
                  <Button
                    texto={btnSecundario}
                    color={propsBtnSecundario.color || "gris"}
                    tamano={propsBtnSecundario.tamano || "pequeño"}
                    mostrarBorde={propsBtnSecundario.mostrarBorde}
                    colorBorde={propsBtnSecundario.colorBorde}
                    sombra={propsBtnSecundario.sombra}
                    posicion={propsBtnSecundario.posicion}
                    onClick={onClose}
                  />
                )}

                {!soloCerrar && onSave && btnPrimario && (
                  <Button
                    texto={btnPrimario}
                    color={propsBtnPrimario.color || "azul"}
                    tamano={propsBtnPrimario.tamano || "pequeño"}
                    mostrarBorde={propsBtnPrimario.mostrarBorde}
                    colorBorde={propsBtnPrimario.colorBorde}
                    sombra={propsBtnPrimario.sombra}
                    posicion={propsBtnPrimario.posicion}
                    onClick={onSave}
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
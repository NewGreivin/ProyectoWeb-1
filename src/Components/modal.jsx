export default function Modal({
  isOpen = false,
  onClose,
  onSave,
  
  tamano = "",
  posicion = "centro",
  scrollable = false,
  staticBackdrop = false,  
  colorModal = "",
  estilosModal = {},

  chil_titulo,
  chil_body,

}) {
  if (!isOpen) return null;

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

      // Modal principal//

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

          //Aquí va el contenido del modal//
          <div className={`modal-content ${colorModal}`} style={estilosModal}>

            // Encabezado del modal
            <div className="modal-header">
              // Título del modal (opcional)
              {chil_titulo && (
                <div id="modal-title" className="modal-title">
                  {chil_titulo}
                </div>
              )}

            // Botón de cierre
              <button
                type="button"
                className="btn-close"
                aria-label="Cerrar"
                onClick={onClose}
              />
            </div>
            
              // Cuerpo del modal
            <div className="modal-body">{chil_body}</div>
            
          </div>
        </div>
      </div>
    </>
  );
}
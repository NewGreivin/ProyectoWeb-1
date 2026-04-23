export default function Button({ texto, color, tamano, onClick }) {
  tamano = "btn-" + tamano;

  const buttonColor = ["primary", "secondary", "success", "danger"];
  const buttonSize = ["lg", "sm"];
  
  return (
    <button
      type="button"
      className={`btn btn-${color} ${tamano} m-2`}
      onClick={onClick}
    >
      {texto}
    </button>
  );
}
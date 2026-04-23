import Button from './Buttons';
export default function Alert({
  texto,
  color = "primary",
  dismissible = false,
  onDismiss,
  children
}) {

  const alertColors = [
    "primary", "secondary", "success", "danger",
    "warning", "info", "light", "dark"
  ];
  return (
    <div
      className={`alert alert-${color} ${dismissible ? "alert-dismissible fade show" : ""}`}
      role="alert"
    >
      {texto || children}

      {dismissible && (
        <Button texto="×" color="primary" tamano="sm" onClick={onDismiss} />
      )}
    </div>
  );
}
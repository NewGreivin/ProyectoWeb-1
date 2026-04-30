export default function Select({
    options = [],
    value,
    onChange,
    texto = "Selecciona una opción"
}) {
    return (
        <select
            className="form-select mt-3"
            value={value}
            onChange={onChange}
        >
            <option value="" disabled>{texto}</option>

            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.text}
                </option>
            ))}
        </select>
    );
}
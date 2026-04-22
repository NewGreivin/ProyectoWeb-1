export default function Select( { 
    select = "selectionDefault", 
    tamano = 1,     
    class_select = "select_lg", 
    disable = false, 
    multiple = false,

    width = "", 

    texto,
    options = []
} 
){
    
    const selection = {
        "selectionDefault": "default select example",
        "selectionLarge": "large select example",
        "selectionSmall": "small select example",
        "selectionMultiple": "multiple select example"
    }[select];
    
    const clase_select = {
        "select_lg": "form-select-lg",
        "select_sm": "form-select-sm",
    }[class_select];

    return(
        <select className={`form-select ${clase_select}`} size={tamano} aria-label={selection}  disabled={disable} multiple={multiple} style={{width: width}}>
            {texto && <option value="" disabled>{texto}</option>}
            {options.map((grupo, index) => (
                <optgroup key={index} label={grupo.label}>
                    {grupo.options.map((op, i) => (
                        <option key={i} value={op.value}>
                            {op.text}
                        </option>
                    ))}
                </optgroup>
            ))}
        </select>
    )
}
export default function Texto({ 
    texto, 
    alineado="center", 
    color_text="white" }) {

    const alineacion = {
        "left": "text-start",
        "center": "text-center",
        "right": "text-end"
    }[alineado];

    return (

        <p className={`${alineacion}`} style={{color: color_text}}>
            {texto}
        </p>
    )
}
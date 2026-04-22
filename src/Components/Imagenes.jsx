export default function Imagenes( { 
    url, 
    alt = "No logro cargar la imagen",
    clase = "responsive", 
    ancho = 200, 
    alto = 200,
    classExtra = ""
}
){

    const clase_imagen = {
        "responsive": "img-fluid",
        "thumbnail": "img-thumbnail",
        "left": "float-start",
        "right": "float-end",
        "block_center": "mx-auto d-block"
    }[clase];

    return(
        <img className={`${classExtra} ${clase_imagen}`} src={url} alt={alt} width={ancho} height={alto}/>
    )
}
export default function Navbar( { 
    
    clases = "navbar-expand-lg", 
    texto = "Navbar",
    navList = false,
    links = [],
    text_Search = "Search",
    color = "white",
    inputSearch = false,

    brandContent,
    buttonContent
} 
){
    
    //Controla como se expande o se comprime en forma hamburguesa.
    const navbar_expand = {
        "sm": "navbar-expand-sm",
        "md": "navbar-expand-md",
        "lg": "navbar-expand-lg",
        "xl": "navbar-expand-xl",
        "xxl": "navbar-expand-xxl"
    }[clases];

    const navListClass = navList 
        ? "me-auto mb-2 mb-lg-0"
        : "";

    const bg_color = {
        "blue": "primary",
        "red": "danger",
        "green": "success",
        "yellow": "warning",    
        "gray": "secondary",
        "black": "dark",
        "white": "light"
    }[color];
    
    return(
        <nav className={`navbar ${navbar_expand} bg-${bg_color}`}>
            <div className="container-fluid">
                
                {texto && <a className="navbar-brand" href="#">
                    {brandContent}
                    {texto}
                </a>}

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    {links && <ul className={`navbar-nav ${navListClass}`}>
                        {links.map((link, index ) => (
                            <li className="nav-item" key={index}>
                                <a className={`nav-link ${link.active ? 'active' : ''}`} href={link.url}>
                                    {link.texto}
                                </a>
                            </li>
                        ))}
                    </ul>}
                    
                    {inputSearch  && <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                    </form>}
                    {buttonContent}
                </div>
            </div>
        </nav>
    )
}
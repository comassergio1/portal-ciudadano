import { Link } from "react-router-dom"

export const RegistroHeader = () =>{
    return(
        <div id="contenedorHeaderPrincipal">
            <div id="contenedorHeaderIzquierda">
                <Link to="/">
                    <img src={"./assets/gobierno-entre-rios.png"} alt="ParanaLogo" height="80%" width="80%"></img>
                </Link>
            </div>
            <div id="contenedorHeaderCentro"></div>
            <div id="contenedorHeaderDerecha"></div>
        </div>
    )
}
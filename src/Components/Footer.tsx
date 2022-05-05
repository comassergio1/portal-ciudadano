import { Link } from "react-router-dom"


export const FooterComponet = () =>{

    return  (
        <div id="sticky-footer" className="flex-shrink-0 py-4 bg-dark text-white-50"> 
            <div style={{ margin: "10px" }}>
                <img src={"./assets/escudo-gobierno.png"} height="128px" width="auto"></img>
            </div>
            <div style={{ margin: "15px" }}><Link to="/preguntas#frecuentes" style={{ margin: "5px" }}>Preguntas frecuentes</Link></div>
            <div style={{ margin: "15px" }}><Link to="/terminos#condiciones" style={{ margin: "5px" }}>Términos y condiciones</Link></div>
            <strong style={{ margin: "5px" }}>@JAOdev 02/03/2022</strong>
        </div>
    )
}
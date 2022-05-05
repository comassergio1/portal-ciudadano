import { useState } from "react";
import { Link } from "react-router-dom";
import { FooterComponet } from "../../Components/Footer";
import './Ingresar.css';

const Ingresar: React.FC = () => {

    const [shown, setShown] = useState(false); 

   // const switchShown = () => setShown(!shown);

    function temporizadorDeRetraso() {
        setShown(true)
        setTimeout(() =>setShown(false), 800);
      }
      
    

    return(
        <>
             <header >
                <div id="contenedorHeaderPrincipal">
                    <div id="contenedorHeaderIzquierda">
                        <Link to="/">
                            <img src={"./assets/gobierno-entre-rios.png"} alt="ParanaLogo" height="80%" width="80%"></img>
                        </Link>

                    </div>
                    <div id="contenedorHeaderCentro">
                    </div>
                    <div id="contenedorHeaderDerecha">
                    </div>
                </div>
           </header>

            <section>
                <div className="contenedorPrincipal">
                    <div className="section">
                        
                        <h1 style={{ marginTop: "35px", marginBottom:"15px" }}>Ingresá a tu cuenta</h1>                        
                        <hr style={{  border:"none", marginLeft:"10px", marginRight:"10px",width:"50%"}} />

                        <div className="contenedorIngresarInput">

                            <label style={{margin:"0px 0px 5px 0px", fontWeight:"700"}}>CUIL</label>
                            <input style={{borderRadius:"20px", width:"50%"}} className="form-control" type="number" name="first_name" />
                           
                            <label style={{margin:"25px 0px 5px 0px", fontWeight:"700"}}>Contraseña</label>
                            <div style={{display:"flex", flexDirection:"row", alignItems:"center",  width:"50%"}}>
                                <input style={{  borderRadius: "20px"}} className="form-control" type={shown ? 'text' : 'password'} name="first_name"  />
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-eye-fill"  style={{marginLeft:"-35px"}} onClick={()=>temporizadorDeRetraso()} viewBox="0 0 16 16">
                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                </svg>
                            </div>

                            <Link to="/password@reset" style={{margin:"20px"}}>¿Olvidaste tu contraseña?</Link>

                            <button className="btn-primary-inverse"  style={{margin:"15px"}} >INGRESAR</button>
                        </div>
                        <div className="contenedorIngresarCrear">
                            <h1 style={{ fontWeight:"400", fontSize:"1.5em" }}>¿No tenés cuenta?</h1>
                            <Link to="/registro" style={{margin:"10px 0px 30px 0px", width:"100%"}}>
                                <button className="btn-new-account">CREAR CUENTA</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </section>
            <FooterComponet />
        </>

       
      );
      };
      
export default Ingresar;
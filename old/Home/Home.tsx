import React from "react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import './Home.css';



const Cargando = () =>  {
    return (
        <div style={{width:"100%", height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}} >
            <img src={"./assets/BannerGobiernoER(aumenta).gif"} alt="ParanaLogo" height="auto" width="100%"></img>
        </div>
    )
}


    
const Home = () => {

    const [phoneView, setPhoneView] = useState(false) 
    const [loading, setLoading] = useState(true);

    var pageWidth  = document.documentElement.scrollWidth;
    window.addEventListener('resize', changeScreen);

    function changeScreen(e: any){
        pageWidth  = document.documentElement.scrollWidth;
        if (pageWidth < 990){
            setPhoneView(true)
        }else{
            setPhoneView(false)
        }
    }

    useEffect(() => {

        pageWidth  = document.documentElement.scrollWidth;
        if (pageWidth < 990){
            setPhoneView(true)
        }else{
            setPhoneView(false)
        }      
        setTimeout(() => {
            setLoading(false);
          }, 1200);

    },[]);

      
    if (phoneView){
        return (
            <div>{loading ? <Cargando/>:<PhoneScreen/>}</div>
        );
    }else{
        return (
            <BrowserScreen />
        );
    }
    
}


const BrowserScreen = () => {

    return (
        <>
            <BrowserScreenHeader />
            <section>
                <div className="contenedorPrincipal">

                    <div className="contenedorPrincipalHeaderBrowser">
                        <h2 >BIENVENIDO A TU GOBIERNO DIGITAL</h2>
                        <div className="contenedorPrincipalHeaderBrowserBtn" >
                            <Link to={"/ingresar"} id="textoHipervinculo" ><button className='btn-primary-inverse'>INICIAR SESIÓN</button></Link>
                            <h2 style={{ marginTop: "50px", fontSize:"1.2em" ,fontWeight:"700"}}>¿Sos nuevo en Tu Gobierno Digital?</h2>
                            <Link to={"/registro"} id="textoHipervinculo"><button className='btn-new-account'>CREA TU CUENTA</button></Link>
                        </div>
                    </div>
                    <div className="contenedorCuerpo">
                            <hr ></hr>
                            <h2 style={{ margin: "20px",fontWeight:"700" }}>¿Qué es Portal Ciudadano?</h2>
                            <p style={{fontWeight: "500",margin:"5px 15px 5px 15px"}}> Una forma fácil y segura de acceder a los servicios digitales del Estado con una única sesión y en un sólo lugar.</p>
                    </div>
                    <div className="contenedorCuerpo">
                        <hr style={{ margin: "20px" }}></hr>
                        <h2 style={{ margin: "20px",fontWeight:"700" }}>¿Tuviste un problema?</h2>
                        <Link to={"/registro"} id="textoHipervinculo"><button className='btn-outline-solution '>No recuerdo mi contraseña</button></Link>
                        <Link to={"/registro"} id="textoHipervinculo"><button className='btn-outline-solution '>No puedo validar mi correo electrónico</button></Link>
                        <Link to={"/registro"} id="textoHipervinculo"><button className='btn-outline-solution '>Si es ciudadano extranjero ingrese aquí</button></Link>
                    </div>
                </div>
            </section>
            
            <FooterComponet />
    </>

    )
}

const PhoneScreen = () => {


    const MemoizedMovie = React.memo(Movie);
   
        return (
            <>
                <PhoneScreenHeader />
                <section>
                    <div className="contenedorPrincipal">
                        <div className="contenedorPrincipalHeader">
                            <MemoizedMovie />
                            <div style={{width:"100%", display:"flex", justifyContent:"right", marginRight:"5px"}}>
                                <SearchBar></SearchBar>
                            </div>
                            <h2 style={{ marginTop: "35px", marginBottom:"15px" }}>BIENVENIDO A TU GOBIERNO DIGITAL</h2>
                            <Link to={"/ingresar"} id="textoHipervinculo" style={{ margin: "20px" }}><button className='btn-primary-inverse'>INICIAR SESIÓN</button></Link>
                            <h2 style={{marginTop: "20px", fontSize:"1.2em" ,fontWeight:"700"}}>¿Nuevo usuario?</h2>
                            <Link to={"/registro"} id="textoHipervinculo"><button className='btn-new-account'>CREA TU CUENTA</button></Link>
                        </div>
                        <div className="contenedorCuerpo">
                            <hr style={{ margin: "20px" }}></hr>
                            <h2 style={{ margin: "20px",fontWeight:"700" }}>¿Qué es Portal Ciudadano?</h2>
                            <p style={{fontWeight: "500",margin:"5px 15px 5px 15px"}}> Una forma fácil y segura de acceder a los servicios digitales del Estado con una única sesión y en un sólo lugar.</p>
                        </div>

                        <div className="contenedorCuerpo">
                            <hr style={{ margin: "20px" }}></hr>
                            <h2 style={{ margin: "20px" ,fontWeight:"700" }}>¿Tuviste un problema?</h2>
                            <Link to={"/registro"} style={{ margin: "20px" }} id="textoHipervinculo">No recuerdo mi contraseña</Link>
                            <Link to={"/registro"} style={{ margin: "20px" }} id="textoHipervinculo">No puedo validar mi correo electrónico</Link>
                            <Link to={"/registro"} style={{ margin: "20px" }} id="textoHipervinculo">Si es ciudadano extranjero ingrese aquí</Link>
                        </div>
                    </div>
                </section>

            
            <FooterComponet />
        </>
        )
    
  
}



 const  Movie = ()=> {

    return (
            <video  className="video" muted autoPlay loop  onLoadStart={() => {
                console.log('...I am loading...')
            }}
            onLoadedData={() => {
                console.log('Data is loaded!')
            }}>
                <source src="./assets/fondoPrueba.mp4" type="video/mp4" />
            </video>
    );
  }

  

export default Home


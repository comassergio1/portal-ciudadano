import { Container, Dropdown, Nav, Navbar } from "react-bootstrap"
import { SearchBar } from "../../../Components/SearchBar/SearchBar"

export const BrowserScreenHeader = () => {

return (
<><div id="contenedorHeaderPrincipal">
    <div id="contenedorHeaderIzquierda">
        <img src={"./assets/gobierno-entre-rios.png"} alt="ParanaLogo" height="80%" width="80%"></img>
    </div>
    <div id="contenedorHeaderCentro">

    </div>
    <div id="contenedorHeaderDerecha">
        <SearchBar></SearchBar>
    </div>
</div>

    <Navbar bg="light" expand="lg">
        <Container fluid>
            <Nav className="me-auto">
                <Nav.Link href="#home">SERVICIOS ONLINE</Nav.Link>
                <Nav.Link href="#features">MIS TRÁMITES</Nav.Link>
                <Nav.Link href="#pricing">ALERTAS Y MENSAJES</Nav.Link>
                <Nav.Link href="#pricing">CUENTAS DE USUARIO</Nav.Link>

            </Nav>
        </Container>
    </Navbar>

    </>
)

}

export const PhoneScreenHeader = () => {
    return (
        <div id="contenedorHeaderPrincipal">
            <div id="contenedorHeaderIzquierdaPhone">
                <img src={"./assets/gobierno-entre-rios.png"} alt="ParanaLogo" height="90%" width="90%"></img>
            </div>
            <div id="contenedorHeaderCentroPhone"></div>
            <div id="contenedorHeaderDerechaPhone">
                <Menu />
            </div>
        </div>
    )
}


const  Menu = ()=> {
    return (
  <Dropdown >
  <Dropdown.Toggle  style={{backgroundColor:"transparent", border:"none"}}>
  <img src={"./assets/sideMenuIcon.png"} alt="ParanaLogo" height="32px" width="32px" id="sideBarIcon" ></img>

  </Dropdown.Toggle>

  <Dropdown.Menu>
  <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
  <h5 className="w3-bar-item" >Menu</h5>
        <hr />
        </div >
        <Dropdown.Divider />

    <Dropdown.Item href="#/action-1">SERVICIOS ONLINE</Dropdown.Item>
    <Dropdown.Item href="#/action-2">MIS TRÁMITES</Dropdown.Item>
    <Dropdown.Item href="#/action-3">ALERTAS Y MENSAJES</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
);
}


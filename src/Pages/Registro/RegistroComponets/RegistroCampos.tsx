import { MouseEventHandler, useState } from "react"
import { Card, Pagination } from "react-bootstrap"

const Etapas = ( props:{numero:number} ) =>{

    if(props.numero==1){
        return (
            <div  style={{display:"flex", flexDirection:"row" ,alignItems:"center",justifyContent:"center",width:"100%", marginTop:"20px"}}>                <Pagination size='lg' >
                    <Pagination.Item style={{marginRight:"10px"}} active>{1}</Pagination.Item>
                    <Pagination.Item style={{marginRight:"10px"}}>{2}</Pagination.Item>
                    <Pagination.Item style={{marginRight:"10px"}}>{3}</Pagination.Item>
                    <Pagination.Item style={{marginRight:"10px"}}>{4}</Pagination.Item>
                </Pagination>
            </div>
        )
    }else if(props.numero==2){
        return (
            <div  style={{display:"flex", flexDirection:"row" ,alignItems:"center",justifyContent:"center",width:"100%", marginTop:"20px"}}>                <Pagination size='lg'>
                    <Pagination.Item style={{marginRight:"10px"}}>{1}</Pagination.Item>
                    <Pagination.Item active style={{marginRight:"10px"}}>{2}</Pagination.Item>
                    <Pagination.Item style={{marginRight:"10px"}}>{3}</Pagination.Item>
                    <Pagination.Item style={{marginRight:"10px"}}>{4}</Pagination.Item>
                </Pagination>
            </div>
        )
    }else if(props.numero==3){
        return (
            <div  style={{display:"flex", flexDirection:"row" ,alignItems:"center",justifyContent:"center",width:"100%", marginTop:"20px"}}>                <Pagination size='lg'>
                    <Pagination.Item style={{marginRight:"10px"}}>{1}</Pagination.Item>
                    <Pagination.Item style={{marginRight:"10px"}}>{2}</Pagination.Item>
                    <Pagination.Item active style={{marginRight:"10px"}}>{3}</Pagination.Item>
                    <Pagination.Item style={{marginRight:"10px"}}>{4}</Pagination.Item>
                </Pagination>
            </div>
        )
    }else{
        return (
            <div  style={{display:"flex", flexDirection:"row" ,alignItems:"center",justifyContent:"center",width:"100%", marginTop:"20px"}}>
                <Pagination size='lg' color="#48e046">
                    <Pagination.Item style={{marginRight:"10px"}}>{1}</Pagination.Item>
                    <Pagination.Item style={{marginRight:"10px"}}>{2}</Pagination.Item>
                    <Pagination.Item style={{marginRight:"10px"}}>{3}</Pagination.Item>
                    <Pagination.Item active style={{marginRight:"10px"}}>{4}</Pagination.Item>
                </Pagination>
            </div>
        )
    }

}


export const Campos = ( ) =>{
    const [vista,setVista] = useState("cuild")
    
    if(vista=="cuild"){
        return (<><Etapas numero={1} /><CompletarCuild setVista={setVista} /></>)

    }else if(vista=="ApellidoyNombre"){

        return (<><Etapas numero={2} /><CompletarApellidoNombre setVista={setVista} /></>)

    }else if(vista=="email"){

        return (<><Etapas numero={3} /><CompletarEmail setVista={setVista} /></>)

    }else{
        return (<><Etapas numero={4} /><BajoConstruccion setVista={setVista} /></>)
    }

}

const CompletarCuild = (props:{setVista:any} ) =>{

    const [inputValue, setInputValue] = useState('');
    const [alert, showAlert] =useState("")

    const handleInputChange = (event: { target: { value: any; }; }) => {
      setInputValue(event.target.value);
    };
  
    const handleClick : MouseEventHandler = (event) => {
      if(inputValue==""){
        showAlert("Este valor no debería estar vacío.")
      }else{
          showAlert("")
          props.setVista("ApellidoyNombre")
      }
      console.log('Submit button clicked!'+inputValue);
    };

    return (   

        <><Card style={{ width: '100%' }}>
            <Card.Body style={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <Card.Title>CUIL</Card.Title>
               
                    <label style={{ marginBottom: "10px" }}>Ingrese CUIL (sin guiones) (*)</label>

                    <input id="id_number" className="form-control" type="number" name="id_number" onChange={handleInputChange} style={{ width: "50%", borderRadius: "20px" }} />

                    <p style={{ color: "red" }}>{alert}</p>
                    <a href="https://www.anses.gob.ar/consulta/constancia-de-cuil" target="_blank" rel="noopener noreferrer">No recuerdo / no tengo mi CUIL</a>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "right", width: "95%", margin: "40px" }}>

                        <button className="btn-new-account" style={{ float: "right", width: "30%" }} onClick={handleClick}>SIGUIENTE</button>
                    </div>
            </Card.Body>
            </Card>
            </>
    )
}


const CompletarApellidoNombre = (props:{setVista:any} ) =>{

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');

    const [alertNombre, showAlertNombre] =useState("")
    const [alertApellido, showAlertApellido] =useState("")

    const handleInputChangeNombre = (event: { target: { value: any; }; }) => {
        setNombre(event.target.value);
    };

    const handleInputChangeApellido = (event: { target: { value: any; }; }) => {
        setApellido(event.target.value);
      };
  
    const handleClick : MouseEventHandler = (event) => {
      if(nombre==""){
        showAlertNombre("Este valor no debería estar vacío.")
      }else if (apellido==""){
        showAlertApellido("Este valor no debería estar vacío.")

      }else{
      showAlertNombre("")
      showAlertApellido("")
      props.setVista("email")
      }
      
    };

    return (          


        <><Card style={{ width: '100%' }}>
            <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Card.Title>INFORMACIÓN PERSONAL</Card.Title>
                <Card.Text>
                    Ingrese su información personal para el registro
                </Card.Text>
                    <label>Nombre</label>
                    <input id="first_name" className="form-control" type="text" name="first_name" onChange={handleInputChangeNombre} style={{ width: "50%", borderRadius: "20px" }} />

                    <p style={{ color: "red" }}> {alertNombre} </p>


                    <label>Apellido</label>
                    <input id="first_name" className="form-control" type="text" name="first_name" onChange={handleInputChangeApellido} style={{ width: "50%", borderRadius: "20px" }} />

                    <p style={{ color: "red" }}>{alertApellido} </p>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "95%", margin: "25px" }}>
                        <button className="btn-primary-inverse" style={{ float: "left" }} onClick={() => props.setVista("cuild")}>ATRAS</button>
                        <button className="btn-new-account" style={{ float: "right" }} onClick={handleClick}>SIGUIENTE</button>
                    </div>
            </Card.Body>
        </Card></>
    )    
}



const CompletarEmail = (props:{setVista:any} ) =>{

    const [email, setEmail] = useState('');
    const [email2, setEmail2] = useState('');

    const [alertEmail, showAlertEmail] =useState("")
    const [alertEmail2, showAlertEmail2] =useState("")
    const [alertEmailDiferente,setAlertEmailDiferente]=useState("")

    const handleInputChangeEmail = (event: { target: { value: any; }; }) => {
        setEmail(event.target.value);
    };

    const handleInputChangeEmail2 = (event: { target: { value: any; }; }) => {
        setEmail2(event.target.value);
      };
  
    const handleClick : MouseEventHandler = (event) => {
      if(email==""){
        showAlertEmail("Este valor no debería estar vacío.")
      }else if (email2==""){
        showAlertEmail2("Este valor no debería estar vacío.")

      }else{
        showAlertEmail("")
        showAlertEmail2("")
      setAlertEmailDiferente("")

          props.setVista("ULTIMO")
      }
      console.log('Submit button clicked!');
    };
   
    return (      

        <><Card style={{ width: '100%' }}>
            <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Card.Title>INFORMACIÓN DE CONTACTO</Card.Title>
                <Card.Text>
                    Ingrese su información de contacto para el registro
                </Card.Text>
                    <p style={{ color: "red" }}>{alertEmailDiferente} </p>

                    <label>Email</label>
                    <input id="first_name" className="form-control" type="text" name="first_name" onChange={handleInputChangeEmail} style={{ width: "50%", borderRadius: "20px" }} />

                    <p style={{ color: "red" }}> {alertEmail} </p>


                    <label>Repetir Email</label>
                    <input id="first_name" className="form-control" type="text" name="first_name" onChange={handleInputChangeEmail2} style={{ width: "50%", borderRadius: "20px" }} />

                    <p style={{ color: "red" }}>{alertEmail2} </p>

                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "95%", margin: "25px" }}>
                        <button className="btn-primary-inverse" style={{ float: "left" }} onClick={() => props.setVista("cuild")}>ATRAS</button>
                        <button className="btn-new-account" style={{ float: "right" }} onClick={handleClick}>SIGUIENTE</button>
                    </div>
            </Card.Body>
        </Card>
        
       </>
    )
        
}


const BajoConstruccion = (props:{setVista:any} ) =>{

    const [email, setEmail] = useState('');
    const [email2, setEmail2] = useState('');

    const [alertEmail, showAlertEmail] =useState("")
    const [alertEmail2, showAlertEmail2] =useState("")
    const [alertEmailDiferente,setAlertEmailDiferente]=useState("")

    const handleInputChangeEmail = (event: { target: { value: any; }; }) => {
        setEmail(event.target.value);
    };

    const handleInputChangeEmail2 = (event: { target: { value: any; }; }) => {
        setEmail2(event.target.value);
      };
  
    const handleClick : MouseEventHandler = (event) => {
      if(email==""){
        showAlertEmail("Este valor no debería estar vacío.")
      }else if (email2==""){
        showAlertEmail2("Este valor no debería estar vacío.")

      }else{
        showAlertEmail("")
        showAlertEmail2("")
      setAlertEmailDiferente("")

          props.setVista("ULTIMO")
      }
      console.log('Submit button clicked!');
    };

       
    return ( 
        <div  style={{width:"100%",display:"flex", flexDirection:"column", alignItems:"center",border:"solid 1px", marginTop:"20px", marginBottom:"40px"}}> 
            <h1 style={{marginTop:"20px"}}>PÁGINA BAJO CONSTRUCCIÓN</h1>                 
            <div  style={{display:"flex", flexDirection:"row", justifyContent: "space-between", margin:"25px"}}>
                <button className="btn-primary-inverse"  style={{margin:"35px", float:"left"}} onClick={()=>props.setVista("email")} >ATRAS</button>
            </div>
        </div>
            )
}
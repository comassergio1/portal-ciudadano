import { useState } from 'react';
import { signupFields } from "../../Interfaces/formFields";
import Input from '../../Components/Forms/Input';
import { Hero } from '../../Components/Elements/Hero';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const fields = signupFields;
let fieldsState = {};
fields.forEach(field => (fieldsState as any)[field.id] = '');

export const RegisterPage = () =>{

    const navigate = useNavigate();

    const [registerState,setRegisterState]=useState(fieldsState);

    const handleChange=(e: any)=>{
        setRegisterState({...registerState,[e.target.id]:e.target.value})
    }

    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        RegisterUser()
    };

    const RegisterUser = () =>{
        console.log("pues entro aqui"+ JSON.stringify(registerState))
        axios
        .post("https://urlBase/portal-ciudadano/v1/ciudadano/singup", JSON.stringify(registerState))
        .then(function (response: any) {

          if (response.data.success === false) {
            
              // errores de registro
              
          } else {
            
            //mostrar mensaje de login correcto  
        
            setTimeout(() => {
              navigate("/Ingresar");
            }, 3000);
          }
        })
        .catch(function (error: any) {
          console.log(error);
          
        });
    }

    return(<Hero classes="bg-gradient-to-r from-cyan-500 to-blue-500 text-white" tail={true}>
        <div className="container mx-auto flex content-center items-center justify-center h-full px-4">
              <div className="w-full lg:w-4/12">
                <form className="flex-auto px-4 lg:px-10 py-8 relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-gray-100 border-0">

                    {fields.map(field=><Input
                        key={field.id}
                        handleChange={handleChange}
                        value={(registerState as any)[field.id]}
                        labelText={field.labelText}
                        labelFor={field.labelFor}
                        id={field.id}
                        name={field.name}
                        type={field.type}
                        isRequired={field.isRequired}
                        autoFocus={field.autofocus}
                        placeholder={field.placeholder}
                    />)}
                    <div className="text-center mt-6">
                        <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full" type="button" style={{ transition: "all .15s ease" }} onClick={buttonHandler}>
                            Crear Cuenta
                        </button>
                    </div>
                </form>
                <div className="flex flex-wrap my-6 ">
                    <Link to="/Ingresar" className="text-white w-full text-right">
                        <small>¿Ya tenes una cuenta? <strong>¡Inicia Sesión!</strong></small>
                    </Link>
                </div>
            </div>
          </div></Hero>
    )
}
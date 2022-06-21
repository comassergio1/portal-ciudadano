import { Navigate, Route } from "react-router-dom";
import { LoginPage } from "../Pages/Auth/Login";


const PrivateRoute = (props:{ children: any }) =>{
  const token = localStorage.getItem("auth");
  return token ? props.children : <Navigate to="/Ingresar" />;
}


export default PrivateRoute;
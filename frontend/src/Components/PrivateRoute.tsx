import { Navigate, Route } from "react-router-dom";
import { LoginPage } from "../Pages/Auth/Login";

/*
const PrivateRoute = (props:{path:string, element:  React.ReactChild }) => {
  const token = localStorage.getItem("auth");
  return <>{token ? <Route path={props.path} element={props.element} /> : <Route path="Ingresar" element={<LoginPage />}/>}</>;
};*/

const PrivateRoute = (props:{ children: any }) =>{
  const token = localStorage.getItem("auth");
  return token ? props.children : <Navigate to="/Ingresar" />;
}


export default PrivateRoute;
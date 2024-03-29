import { Link } from "react-router-dom";
import { Hero } from "../Components/Elements/Hero";

export const HomePage = () => {
  return (
    <Hero classes="bg-gradient-to-r from-cyan-500 to-blue-500 text-white" tail={true}>
      <h1 className="my-4 text-4xl lg:text-5xl font-bold leading-tight">
        Bienvenido a tu Gobierno Digital!
      </h1>
      <p className="leading-normal text-1xl lg:text-2xl mb-8">
        Una forma fácil y segura de acceder a los servicios digitales del Estado con una única sesión y en un sólo lugar.
      </p>
      <div className="flex space-x-4 justify-center w-full md:justify-start">
        <Link to="/Ingresar" className="bg-white text-gray-800 font-bold rounded-lg my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-110 duration-300 ease-in-out">
          Iniciar Sesión
        </Link>
        <Link to="/Registro" className="bg-white text-gray-800 font-bold rounded-lg my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
          Registrate
        </Link>
      </div>
    </Hero>
  );
};

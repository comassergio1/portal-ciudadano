
import './Styles/App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './Components/Layout/DefaultLayout';
import { HomePage } from './Pages/HomePage';
import { TramitesPage } from './Pages/Tramites/index';
import { ErrorPage } from './Pages/ErrorPage';
import { ResetPassword } from './Pages/Auth/ResetPassword';
import { RegisterPage } from './Pages/Auth/Register';
import { LoginPage } from './Pages/Auth/Login';
import { HomeRoute, PrivateRoute } from './Routes/PrivateRoute';
import { DashboardCiudadanoPage } from './Pages/Dashboard/DashboardCiudadano';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<HomeRoute />} />
            <Route path="Inicio" element={<HomePage />} />
            <Route path="Ingresar" element={<LoginPage />} />
            <Route path="Registro" element={<RegisterPage />} />
            <Route path="RestaurarPassword" element={<ResetPassword />} />
            <Route path="servicios"
              element={
                <PrivateRoute>
                  <TramitesPage />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;


/*

            <Route path="registro" element={<Registro />} />
            <Route path="ingresar" element={<Ingresar />} />
            <Route path="RestaurarPassword" element={<Ingresar />} />*/
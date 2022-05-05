import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Registro from './Pages/Registro/Registro';
import Ingresar from './Pages/Ingresar/Ingresar';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/ingresar" element={<Ingresar />} />
          <Route path="/RestaurarPassword" element={<Ingresar />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

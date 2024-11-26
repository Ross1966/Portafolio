import React from 'react';
import "./App.css";
import Inicio from './components/Inicio.jsx';
import Projets from './components/Proyectos';
import Cabecera from './components/Cabecera.jsx';
import Quien from './components/Quien_soy';
import Piepag from './components/Piepag.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
</style>







function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Cabecera />
        
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Quien_soy" element={<Quien />} />
          <Route path="/Proyectos" element={<Projets />} />
          
        </Routes>

       <Piepag />

      </BrowserRouter>
        
       
      
    </div>
  );

}

export default App;

import React from "react";
import Rosa1 from "../assets/img/Rosa1.jpg"



export default function Inicio() {
 
  
  return (
    <div>
      <div className="uno">
        <h1>
          <strong>Web Developer </strong>
        </h1>

        <img src={Rosa1} className="imagen1" alt="sistemas" />

        <h2>
          Como <strong>desarrolladora web,</strong> Creo soluciones digitales
          personalizadas, enfocadas en las necesidades y objetivos del usuario,
          diseñando sitios funcionales y atractivos.
        </h2>
        <hr></hr>
        <h3>
          <strong>¡Quiero colaborar contigo!</strong>
        </h3>

           
      </div>
    </div>
  );
}
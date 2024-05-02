import React from "react";
import html from "../assets/img/html.jpg"
import node from "../assets/img/node.jpg"
import git from "../assets/img/git.jpg"
import react from "../assets/img/react.jpg"

export default function Quien() {
  
    return (
      <>
        <div className="quienSoy">
          <p className="yo">
            <strong>Soy Licenciada en Informática Administrativa </strong> con
            experiencia en la industria petrolera y el sector inmobiliario,
            tengo pasión por la programación.</p>
            
           <p className="yo"> He desarrollado habilidades técnicas y de comunicación, recientemente terminé un bootcamp en
            Laboratoria. Estoy lista para nuevos retos, confiando en mi
            capacidad para adaptarme y contribuir a cualquier equipo en la
            creación de productos innovadores y efectivos, destacando la
            importancia del aprendizaje continuo.</p>

           <p className="yo"> En el bootcamp de Laboratoria creamos proyectos de vanguardia con
            nuevas tecnologías implenmentadas con la metodología scrum
            utilizando: html, css, javascript, bootstrap, node.js, git, github y
            react.
          </p>
         

          <div className="imagenes">
            <img src={html} className="imgFondo" alt="sistemas" />
            <img src={node} className="imgFondo" alt="sistemas" />
            <img src={git} className="imgFondo" alt="sistemas" />
            <img src={react} className="imgFondo" alt="sistemas" />
          </div>
        </div>
      </>
    );
}

import React from "react";
import Ross1 from "../assets/img/Ross1.png";
import PcNueva from "../assets/img/pcnueva.png"

export default function Inicio() {
  return (
    <div>
      <section className="uno">
        <div className="content">
          <p className="web">WEB DEVELOPER</p>
        </div>

        <div className="imagen">
          <img src={Ross1} className="imagen1" alt="sistemas" />
          <br></br>
          <br></br>
        </div>

        <br></br>
        <br></br>
      </section>

      <br></br>
      <br></br>
      <br></br>

      <section className="dos">
        <img src={PcNueva} className="imagen1" alt="sistemas" />

        <p>
          Hola, mi nombre es Rosa María y me gusta la tecnología. Desarrollo sistemas Web
          fullstack, utilizando Html, Css, Javascript, React, así como backend con
          Node.js, Express, Php y Bases de Datos Sql y no Sql.
        </p>
      </section>
    </div>
  );
}

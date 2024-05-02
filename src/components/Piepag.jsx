import React from "react";
import linke1 from "../assets/img/linke1.png"
import git1 from "../assets/img/git1.png"

export default function Piepag() {
  
    return (
    <div className="antepie">
        
      <div className="pie">

        <ul className="contactos">
          <li><a href= "https://www.linkedin.com/in/rosa-mar%C3%ADa-ib%C3%A1%C3%B1ez-ramos-96a4962a1/"> <img src={linke1} className="correo" alt="sistemas" /> </a></li>
          <li><a href="https://github.com/Ross1966"><img src={git1} className="correo1" alt="sistemas"/></a></li>
        </ul>   
        
        </div> 
       
    

     </div>
  );
}

import React, {useState} from "react";


export const Cabecera = () => {

    const [isOpen, setIsOpen] = useState(false)
    return(
        <div className="navbar">
            <div className="nav_logo"> Rosa María Ibáñez</div>
            <div className={`nav_items ${isOpen && "open"}`}>
                <a href="/"> INICIO</a>
                <a href="/Quien_Soy"> QUIEN SOY</a>
                <a href="/Proyectos"> PROYECTOS</a>
            </div>
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
  
      
    )
    
  };
  
  export default Cabecera;
import React, {useState} from "react";
import { Link } from "react-router-dom";

export const Cabecera = () => {

    const [isOpen, setIsOpen] = useState(false)
    return(
        <div className="navbar">
            <div className="nav_logo"> Rosa María Ibáñez </div>
            <div className={`nav_items ${isOpen && "open"}`}>
                <Link to="/"> INICIO</Link>
                <Link to="/Quien_Soy"> QUIEN SOY</Link>
                <Link to="/Proyectos"> PROYECTOS</Link>
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
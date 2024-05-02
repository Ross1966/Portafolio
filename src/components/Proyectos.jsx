
import React from "react";
/*import { useState } from "react";*/
import { projectsData } from "../data";





const Projects = () => {
  
    /*const [projetsData, setData] = useState(projectsData)*/
    console.log(projectsData)
  return (
    <>
     <p className="projetTitulo">Mis Proyectos</p>
      <div className="projects-container">
         
          {projectsData.map((project, index) => (
              <div key={index} className="project">
                   
                   <a className="titProyect"
                    href={project.link}>
                   {project.title}</a>
                   
                    <p>{project.description}</p>
              </div>
          ))}
      </div>
    </>
  );
}

export default Projects;
import React from "react";
import Axios from "axios";
import "../index.css";
import {useState} from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faReact, faJs, faHtml5, faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";






const getAllProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
  
    useEffect(() => {
      Axios.get("http://localhost:3000/projects.json")
        .then((response) => {
          setProjects(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }, []);
  
    return { projects, loading, error };
    };

  
 
       
function ProjectHoverCard() {
    const { projects, loading, error } = getAllProjects();

 
    const [isHovering , setIsHovering] = useState(false);
 
    const onMouseEnter = () => {
        setIsHovering(true);
    };

    const onMouseLeave = () => {
        setIsHovering(false);
    };

 
    return (
        <div className="project-grid">
            
                {projects.bind((project) => (
                  
                    <div className="project-hover-card__container">
                        <div className="project-hover-card__container__image">
                            <img key={project.id} src={project.image} alt="project image" 
                            onMouseEnter={onMouseEnter}
                            />

                        { isHovering &&   ( 
                                 <div className="project-card-content card-body container mask ">
                                 <h3>{project.title}</h3>
                                
                                 <div className="project-card-links container">
                                   <Link to={`/project-detail/${project.id}`}> 
                                   <FontAwesomeIcon icon={faExternalLinkAlt} />
                                   </Link>
                                   <a href={project.link} target="_blank">
                                     <FontAwesomeIcon icon={faExternalLinkAlt} />
                                   </a>
                                 </div>
                               </div>
                           
                                      
                        )}

                        </div>
                        </div>
                ))}
           
        </div>
    );
}

export default ProjectHoverCard;









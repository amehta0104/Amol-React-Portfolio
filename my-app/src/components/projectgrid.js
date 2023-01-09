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

 function ProjectGrid( ) {
  const { projects, loading, error } = getAllProjects();

  
  return (
    <div className="project-grid">
      <div className="home-project-card">
        <h2>Recent Projects</h2>
      </div>
      {projects.map((project) => (
        <div className="home-project-card">
          
            <img src={project.image} alt={project.title} />
         
          <div className="project-card-content card-body container">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-card-links container">
              <Link to={`/project-detail/${project.id}`}> 
              <FontAwesomeIcon icon={faExternalLinkAlt} />
              </Link>
              <a href={project.link} target="_blank">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

}

export default ProjectGrid;
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
import Box from "@mui/material/Box";

import ProjectCardCopy from "./project-card-copy";



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
  

  
  return (
    <div className="project-grid">

      {getAllProjects().projects.map((project) => (

        < ProjectCardCopy  />
        
    
      ))}
    
    </div>
  );

}

export default ProjectGrid;
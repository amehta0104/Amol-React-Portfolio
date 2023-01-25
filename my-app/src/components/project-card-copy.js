import React from "react";
import "../index.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faGithub, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import {  faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import  Axios  from "axios";
import { useState } from "react";





const getProjectById = () => {
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Axios.get("http://localhost:3000/projects.json")
      .then((response) => {
        setProject(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return { project, loading, error };
};

function ProjectCardCopy() {
  const { project, loading, error } = getProjectById();
  const { id } = useParams();
  const projectById = { ...project[id - 1]}
  return (
    <div className="project-detail">
      <div className="project-detail-content">
        <div className="project-detail-image">
          <img src={projectById.image} alt={projectById.title} />
        </div>
        <div className="project-detail-text">
          <h2>{projectById.title}</h2>
          <p>{projectById.description}</p>
       
        </div>
        <div className="project-detail-links">
          <h3> Made with:</h3>
            <a href={projectById.link} target="_blank">
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
            <a href={projectById.github} target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
      </div>
    </div>
  );
}

export default ProjectCardCopy;

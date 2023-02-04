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
import { Container } from "@mui/system";
import { useState } from "react";
import SocialBar from "../components/social-bar";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { Image } from "@mui/icons-material";
import theme from "./theme";
import Grid from "@mui/material/Grid";



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

const ProjectDetail = (props) => {
  const { project, loading, error } = getProjectById();
  const { id } = useParams();
  const projectById = { ...project[id - 1]}
  
  return (
  <div class="wrapper">
    <Container maxWidth='lg' sx={{
   
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.palette.background.bg,
      margin: "1em",
      minHeight: "100vh",
     
    
    
    }}>
    <Grid container spacing={5}>
    <Grid item xs={12} sm={12}>
    <Paper elevation={2} sx={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      wrap: 'nowrap',
      flexGrow: 1,
      overflow: 'hidden',
      
    }}>
    <img src={projectById.image} alt="project" width={400} />
    <img src={projectById.image} alt="project" width={400} />
    <img src={projectById.image} alt="project" width={400} />
    <img src={projectById.image} alt="project" width={400} />
    </Paper>
    </Grid>
    <Grid item xs={12} sm={12} md={10} >
    <Box>
    <Typography variant="h4" style={{ color: theme.palette.primary.text, fontWeight: "bold", marginBottom: "1rem" }}>
    {projectById.title}
    </Typography>
    <Typography variant="subtitle1" style={{ color: theme.palette.primary.text, fontWeight: "bold", marginBottom: "1rem" }}>
    {projectById.description}
    </Typography>
    </Box>
    
    </Grid>
    <Grid item xs={12} sm={12} md={2}>
    <Box
    style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    marginBottom: "1rem",
    gap: "1rem",
    }}
    >
    <Button
    variant="text"
    style={{
    backgroundColor: theme.palette.primary.bg,
    color: "white",
    "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    },
    }}
    >
    <FontAwesomeIcon icon={faFile} />
    <a
    href={projectById.github}
    target="_blank"
    rel="noreferrer"
    style={{ textDecoration: "none", color: "white" }}
    >
    Github
    </a>
    </Button>
    <Button
    variant="text"
    style={{
    backgroundColor: theme.palette.primary.bg,
    color: "white",
    "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    },
    }}
    >
    <FontAwesomeIcon icon={faFilePdf} />
    <a
    href={projectById.pdf}
    target="_blank"
    rel="noreferrer"
    style={{ textDecoration: "none", color: "white" }}
    >
    PDF
    </a>
    </Button>
    <Button
    variant="text"
    style={{
    backgroundColor: theme.palette.primary.bg,
    color: "white",
    "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    },
    }}
    >
    <FontAwesomeIcon icon={faExternalLinkAlt} />
    <a
    href={projectById.live}
    target="_blank"
    rel="noreferrer"
    style={{ textDecoration: "none", color: "white" }}
    >
    Live Demo
    </a>
    </Button>
    </Box>
    </Grid>
    </Grid>
    </Container>
  </div>
  );
};  

export default ProjectDetail;

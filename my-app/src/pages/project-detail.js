import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
import { Container } from "@mui/system";
import { Badge, ButtonGroup, Chip, Typography } from "@mui/material";
import { Image } from "@mui/icons-material";
import theme from "./theme";
import Grid from "@mui/material/Grid";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";





const getProjectById = () => {
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  React.useEffect(() => {
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

const allColors = {
  wordpress: "#0073aa",
  react: '#61dafb',
  javascript: "#f0db4f",
  html: "#e34c26",
  css: "#532323",
  php: "#264de4",
  

}

function matchColor(x) {

  switch (x) {
    case "wordpress":
    return allColors.wordpress;
    case "javascript":
      return allColors.javascript;
    case "html":
      return allColors.html;
    case "css":
      return allColors.css;
    case "php":
      return allColors.php;
    default:
      return allColors.react;
  }
}

 


const ProjectDetail = () => {
  const { project, loading, error } = getProjectById();
  const { id } = useParams();
  const projectById = { ...project[id - 1] };



  

  const navigate = useNavigate();

  function handleNext() {
    const nextProjectId = (Number(id) % project.length) + 1;
    navigate(`/project-detail/${nextProjectId}`);
  }
  
  function handlePrev() {
    const prevProjectId = (Number(id) + project.length - 2) % project.length + 1;
    navigate(`/project-detail/${prevProjectId}`);
  }
  


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }





  return (



<div id="reload">
  
      <AnimatePresence initial={true} mode={"wait"}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          exit={{ opacity: 0 }}
          class="wrapper"
        >
          <Container
            maxWidth="lg"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: theme.palette.background.bg,
              margin: "1em",
              minHeight: "100vh",
            }}
          >
            <Grid container spacing={5}>
              <Grid item xs={12} sm={12}>
                <Paper
                  elevation={2}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    wrap: "nowrap",
                    flexGrow: 1,
                    overflow: "hidden",
                  }}
                >
                  <img src={projectById.image} alt="project" width={400} />
                  <img src={projectById.image} alt="project" width={400} />
                  <img src={projectById.image} alt="project" width={400} />
                  <img src={projectById.image} alt="project" width={400} />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={12} md={10}>
                <Box>
                  <Typography
                    variant="h4"
                    style={{
                      color: theme.palette.primary.text,
                      fontWeight: "bold",
                      marginBottom: "1rem",
                    }}
                  >
                    {projectById.title}  <Button
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
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    style={{
                      color: theme.palette.primary.text,
                      fontSize: "1.2rem",
                    
                 
                    }}
                  >
                    {projectById.description}
        </Typography>
        </Box>
  
        </Grid>
        <Grid item xs={12} sm={12} md={2}>
        <Box
        style={{
       display: "flex",
        flexDirection: "column",
       width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        marginBottom: "1rem",
        gap: "0.5rem",
        }}
        >       <Typography
        variant="body2"
        gutterBottom
        paragraph
        style={{
          color: theme.palette.primary.text,
          fontSize: "1.0rem",
        
     
        }}
      >
          Created with: 
</Typography>
  
          {projectById.apps.map ((app) => {
  
  
  
  
          return (
  
            <Chip   label= {app} sx={{
              color: matchColor(app),
            }}  >
          <Typography
          variant="body1"
          color={theme.palette.primary.text}
          style={{
          color: theme.palette.primary.text,
          fontWeight: "bold",
          marginBottom: "1rem",
          }}
          >
  
  
  
          </Typography>
          </Chip>
  
          )
          })}
  

       
 
        </Box>
        </Grid>
        <Grid item xs={12}  >
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
  
  
<ButtonGroup>
  
          <Button
          onClick={handleNext}
          // href="/projectpage"
           variant="text"
           style={{ color: theme.palette.primary.text,
            fontWeight: "bold",
             marginBottom: "1rem" }}>
                Next
                <FontAwesomeIcon icon={faArrowRight} />
                </Button>
          <Button
          onClick={handlePrev}
          // href="/projectpage"
           variant="text"
           style={{ color: theme.palette.primary.text,
            fontWeight: "bold",
             marginBottom: "1rem" }}>
                Previous
                <FontAwesomeIcon icon={faArrowLeft} />
                </Button>
</ButtonGroup>
        </Box>
        </Grid>
        </Grid>
  
  
        </Container>
      </motion.div>
    </AnimatePresence>
</div>
  );
};  

export default ProjectDetail;


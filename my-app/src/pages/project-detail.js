import React, { createElement, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
import { Container } from "@mui/system";
import { Badge, ButtonGroup, Chip, Typography } from "@mui/material";
import { Image } from "@mui/icons-material";
import theme from "./theme";
import Grid from "@mui/material/Grid";
import { AnimatePresence, motion, usePresence } from "framer-motion/dist/framer-motion";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import $ from "jquery";
import { useEffect } from "react";



// on document load, check if #reload opacity is 0, if so, set it to 1, if not, leave it alone.




const getProjectById = () => {
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  $("#reload").animate({ opacity: 1 }, 500);



  React.useEffect(() => {
    Axios.get("http://api.amol.cc/api/resume/projects")
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




  

  const navigate = useNavigate(
    { replace: true },

   );


  function handleNext() {
   

    const nextProjectId = (Number(id) % project.length) + 1;

    $(" #reload ").animate( {opacity: 0 }, 500 ,  function( e ) {
       
      navigate(`/project-detail/${nextProjectId}` );

    });
  }




  
  function handlePrev() {
    const prevProjectId = (Number(id) + project.length - 2) % project.length + 1;
    $(" #reload ").animate( {opacity: 0 }, 500 ,  function( e ) {
       
      navigate(`/project-detail/${prevProjectId}` );

    });   

  }
  


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }





  return (


<Container maxWidth='lg'>
  
      <AnimatePresence exitBeforeEnter>
  <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              class="wrapper"
            >
    <motion.div >
  
  
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              exit={{ opacity: 0 }}
              id="reload"
            >
              <Container
                
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: theme.palette.background.bg,
              
                  
                }}
              >
                <Grid container spacing={5}>
  
                      <Grid item xs={12} sm={12}>
  
                    <motion.div initial={{ opacity: 0,  }}
                animate={{ opacity: 1,  }}
                exit={{ opacity: 0 ,}}
                transition={{delay: 0.05, duration: 0.5, ease:'easeInOut' }}>
                        <Paper
                          elevation={2}
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
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
                        </motion.div>
  
                      </Grid>
  
                  <Grid item xs={12} sm={12} md={10}>
  
                    <motion.div initial={{ opacity: 0,   }}
                animate={{ opacity: 1, }}
                exit={{ opacity: 0 ,}}
                transition={{delay: 0.3, duration: 0.5, ease:'easeIn' }}>
                    <Box>
                      <Typography
                        variant="h4"
                        style={{
                          color: theme.palette.primary.text,
                          fontWeight: "bold",
                          marginBottom: "1rem",
                        }}
                      >
                        {projectById.title}
                         <Button
                         component='a'
                         href={projectById.link}
            variant="text"
            style={{
            backgroundColor: theme.palette.primary.bg,
            color: "white",
            "&:hover": {
            backgroundColor: theme.palette.primary.dark,
            },
            }}
            >
  
  
  
  
          <FontAwesomeIcon style={{marginLeft: '-1.5rem', }}  icon={faArrowRight} />
  
  
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
            </motion.div>
  
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
                  <motion.div
            initial={{ opacity: 0,   }}
            animate={{ opacity: 1, }}
            exit={{ opacity: 0 ,}}
            transition={{delay: 0.7, duration: 0.5, ease:'easeIn' }}>
  
                <ButtonGroup>
                <Button
                id="nextButton"
                onClick={handleNext}
                // onClick={handleNext}
                // href="/projectpage"
                 variant="text"
                 style={{ color: theme.palette.primary.text,
                  fontWeight: "bold",
                   marginBottom: "1rem" }}>
                      Next
                      <FontAwesomeIcon icon={faArrowRight} />
                      </Button>
                <Button
                onClick={ handlePrev}
                id="prevButton"
                // onClick={handlePrev}
                // href="/projectpage"
                 variant="text"
                 style={{ color: theme.palette.primary.text,
                  fontWeight: "bold",
                   marginBottom: "1rem" }}>
                      Previous
                      <FontAwesomeIcon icon={faArrowLeft} />
                      </Button>
                </ButtonGroup>
                </motion.div>
              </Box>
              </Grid>
  
            </Grid>
  
  
            </Container>
          </motion.div>
  
    </motion.div>
    </motion.div>
    </AnimatePresence>
</Container>

  );
};  




export default ProjectDetail;


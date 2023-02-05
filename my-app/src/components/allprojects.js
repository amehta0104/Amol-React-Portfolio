import React, { useState } from "react";
import Axios from "axios";
import "../index.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import {
faReact,
faJs,
faHtml5,
faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { Paper, Typography, Grid, Button } from "@mui/material";
import ProjectDetail from "../pages/project-detail";
import theme from "../pages/theme";
import Box from "@mui/material/Box";
import {AnimatePresence, motion} from "framer-motion/dist/framer-motion"; 

const AllProjects = () => {
const [projects, setProjects] = useState([]);
const [hover, setHover] = useState(null);
const { id } = useParams();
const [apps, setApps] = useState([]);

useEffect(() => {
Axios.get("http://localhost:3000/projects.json").then((response) => {
setProjects(response.data);
});
}, []);

return (
  <AnimatePresence mode={'wait'}>
<motion.div
 initial={{opacity:0}}
 animate={{opacity:1}}

  exit={{opacity:0}}
  transition={{delay: 0.5, duration:0.5, ease: 'easeInOut'}}
className="wrapper">

  <Grid container sx={{ height: "100%", padding:2 }} maxWidth="lg">
  <Grid item xs={12} md={6} lg={4} xl={4}>
  <Paper sx={{
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    color: theme.palette.primary.main,
  
  }}>
    <Typography variant="h4" paragraph component="div" gutterBottom>
    Recent Projects
    </Typography>
  </Paper>
  </Grid>
  {projects.map((val, index) => {
  return (
  <Grid item xs={12} md={6} lg={4} xl={4}>
  <Paper elevation={1} sx={{ margin: 1, padding: 1, backgroundColor: theme.palette.primary.main }}>
  <div className="img-container-hover"
  onMouseEnter={() => {
  setHover(index);
  setApps(val.apps);
  }}
  onClick={() => {
  window.location.href = `/project-detail/${val.id}`;
  }}
  onMouseLeave={() => {
  setHover(null);
  setApps([]);
  }}
  >
  <img src={val.image} alt="" className="img-hover" />
  <div
  className={`card-body ${hover === index ? "visible" : ""}`}
  >
  <h3>{val.title}</h3>
  <p> {val.description} </p>
  <div className="social-bar">
  <Link to={/project-detail/ + val.id} className="button">Details</Link>
  </div>
  </div>
  </div>
  </Paper>
  </Grid>
  );
  })}

  </Grid>




  
</motion.div>
</AnimatePresence>

);
};

export default AllProjects;
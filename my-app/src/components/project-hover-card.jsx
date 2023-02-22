import React, { useState } from "react";
import Axios from "axios";
import "../index.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { Link } from "react-router-dom";

import { Paper, Typography, Grid, Button } from "@mui/material";
import AllProjects from "./allprojects";
import theme from "../pages/theme";

import {AnimatePresence, motion} from "framer-motion/dist/framer-motion"; 

const ProjectHoverCard = () => {


 const [projects, setProjects] = useState([]);
const [hover, setHover] = useState(null);
 const { id } = useParams();
 const [apps, setApps] = useState([]);


 useEffect(() => {
Axios.get("http://localhost:3000/projects.json").then((response) => {
setProjects(response.data); });
 }, []);

return (
  <AnimatePresence mode={'wait'}>
<motion.div
 initial={{opacity:0}}
 animate={{opacity:1}}
 transition={{duration:0.5, ease: 'easeInOut'}}
  exit={{opacity:0}}
 
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
  <Grid item sx={{
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    color: theme.palette.primary.main,
  }} xs={12} md={12} lg={12} xl={12} >
    <Button href="/projectpage" size="large" variant="text" sx={{ margin: 1, backgroundColor: theme.palette.primary.bg, color: theme.palette.primary.contrastText }}>
      View All
  
      </Button>
  </Grid>
  </Grid>




  
</motion.div>
</AnimatePresence>

);
};

export default ProjectHoverCard;
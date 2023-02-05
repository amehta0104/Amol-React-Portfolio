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
import { AnimationWrapper } from "react-hover-animation";
import ProjectGrid from "../components/projectgrid";
import { Box } from "@mui/material";

import ProjectHoverCard from "../components/project-hover-card";
import Github from "../components/github";
import {AnimatePresence, motion} from "framer-motion/dist/framer-motion"; 
import AllProjects from "../components/allprojects";





function ProjectPage() {

  return (
    <AnimatePresence>
      <motion.div
      initial={{ opacity: 0,  }}
      animate={{ opacity: 1, }}
      exit={{ opacity: 0 }}
      transition= {{  duration: 0.5, ease: "easeOut" }}
     
      style={{
      overflow: "hidden",
      }}
      class="wrapper">
        <Box className="project-page" sx={
          {
      
      
      
            boxShadow: 1,
            p: 2,
            m: 2,
      
            display: 'block',
          }
        }>
      
 <AllProjects />
        <Github />
        </Box>
      </motion.div>
    </AnimatePresence>
  );
}

export default ProjectPage;


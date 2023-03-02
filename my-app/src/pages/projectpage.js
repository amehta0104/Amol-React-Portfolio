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

import AllProjects from "../components/allprojects";
import GitHubCards from "../components/GitHubCards";
import emptyCache from "../components/emptyCache";




function ProjectPage() {
  const [repo, setRepo] = useState([]);
  return (
   
      <div class="wrapper">
        <Box className="project-page" sx={
          {
      
      
      
            boxShadow: 1,
            p: 2,
            m: 2,
      
            display: 'block',
          }
        }>
      
<AllProjects />
        <GitHubCards />
        </Box>
      </div>

  );
}

export default ProjectPage;


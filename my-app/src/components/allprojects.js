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


};

export default AllProjects;
import React, { useState } from "react";
import Axios from "axios";
import "../index.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faReact, faJs, faHtml5, faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import {Paper } from '@mui/material';
import { Container } from "@mui/system";
import ProjectDetail from "../pages/project-detail";

function Project(props) {
  
}

const ProjectHoverCard = () => {
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
    <Container maxWidth="xl">
    <div className="wrapper">
      <div className="project-grid">
        {projects.map((val, index) => {
          return (
            <div >
              <Paper elevation={1}
              sx={{  margin: 1, padding: 1, backgroundColor: '#333' }
              }
              >
              <div className="card" key={index}>
                <div className="img-container-hover"
                  onMouseEnter={() => {
                    setHover(index);
                    setApps(val.apps);
                  }
                  }
                  onClick = {() => { 
                 

                    window.location.href = `/project-detail/${val.id}`;
                  }}
                  onMouseLeave={() => {setHover(null); setApps([]); }}
                >
                  <img src={val.image} alt="" className="img-hover"/>
                  <div className={`card-body ${hover === index ? 'visible' : ''}`}>
                    <h3>{val.title}</h3>
                    <p> {val.description} </p>
                 

                      <div className="social-bar">
                       
                      <Link to = {/project-detail/ + val.id} className="button">Details</Link>

                        </div>

                  

               
                </div>


                </div>
                </div>
                </Paper>
                </div>
              
          );
        })}
      </div>
    </div>
    </Container>
  );




 
};

export default ProjectHoverCard;
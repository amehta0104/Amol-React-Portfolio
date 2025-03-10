

import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import theme from "../pages/theme";
import "../index.css";
import ButtonGroup from "@mui/material/ButtonGroup";
import { makeStyles } from "@mui/styles";
import purple from "@mui/material/colors/purple";

function AllProjects() {
  const [data, setData] = useState([]);

 
  
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    // const response = await fetch("http://191.96.31.250/projects.json");
    const response = await fetch("http://api.amol.cc/api/resume/projects");
    const data = await response.json();
    setData(data);
  };



  return (
    <div className="wrapper">
      <Container maxWidth="lg" sx={{}}>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} >
                         <Typography variant="h3" paragraph  gutterBottom>
                          Client Projects
                        </Typography>
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} >
                         <Typography variant="subtitle1" paragraph  gutterBottom>
                          Websites built for clients. Click on each project to see more details, or click the link to see the live site.
                        </Typography>
                          </Grid>
          {data.map((project) => (
            <Grid item xs={12} sm={6} md={6}  key={project.id}>
              <Paper sx={{
                    "&:hover": {
                      padding: "0.3em",
                      backgroundColor:  theme.palette.primary.main,
                    },
                    transition: "0.3s", 
                    padding: "0.225em",
                    backgroundColor:  theme.palette.primary.bg,
              }}  >
                  <Card sx={{backgroundColor: theme.palette.primary.secondary, color: theme.palette.primary.text,    }}
                    onClick={() => {
                      window.location.href = `/project-detail/${project.id}`;
                    }}
                 
                  >
                    <CardActionArea>
                      <CardMedia sx={{height: 140,}}
                        component="img"
                        image={project.image}
                        title={project.title}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {project.title}
                        </Typography>
                        <Typography variant="body2" component="p">
                          {project.description.substring(0, 200)}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Share
                      </Button>
                      <Button size="small" color="primary">
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
              </Paper>
            </Grid>
          ))}
                       <Grid item xs={12} sx={{
                            
                          }} >
                           
                           {window.location.pathname === "/" ? (

                                <Button variant='text' href="/about" target="_blank" rel="noopener noreferrer" >
                                  View All
                                  </Button>
                            ) : (
                            <div></div>
                            )}
                               

                </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default AllProjects;

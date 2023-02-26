// import React, {useState , useEffect } from "react";
// import "../index.css";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import { styled } from "@mui/material/styles";
// import Card from "@mui/material/Card";
// import CardActionArea from "@mui/material/CardActionArea";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid";
// import { useParams } from "react-router-dom";


// import Container from "@mui/material/Container";

// function AllProjects() {
//     const [data , setData] = useState([]);

//     useEffect(() => {
//         loadData();
//     }, []);

//     const loadData = async () => {
//         const response = await fetch("http://localhost:3000/projects.json");
//         const data = await response.json();
//         setData(data);
//     };

//     return (


//        //console.log(data);

//         <div class="wrapper">
//             <Container maxWidth="lg" >
//                 <Grid container spacing={3}>
//                     {data.map((project) => (
//                         <Grid item xs={12} sm={6} md={4} >
//                             <Card 
//                             onClick={() => { window.location.href = `/project-detail/${project.id}` }}
//                             sx={{backgroundColor: 'black' , color: ' white '}} >
//                                 <CardActionArea>
//                                     <CardMedia
//                                         component="img"
//                                         image={project.image}
//                                         title={project.title}
//                                     />
//                                     <CardContent>
//                                         <Typography gutterBottom variant="h5" component="h2">
//                                             {project.title}
//                                         </Typography>
//                                         <Typography variant="body2"  component="p">
//                                             {project.description}
//                                         </Typography>
//                                     </CardContent>
//                                 </CardActionArea>
//                                 <CardActions>
//                                     <Button size="small" color="primary">
//                                         Share
//                                     </Button>
//                                     <Button size="small" color="primary">
//                                         Learn More
//                                     </Button>
//                                 </CardActions>
//                             </Card>
//                         </Grid>
//                     ))}
//                 </Grid>
//             </Container>
//         </div>


//     );

// }

// export default AllProjects;

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
    const response = await fetch("http://localhost:3000/projects.json");
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
                         <Typography variant="body2" paragraph  gutterBottom>
                          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                  <Card sx={{backgroundColor: theme.palette.primary.black, color: theme.palette.primary.text,    }}
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
                           
                            
                                <Button variant='text' href="/about" target="_blank" rel="noopener noreferrer" >
                                  View All
                                  </Button>
                               

                </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default AllProjects;

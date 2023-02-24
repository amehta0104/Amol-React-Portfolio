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
      <Container maxWidth="md">
        <Grid container spacing={2}>
          {data.map((project) => (
            <Grid item xs={12} sm={6}  key={project.id}>
              <Paper elevation={1} sx={{  padding: 0.3, backgroundColor: theme.palette.primary.main }}>
                  <Card sx={{backgroundColor: theme.palette.primary.bg, color: theme.palette.primary.text, height: '100%'    }}
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
                          {project.description.substring(0, 100)}
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
        </Grid>
      </Container>
    </div>
  );
}

export default AllProjects;

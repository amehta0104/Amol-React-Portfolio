import { Container, Grid, Typography, Card, CardContent, CardHeader } from '@mui/material';
import { makeStyles, StylesProvider, withStyles } from '@mui/styles';
//import { skills, experience, education, projects } from './api/resume';
import React, { useEffect } from 'react';
import { purple } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme, { styles }  from './theme';
import { useTheme } from '@mui/material/styles';
import {Paper} from '@mui/material';
import $ from 'jquery';
import AboutMeGrid from '../components/aboutMeGrid';



function AboutMePage() {




  const [data, setData] = React.useState({
    skills: [],
    experience: [],
    education: [],
    projects: [],
  });

  useEffect(() => {
    fetchResume();
  }, []);

  const fetchResume = async () => {
    const response = await fetch('http://localhost:3000/api/resume');
    const data = await response.json();
    setData(data);
    
  };

  
  
    
    // fetch data from the API and create variables skills, experience, education, projects
  
      // fetch data from the API and create variables skills, experience, education, projects
  
 
  
  
  
    
  

  



  const style =  styles();

 

  


  

  return (
    <div class="wrapper">
      <Container maxWidth="lg" className={style.container}>
        <Grid container spacing={2}>
        <Grid  item xs={12} sm={12}>
          <AboutMeGrid /> 
          </Grid>
      
          <Grid  item xs={12} sm={12}>
         
              <Card sx={{
                bgcolor: 'transparent',
              }} className={style.resumeCard}>
                <CardHeader className={style.title} title="Experience" />
                <CardContent className={style.cardContent}>
                  {data.experience.map((exp) => (
                    <div key={exp.title} className={style.container}>
                      <Typography sx={{
                        fontSize: theme.typography.cardTitle.fontSize,
                      }}>
                        {exp.title} - {exp.company}
                      </Typography>
                      <Typography variant="subtitle2" color="textSecondary">
                        {exp.startDate} - {exp.endDate}
                      </Typography>
                      <Typography variant="body1">
                        {exp.summary}
                      </Typography>
                      <ul>
                        {exp.highlights.map((highlight) => (
                          <li key={highlight}>
                            <Typography variant="body2">
                              {highlight}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>
       
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={style.resumeCard} >
              <CardHeader title="Education" />
              <CardContent className={style.cardContent}>
                {data.education.map((edu) => (
                  <div key={edu.institution}>
                    <Typography variant="subtitle1">
                      {edu.studyType} // {edu.area} - {edu.school}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                      {edu.startDate} - {edu.endDate}
                    </Typography>
                    <Typography variant="body1">
                      {edu.summary}
                    </Typography>
      
                  </div>
                ))}
              </CardContent>
            </div>
          </Grid>
          <Grid item xs={12} md={6} sx={{
            height: "100%",
          }} >
            <div className={style.resumeCard}>
              <CardHeader title="Skills" />
              <CardContent className={style.cardContent}>
                <Typography className={theme.typography.cardTitle}>
                  {data.skills.join(', ')}
                </Typography>
              </CardContent>
            </div>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{
              bgcolor: 'transparent',
            }} className={style.resumeCard}>
              <CardHeader className={style.title} title="Projects" />
              <CardContent className={style.cardContent}>
                {data.projects.map((proj) => (
                  <div key={proj.name} className={style.container}>
                    <Typography style={theme.typography.cardTitle}>
                      {proj.name}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                      {proj.startDate} - {proj.endDate}
                    </Typography>
                    <Typography variant="body1">
                      {proj.description}
                    </Typography>
                    <ul>
                      {proj.highlights.map((highlight) => (
                        <li key={highlight}>
                          <Typography variant="body2">
                            {highlight}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </div>
                  ))}
                  </CardContent>
                  </Card>
                  </Grid>
      
                  </Grid>
                  </Container>
    </div>
                );
                      }
                

                export default withStyles (styles)  (AboutMePage);



           
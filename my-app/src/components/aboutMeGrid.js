import React from "react";


import theme from "../pages/theme";

import {Paper , Container, Card, CardHeader, CardContent, CardActions, Avatar, Typography, Grid, Button, ButtonGroup} from "@mui/material";


export default function AboutMeGrid() {

    return (

            <div class="wrapper">
                <Container maxWidth='lg' sx={{
                    display: 'flex',
                    justifyContent: 'center',
                          padding: 2,
                    alignItems: 'center',
                }} >
                    <Grid container spacing={2} sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                
                    }} >
                        <Grid item xs={12} >
                         <Typography variant="h4"  gutterBottom>
                            About Me
                        </Typography>
                          </Grid>
                          <Grid item xs={12} sm={6} >
                         <img src="/assests/uniken.png" alt='test' height={200} width={'100%'}/>
                          </Grid>
                          <Grid item xs={12} sm={6} >
                          <img src="/assests/profilepic.png" alt='test' height={200} width={'100%'}/>
                          </Grid>
                          <Grid item xs={12} sm={12} md={12}>
                          <Typography variant="body1" paragraph fontSize='1.1rem'>
                As a key member of the Uniken team, I was responsible for a range of technical and
                administrative tasks to ensure the smooth running of the company's website and IT
                infrastructure. Using designs created by our designer, I built webpages using HTML,
                CSS, PHP, and WordPress, ensuring that they were optimized for performance, security,
                and user experience.I was also responsible for maintaining databases, creating and
                deleting tables, and archiving current materials in Hubspot, ensuring that our data was
                 up-to-date and well-organized. Additionally, I set up and maintained all routing and
                 DNS for the website, ensuring that it was always accessible to our clients and
                 customers. Working closely with the marketing team, I helped to develop and execute
                 new materials for promotions, ensuring that our messaging was consistent, compelling,
                 and effective. As the overall IT administrator, I was responsible for doing a little
                 bit of everything, from troubleshooting technical issues to managing software licenses
                 and IT equipment.Throughout my time at Uniken, I demonstrated a strong commitment to
                 excellence, collaboration, and customer service, working closely with my colleagues to
                  ensure that our website and IT infrastructure
                were always performing at their best.
                     </Typography>
                          </Grid>

                          <Grid item xs={12} sx={{
                            
                          }} >
                           
                            <ButtonGroup variant="text" aria-label="contained primary button group">
                                <Button href="/about" target="_blank" rel="noopener noreferrer" >Learn More</Button>
                                <Button href="/contact" target="_blank" rel="noopener noreferrer" >Contact Me</Button>
                                </ButtonGroup>

                </Grid>
                
                
                
                        </Grid>
                </Container>
            </div>
      
)}

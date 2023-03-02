import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import MiniContact from '../components/mini-contact';
import SocialBar from '../components/social-bar';
import theme from '../pages/theme';
import { Grid, Hidden, Typography } from '@mui/material';
import {AnimatePresence, motion} from "framer-motion/dist/framer-motion"; 

export default function AboutMe(){
    const styles = {
        floatingLabelFocusStyle: {
            color: "white"
        }
    }


    

    

return(
// dark mode form with first name, last name, email, message fields and a blue submit button

    
    
 
        

    <AnimatePresence>
        <motion.div
        initial = {{ opacity: 0 }}
        animate = {{ opacity: 1 }}
        transition = {{ duration: 0.5, ease: 'easeIneaseOut' }}
        exit = {{ opacity: 0 }}
        className="wrapper">
            <Grid container maxWidth='md'  sx={{
        
              height: '760px',
                padding: 2,
        
            }} >
                      <Grid item xs={12} >
                          <Paper
                              component="form"
                              sx={{
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: theme.palette.primary.bg,
                                color: theme.palette.primary.main,
                                  overrides: {
                                      MuiInputLabel: {
                                          root: {
                                              color: "rgba(255, 255, 255, 0.87)",
                                          },
                                      },
                                  },
                              }}
                              elevation={2}
                          >
                              <h1 style={{ color: '#ffffff' }}>About Me</h1>
                              </Paper>
                      </Grid>
                          <Grid item xs={12} >
                          <Paper component="form"
                              sx={{
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                  backgroundColor: (theme.palette.primary.bg),
                                  color: '#ffffff',
                                  overrides: {
                                      MuiInputLabel: {
                                          root: {
                                              color: "rgba(255, 255, 255, 0.87)",
                                          },
                                      },
                                  },
                              }}
                              elevation={14}
                          >

<Typography variant="body1">
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
                              
                            </Paper>
                          </Grid>
                          <Box sx={ {
                              marginTop: '1em'
                          }}>
                  </Box>
        
            </Grid>
        </motion.div>
    </AnimatePresence>



          
    
        
        
     
   

);

}
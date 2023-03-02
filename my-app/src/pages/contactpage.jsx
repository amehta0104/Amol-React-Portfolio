import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import MiniContact from '../components/mini-contact';
import SocialBar from '../components/social-bar';
import theme from '../pages/theme';
import { Grid, Hidden } from '@mui/material';
import {AnimatePresence, motion} from "framer-motion/dist/framer-motion"; 

export default function ContactPage(){
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
                              <h1 style={{ color: '#ffffff' }}>Contact Me</h1>
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
                              <TextField
                                  sx={{ m: 1, color: '#ffffff',  }}
                                  id="outlined-basic"
                                  label="First Name"
                                  variant="filled"
                                  color="primary"
                                  className='text-field'
                                  InputLabelProps={{ style: { color: '#ffffff' } }} />
                              <TextField
                                  sx={{ m: 1,  }}
                                  id="outlined-basic"
                                  label="Last Name"
                                  variant="filled"
                                  color="primary"
                                  InputLabelProps={{ style: { color: '#ffffff' } }} />
                              <TextField
                                  sx={{ m: 1, }}
                                  id="outlined-basic"
                                  label="Email"
                                  variant='filled'
                                  color="primary"
                                  InputLabelProps={{ style: { color: '#ffffff' } }} />
                              <TextField
                                  sx={{ m: 1, }}
                                  id="outlined-basic"
                                  label="Message"
                                  variant="filled"
                                  color="primary"
                                  multiline
                                  InputLabelProps={{ style: { color: '#ffffff' } }} />
                              <Button
                                  sx={{ m: 1,  }}
                                  variant="outlined"
                                  color="primary"
                              >
                                  Submit
                              </Button>
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
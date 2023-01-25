 // create a hero component that includes the header, about me, and button to view work. Then import the hero component into the landing page and render it.

 import * as React from 'react';
 import Avatar from '@mui/material/Avatar';
 import Button from '@mui/material/Button';
 import CssBaseline from '@mui/material/CssBaseline';
 import TextField from '@mui/material/TextField';
 import FormControlLabel from '@mui/material/FormControlLabel';
 import Checkbox from '@mui/material/Checkbox';
 import Link from '@mui/material/Link';
 import Paper from '@mui/material/Paper';
 import Box from '@mui/material/Box';
 import Grid from '@mui/material/Grid';
 
 import Typography from '@mui/material/Typography';
 import { createTheme, ThemeProvider } from '@mui/material/styles';
 
import '../index.css';
import { Container } from '@mui/system';


    function Hero() {
        return (
            <Container maxWidth="xl">
         <div className='wrapper'>
             <div className='hero'>
                    <img src={require("../assests/profilepic.png")} alt="Your Name" />
                    <Box sx={{
                        typography: 'h5',
                    }}>
                        <p className='bio'>
                            A highly skilled and motivated web developer with experience
                            in creating custom websites using CMS platforms, as well as troubleshooting and maintaining servers. Proficient in various programming languages and operating systems, with strong problem-solving and communication skills. Seeking a challenging and rewarding opportunity to utilize my skills and experience to make a
                            positive impact on a dynamic organization.
             
                        </p>
                        <Button variant="contained" href="/projectpage">View My Work</Button>
                        {/* button to go to projects page */}
                    </Box>
                </div>
         </div>
            </Container>
     );
        }

    export default Hero;







import { Link } from 'react-router-dom';
import React from 'react';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import { Container } from '@mui/material';
import AdbIcon from '@mui/material/Icon';
import {MenuItem} from '@mui/material';
import { Button } from '@mui/material';
import {Menu } from '@mui/material';
import {Paper } from '@mui/material';


function AboutMe() {

        return (

            <Paper elevation={3} height='100vh' maxWidth='100%' 
            sx={{
                marginTop: 0,
                backgroundImage: "url('/assests/gg.png')",
                backgroundClip: "content-box",
                backgroundSize: "cover",
                backgroundPosition: "'bottom',",
                backgroundRepeat: "no-repeat",
                color: "white",
                }} >

<Box height='100vh'  justifyContent='center' alignItems='center' display='flex'
                        flexDirection='column' sx={{
 backdropFilter: "blur(52px)",
 backgroundBlendMode: "overlay",

 padding: 2, 

                        }}>
           
             
                      
                      
                            <Container>
                                <Typography variant='h2'>
                                    About Me
                                </Typography>
                                <Typography variant='paragraph' paragraph>
                                    <p>My name is Michael and I am a full stack web developer. I have a passion for learning and I am always looking for new ways to improve my skills. I am currently working on a few projects that I hope to have completed soon. I am also looking for a job as a web developer. If you are interested in hiring me, please contact me.</p>
                                </Typography>
                            </Container>
                 
                        </Box>

          
          
        </Paper>
 
        );

    
}

export default AboutMe;
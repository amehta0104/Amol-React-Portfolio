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
import SocialBar from '../components/social-bar';
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion';
import { useTheme } from '@mui/material/styles';
import theme from './theme';


function AboutMe() {

        return (

            <div class="wrapper">
                
                        <AnimatePresence mode={'wait'}>
                            <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 1 }}
                            transition={{ duration: 0.5, ease:'easeInOut' }}
                            >
                                <Container maxWidth='lg'>
                                    <Paper elevation={3} padding={2}
                                    sx={{
                                        marginTop: 0,
                                     backgroundColor : theme.palette.primary.bg,
                                     
                                     


                                        backgroundClip: "content-box",
                                        backgroundSize: "cover",
                                        backgroundPosition: "'bottom',",
                                        backgroundRepeat: "no-repeat",
                                        color: "white",
                                      
                                        }} >
                            
                                                            <Box p={0} >
                                                                <Typography variant='h3'>
                                                                    About Me
                                                                </Typography>
                                                                <Typography variant='body1' sx={{
                                                                    marginTop: 2,
                                                                }} paragraph>
                                                                    My name is amol and I am a full stack developer.
                                                                    I have been working as a software engineer since 2020. I have
                                                                    worked on a variety of projects, from web apps to mobile apps.
                                                                    I am currently working on a project called "The Social Network" which is a social media app.
                                                                    I am also working on a project called "The Social Network" which is a social media app.
                                                                </Typography>
                                                            </Box>
                                            </Paper>
                                </Container>
                            </motion.div>
                        </AnimatePresence>
            </div>
 
        );

    
}

export default AboutMe;
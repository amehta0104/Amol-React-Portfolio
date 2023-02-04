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


function AboutMe() {

        return (

            <div class="wrapper">
                
                        <Container maxWidth='xl'>
                            <Paper elevation={3} padding={2}
                            sx={{
                                marginTop: 0,
                               backgroundColor: "rgba(25, 118, 210, 0.09)",
                                backgroundClip: "content-box",
                                backgroundSize: "cover",
                                backgroundPosition: "'bottom',",
                                backgroundRepeat: "no-repeat",
                                color: "white",
                                }} >
                                               
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
                                                
                                    </Paper>
                        </Container>
            </div>
 
        );

    
}

export default AboutMe;
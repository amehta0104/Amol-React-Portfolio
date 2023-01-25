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
            <Container maxWidth="md">
                <div className="wrapper">
                    <div className="about-me">
                        <div className="about-me-content">
                            <div className="about-me-image">
                                <img src="/assests/closet.png" alt="me" />
                            </div>
                            <div className="about-me-text">
                                <h2>About Me</h2>
                                <p>My name is Michael and I am a full stack web developer. I have a passion for learning and I am always looking for new ways to improve my skills. I am currently working on a few projects that I hope to have completed soon. I am also looking for a job as a web developer. If you are interested in hiring me, please contact me.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        );

    
}

export default AboutMe;
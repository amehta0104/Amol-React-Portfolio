import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import  InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




import {  faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import { useParams } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import Container from '@mui/material/Container';


export default function SocialBar(){

    return(
        
        <Container  sx={ {
            display: 'flex',
          
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            p: '2rem',
        }}>
            <h2 > Follow me on social media</h2>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
            
                gap: '1rem',
            }} >
            <Fab color="primary" aria-label="add">
              <TwitterIcon /> 
                   
            </Fab>
            
            <Fab color="warning" aria-label="add"> <InstagramIcon /></Fab> 
            <Fab color="info" aria-label="add"> <LinkedInIcon /> </Fab>
            <Fab color="secondary" aria-label="add"> <GitHubIcon /> </Fab>
            <Fab color="error" aria-label="add"> <YouTubeIcon /> </Fab>
            <Fab color='primary' > <Email /> </Fab>
            </Box>
        </Container>
    )
           

}

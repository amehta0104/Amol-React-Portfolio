import React from 'react';
import Hero from './components/hero';
import './index.css';
import ProjectGrid from './components/projectgrid';
import Button from '@mui/material/Button';
import ProjectHoverCard from './components/project-hover-card';
import Box from '@mui/material/Box';
import MiniContact from './components/mini-contact';


 import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import { render } from '@testing-library/react';

import ProjectPage from './pages/projectpage';


function LandingPage() {
  return (
    <div > 

     
      <main>

        
          <Hero />
       

        
       
        <ProjectGrid />
        <MiniContact />
            
        </main>
        
        
       
    </div>
    );
}

export default LandingPage;








import React from 'react';
import Hero from './components/hero';
import './index.css';
import ProjectGrid from './components/projectgrid';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';




function LandingPage() {
  return (
    <div className='wrapper'> 

     
      <main>

        
          <Hero />
       

        
        <h2>Recent Projects</h2>
        < ProjectGrid />
        </main>
        <footer>
            <h2>Contact Me</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. Curabitur venenatis, nulla id tincidunt ultrices, quam
                metus tincidunt lacus, eu posuere nisi lectus at nulla.
            </p>
            <a href="mailto:#">Email</a>
            <a href="tel:#">Phone</a>
            
        </footer>
    </div>
    );
}

export default LandingPage;








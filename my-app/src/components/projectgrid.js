import React from 'react';
import '../index.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
function ProjectGrid() {

    return (
        
        <div className='project-grid'>
<Box>
    
    
              <div className='home-project-card'>
                <div className='container'>
                  <h3>Uniken</h3>
                  <div className='card-body'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                      facilisi. Curabitur venenatis, nulla id tincidunt ultrices, quam
                      metus tincidunt lacus, eu posuere nisi lectus at nulla.
                    </p>
                    <img src={require("../assests/profilepic.png")} alt="Your Name" />
                  </div>
                  <a href="#">Demo</a>
                </div>
              </div>
</Box>
          <Box>
              <div className='home-project-card'>
                <div className='container'>
                  <h3>Uniken</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                    facilisi. Curabitur venenatis, nulla id tincidunt ultrices, quam
                    metus tincidunt lacus, eu posuere nisi lectus at nulla.
                  </p>
                  <a href="#">Demo</a>
                </div>
              </div>
          </Box>
          <Box>
              <div className='home-project-card'>
                <div className='container'>
                  <h3>Uniken</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                    facilisi. Curabitur venenatis, nulla id tincidunt ultrices, quam
                    metus tincidunt lacus, eu posuere nisi lectus at nulla.
                  </p>
                  <a href="#">Demo</a>
                </div>
              </div>
          </Box>
          <Box>
              <Card variant='outlined'>{
                  <div className='home-project-card'>
                    <div className='container'>
                      <h3>Uniken</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                        facilisi. Curabitur venenatis, nulla id tincidunt ultrices, quam
                        metus tincidunt lacus, eu posuere nisi lectus at nulla.
                      </p>
                      <Button><a href="#">Demo</a></Button>
                    </div>
                  </div>}
              </Card>
          </Box>
     

        </div>

    

            

);
}

export default ProjectGrid;
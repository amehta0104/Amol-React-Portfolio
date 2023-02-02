import { Link } from 'react-router-dom';
import React from 'react';
import { AppBar, Icon } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import { Container } from '@mui/material';
import AdbIcon from '@mui/material/Icon';
import {MenuItem} from '@mui/material';
import { Button } from '@mui/material';
import {Menu } from '@mui/material';
import { IconButton } from '@mui/material';
import { Bolt} from '@mui/icons-material';
import { Home } from '@mui/icons-material';

function Header() {
  return (
    <AppBar position="static" sx={{
      marginBottom: 0,
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon  sx={{flexGrow:0, display: { xs: 'flex', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 1,
              ml: -1,
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Home sx={{ mr: 1 }} />
          </Typography>

          

          

         <Box sx={{ flexGrow: 0 }} />


          <Box sx={{ flexGrow:0, display: { xs: 'flex', md: 'flex' , lg:'flex' }, justifyContent: 'center' }}>
            <Button color="inherit" component={Link} to="/about">
              About
            </Button>
            <Button color="inherit" component={Link} to="/projectpage">
              Projects
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              Contact
            </Button>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
            <Menu>
              <MenuItem component={Link} to="/about">
                About
              </MenuItem>
              <MenuItem component={Link} to="/projects">
                Projects
              </MenuItem>
              <MenuItem component={Link} to="/contact">
                Contact
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  


    )}

export default Header;

import React from 'react'
import {Grid, Paper, Typography} from '@mui/material'
import theme from '../pages/theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFilePdf } from '@fortawesome/free-solid-svg-icons'

import Box from '@mui/material/Box'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

import Button from '@mui/material/Button'


export default function Github() {

    return (
<div className="wrapper">
<Grid container  spacing={0}  sx={{ padding:2,  }} maxWidth="lg">
<Grid item xs={12} >
<Box sx={{
 
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: 'transparent',
  color: 'white',
  padding: 2,
 
  
}}>
  <Typography variant="h4" fontWeight={500}  paragraph component="div" >
More information


  </Typography>
</Box>
</Grid>
<Grid item xs={6} md={6} lg={4} xl={4}>
<Box sx={{
 
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.primary.bg,
  color: theme.palette.primary.main,
  padding: 2,
  
}}>
  <Typography variant="h6" paragraph component="div" gutterBottom>
  <Button variant='outlined'>
    <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
  </Button>

  </Typography>
</Box>
</Grid>


<Grid item xs={6} md={6} lg={4} xl={4}>
<Box sx={{

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.primary.bg,
  color: theme.palette.primary.main,
  padding: 2,
  
}}>
  <Typography variant="h6" paragraph component="div" gutterBottom>
  <Button variant='outlined'>
    <FontAwesomeIcon icon={faFilePdf} /> Resume 
  </Button>

  </Typography>
</Box>
</Grid>
<Grid item xs={ 12} md={12} lg={4} xl={4}>
<Box>
    <Box sx={{
    
      width: "100%",
      padding: 2,
      display: "flex",
      flexDirection: "row",

      
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "transparent",
      color: theme.palette.primary.main,
    
    }}>
        
        <Typography variant="h6" paragraph fontWeight={700} component="div" gutterBottom>
    <Button variant='outlined'>
      <FontAwesomeIcon icon={faGithub} /> Github
    </Button>
   
    
      </Typography>
    
    </Box>
</Box>
</Grid>
</Grid>
</div>
    )
}


 // create a hero component that includes the header, about me, and button to view work. Then import the hero component into the landing page and render it.

 import * as React from 'react';
 import Avatar from '@mui/material/Avatar';
 import Button from '@mui/material/Button';
 import CssBaseline from '@mui/material/CssBaseline';
 import TextField from '@mui/material/TextField';
 import FormControlLabel from '@mui/material/FormControlLabel';
 import Checkbox from '@mui/material/Checkbox';
 import Link from '@mui/material/Link';
 import Paper from '@mui/material/Paper';
 import Box from '@mui/material/Box';
 import Grid from '@mui/material/Grid';
 import ButtonGroup from '@mui/material/ButtonGroup';
 import CodeIcon from '@mui/icons-material/Code';
 import Typography from '@mui/material/Typography';
 import { createTheme, ThemeProvider } from '@mui/material/styles';
 import IconButton from '@mui/material/IconButton';
    import DeleteIcon from '@mui/icons-material/Delete';
    import SendIcon from '@mui/icons-material/Send';
 
import '../index.css';

import { Container} from '@mui/system';


    function Hero() {

        
       
        return (
            
                <Paper elevation={3} height='100vh' maxWidth='100%' 
                sx={{
                    backgroundImage: "url('/assests/uniken.png')",
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
                            <Typography textAlign='center' variant="h1" paragraph  fontWeight={600} component="div" >
 Amol's Portfolio
                            </Typography>
                            <Typography textAlign='center' variant="h6" paragraph fontWeight={300} gutterBottom component="div" >
                                Full Stack Web Developer and Enthusiest of all things tech.
                            </Typography>
                            <Typography variant='button' marginTop={2}>
                                <ButtonGroup sx={{
                             
                                }} variant='contained' color='primary' component="div"  aria-label="contained primary button group">
                                    <Button  variant="contained" startIcon={<CodeIcon />}>
 Projects
</Button>
<Button variant="contained" endIcon={<SendIcon />}>
  Contact Me
</Button>
                                </ButtonGroup>
                            </Typography>
                        </Box>
                    </Paper>
      


        );
    }

    export default Hero;







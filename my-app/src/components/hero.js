 // create a hero component that includes the header, about me, and button to view work. Then import the hero component into the landing page and render it.

 import * as React from 'react';

 import Button from '@mui/material/Button';

 import Paper from '@mui/material/Paper';
 import Box from '@mui/material/Box';

 import ButtonGroup from '@mui/material/ButtonGroup';
 import CodeIcon from '@mui/icons-material/Code';
 import Typography from '@mui/material/Typography';

    import SendIcon from '@mui/icons-material/Send';


import '../index.css';


import {AnimatePresence, motion} from "framer-motion/dist/framer-motion"; 


    function Hero() {
 //div id hidden from landing page element
 const [checked, setChecked] = React.useState(false);

 const handleChange = () => {
   setChecked((prev) => !prev);
 };


        return (
            <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.6 ,ease:'easeInOut'}}
            exit={{opacity: 0}}
            >
                
                    <Paper elevation={3} height='100vh' maxWidth='100%'
                    sx={{
                        marginTop: 0,
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
                
                                    }} variant='contained' color='primary'
                                    component="div"  aria-label="contained primary button group">
                                        <Button
                                        onClick={() => {
                                            // document.getElementById('hidden').style.display = 'block';
                                         document.getElementById('hidden').scrollIntoView({behavior: 'smooth'})
                                            document.getElementById('hidden').style.visibility = 'visible';
                
                
                                          }}  variant="contained" startIcon={<CodeIcon />}>
                
                 Projects
                </Button>
                <Button onClick={() => {
                                            document.getElementById('contact').style.display = 'block';
                                         document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
                                         document.getElementById('contact').style.visibility = 'visible';
                                         ;
                
                                          }
                }
                 variant="contained" endIcon={<SendIcon />}>
                  Contact Me
                </Button>
                                    </ButtonGroup>
                                </Typography>
                            </Box>
                        </Paper>
            </motion.div>


        );
    }

    export default Hero;







import React from "react";
import Hero from "./components/hero";
import "./index.css";
import ContactPage from './pages/contactpage'
import AllProjects from "./components/allprojects";
import GitHubCards from "./components/GitHubCards";
import {Grid } from "@mui/material";
import {Paper} from "@mui/material";
import AboutMe from "./pages/about";

//import ProjectHoverCard from "./components/project-hover-card";


import Github from "./components/github";
import {AnimatePresence, motion} from "framer-motion";
import { Container, Typography } from "@mui/material";
import theme from "./pages/theme";
import AboutMeGrid from "./components/aboutMeGrid";
import { useStyles } from "./pages/theme";
function LandingPage({Component , pageProps, router}) {
  return (
    <AnimatePresence>

   
        <motion.div
         initial={{opacity:0}}
         animate={{opacity:1}}
         transition={{duration:0.5, ease: 'easeInOut'}}
          exit={{opacity:0}}>
            <main>
         

                <Grid container spacing={4} >
                <Grid item xs={12} sm={12} md={12}>
                <Hero />
              </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <motion.div   initial={{opacity:0}}
                             animate={{opacity:1}}
                             transition={{duration:1, ease: 'easeInOut'}}
                              exit={{opacity:0}} id="hidden" >
                    
                    
                    
                    
                    
                    
                         <Container maxWidth='lg' sx={{
                          padding: 1 ,
                         }}>
                    
                             <AllProjects />
                         </Container>
                       {/* <ProjectHoverCard  />{" "} */}
                    
                    
                            {/* {console.log(AllProjects().data)} */}
                    </motion.div>
                    
                  </Grid>
                          
                  <Grid item xs={12} sm={12} md={12}>
                                <motion.div  initial={{opacity:0}}
                                                           animate={{opacity:1}}
                                                           transition={{duration:1, ease: 'easeInOut'}}
                                                            exit={{opacity:0}}>
                                                          
                                                         
                                                           <Container maxWidth='lg'>
                                                             <GitHubCards />
                                                           </Container>
                                </motion.div>
                              </Grid>
                              <Grid item xs={12} sm={12} md={12}>
                    <motion.div  initial={{opacity:0}}
                             animate={{opacity:1}}
                             transition={{duration:1, ease: 'easeInOut'}}
                              exit={{opacity:0}} id="contact">
                    {/*
                             <Container maxWidth='lg'>
                               <Grid container spacing={2} >
                               <Grid item xs={12} sm={6}  >
                               <AboutMe />
                                 </Grid>
                                 <Grid item xs={12} sm={6}  >
                    
                                   <ContactPage />
                                 </Grid>
                               </Grid>
                             </Container> */}
                                 <Container maxWidth='lg'>
                        <AboutMeGrid />
                              </Container>
                    </motion.div>
                  </Grid>
                </Grid>
        
        
            </main>
        </motion.div>
    
    </AnimatePresence>
  );
}

export default LandingPage;

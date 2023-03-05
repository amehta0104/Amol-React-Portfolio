import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import LandingPage from './landingpage';
import ProjectPage from './pages/projectpage';

import ContactPage from './pages/contactpage';

import React from 'react';
import AboutMe from './pages/about';
import { ThemeProvider } from '@mui/material/styles';
//import {motion as m } from 'framer-motion';




import ProjectDetail from './pages/project-detail';
import { CssBaseline } from '@mui/material';

import theme from './pages/theme';
import Footer from './components/footer';
import {AnimatePresence, motion } from 'framer-motion/dist/framer-motion';


function App(router) {

  return (
    
    <AnimatePresence>
      <motion.div 
      initial = {{opacity:0}}
      animate = {{opacity:1}}
      transition ={{ duration: 0.5, ease:'easeInOut' }} 
      exit = {{opacity:0 , transition: {duration: 0.5, ease:'easeInOut'}}}
      >
        <ThemeProvider theme={theme} >
        

          <React.Fragment>
            <CssBaseline enableColorScheme/>
            {
            <BrowserRouter>
           

              <Header />
              <Routes>
      
                  <Route path="/" element={<LandingPage  />} />
                          <Route path="/about" element={<AboutMe />} />
                  <Route path="/projectpage" element={<ProjectPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/project-detail/:id" element={<ProjectDetail />} />
      
      
              </Routes>
              <Footer />
            </BrowserRouter>
            }
          </React.Fragment>
        </ThemeProvider>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
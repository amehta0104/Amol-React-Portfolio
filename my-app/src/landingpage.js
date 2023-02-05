import React from "react";
import Hero from "./components/hero";
import "./index.css";
import ContactPage from './pages/contactpage'


import ProjectHoverCard from "./components/project-hover-card";


import Github from "./components/github";
import {AnimatePresence, motion} from "framer-motion/dist/framer-motion";

function LandingPage({Component , pageProps, router}) {
  return (
    <AnimatePresence>
      <motion.div 
       initial={{opacity:0}}
       animate={{opacity:1}}
       transition={{duration:0.5, ease: 'easeInOut'}}
        exit={{opacity:0}}>
          <main>
            <Hero />
              <motion.div  initial={{opacity:0}}
 animate={{opacity:1}}
 transition={{duration:1, ease: 'easeInOut'}}
  exit={{opacity:0}} id="hidden" >
      
                  <ProjectHoverCard  />{" "}
      
              </motion.div>
      
          <motion.div  initial={{opacity:0}}
 animate={{opacity:1}}
 transition={{duration:1, ease: 'easeInOut'}}
  exit={{opacity:0}}>
            <Github />
          </motion.div>
              <motion.div  initial={{opacity:0}}
 animate={{opacity:1}}
 transition={{duration:1, ease: 'easeInOut'}}
  exit={{opacity:0}} id="contact">
                     <ContactPage />
              </motion.div>
              {/* <AboutMe />{" "} */}
      
      
          </main>
      </motion.div>
    </AnimatePresence>
  );
}

export default LandingPage;

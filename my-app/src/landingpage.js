import React from "react";
import Hero from "./components/hero";
import "./index.css";
import ContactPage from './pages/contactpage'
import { Box } from "@mui/material";
import Container from "@mui/material/Container";

import ProjectHoverCard from "./components/project-hover-card";
import {Paper} from "@mui/material";
import MiniContact from "./components/mini-contact";
import AboutMe from "./pages/about";
import Typography from '@mui/material/Typography';

import theme from "./pages/theme";
import SocialBar from "./components/social-bar";

function LandingPage() {
  return (
    <div>
      <main>
        <Hero />

  
          <div id="hidden" className="hidden">
            <ProjectHoverCard />{" "}

          </div>


  
          <div id="contact">
                 <ContactPage />
          </div>

          {/* <AboutMe />{" "} */}
          
      
      </main>
    </div>
  );
}

export default LandingPage;

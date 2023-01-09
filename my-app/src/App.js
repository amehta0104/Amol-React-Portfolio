import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import LandingPage from './landingpage';
import ProjectPage from './pages/projectpage';
import ResumePage from './pages/ResumePage.js';
import ContactPage from './pages/contactpage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Axios } from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';




import Project from './pages/project-detail';
import ProjectDetail from './pages/project-detail';





function App() {
  return (
    
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
  
        <Route path="/projectpage" element={<ProjectPage />} />
        {/* <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<ContactPage />} /> */}
        <Route path="/project-detail/:id" element={<ProjectDetail />} />
       
      </Routes>
  
    </BrowserRouter>
  
  );
}

export default App;
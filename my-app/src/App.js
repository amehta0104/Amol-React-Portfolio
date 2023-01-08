import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import LandingPage from './landingpage';
import ProjectPage from './pages/projectpage';
import ResumePage from './pages/ResumePage.js';
import ContactPage from './pages/contactpage';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
  
    </BrowserRouter>
  );
}

export default App;
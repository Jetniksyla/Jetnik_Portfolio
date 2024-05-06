import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav'; 
import Main from './components/Main.jsx';
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume.jsx"
import Projects from "./components/pages/Projects.jsx"
import AboutMe from './components/pages/AboutMe.jsx';
import Footer from './components/pages/Footer'; 

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen"> 
        <Nav />
        <div className="flex-grow"> 
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<AboutMe />} />
          </Routes>
        </div>
        <Footer /> 
      </div>
    </Router>
  );
}

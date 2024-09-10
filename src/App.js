import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Divider from './components/Divider';
import Project from './components/Project';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import './styles/Main.css';
import './styles/Nav.css';
import './styles/Services.css';
import './styles/Startpage.css';
import './styles/Contact.css';

function App() {
  return (

    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Services />} />
          </Routes>
          <div class=" z-10 anime">
            <div class="first">
              <h1>Himanshu</h1>
            </div>
            
            <div class="scnd">
              <h1>Mandowra</h1>
            </div>
            <Navbar />
            <HeroSection />
          </div>
          <Divider />
          <About />
          <Divider />
          <Services />
          <Divider />
          <Project/>
          <Divider />
          <Contact />
        </div>
      </Router>
    </>

  );
}

export default App;

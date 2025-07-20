import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Experience from './pages/Experience'; 

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case "about": return <About />;
      case "experience": return <Experience />;
      case "projects": return <Projects />;
      case "contact": return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Navbar
        setActiveSection={setActiveSection}
        activeSection={activeSection}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      {renderSection()}
    </div>
  );
}

export default App;

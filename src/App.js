// App.js
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import VantaBackground from "./components/VantaBackground";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <About />;
      case "experience":
        return <Experience />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      case "skills":
        return <Skills />;
      default:
        return <Home setActiveSection={setActiveSection} darkMode={darkMode} />;
    }
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      {/* Background applied here once for all pages */}
      <VantaBackground />

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

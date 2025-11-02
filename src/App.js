import React, { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 850);

  // detect mobile view dynamically
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 850);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      <VantaBackground />

      <Navbar
        setActiveSection={setActiveSection}
        activeSection={activeSection}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* 📱 For mobile: render all stacked sections */}
      {isMobile ? (
        <>
          <Home setActiveSection={setActiveSection} darkMode={darkMode} />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </>
      ) : (
        renderSection()
      )}
    </div>
  );
}

export default App;

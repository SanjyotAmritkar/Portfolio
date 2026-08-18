import React, { useState, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import AuroraBackground from "./components/AuroraBackground";

// Fades a mobile-stacked section in as it scrolls into view (once).
function RevealSection({ children }) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return children;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState("home");
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
        return <Home setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="App">
      <AuroraBackground />

      <Navbar
        setActiveSection={setActiveSection}
        activeSection={activeSection}
      />

      {/* For mobile: render all stacked sections, each revealing on scroll */}
      {isMobile ? (
        <>
          <RevealSection><Home setActiveSection={setActiveSection} /></RevealSection>
          <RevealSection><About /></RevealSection>
          <RevealSection><Experience /></RevealSection>
          <RevealSection><Skills /></RevealSection>
          <RevealSection><Projects /></RevealSection>
          <RevealSection><Contact /></RevealSection>
        </>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}

export default App;

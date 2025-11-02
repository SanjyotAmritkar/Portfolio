import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = ({ activeSection, setActiveSection, darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide navbar on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true); // hide
      } else {
        setHidden(false); // show
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${hidden ? "hidden" : ""}`}>
      <div className="logo">
        Sanjyot <span className="highlighted">Amritkar</span>
      </div>

      {/* Hamburger icon (visible on mobile) */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        {["Home", "About", "Experience", "Skills", "Projects", "Contact", "Resume"].map(
          (item) => (
            <li key={item}>
              <button
                className={activeSection === item.toLowerCase() ? "active" : ""}
                onClick={() => {
                   const section = item.toLowerCase();
  if (window.innerWidth <= 850) {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  } else {
    setActiveSection(section);
  }
  setMenuOpen(false);

                  setActiveSection(item.toLowerCase());
                  setMenuOpen(false);
                }}
              >
                {item}
              </button>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

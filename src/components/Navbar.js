import React from 'react';
import './Navbar.css';

function Navbar({ setActiveSection, activeSection, darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="highlighted">SANJYOT AMRITKAR</span>
      </div>
      <ul className="nav-links">
        {["home", "about", "experience", "skills", "projects",  "contact"].map(section => (
          <li key={section}>
            <button
              onClick={() => setActiveSection(section)}
              className={activeSection === section ? 'active' : ''}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          </li>
        ))}
        <li>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
        </li>
        <li>
          <label className="toggle-switch">
            <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
            <span className="slider"></span>
          </label>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

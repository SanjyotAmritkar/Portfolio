import React from 'react';
import './Navbar.css';

function Navbar({ setActiveSection, activeSection, darkMode, setDarkMode }) {
  const items = ["home", "about", "experience", "skills", "projects", "contact"];

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="highlighted">Sanjyot Amritkar</span>
      </div>
      <ul className="nav-links">
        {items.map(section => (
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
      </ul>
    </nav>
  );
}

export default Navbar;

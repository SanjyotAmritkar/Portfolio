import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpg';

function Home() {
  return (
    <div className="hero">
      <div className="hero-left">
        <motion.img
          src={profileImage}
          alt="Profile"
          className="profile-image"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />
      </div>

      <div className="hero-right">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hello, I'm <span className="highlighted">Sanjyot Amritkar</span> <br />
          <span className="last"></span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Data Science | AI/ML | Software Engineering and Development
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          I’m a passionate problem-solver with experience in building impactful solutions using AI,
          Machine Learning, and Software Engineering. Welcome to my portfolio!
        </motion.p>

        <div className="hero-buttons">
          <a href="#projects" className="primary">View Projects</a>
          <a href="/resume.pdf" className="secondary" target="_blank" rel="noreferrer">Download Resume</a>
        </div>
      </div>
    </div>
  );
}

export default Home;

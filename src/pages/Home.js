// Home.js
import './Home.css';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpg';

const roles = ["Data Science", "AI / ML", "Software Engineering"];

const badgeContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.5 } },
};

const badgeItem = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
};

function Home({ setActiveSection }) {
  return (
  <div id="home" className="hero">
      <div className="hero-left">
        <div className="hero-blob" aria-hidden="true" />
        <div className="profile-frame">
          <motion.img
            src={profileImage}
            alt="Profile"
            className="profile-image"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </div>

      <div className="hero-right">
        <motion.h1
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hello, I'm Sanjyot Amritkar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Somewhere between building banking systems that couldn't afford to go down and watching ER staff use a tool I helped ship, I found the kind of engineering I want to keep doing, work where getting it right actually matters.
        </motion.p>

        <motion.div
          className="role-badges"
          initial="hidden"
          animate="visible"
          variants={badgeContainer}
        >
          {roles.map((role) => (
            <motion.span className="role-badge" key={role} variants={badgeItem}>
              {role}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
        >
          <button className="primary" onClick={() => setActiveSection("projects")}>
            View Projects
          </button>

          <a href="/resume.pdf" className="secondary" target="_blank" rel="noreferrer">
            Download Resume
          </a>
        </motion.div>

      </div>
    </div>
  );
}

export default Home;

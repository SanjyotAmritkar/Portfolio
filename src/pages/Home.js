// Home.js
import React, { useState, useEffect } from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpg';

const roles = ["Data Science", "AI / ML", "Software Engineering"];

const badgeContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const badgeItem = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
};

function Home({ setActiveSection }) {
  const [startParagraph, setStartParagraph] = useState(false);
  const [startBadges, setStartBadges] = useState(false);
  const headingTimeout = React.useRef(null);
  const paragraphTimeout = React.useRef(null);

  // TypingText component: types the provided text when `start` is true and calls `onComplete` when done.
  function TypingText({ text, speed = 40, start = false, className = '', onComplete, highlight }) {
    const [typed, setTyped] = useState('');
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
      if (!start) return;
      setTyped('');
      setCompleted(false);
      let i = 0;
      const id = setInterval(() => {
        i += 1;
        setTyped(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(id);
          setCompleted(true);
          if (onComplete) onComplete();
        }
      }, speed);
      return () => clearInterval(id);
    }, [start, text, speed, onComplete]);

    // If not started yet, render an empty span so layout is preserved but text isn't visible
    if (!start) return <span className={className} />;

    // If a highlight string is provided, wrap that portion in a span.highlighted
    if (highlight) {
      const idx = text.indexOf(highlight);
      if (idx !== -1) {
        const before = typed.slice(0, idx);
        const mid = typed.slice(idx, idx + highlight.length);
        const after = typed.slice(idx + highlight.length);
        return (
          <span className={className}>
            {before}
            <span className="highlighted">{mid}</span>
            {after}
            {!completed && <span className="typing-cursor" />}
          </span>
        );
      }
    }

    return (
      <span className={className}>
        {typed}
        {!completed && <span className="typing-cursor" />}
      </span>
    );
  }

  // orchestrate sequential start with small delays so typing feels natural
  useEffect(() => {
    return () => {
      if (headingTimeout.current) clearTimeout(headingTimeout.current);
      if (paragraphTimeout.current) clearTimeout(paragraphTimeout.current);
    };
  }, []);

  const handleHeadingComplete = () => {
    headingTimeout.current = setTimeout(() => setStartParagraph(true), 300);
  };

  const handleParagraphComplete = () => {
    paragraphTimeout.current = setTimeout(() => setStartBadges(true), 250);
  };

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
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <TypingText
            text={"Hello, I'm Sanjyot Amritkar"}
            speed={40}
            start={true}
            onComplete={handleHeadingComplete}
            className="heading-typing"
          />
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <TypingText
            text={"I'm an AI & software engineer and data scientist who builds intelligent systems that solve real problems, from AI-powered healthcare tools to enterprise-scale platforms."}
            speed={18}
            start={startParagraph}
            onComplete={handleParagraphComplete}
            className="paragraph-typing"
          />
        </motion.p>

        <motion.div
          className="role-badges"
          initial="hidden"
          animate={startBadges ? "visible" : "hidden"}
          variants={badgeContainer}
        >
          {roles.map((role) => (
            <motion.span className="role-badge" key={role} variants={badgeItem}>
              {role}
            </motion.span>
          ))}
        </motion.div>

        <div className="hero-buttons">
          {/* Change href to button that triggers setActiveSection */}
          <button className="primary" onClick={() => setActiveSection("projects")}>
            View Projects
          </button>

          <a href="/resume.pdf" className="secondary" target="_blank" rel="noreferrer">
            Download Resume
          </a>
        </div>

      </div>
    </div>
  );
}

export default Home;

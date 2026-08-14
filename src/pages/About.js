import './About.css';
import {
  FaGraduationCap, FaCrown, FaAward, FaMicrophone,
  FaChalkboardTeacher, FaMedal, FaHandsHelping, FaUsers, FaCogs,
} from 'react-icons/fa';

const achievements = [
  {
    title: "President – IGSA",
    description: "Indian Graduate Student Association: Led graduate student initiatives at Stony Brook University",
    icon: <FaCrown />,
    featured: true,
  },
  {
    title: "Python Tutor – Stony Brook University CSTEP",
    description: "Mentored and taught foundational Python concepts to undergrads",
    icon: <FaChalkboardTeacher />,
    featured: true,
  },
  {
    title: "Head – TEDx CCOEW",
    description: "Led 50-member team in content, editorial & marketing team",
    icon: <FaMicrophone />,
    featured: true,
  },
  {
    title: "Citi Bridge 2022 – Citi Bank",
    description: "Among Top 100 participants for the training and mentorship program by Citi Bank",
    icon: <FaAward />,
  },
  {
    title: "Top 15 Seminar (CSI)",
    description: "Selected from 230+ entries and published by CSI at CCOEW",
    icon: <FaMedal />,
  },
  {
    title: "Mentor – SWE Program",
    description: "Guided 10 aspiring female engineers through career prep",
    icon: <FaHandsHelping />,
  },
  {
    title: "Women's Representative – Rotaract club of Pune Zenith",
    description: "Represented and empowered women at community events",
    icon: <FaUsers />,
  },
  {
    title: "Operations Team Lead – Ecell YUKTA",
    description: "Led the Operations Team of Ecell YUKTA at Cummins college, Pune",
    icon: <FaCogs />,
  },
];

const featuredAchievements = achievements.filter((a) => a.featured);
const compactAchievements = achievements.filter((a) => !a.featured);

const beats = [
  {
    label: "Where It Started",
    text: "I started my career at Barclays, building backend systems that processed millions of financial records a day without a production incident, work that taught me to value reliability as much as functionality. That instinct is what eventually pulled me toward Stony Brook University for a Master's in Data Science: I wanted to understand the models I'd been shipping, not just call an API and move on.",
  },
  {
    label: "Research Meets Industry",
    text: "Since then I've worked on both sides of that gap. As a research assistant at Stony Brook, I helped build and ship an AI-assisted triage platform that emergency department staff use daily, a system with real uptime requirements and real clinicians depending on it. At Nextracker, I saw how a large engineering organization decides whether an LLM feature is worth shipping, and what it actually costs to run one at scale.",
  },
  {
    label: "What Drives Me",
    text: "I'm drawn to problems with real constraints, latency budgets, compliance requirements, a clinician who doesn't have time to read three paragraphs of model output. That's usually where the interesting engineering lives, and it's the kind of work I want to keep doing.",
  },
];

function About() {

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>

        <div className="intro-content">
          <h3 className="intro-headline">I build with impact.</h3>
          <p className="intro-subhead">
            Data into decisions, models into production, code into systems that scale, one pipeline at a time, with no crashes (yet).
          </p>

          <div className="intro-beats">
            {beats.map((beat, i) => (
              <div className="intro-beat" key={beat.label}>
                <span className="beat-index">{String(i + 1).padStart(2, '0')}</span>
                <div className="beat-copy">
                  <h4 className="beat-label">{beat.label}</h4>
                  <p className="beat-text">{beat.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-grid horizontal-split">
          {/* Education */}
          <div className="about-box education-box">
            <h3>Education</h3>
            <div className="edu-entry">
              <span className="edu-icon"><FaGraduationCap /></span>
              <div className="edu-info">
                <span className="edu-degree">Master's in Data Science</span>
                <span className="edu-meta"><span className="edu-school">Stony Brook University</span> · <span className="edu-year">2024 – 2026</span></span>
              </div>
            </div>
            <div className="edu-entry">
              <span className="edu-icon"><FaGraduationCap /></span>
              <div className="edu-info">
                <span className="edu-degree">Bachelor of Technology in Computer Engineering</span>
                <span className="edu-meta"><span className="edu-school">Savitribai Phule Pune University, Pune</span> · <span className="edu-year">2019 – 2023</span></span>
              </div>
            </div>
          </div>


        </div>

        {/* Achievements Full Width Below */}
        <div className="about-grid">
          <div className="about-box full-width">
            <h3>Achievements & Leadership</h3>

            <div className="achievement-featured-grid">
              {featuredAchievements.map((a) => (
                <div className="achievement-card featured" key={a.title}>
                  <span className="achievement-icon">{a.icon}</span>
                  <h4>{a.title}</h4>
                  <p>{a.description}</p>
                </div>
              ))}
            </div>

            <div className="achievement-compact-list">
              {compactAchievements.map((a) => (
                <div className="achievement-pill" key={a.title} title={a.description}>
                  <span className="pill-icon">{a.icon}</span>
                  <span className="pill-title">{a.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

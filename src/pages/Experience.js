import React, { useState } from 'react';
import './Experience.css';
import barclaysLogo from '../assets/barclays.png'; // Make sure logo exists
import nextrackerLogo from '../assets/nextracker.png';
import sbulogo from '../assets/sbulogo.jpg';

const experiences = [
  {
    title: "AI Software Engineering Intern",
    company: "Nextracker",
    duration: "June 2025 – August 2025",
    logo: nextrackerLogo,
    description: [
      "Contributed to the development of LLM-based copilots to automate internal solar analytics workflows.",
      "Built and deployed AI-powered backend pipelines in Python using FastAPI and AWS Lambda.",
      "Integrated Open Web UI with enterprise infrastructure to enable natural language querying across solar datasets."
    ]
  },
{
    title: "Research Assistant",
    company: "Stony Brook University",
    duration: "July 2025 – Present",
    logo: sbulogo,
    description: [
    "Designed and developed EDExpertAITriage, a microservices-based AI assistant for emergency department triage.",
    "Built a dynamic chatbot interface using React and TailwindCSS for real-time patient interaction.",
    "Implemented modular backend services using FastAPI and PostgreSQL for symptom capture, urgency scoring, and follow-up generation.",
    "Integrated LLM service (PMC-LLaMA) with Huggingface for real-time clinical summarization and medical question generation.",
    "Ensured clean architecture with separate services for API gateway, data capture, and LLM-based triage logic."
    ]
  },

  {
    title: "Software Developer",
    company: "Barclays",
    duration: "July 2023 – July 2024",
    logo: barclaysLogo,
    description: [
      "Led development of risk decisioning APIs and automation systems using Java and Spring Boot.",
      "Integrated AWS solutions (S3, Glue, DynamoDB) and CI/CD with Jenkins.",
      "Managed production support and real-time issue resolution."
    ]
  },
  {
    title: "Software Engineering Intern",
    company: "Barclays",
    duration: "June 2022 – August 2022",
    logo: barclaysLogo,
    description: [
      "Built an analytics dashboard using Spring Boot and React.",
      "Collaborated on building a fraud detection system using transaction data."
    ]
  }
];


function Experience() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const toggleFlip = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index);
  };

  return (
    <div className="experience-section" id="work-experience">
      <h2 className="section-title">Professional Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className={`experience-card ${flippedIndex === index ? 'flipped' : ''}`} key={index}>
            <div className="experience-inner">
              {/* Front Side */}
              <div className="experience-front">
                <div className="experience-content">
                  <img src={exp.logo} alt={`${exp.company} logo`} className="company-logo" />
                  <div className="experience-meta">
                    <h3>{exp.title} <span> -  {exp.company}</span></h3>
                    <p className="experience-duration">{exp.duration}</p>
                  </div>
                </div>
                <button className="flip-button" onClick={() => toggleFlip(index)}>View Details</button>
              </div>

              {/* Back Side */}
              <div className="experience-back">
                <div className="experience-description">
                  <h3>{exp.title} @ {exp.company}</h3>
                  {exp.description.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
                <button className="flip-button" onClick={() => toggleFlip(index)}>Hide Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;

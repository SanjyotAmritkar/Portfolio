import React, { useState } from 'react';
import './Experience.css';
import barclaysLogo from '../assets/barclays.png';
import nextrackerLogo from '../assets/nextracker.png';
import sbulogo from '../assets/sbulogo.jpg';

const experiences = [
  {
    title: "Research Assistant",
    company: "Stony Brook University",
    duration: "July 2025 – Present",
    logo: sbulogo,
    description: [
      "Leading the design and development of EDExpertAITriage, an AI-assisted emergency triage platform integrating React, FastAPI, PostgreSQL, and LLMs for real-time clinical decision support.",
      "Architected a modular microservices system enabling dynamic triage summaries and OPQRST-style follow-up questions through LLM-driven inference.",
      "Exploring Graph-RAG pipelines and knowledge graph integration for enhanced retrieval and contextual reasoning in clinical queries.",
      "Reduced manual nurse questioning load by ~40%, streamlining patient intake and improving triage accuracy and speed.",
      "Collaborating with biomedical informatics faculty to evaluate ethical AI and explainability in healthcare applications."
    ]
  },

  {
    title: "AI Software Engineering Intern",
    company: "Nextracker",
    duration: "June 2025 – August 2025",
    logo: nextrackerLogo,
    description: [
      "Developed LLM-powered Proofs of Concept (PoCs) for Nextracker’s Navigator and DataHub platforms using GPT-3.5/4, LLaMA 3, and Mistral via Azure AI Foundry.",
      "Implemented Retrieval-Augmented Generation (RAG) pipelines using Go, Angular, and Azure Cognitive Search, cutting issue triage time by ~40%.",
      "Benchmarked cloud vs. on-prem LLMs for latency, accuracy, and cost — delivering a hybrid AI deployment roadmap for scalable inference workloads.",
      "Enhanced model reliability through custom prompt templates, embedding optimization, and semantic filtering pipelines.",
      "Contributed to an internal AI Strategy Document, outlining enterprise use cases for LLM copilots in renewable energy operations."
    ]
  },

  {
    title: "Software Developer",
    company: "Barclays",
    duration: "July 2023 – July 2024",
    logo: barclaysLogo,
    description: [
      "Engineered RESTful APIs using Java, Spring Boot, and Gradle, integrating with AWS (S3, Glue, DynamoDB) for secure, scalable risk decisioning workflows.",
      "Developed a React–Spring Boot logging dashboard for real-time API tracking, improving debugging efficiency by 90%.",
      "Optimized deployment pipelines via Jenkins, SonarQube, and JUnit, ensuring continuous integration and test coverage.",
      "Worked cross-functionally with DevOps and Data Engineering teams to design fault-tolerant microservices architectures aligned with bank compliance standards.",
      "Enhanced API response performance and introduced versioned endpoint strategies reducing downtime during service updates."
    ]
  },

  {
    title: "Software Engineering Intern",
    company: "Barclays",
    duration: "June 2022 – August 2022",
    logo: barclaysLogo,
    description: [
      "Built a full-stack Vulnerability Analysis Dashboard using Java–Spring Boot and React, consolidating data from Veracode, Pentest, and APAAS reports.",
      "Automated vulnerability triaging and risk scoring through backend–database integration, accelerating remediation cycles by 45%.",
      "Implemented visual analytics and reporting features using industry visualization libraries like Chart.js, D3.js for efficient vulnebarility tracking and analysis.",
      "Collaborated with senior developers to refactor legacy modules into RESTful microservices for better maintainability."
    ]
  }
];

function Experience() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const toggleFlip = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index);
  };

  return (
    <section className="experience-section" id="experience">
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
    </section>
  );
}

export default Experience;

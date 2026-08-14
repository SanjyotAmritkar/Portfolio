import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Experience.css';
import barclaysLogo from '../assets/experience/barclays.svg';
import nextrackerLogo from '../assets/experience/nextracker.png';
import sbulogo from '../assets/experience/stony-brook.svg';

const experiences = [
  {
    title: "AI Software Engineer (Research Assistant)",
    company: "Stony Brook University",
    duration: "June 2025 – May 2026",
    logo: sbulogo,
    brand: "stony-brook",
    description: [
      "At Stony Brook, I helped take an AI-assisted emergency-department triage platform from an engineering concept to a production system used by clinical staff in their daily workflow. I worked across the application stack, including Python and FastAPI services, a React interface, PostgreSQL persistence, Dockerized infrastructure, and Azure deployment, to create a dependable experience for a setting where speed, clarity, and system availability matter.",
      "A central part of the work involved making clinical language useful to the application. I fine-tuned BERT and SentenceTransformer models and developed LLM prompting workflows for intent classification and clinical summarization. Together, these improvements increased classification accuracy by 30% and reduced the manual effort involved in triage by 40%.",
      "I also engineered LangChain and FAISS retrieval pipelines over clinical guidelines so generated summaries could be grounded in relevant medical context rather than rely on an LLM alone. Beyond model behavior, I implemented service-to-service authentication and concurrent-session handling to support secure, high-volume use across the platform.",
      "The result was a production-oriented clinical AI system deployed through CI/CD with zero downtime, combining applied NLP research with the reliability, security, and operational discipline required for real-world healthcare software."
    ]
  },

  {
    title: "AI Software Engineering Intern",
    company: "Nextracker",
    duration: "June 2025 – August 2025",
    logo: nextrackerLogo,
    brand: "nextracker",
    description: [
      "At Nextracker, I worked on bringing generative AI into enterprise renewable-energy products, not as an isolated prototype, but as a capability that had to meet practical expectations for latency, accuracy, cost, and maintainability. I integrated GPT-4, LLaMA 3, and Mistral through Azure AI Foundry and improved inference latency by approximately 30% through prompt optimization, deliberate model selection, and infrastructure refinements.",
      "I designed and shipped RAG-powered search and workflow automation for production troubleshooting using Go, React, and LangChain. The experience connected enterprise knowledge with natural-language interaction, eliminating approximately 40% of the manual effort previously required across troubleshooting workflows.",
      "To help the team move from experimentation toward a sustainable deployment strategy, I benchmarked cloud-hosted and local LLMs across accuracy, latency, and cost. This analysis made the tradeoffs between model quality, operating expense, and infrastructure control explicit for the product and engineering teams.",
      "My findings became a reusable technical resource and informed Nextracker’s long-term production roadmap, extending the internship’s impact beyond the features I directly implemented."
    ]
  },

  {
    title: "Software Developer",
    company: "Barclays",
    duration: "July 2023 – July 2024",
    logo: barclaysLogo,
    brand: "barclays",
    description: [
      "As a Software Developer at Barclays, I built backend systems supporting large-scale financial data workflows and risk decisioning. Using Java and Spring Boot, I developed REST APIs integrated with AWS services including S3, Glue, and DynamoDB, automating workflows that processed millions of financial records each day without a production incident during my tenure.",
      "I saw that operating distributed services effectively required better visibility, so I delivered an internal observability platform with React and Spring Boot for centralized application logging and diagnostics. It gave engineering teams a clearer view across services, improved debugging accuracy by 90%, and reduced the time required to identify and resolve failures.",
      "Reliability was also built into the delivery process. I strengthened CI/CD pipelines with SonarQube, Prisma, and JUnit, introducing automated quality and security gates that caught issues earlier and reduced the risk of defects reaching production.",
      "The role deepened my experience engineering within a highly regulated environment, where scalability, traceability, secure cloud integration, and disciplined collaboration across an Agile team were as important as delivering the feature itself."
    ]
  },

  {
    title: "Software Engineering Intern",
    company: "Barclays",
    duration: "June 2022 – August 2022",
    logo: barclaysLogo,
    brand: "barclays",
    description: [
      "During my internship at Barclays, I shipped a full-stack vulnerability management dashboard using Java, Spring Boot, React, and AWS. The application connected security information with an accessible interface, giving teams a more unified way to review and act on vulnerability data.",
      "I automated the API-to-database workflow behind vulnerability tracking, replacing manual handoffs with a more consistent flow of information and reducing remediation time by 45%. This work showed me how thoughtfully designed internal tools can improve both engineering efficiency and an organization’s security posture.",
      "Working alongside senior engineers, I participated fully in Agile sprints, daily standups, code reviews, and iterative delivery. I also identified and resolved a critical API defect in the tracking pipeline before the sprint demonstration, preventing the issue from escalating and protecting the team’s delivery timeline.",
      "The internship became the foundation for my subsequent developer role at Barclays, establishing my experience in enterprise full-stack development, cloud deployment, secure API integration, and production-focused problem solving."
    ]
  }
];

// wraps any "NN%" figure already present in the text so key metrics stand out
function highlightMetrics(text) {
  return text.split(/(\d+%)/g).map((part, i) =>
    /^\d+%$/.test(part) ? (
      <strong className="metric" key={i}>{part}</strong>
    ) : (
      part
    )
  );
}

function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = experiences[activeIndex];

  return (
    <section className="experience-section" id="experience">
      <h2 className="section-title">Professional Experience</h2>

      <div className="experience-layout">
        <div className="experience-tabs" role="tablist" aria-label="Work experience">
          {experiences.map((exp, index) => (
            <button
              key={`${exp.company}-${exp.duration}`}
              role="tab"
              aria-selected={activeIndex === index}
              className={`experience-tab brand-${exp.brand} ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <span className="tab-logo-frame" aria-hidden="true">
                <img src={exp.logo} alt="" className="tab-logo" />
              </span>
              <span className="tab-meta">
                <span className="tab-company">{exp.company}</span>
                <span className="tab-duration">{exp.duration}</span>
              </span>
            </button>
          ))}
        </div>

        <div className="experience-panel">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className={`experience-detail brand-${active.brand}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <div className="detail-header">
                <div className="detail-logo-frame">
                  <img src={active.logo} alt={`${active.company} logo`} className="detail-logo" />
                </div>
                <div className="detail-heading">
                  <h3>{active.title}</h3>
                  <p className="detail-company">{active.company}</p>
                  <p className="detail-duration">{active.duration}</p>
                </div>
              </div>

              <ul className="detail-bullets">
                {active.description.map((line, i) => (
                  <li key={i}>{highlightMetrics(line)}</li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Experience;

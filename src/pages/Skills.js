import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Skills.css';

import {
  FaJava, FaPython, FaAws, FaDocker, FaReact, FaNodeJs, FaDatabase,
  FaPlug, FaCubes, FaLayerGroup, FaChartBar, FaGitAlt, FaInfinity,
  FaProjectDiagram, FaSearch, FaBrain, FaCommentDots, FaCloud, FaRobot,
  FaVectorSquare, FaLanguage, FaEye, FaCamera, FaLightbulb, FaChartLine,
  FaChartArea, FaChartPie, FaSquareRootAlt, FaGlasses,
} from 'react-icons/fa';
import {
  SiSpringboot, SiMongodb, SiPostgresql, SiScikitlearn, SiTensorflow, SiPandas,
  SiKubernetes, SiTableau, SiMysql, SiJavascript, SiTypescript, SiGo,
  SiCplusplus, SiFastapi, SiApachespark, SiApachekafka, SiSqlalchemy, SiR,
  SiPytorch, SiHuggingface, SiLangchain, SiRedis, SiGooglecloud, SiJenkins,
  SiTerraform, SiExpress, SiAngular, SiVite, SiTailwindcss, SiOpencv,
  SiD3Dotjs, SiSonarqube, SiJunit5, SiFirebase, SiStreamlit, SiOpenai,
  SiMeta, SiOllama,
} from 'react-icons/si';

const skills = {
  "Languages": {
    color: '#4dc3ff',
    items: [
      { name: 'Python', icon: <FaPython /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'Go', icon: <SiGo /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'SQL', icon: <FaDatabase /> },
      { name: 'R', icon: <SiR /> },
      { name: 'C/C++', icon: <SiCplusplus /> },
    ],
  },
  "Frontend & Backend": {
    color: '#22d3ee',
    items: [
      { name: 'React.js', icon: <FaReact /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express', icon: <SiExpress /> },
      { name: 'AngularJS', icon: <SiAngular /> },
      { name: 'Spring Boot', icon: <SiSpringboot /> },
      { name: 'FastAPI', icon: <SiFastapi /> },
      { name: 'REST APIs', icon: <FaPlug /> },
      { name: 'Microservices', icon: <FaCubes /> },
      { name: 'Vite', icon: <SiVite /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    ],
  },
  "AI / ML": {
    color: '#a78bfa',
    items: [
      { name: 'PyTorch', icon: <SiPytorch /> },
      { name: 'TensorFlow', icon: <SiTensorflow /> },
      { name: 'Scikit-learn', icon: <SiScikitlearn /> },
      { name: 'XGBoost', icon: <FaChartLine /> },
      { name: 'SHAP', icon: <FaLightbulb /> },
      { name: 'BERT', icon: <FaLanguage /> },
      { name: 'SentenceTransformers', icon: <SiHuggingface /> },
      { name: 'Computer Vision', icon: <FaEye /> },
      { name: 'OpenCV', icon: <SiOpencv /> },
      { name: 'YOLOv5', icon: <FaCamera /> },
    ],
  },
  "Generative AI": {
    color: '#f472b6',
    items: [
      { name: 'LangChain', icon: <SiLangchain /> },
      { name: 'LangGraph', icon: <FaProjectDiagram /> },
      { name: 'RAG', icon: <FaSearch /> },
      { name: 'FAISS', icon: <FaVectorSquare /> },
      { name: 'LLMs', icon: <FaBrain /> },
      { name: 'Prompt Engineering', icon: <FaCommentDots /> },
      { name: 'HuggingFace', icon: <SiHuggingface /> },
      { name: 'GPT-4', icon: <SiOpenai /> },
      { name: 'LLaMA 3', icon: <SiMeta /> },
      { name: 'Mistral', icon: <FaRobot /> },
      { name: 'Ollama', icon: <SiOllama /> },
    ],
  },
  "Data Engineering & Analytics": {
    color: '#34d399',
    items: [
      { name: 'Pandas', icon: <SiPandas /> },
      { name: 'Spark', icon: <SiApachespark /> },
      { name: 'Kafka', icon: <SiApachekafka /> },
      { name: 'ETL', icon: <FaLayerGroup /> },
      { name: 'SQLAlchemy', icon: <SiSqlalchemy /> },
      { name: 'Tableau', icon: <SiTableau /> },
      { name: 'Power BI', icon: <FaChartBar /> },
      { name: 'Statsmodels', icon: <FaSquareRootAlt /> },
      { name: 'Seaborn', icon: <FaChartArea /> },
      { name: 'D3.js', icon: <SiD3Dotjs /> },
      { name: 'ggplot2', icon: <FaChartPie /> },
      { name: 'Streamlit', icon: <SiStreamlit /> },
      { name: 'Tesseract OCR', icon: <FaGlasses /> },
    ],
  },
  "Cloud & Databases": {
    color: '#f59e0b',
    items: [
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Redis', icon: <SiRedis /> },
      { name: 'Firebase', icon: <SiFirebase /> },
      { name: 'AWS', icon: <FaAws /> },
      { name: 'Azure AI Foundry', icon: <FaRobot /> },
      { name: 'GCP', icon: <SiGooglecloud /> },
      { name: 'Azure', icon: <FaCloud /> },
    ],
  },
  "Tools & DevOps": {
    color: '#f87171',
    items: [
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'Kubernetes', icon: <SiKubernetes /> },
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'CI/CD', icon: <FaInfinity /> },
      { name: 'Jenkins', icon: <SiJenkins /> },
      { name: 'Terraform', icon: <SiTerraform /> },
      { name: 'SonarQube', icon: <SiSonarqube /> },
      { name: 'JUnit', icon: <SiJunit5 /> },
    ],
  },
};

function Skills() {
  const [activeTab, setActiveTab] = React.useState("Languages");
  const activeCategory = skills[activeTab];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">Technical Skills</h2>

        <div className="tabs">
          {Object.keys(skills).map((category) => (
            <button
              key={category}
              className={`tab-btn ${activeTab === category ? "active" : ""}`}
              style={{ '--tab-accent': skills[category].color }}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="skills-grid"
            style={{ '--card-accent': activeCategory.color }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {activeCategory.items.map((skill) => (
              <div key={skill.name} className="skill-card">
                <span className="icon">{skill.icon}</span>
                <span className="label">{skill.name}</span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Skills;

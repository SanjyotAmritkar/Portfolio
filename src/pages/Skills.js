import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Skills.css';

import {
  FaJava, FaPython, FaAws, FaDocker, FaReact, FaNodeJs, FaDatabase,
  FaPlug, FaCubes, FaLayerGroup, FaChartBar, FaGitAlt, FaInfinity,
  FaProjectDiagram, FaSearch, FaBrain, FaCommentDots, FaCloud, FaRobot,
  FaVectorSquare, FaLanguage, FaEye, FaCamera, FaLightbulb, FaChartLine,
  FaWaveSquare, FaHtml5, FaNetworkWired, FaClipboardCheck,
} from 'react-icons/fa';
import {
  SiSpringboot, SiMongodb, SiPostgresql, SiScikitlearn, SiTensorflow, SiPandas,
  SiKubernetes, SiTableau, SiMysql, SiJavascript, SiTypescript, SiGo,
  SiCplusplus, SiFastapi, SiApachespark, SiApachekafka, SiSqlalchemy, SiR,
  SiPytorch, SiHuggingface, SiLangchain, SiRedis, SiGooglecloud, SiJenkins,
  SiTerraform, SiTailwindcss, SiOpencv, SiStreamlit, SiOpenai,
  SiMeta, SiOllama, SiApacheairflow, SiDatabricks, SiJupyter,
  SiGithubactions,
} from 'react-icons/si';

const skills = {
  "Programming Languages": {
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
  "Software Engineering": {
    color: '#22d3ee',
    items: [
      { name: 'React.js', icon: <FaReact /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Spring Boot', icon: <SiSpringboot /> },
      { name: 'FastAPI', icon: <SiFastapi /> },
      { name: 'REST APIs', icon: <FaPlug /> },
      { name: 'Microservices', icon: <FaCubes /> },
      { name: 'Distributed Systems', icon: <FaNetworkWired /> },
      { name: 'Kafka', icon: <SiApachekafka /> },
      { name: 'HTML/CSS', icon: <FaHtml5 /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    ],
  },
  "AI / Machine Learning": {
    color: '#a78bfa',
    items: [
      { name: 'PyTorch', icon: <SiPytorch /> },
      { name: 'TensorFlow', icon: <SiTensorflow /> },
      { name: 'Scikit-learn', icon: <SiScikitlearn /> },
      { name: 'XGBoost', icon: <FaChartLine /> },
      { name: 'BERT', icon: <FaLanguage /> },
      { name: 'SentenceTransformers', icon: <SiHuggingface /> },
      { name: 'SHAP', icon: <FaLightbulb /> },
      { name: 'LSTM', icon: <FaWaveSquare /> },
      { name: 'Computer Vision', icon: <FaEye /> },
      { name: 'OpenCV', icon: <SiOpencv /> },
      { name: 'YOLOv5', icon: <FaCamera /> },
    ],
  },
  "Generative AI": {
    color: '#f472b6',
    items: [
      { name: 'LLMs', icon: <FaBrain /> },
      { name: 'RAG', icon: <FaSearch /> },
      { name: 'LangChain', icon: <SiLangchain /> },
      { name: 'LangGraph', icon: <FaProjectDiagram /> },
      { name: 'Hugging Face', icon: <SiHuggingface /> },
      { name: 'FAISS', icon: <FaVectorSquare /> },
      { name: 'Prompt Engineering', icon: <FaCommentDots /> },
      { name: 'GPT-4', icon: <SiOpenai /> },
      { name: 'LLaMA 3', icon: <SiMeta /> },
      { name: 'Mistral', icon: <FaRobot /> },
      { name: 'Ollama', icon: <SiOllama /> },
    ],
  },
  "Data Science & Engineering": {
    color: '#34d399',
    items: [
      { name: 'Pandas', icon: <SiPandas /> },
      { name: 'PySpark', icon: <FaPython /> },
      { name: 'Apache Spark', icon: <SiApachespark /> },
      { name: 'Apache Airflow', icon: <SiApacheairflow /> },
      { name: 'Databricks', icon: <SiDatabricks /> },
      { name: 'ETL', icon: <FaLayerGroup /> },
      { name: 'Data Quality', icon: <FaClipboardCheck /> },
      { name: 'SQLAlchemy', icon: <SiSqlalchemy /> },
      { name: 'Tableau', icon: <SiTableau /> },
      { name: 'Power BI', icon: <FaChartBar /> },
      { name: 'Matplotlib', icon: <FaChartLine /> },
      { name: 'Streamlit', icon: <SiStreamlit /> },
      { name: 'Jupyter', icon: <SiJupyter /> },
    ],
  },
  "Cloud, Databases & DevOps": {
    color: '#f59e0b',
    items: [
      { name: 'AWS', icon: <FaAws /> },
      { name: 'Azure', icon: <FaCloud /> },
      { name: 'GCP', icon: <SiGooglecloud /> },
      { name: 'Azure AI Foundry', icon: <FaRobot /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Redis', icon: <SiRedis /> },
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'Kubernetes', icon: <SiKubernetes /> },
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'CI/CD', icon: <FaInfinity /> },
      { name: 'Jenkins', icon: <SiJenkins /> },
      { name: 'GitHub Actions', icon: <SiGithubactions /> },
      { name: 'Terraform', icon: <SiTerraform /> },
    ],
  },
};

function Skills() {
  const [activeTab, setActiveTab] = React.useState("Programming Languages");
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

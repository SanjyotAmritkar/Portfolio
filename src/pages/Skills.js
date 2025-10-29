import React, { useState } from 'react';
import './Skills.css';

import {
  FaJava, FaPython, FaAws, FaDocker, FaReact, FaNodeJs
} from 'react-icons/fa';
import {
  SiJavascript, SiSpringboot, SiMongodb, SiPostgresql, SiScikitlearn, SiTensorflow, SiPandas, SiKubernetes
} from 'react-icons/si';

function Skills() {
  const [activeTab, setActiveTab] = useState("Languages & Frameworks");

  const skills = {
    "Languages & Frameworks": [
      { name: 'Java', icon: <FaJava /> },
      { name: 'Python', icon: <FaPython /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'React.js', icon: <FaReact /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'HTML/CSS', icon: <SiJavascript /> },
      { name: 'Springboot', icon: <SiSpringboot /> }
    ],
    "Tools & Platforms": [
      { name: 'Git', icon: <FaDocker /> },
      { name: 'Jenkins', icon: <FaDocker /> },
      { name: 'VS Code', icon: <SiJavascript /> },
      { name: 'Jupyter', icon: <SiJavascript /> },
      { name: 'Power BI', icon: <SiJavascript /> },
      { name: 'Tableau', icon: <SiJavascript /> },
      { name: 'WEKA', icon: <SiJavascript /> },
      { name: 'Jira', icon: <SiJavascript /> },
      { name: 'Openshift', icon: <SiJavascript /> }
    ],
    "Databases": [
      { name: 'MySQL', icon: <SiPostgresql /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Oracle', icon: <SiPostgresql /> },
      { name: 'Firebase', icon: <SiJavascript /> },
      { name: 'AWS', icon: <FaAws /> },
      { name: 'H2', icon: <SiJavascript /> }
    ],
    "Data Science & ML": [
      { name: 'Pandas', icon: <SiPandas /> },
      { name: 'NumPy', icon: <SiJavascript /> },
      { name: 'Scikit-learn', icon: <SiScikitlearn /> },
      { name: 'Keras', icon: <SiJavascript /> },
      { name: 'Seaborn', icon: <SiJavascript /> },
      { name: 'TensorFlow', icon: <SiTensorflow /> },
      { name: 'Flask', icon: <SiJavascript /> },
      { name: 'Matplotlib', icon: <SiJavascript /> },
      { name: 'Plotly', icon: <SiJavascript /> },
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'Kubernetes', icon: <SiKubernetes /> },
      { name: 'D3.js', icon: <SiJavascript /> },
      { name: 'ETL', icon: <SiJavascript /> },
      { name: 'LLMs', icon: <SiJavascript /> },
      { name: 'RAG', icon: <SiJavascript /> }
    ]
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>

        <div className="tabs">
          {Object.keys(skills).map((category, idx) => (
            <button
              key={idx}
              className={`tab-btn ${activeTab === category ? "active" : ""}`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {skills[activeTab].map((skill, idx) => (
            <div key={idx} className="skill-card">
              <span className="icon">{skill.icon}</span>
              <span className="label">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

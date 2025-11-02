import React from 'react';
import './Skills.css';

import {
  FaJava, FaPython, FaAws, FaDocker, FaReact, FaNodeJs, FaDatabase
} from 'react-icons/fa';
import {
  SiJavascript, SiSpringboot, SiMongodb, SiPostgresql, SiScikitlearn, SiTensorflow, SiPandas, SiKubernetes, SiJupyter, SiTableau, SiJira, SiMysql, SiOracle,
  SiNumpy, SiKeras, SiElasticsearch, SiPlotly, SiFlask, SiOllama, 
} from 'react-icons/si';
import {
  GoGitBranch
} from 'react-icons/go';
import {
  VscVscode, VscGraph
} from 'react-icons/vsc';
import {
  LuBird
} from 'react-icons/lu';
import {
  DiOpenshift
} from 'react-icons/di';
import { 
  RiFirebaseFill, RiH2
} from 'react-icons/ri';
import { 
  FcScatterPlot
} from 'react-icons/fc';
import { 
  MdOutlineBlurCircular
} from 'react-icons/md';
import {
  GiExplosiveMaterials
} from 'react-icons/gi';
function Skills() {
  const [activeTab, setActiveTab] = React.useState("Languages & Frameworks");

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
      { name: 'Git', icon: <GoGitBranch /> },
      { name: 'Jenkins', icon: <FaDocker /> },
      { name: 'VS Code', icon: <VscVscode /> },
      { name: 'Jupyter', icon: <SiJupyter /> },
      { name: 'Power BI', icon: <VscGraph /> },
      { name: 'Tableau', icon: <SiTableau /> },
      { name: 'WEKA', icon: <LuBird /> },
      { name: 'Jira', icon: <SiJira /> },
      { name: 'Openshift', icon: <DiOpenshift /> }
    ],
    "Databases": [
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Oracle', icon: <SiOracle /> },
      { name: 'Firebase', icon: <RiFirebaseFill /> },
      { name: 'AWS', icon: <FaAws /> },
      { name: 'H2', icon: <RiH2 /> }
    ],
    "Data Science & ML": [
      { name: 'Pandas', icon: <SiPandas /> },
      { name: 'NumPy', icon: <SiNumpy /> },
      { name: 'Scikit-learn', icon: <SiScikitlearn /> },
      { name: 'Keras', icon: <SiKeras /> },
      { name: 'Seaborn', icon: <SiElasticsearch /> },
      { name: 'TensorFlow', icon: <SiTensorflow /> },
      { name: 'Flask', icon: <SiFlask /> },
      { name: 'Matplotlib', icon: <FcScatterPlot /> },
      { name: 'Plotly', icon: <SiPlotly /> },
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'Kubernetes', icon: <SiKubernetes /> },
      { name: 'D3.js', icon: <MdOutlineBlurCircular /> },
      { name: 'ETL', icon: <FaDatabase /> },
      { name: 'LLMs', icon: <SiOllama /> },
      { name: 'RAG', icon: <GiExplosiveMaterials /> }
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

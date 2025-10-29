import React, { useState } from 'react';
import './About.css';

import {
  FaJava, FaPython, FaAws, FaDocker, FaReact, FaNodeJs
} from 'react-icons/fa';

import {
  SiJavascript, SiSpringboot, SiMongodb, SiPostgresql, SiScikitlearn, SiTensorflow, SiPandas, SiKubernetes
} from 'react-icons/si';

function About() {
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
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="intro">
          I’m a Data Science graduate student at Stony Brook University with a strong foundation in software engineering and a deep passion for AI/ML. My experience spans developing enterprise-scale risk decisioning systems, cloud-native applications, and data-driven research projects in areas like fraud detection, healthcare, and generative AI.

I thrive at the intersection of data and technology—designing intelligent, scalable solutions that turn complex challenges into actionable insights. Whether it’s building machine learning models, deploying AI-powered applications, or engineering robust software systems, I’m driven by the goal of using data to power innovation and enable smarter decision-making.

At my core, I’m a data enthusiast who believes that combining rigorous research with practical engineering can create impactful solutions for real-world problems.
        </p>

        <div className="about-grid horizontal-split">
          {/* Education */}
          <div className="about-box education-box">
            <h3>Education</h3>
            <div className="edu-entry">
              <span className="edu-degree">Master's in Data Science</span><br />
              <span className="edu-school">Stony Brook University</span> · <span className="edu-year">(2024 – 2026)</span>
            </div>
            <div className="edu-entry">
              <span className="edu-degree">Bachelor of Technology in Computer Engineering</span><br />
              <span className="edu-school">Savitribai Phule Pune university , Pune</span> · <span className="edu-year">(2019 – 2023)</span>
            </div>
          </div>

          
        </div>

        {/* Achievements Full Width Below */}
        <div className="about-grid">
          <div className="about-box full-width">
            <h3>Achievements & Leadership</h3>
            <div className="achievement-grid">
              <div className="achievement-card">
                <h4>President - IGSA</h4>
                <p>Indian Graduate Student Association: Led graduate student initiatives at Stony Brook University</p>
              </div>
              <div className="achievement-card">
                <h4>Python Tutor - CSTEP</h4>
                <p>Mentored and taught foundational Python concepts to undergrads</p>
              </div>
              <div className="achievement-card">
                <h4>Top 15 Seminar (CSI)</h4>
                <p>Selected from 230+ entries and published by CSI at CCOEW</p>
              </div>
              <div className="achievement-card">
                <h4>Mentor – SWE Program</h4>
                <p>Guided 10 aspiring female engineers through career prep</p>
              </div>
              <div className="achievement-card">
                <h4>Head- TEDx CCOEW </h4>
                <p>Led 50-member team in content, editorial & marketing team</p>
              </div>
              <div className="achievement-card">
                <h4>Women's Representative – Rotaract club of Pune Zenith</h4>
                <p>Represented and empowered women at community events</p>
              </div>
              <div className="achievement-card">
                <h4>Citi Bridge 2022 - Citi Bank</h4>
                <p>Among Top 100 participants for the training and mentorship program by Citi Bank</p>
              </div>
              <div className="achievement-card">
                <h4>Operations Team Lead - Ecell YUKTA</h4>
                <p>Led the Operations Team of Ecell YUKTA at Cummins college, Pune</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

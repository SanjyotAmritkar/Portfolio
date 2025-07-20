import React from 'react';
import './Projects.css';
import projectsData from '../data/projectsData.js';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p className="description">{project.description}</p>
              <p className="tech"><strong>Tech Stack:</strong> {project.tech}</p>
              <div className="buttons">
                {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="btn">GitHub</a>}
                {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="btn secondary">Live Demo</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

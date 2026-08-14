import React from 'react';
import './Projects.css';
import projectsData from '../data/projectsData.js';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <article
              className={`project-card ${project.featured ? 'featured' : ''}`}
              key={project.title}
              tabIndex="0"
            >
              <div className="project-cover">
                <img src={project.image} alt="" loading="lazy" />
                {project.featured && <span className="project-badge">Featured</span>}
                <span className="cover-cue" aria-hidden="true">Explore ↗</span>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="subtitle">{project.subtitle}</p>
                <p className="description">{project.description}</p>
                <div className="tech-list" aria-label="Technologies used">
                  {project.tech.map((technology) => <span key={technology}>{technology}</span>)}
                </div>
                <div className="buttons">
                  {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="btn">View Repository</a>}
                  {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="btn secondary">View Demo</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

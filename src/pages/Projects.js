import React, { useState } from 'react';
import './Projects.css';
import projectsData from '../data/projectsData.js';
import { FaChevronDown } from 'react-icons/fa';

function Projects() {
  const [expanded, setExpanded] = useState(() => new Set());

  const toggleExpand = (title) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(title)) {
        next.delete(title);
      } else {
        next.add(title);
      }
      return next;
    });
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projectsData.map((project, index) => {
            const isExpanded = expanded.has(project.title);
            const descriptionId = `project-description-${index}`;
            return (
              <article className="project-card" key={project.title} tabIndex="0">
                <div className="project-cover">
                  <img src={project.image} alt="" loading="lazy" />
                  <span className="cover-cue" aria-hidden="true">Explore ↗</span>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="subtitle">{project.subtitle}</p>

                  <div className="tech-list" aria-label="Technologies used">
                    {project.tech.map((technology) => <span key={technology}>{technology}</span>)}
                  </div>

                  <div
                    className={`description-wrap ${isExpanded ? 'expanded' : ''}`}
                    id={descriptionId}
                  >
                    <p className="description">{project.description}</p>
                  </div>

                  <button
                    type="button"
                    className="expand-toggle"
                    onClick={() => toggleExpand(project.title)}
                    aria-expanded={isExpanded}
                    aria-controls={descriptionId}
                  >
                    {isExpanded ? 'Show less' : 'Read more'}
                    <FaChevronDown className="toggle-chevron" aria-hidden="true" />
                  </button>

                  <div className="buttons">
                    {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="btn">View Repository</a>}
                    {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="btn secondary">View Demo</a>}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;

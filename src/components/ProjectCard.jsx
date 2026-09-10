import React from "react";

const visibleTechnologyCount = 5;
export function ProjectCard({ project }) {
  const visible = project.technologies.slice(0, visibleTechnologyCount);
  const remainder = project.technologies.length - visible.length;
  return (
    <article className="project-card">
      <div className="project-main">
        <img
          className="project-image"
          src={project.image}
          alt={`Prévia do projeto ${project.name}`}
        />
        <div className="project-info">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      </div>
      <div className="project-footer">
        <div className="actions-buttons">
          <a
            className="button subtle"
            href={project.url}
            target="_blank"
            rel="noreferrer"
          >
            Ver Projeto
          </a>
          <a
          className="button subtle"
          href={project.github}
          target="_blank"
          rel="noreferrer"
          >
            Acessar GitHub
          </a>
          
        </div>
        <div className="badges" aria-label={`Tecnologias de ${project.name}`}>
          {visible.map((technology) => (
            <span className="badge" key={technology}>
              {technology}
            </span>
          ))}
          {remainder > 0 && <span className="badge">+{remainder}</span>}
        </div>
      </div>
    </article>
  );
}

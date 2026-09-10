import React from "react";
import { ProjectCard } from "./ProjectCard";
export function Projects({ projects }) {
  return (
    <section className="projects-section" aria-labelledby="projects-title">
      <h2 id="projects-title">Projetos</h2>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

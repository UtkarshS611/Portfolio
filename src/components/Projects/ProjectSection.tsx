import { ProjectCard } from "./ProjectCard";
import { projects } from "../../data/projects";
import React from "react";

export const ProjectSection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto mt-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex justify-center gap-4">
          <span>Curated</span>
          <span className="font-Accent">Work</span>
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          Discover my latest work showcasing modern web development practices
          and cutting-edge technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

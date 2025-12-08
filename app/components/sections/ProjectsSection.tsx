"use client";

import React from "react";
import { projects, schoolProjects } from "../../data/projects";
import { ProjectCard, SchoolProjectCard } from "../ProjectCard";

interface ProjectsSectionProps {
  theme: "light" | "dark";
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ theme }) => {
  return (
    <>
      {/* Featured Projects */}
      <section id="projects" className="mt-24">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Projects
        </h2>
        <p className="text-xl text-text-secondary mb-12 text-center">
          Some things I&apos;ve built recently 
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} theme={theme} />
          ))}
        </div>
      </section>

      {/* School Projects  */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold mb-8 text-center">
          School Projects
        </h2>
        <p className="text-xl text-text-secondary mb-12 text-center">
          Projects built during my studies
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schoolProjects.map((project) => (
            <SchoolProjectCard
              key={project.name}
              project={project}
              theme={theme}
            />
          ))}
        </div>
      </section>
    </>
  );
};

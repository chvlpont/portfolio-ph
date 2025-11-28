"use client";

import React from "react";
import { Project, SchoolProject } from "../data/projects";
import { TagList } from "./Tag";

interface ProjectCardProps {
  project: Project;
  theme?: "light" | "dark";
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group relative overflow-hidden rounded-xl bg-bg-surface border border-border hover:border-accent-primary hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full"
    >
      {/* Project Image */}
      <div className="relative w-full aspect-16/10 overflow-hidden">
        <div
          className={`absolute inset-0 bg-linear-to-br from-${project.gradient.from}/20 to-${project.gradient.to}/20`}
        ></div>
        <img
          src={project.image}
          alt={`${project.name} Screenshot`}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Project Info */}
      <div className="p-5 flex flex-col">
        <h3 className="text-lg font-bold mb-2">{project.name}</h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        <TagList tags={project.tags} />
      </div>
    </a>
  );
};

interface SchoolProjectCardProps {
  project: SchoolProject;
  theme: "light" | "dark";
}

export const SchoolProjectCard: React.FC<SchoolProjectCardProps> = ({
  project,
  theme,
}) => {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group relative overflow-hidden rounded-xl bg-bg-surface border border-border hover:border-accent-primary hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full"
    >
      {/* Icon Header */}
      <div
        className="relative w-full aspect-16/10 overflow-hidden flex items-center justify-center"
        style={{
          background:
            theme === "light"
              ? "linear-gradient(to bottom right, #f1f5f9, #e2e8f0)"
              : undefined,
        }}
      >
        {theme === "dark" && (
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.iconColor}`}
          ></div>
        )}
        <project.icon
          size={100}
          className="opacity-80 relative z-10"
          style={{
            color:
              theme === "light"
                ? project.iconColorLight
                : "var(--accent-primary)",
          }}
          strokeWidth={1.5}
        />
      </div>

      {/* Project Info */}
      <div className="p-5 flex flex-col">
        <h3 className="text-lg font-bold mb-2">{project.name}</h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        <TagList tags={project.tags} />
      </div>
    </a>
  );
};

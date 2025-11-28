import React from "react";
import { Experience } from "../data/experiences";
import { TagList } from "./Tag";

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
}) => {
  const CardContent = () => (
    <div className="relative p-8 md:p-10">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold transition-colors">
            {experience.title}
          </h3>
          <p className="text-text-secondary text-lg mt-1">
            {experience.company}
          </p>
        </div>
        <div className="mt-2 md:mt-0 px-4 py-2 bg-bg-surface text-text-secondary border border-border rounded-lg text-sm font-medium">
          {experience.period}
        </div>
      </div>

      <ul className="space-y-3 mb-6 text-text-secondary">
        {experience.responsibilities.map((responsibility, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-accent-primary mt-1">▹</span>
            <span>{responsibility}</span>
          </li>
        ))}
      </ul>

      <TagList tags={experience.tags} size="md" />
    </div>
  );

  if (experience.url) {
    return (
      <a
        href={experience.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block group relative overflow-hidden rounded-2xl border border-border bg-bg-surface hover:border-accent-primary transition-all duration-500"
      >
        <CardContent />
      </a>
    );
  }

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-bg-surface hover:border-accent-primary transition-all duration-500">
      <CardContent />
    </div>
  );
};

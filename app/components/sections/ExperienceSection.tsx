import React from "react";
import { experiences } from "../../data/experiences";
import { ExperienceCard } from "../ExperienceCard";

export const ExperienceSection: React.FC = () => {
  return (
    <section className="relative mt-24">
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
      <p className="text-xl text-text-secondary mb-12 text-center">
        My journey in tech
      </p>

      <div className="space-y-8">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.company} experience={experience} />
        ))}
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { skills, coreSkills } from "../../data/skills";
import { SkillCard } from "../SkillCard";

interface SkillsSectionProps {
  theme: "light" | "dark";
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ theme }) => {
  return (
    <>
      {/* All Skills */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold mb-8 text-center">
          The Secret Recipe
        </h2>
        <p className="text-xl text-text-secondary mb-12 text-center">
          Technologies and tools I use to bring ideas to life.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
              theme={theme}
              size="sm"
            />
          ))}
        </div>
      </section>

      {/* Core Skills */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold mb-8 text-center">Core Skills</h2>
        <p className="text-xl text-text-secondary mb-12 text-center">
          My primary tech stack
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {coreSkills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
              theme={theme}
              size="lg"
            />
          ))}
        </div>
      </section>
    </>
  );
};

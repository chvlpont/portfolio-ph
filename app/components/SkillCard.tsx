"use client";

import React from "react";
import { Skill } from "../data/skills";

interface SkillCardProps {
  skill: Skill;
  index: number;
  theme: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

export const SkillCard: React.FC<SkillCardProps> = ({
  skill,
  index,
  theme,
  size = "md",
}) => {
  const iconSizes = {
    sm: "text-4xl",
    md: "text-4xl",
    lg: "text-5xl",
  };

  const paddingSizes = {
    sm: "p-5",
    md: "p-5",
    lg: "p-8",
  };

  const gapSizes = {
    sm: "gap-3",
    md: "gap-3",
    lg: "gap-4",
  };

  return (
    <div
      className="group relative skill-card"
      style={{
        animationDelay: `${index * 0.05}s`,
      }}
    >
      <div
        className={`relative rounded-xl ${paddingSizes[size]} border border-border hover:border-accent-primary transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl overflow-hidden`}
        style={{
          backgroundColor:
            theme === "light" ? "transparent" : "var(--bg-surface)",
        }}
      >
        {/* Subtle background gradient - only in dark mode */}
        {theme === "dark" && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(135deg, ${skill.color}0D, transparent, ${skill.color}05)`,
            }}
          ></div>
        )}

        {/* Glow effect - only in dark mode */}
        {theme === "dark" && (
          <div
            className="absolute inset-0 rounded-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 blur-xl pointer-events-none"
            style={{
              background: `radial-gradient(circle at center, ${skill.color}66, transparent)`,
            }}
          ></div>
        )}

        <div className={`relative flex flex-col items-center ${gapSizes[size]}`}>
          <div
            className={`${iconSizes[size]} transform group-hover:scale-110 transition-transform duration-300`}
          >
            <skill.icon
              style={{
                color: (skill.name === "Vercel" || skill.name === "Shadcn/ui" || skill.name === "Radix UI")
                  ? (theme === "dark" ? "#FFFFFF" : "#000000")
                  : skill.color
              }}
            />
          </div>
          <span className={`text-sm font-semibold transition-colors text-center ${size === "sm" ? "whitespace-nowrap" : ""}`}>
            {skill.name}
          </span>

          {/* Animated underline */}
          <div
            className="h-0.5 w-0 group-hover:w-full transition-all duration-300"
            style={{
              background: `linear-gradient(to right, transparent, ${
                (skill.name === "Vercel" || skill.name === "Shadcn/ui" || skill.name === "Radix UI")
                  ? (theme === "dark" ? "#FFFFFF" : "#000000")
                  : skill.color
              }, transparent)`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

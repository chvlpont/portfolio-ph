"use client";

import React from "react";
import { Github, FileText } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export const HeroSection: React.FC = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full gap-40">
        {/* Top Row - Text and Profile */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8 md:gap-33 max-w-5xl mx-auto">
          {/* Right side - Profile Image (mobile first) */}
          <div className="flex justify-center order-1 md:order-2 mt-8 md:mt-0">
            <div
              className="w-64 h-64 md:w-80 md:h-80 border-8 border-border overflow-hidden animate-blob"
              style={{
                borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
              }}
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQGMiTPLTp2Yog/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709338866147?e=1764806400&v=beta&t=NGiGgY3l82efPdeFOftUqvtNNTU2WEH5RS6ZlTGdppc"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Left side - Text */}
          <div className="order-2 md:order-1">
            <h1 className="text-3xl md:text-6xl font-bold mb-6 min-h-[1.2em] text-center">
              <span
                className="block leading-relaxed"
                style={{
                  fontFamily: '"Fira Code", monospace',
                  fontSize: "clamp(28px, 6vw, 35px)",
                }}
              >
                HI
                <br />
                I&apos;M{" "}
                <span style={{ color: "#32CD30", whiteSpace: "nowrap" }}>
                  PONTUS HOGLER
                </span>
                <br />
                <TypeAnimation
                  sequence={[
                    "Curious Learner",
                    2000,
                    "Problem Solver",
                    2000,
                    "Builder",
                    2000,
                    "Web Developer",
                    2000,
                  ]}
                  wrapper="span"
                  speed={20}
                  repeat={Infinity}
                  cursor={true}
                />
              </span>
            </h1>

            {/* CTA Buttons */}
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <a
                href="#projects"
                className="px-4 py-2 md:px-6 md:py-3 bg-bg-surface hover:bg-bg-muted border border-border hover:border-accent-green/50 text-text-primary text-sm md:text-base font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-4 py-2 md:px-6 md:py-3 bg-bg-surface hover:bg-bg-muted border border-border hover:border-accent-green/50 text-text-primary text-sm md:text-base font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-3 mt-6 md:mt-8">
              <a
                href="https://github.com/chvlpont"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 md:p-3 bg-bg-surface hover:bg-bg-muted border border-border hover:border-accent-green/50 rounded-lg transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={20} className="md:w-6 md:h-6" />
              </a>
              <a
                href="/CV%20Pontus%20Hogler%20ENG%20-%20Fullstack.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 md:p-3 bg-bg-surface hover:bg-bg-muted border border-border hover:border-accent-green/50 rounded-lg transition-all duration-300 hover:scale-110"
                aria-label="Resume"
              >
                <FileText size={20} className="md:w-6 md:h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { Github, FileText } from "lucide-react";
import ParticleBackground from "./components/ParticleBackground";
import StockholmClock from "./components/StockholmClock";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import ThemeToggle from "./components/ThemeToggle";
import { HeroSection } from "./components/sections/HeroSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { ContactSection } from "./components/sections/ContactSection";

// Add Google Fonts link for Fira Code
if (typeof window !== "undefined") {
  const fontLink = document.createElement("link");
  fontLink.href =
    "https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap";
  fontLink.rel = "stylesheet";
  document.head.appendChild(fontLink);
}

const Portfolio = () => {
  useScrollAnimation();
  const [theme, setTheme] = React.useState<"light" | "dark">("light");

  React.useEffect(() => {
    const updateTheme = () => {
      const currentTheme =
        (document.documentElement.getAttribute("data-theme") as
          | "light"
          | "dark") || "light";
      setTheme(currentTheme);
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <ParticleBackground />
      <div className="relative z-10">
        {/* Skip to main content */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black px-4 py-2 rounded"
        >
          Skip to main content
        </a>

        {/* Header Navigation */}
        <header className="border-b border-border">
          <nav className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <StockholmClock />
              <div className="flex items-center gap-6">
                <a
                  href="/CV%20Pontus%20Hogler%20ENG%20-%20Fullstack.pdf"
                  className="hover:text-text-secondary transition-colors flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText size={18} />
                  <span className="hidden md:inline">Resume</span>
                </a>
                <a
                  href="https://github.com/chvlpont"
                  className="hover:text-text-secondary transition-colors flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                  <span className="hidden md:inline">GitHub</span>
                </a>
                <ThemeToggle />
              </div>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main id="main" className="max-w-7xl mx-auto px-6">
          <HeroSection />
          <ProjectsSection theme={theme} />
          <SkillsSection theme={theme} />
          <ExperienceSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <footer className="border-t border-border mt-24">
          <div className="max-w-7xl mx-auto px-6 py-8 text-center text-text-secondary">
            <p>© 2025 PH</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;

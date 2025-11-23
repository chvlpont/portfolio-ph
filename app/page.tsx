"use client";

import React from "react";
import {
  Github,
  Mail,
  FileText,
  Calendar,
  ShoppingCart,
  MessageSquare,
} from "lucide-react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiGit,
  SiTailwindcss,
  SiMongodb,
  SiRedux,
  SiExpress,
  SiFramer,
  SiBlender,
  SiUnity,
  SiWordpress,
  SiFigma,
  SiSass,
  SiFirebase,
  SiAuth0,
  SiSupabase,
  SiSignal,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { TypeAnimation } from "react-type-animation";
import ParticleBackground from "./components/ParticleBackground";
import StockholmClock from "./components/StockholmClock";
import GitHubCalendar from "react-github-calendar";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import ThemeToggle from "./components/ThemeToggle";

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
  const [isMobile, setIsMobile] = React.useState(false);
  const [theme, setTheme] = React.useState<"light" | "dark">("light");

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

  const projects = [
    {
      name: "FlowAI",
      url: "https://flowai-inky.vercel.app/",
      image: "/flowai-screenshot.png",
      description:
        "AI-powered whiteboard collaboration tool for real-time brainstorming and visual thinking.",
      gradient: {
        from: "indigo-500",
        to: "cyan-500",
      },
      hoverColor: "indigo-400",
      tags: [
        { label: "Next.js", color: "#6b7280" },
        { label: "TypeScript", color: "#3b82f6" },
        { label: "Supabase", color: "#22c55e" },
        { label: "PostgreSQL", color: "#3b82f6" },
        { label: "Tailwind", color: "#06b6d4" },
        { label: "WebSockets", color: "#a855f7" },
        { label: "DnD", color: "#8b5cf6" },
        { label: "Groq", color: "#f97316" },
      ],
    },
    {
      name: "Kanbai",
      url: "https://kanbai-web.vercel.app/",
      image: "/kanbai-screenshot.png",
      description:
        "AI-powered kanban board managed through natural conversation in real-time.",
      gradient: {
        from: "blue-500",
        to: "purple-500",
      },
      hoverColor: "blue-400",
      tags: [
        { label: "Next.js", color: "#6b7280" },
        { label: "TypeScript", color: "#3b82f6" },
        { label: "Supabase", color: "#22c55e" },
        { label: "PostgreSQL", color: "#3b82f6" },
        { label: "Framer Motion", color: "#ec4899" },
        { label: "Tailwind", color: "#06b6d4" },
        { label: "WebSockets", color: "#a855f7" },
        { label: "DnD", color: "#8b5cf6" },
        { label: "Groq", color: "#f97316" },
      ],
    },
    {
      name: "TypeSprint",
      url: "https://typesprint-web.vercel.app/",
      image: "/typesprint-screenshot.png",
      description:
        "Real-time multiplayer typing game with solo practice mode, powered by WebSockets.",
      gradient: {
        from: "green-500",
        to: "emerald-500",
      },
      tags: [
        { label: "Next.js", color: "#6b7280" },
        { label: "TypeScript", color: "#3b82f6" },
        { label: "Supabase", color: "#22c55e" },
        { label: "PostgreSQL", color: "#3b82f6" },
        { label: "WebSockets", color: "#a855f7" },
      ],
    },
    {
      name: "Imageidentifier",
      url: "https://imageidentifier.ai",
      image: "/imageidentifier-screenshot.png",
      description: "AI-powered image identification and object recognition.",
      gradient: {
        from: "cyan-500",
        to: "purple-500",
      },
      hoverColor: "cyan-400",
      tags: [
        { label: "Next.js", color: "#6b7280" },
        { label: "TypeScript", color: "#3b82f6" },
        { label: "Tailwind", color: "#06b6d4" },
        { label: "Redis", color: "#ef4444" },
        { label: "OpenAI", color: "#10a37f" },
      ],
    },
    {
      name: "Symbi",
      url: "https://symbi.se",
      image: "/symbi-screenshot.png",
      description:
        "Off-market real estate platform connecting buyers, sellers, and agents.",
      gradient: {
        from: "purple-500",
        to: "pink-500",
      },
      hoverColor: "purple-400",
      tags: [
        { label: "Next.js", color: "#6b7280" },
        { label: "TypeScript", color: "#3b82f6" },
        { label: "Supabase", color: "#22c55e" },
        { label: "Tailwind", color: "#06b6d4" },
        { label: "NextAuth", color: "#3b82f6" },
      ],
    },
    {
      name: "AquaFix",
      url: "https://aquafix.se",
      image: "/aquafix-screenshot.png",
      description:
        "Professional cleaning services specializing in roofs, facades, and gutters.",
      gradient: {
        from: "blue-500",
        to: "green-500",
      },
      hoverColor: "blue-400",
      tags: [
        { label: "HTML", color: "#f97316" },
        { label: "CSS", color: "#3b82f6" },
        { label: "WordPress", color: "#6366f1" },
      ],
    },
  ];

  const schoolProjects = [
    {
      name: "Eventify",
      url: "https://github.com/chvlpont/eventify",
      description:
        "Event management system built with React/Next.js/Tailwind. Leverages an API created in a group project.",
      icon: Calendar,
      iconColor: "from-purple-500/20 to-pink-500/20",
      iconColorLight: "#a855f7",
      tags: [
        { label: "React", color: "#06b6d4" },
        { label: "Next.js", color: "#6b7280" },
        { label: "JavaScript", color: "#eab308" },
        { label: "Tailwind", color: "#06b6d4" },
        { label: "Clerk", color: "#a855f7" },
        { label: "Firebase", color: "#f59e0b" },
      ],
    },
    {
      name: "Byte",
      url: "https://github.com/chvlpont/byte-fullstack",
      description:
        "Full-stack e-commerce website built with React + Vite, Redux, and CSS. Interacts with Node.js/Express.js server and MongoDB.",
      icon: ShoppingCart,
      iconColor: "from-green-500/20 to-emerald-500/20",
      iconColorLight: "#22c55e",
      tags: [
        { label: "React", color: "#06b6d4" },
        { label: "Vite", color: "#a855f7" },
        { label: "JavaScript", color: "#eab308" },
        { label: "Redux", color: "#9333ea" },
        { label: "MongoDB", color: "#16a34a" },
        { label: "Express", color: "#9ca3af" },
        { label: "Node.js", color: "#22c55e" },
        { label: "CSS", color: "#3b82f6" },
      ],
    },
    {
      name: "WebTalk",
      url: "https://github.com/chvlpont/webtalk-forum2.0",
      description:
        "Reddit-type forum built with Next.js, TypeScript, and Tailwind. Uses LocalStorage and Context for state management.",
      icon: MessageSquare,
      iconColor: "from-orange-500/20 to-red-500/20",
      iconColorLight: "#f97316",
      tags: [
        { label: "Next.js", color: "#6b7280" },
        { label: "TypeScript", color: "#3b82f6" },
        { label: "Tailwind", color: "#06b6d4" },
        { label: "LocalStorage", color: "#eab308" },
        { label: "Context", color: "#06b6d4" },
      ],
    },
  ];

  const experiences = [
    {
      title: "Co-Founder & Fullstack Developer",
      company: "Webbyro",
      period: "Aug 2024 - Present",
      gradient: {
        from: "cyan-500",
        to: "blue-500",
      },
      responsibilities: [
        "Co-founded and built Webbyro alongside my brother and a friend",
        "Developed affordable websites for businesses using modern web technologies",
        "Currently focusing on developing an AI product",
        "Full-stack development with Next.js, TypeScript, and Supabase",
      ],
      tags: [
        { label: "Next.js", color: "#6b7280" },
        { label: "TypeScript", color: "#3b82f6" },
        { label: "JavaScript", color: "#eab308" },
        { label: "Tailwind", color: "#06b6d4" },
        { label: "Supabase", color: "#22c55e" },
        { label: "PostgreSQL", color: "#3b82f6" },
        { label: "Firebase", color: "#f59e0b" },
        { label: "WordPress", color: "#6366f1" },
        { label: "SEO", color: "#a855f7" },
      ],
    },
    {
      title: "Full Stack Developer - Intern",
      company: "Knowingly",
      period: "Mar 2025 - Jun 2025",
      gradient: {
        from: "purple-500",
        to: "pink-500",
      },
      url: "https://knowingly.ai/",
      responsibilities: [
        "Enhanced AI-powered community platform to improve user connections",
        "Implemented new features on both frontend and backend",
        "Improved existing functionality and user experience",
        "Full-stack development with TypeScript, Next.js, and PostgreSQL",
      ],
      tags: [
        { label: "TypeScript", color: "#3b82f6" },
        { label: "Next.js", color: "#6b7280" },
        { label: "PostgreSQL", color: "#3b82f6" },
        { label: "Supabase", color: "#22c55e" },
        { label: "Prisma", color: "#a855f7" },
        { label: "Tailwind", color: "#06b6d4" },
      ],
    },
    {
      title: "XR Developer - Intern",
      company: "Vobling",
      period: "Dec 2022 - May 2023",
      gradient: {
        from: "green-500",
        to: "blue-500",
      },
      url: "https://www.vobling.com/",
      responsibilities: [
        "Developed VR Fire Trainer, a VR fire safety simulation application",
        "Created realistic simulations and effects including smoke, fire, and burn marks",
        "Implemented different types of fire extinguishers in the VR environment",
        "Built 3D environments using Blender and developed gameplay mechanics with C# in Unity",
      ],
      tags: [
        { label: "Unity", color: "#6b7280" },
        { label: "C#", color: "#a855f7" },
        { label: "Blender", color: "#f97316" },
        { label: "Adobe Substance Painter", color: "#ef4444" },
        { label: "Jira", color: "#3b82f6" },
      ],
    },
  ];

  const skills = [
    { name: "HTML", icon: SiHtml5, color: "#f97316" },
    { name: "CSS", icon: SiCss3, color: "#3b82f6" },
    { name: "JavaScript", icon: SiJavascript, color: "#eab308" },
    { name: "TypeScript", icon: SiTypescript, color: "#60a5fa" },
    { name: "React", icon: SiReact, color: "#06b6d4" },
    { name: "C#", icon: TbBrandCSharp, color: "#a855f7" },
    { name: "Next.js", icon: SiNextdotjs, color: "#6b7280" },
    { name: "Node.js", icon: SiNodedotjs, color: "#22c55e" },
    { name: "Git", icon: SiGit, color: "#ea580c" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#22d3ee" },
    { name: "MongoDB", icon: SiMongodb, color: "#16a34a" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "Redux", icon: SiRedux, color: "#9333ea" },
    { name: "Express", icon: SiExpress, color: "#9ca3af" },
    { name: "Framer Motion", icon: SiFramer, color: "#ec4899" },
    { name: "Blender", icon: SiBlender, color: "#fb923c" },
    { name: "Unity", icon: SiUnity, color: "#d1d5db" },
    { name: "WordPress", icon: SiWordpress, color: "#2563eb" },
    { name: "Figma", icon: SiFigma, color: "#ef4444" },
    { name: "SCSS", icon: SiSass, color: "#db2777" },
    { name: "Firebase", icon: SiFirebase, color: "#ca8a04" },
    { name: "Supabase", icon: SiSupabase, color: "#3ecf8e" },
    { name: "WebSockets", icon: SiSignal, color: "#a855f7" },
    { name: "Clerk", icon: SiAuth0, color: "#6366f1" },
    { name: "Context", icon: SiReact, color: "#14b8a6" },
  ];

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
                  href="/resume.pdf"
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
          {/* Hero Section */}
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
                      I'M{" "}
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
                      href="/resume.pdf"
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

              {/* Bottom Row - GitHub Activity */}
              <div className="w-full max-w-5xl">
                <div className="flex flex-col items-center mb-6 lg:hidden">
                  <a
                    href="https://github.com/chvlpont"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-bg-surface hover:bg-bg-muted border border-border hover:border-accent-green transition-all duration-300"
                  >
                    <Github
                      size={20}
                      className="group-hover:text-green-400 transition-colors"
                    />
                    <span className="text-sm">GitHub Activity</span>
                  </a>
                </div>

                <div className="w-full flex justify-center">
                  {!isMobile ? (
                    <div className="scale-[1.1] origin-top transition-transform">
                      <GitHubCalendar
                        username="chvlpont"
                        colorScheme={theme}
                        blockSize={14}
                        fontSize={12}
                        theme={{
                          light: [
                            "#ebedf0",
                            "#9be9a8",
                            "#40c463",
                            "#30a14e",
                            "#216e39",
                          ],
                          dark: [
                            "#161b22",
                            "#0e4429",
                            "#006d32",
                            "#26a641",
                            "#39d353",
                          ],
                        }}
                      />
                    </div>
                  ) : (
                    <div className="w-full mb-16 [&>article]:!w-full [&_svg]:!w-full [&_svg]:!h-auto">
                      <GitHubCalendar
                        username="chvlpont"
                        colorScheme={theme}
                        blockSize={8}
                        fontSize={8}
                        theme={{
                          light: [
                            "#ebedf0",
                            "#9be9a8",
                            "#40c463",
                            "#30a14e",
                            "#216e39",
                          ],
                          dark: [
                            "#161b22",
                            "#0e4429",
                            "#006d32",
                            "#26a641",
                            "#39d353",
                          ],
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mt-24">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Featured Projects
            </h2>
            <p className="text-xl text-text-secondary mb-12 text-center">
              Some things I've built recently
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group relative overflow-hidden rounded-xl bg-bg-surface border border-border hover:border-accent-primary hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full"
                >
                  {/* Project Image - Large, no border */}
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

                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag.label}
                          className="px-2 py-1 rounded text-xs"
                          style={{
                            backgroundColor: `${tag.color}1A`,
                            color: tag.color,
                            border: `1px solid ${tag.color}33`,
                          }}
                        >
                          {tag.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* School Projects Section */}
          <section className="mt-24">
            <h2 className="text-3xl font-bold mb-8 text-center">
              School Projects
            </h2>
            <p className="text-xl text-text-secondary mb-12 text-center">
              Projects built during my studies
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {schoolProjects.map((project) => (
                <a
                  key={project.name}
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

                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag.label}
                          className="px-2 py-1 rounded text-xs"
                          style={{
                            backgroundColor: `${tag.color}1A`,
                            color: tag.color,
                            border: `1px solid ${tag.color}33`,
                          }}
                        >
                          {tag.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="mt-24">
            <h2 className="text-3xl font-bold mb-8 text-center">
              The Secret Recipe
            </h2>
            <p className="text-xl text-text-secondary mb-12 text-center">
              Technologies and tools I use to bring ideas to life.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group relative skill-card"
                  style={{
                    animationDelay: `${index * 0.05}s`,
                  }}
                >
                  {/* Card content */}
                  <div
                    className="relative rounded-xl p-5 border border-border hover:border-accent-primary transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl overflow-hidden"
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

                    <div className="relative flex flex-col items-center gap-3">
                      <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                        <skill.icon style={{ color: skill.color }} />
                      </div>
                      <span className="text-sm font-semibold transition-colors">
                        {skill.name}
                      </span>

                      {/* Animated underline */}
                      <div
                        className="h-0.5 w-0 group-hover:w-full transition-all duration-300"
                        style={{
                          background: `linear-gradient(to right, transparent, ${skill.color}, transparent)`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section with Timeline */}
          <section className="relative mt-24">
            <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
            <p className="text-xl text-text-secondary mb-12 text-center">
              My journey in tech
            </p>

            <div className="space-y-8">
              {experiences.map((experience) => (
                <div key={experience.company} className="relative">
                  {experience.url ? (
                    <a
                      href={experience.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group relative overflow-hidden rounded-2xl border border-border bg-bg-surface hover:border-accent-primary transition-all duration-500"
                    >
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
                          {experience.responsibilities.map(
                            (responsibility, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-2"
                              >
                                <span className="text-accent-primary mt-1">
                                  ▹
                                </span>
                                <span>{responsibility}</span>
                              </li>
                            )
                          )}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {experience.tags.map((tag) => (
                            <span
                              key={tag.label}
                              className="px-3 py-1.5 rounded-lg text-xs font-medium"
                              style={{
                                backgroundColor: `${tag.color}1A`,
                                color: tag.color,
                                border: `1px solid ${tag.color}33`,
                              }}
                            >
                              {tag.label}
                            </span>
                          ))}
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="group relative overflow-hidden rounded-2xl border border-border bg-bg-surface hover:border-accent-primary transition-all duration-500">
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
                          {experience.responsibilities.map(
                            (responsibility, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-2"
                              >
                                <span className="text-accent-primary mt-1">
                                  ▹
                                </span>
                                <span>{responsibility}</span>
                              </li>
                            )
                          )}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {experience.tags.map((tag) => (
                            <span
                              key={tag.label}
                              className="px-3 py-1.5 rounded-lg text-xs font-medium"
                              style={{
                                backgroundColor: `${tag.color}1A`,
                                color: tag.color,
                                border: `1px solid ${tag.color}33`,
                              }}
                            >
                              {tag.label}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="mt-24">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Get In Touch
            </h2>
            <p className="text-xl text-text-secondary mb-12 text-center">
              Have a question or want to work together?
            </p>

            <div className="max-w-2xl mx-auto">
              <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-surface p-8 md:p-10">
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>

                <form
                  className="relative space-y-6"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const formData = new FormData(form);

                    const data = {
                      name: formData.get("name"),
                      email: formData.get("email"),
                      message: formData.get("message"),
                    };

                    try {
                      const response = await fetch("/api/contact", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify(data),
                      });

                      if (response.ok) {
                        alert(
                          "Message sent successfully! I'll get back to you soon."
                        );
                        form.reset();
                      } else {
                        alert("Failed to send message. Please try again.");
                      }
                    } catch (error) {
                      alert("Failed to send message. Please try again.");
                    }
                  }}
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2 text-text-secondary"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-bg-surface border border-border rounded-lg focus:outline-none focus:border-accent-primary/50 focus:ring-2 focus:ring-accent-primary/20 transition-all duration-300 text-text-primary placeholder-text-secondary"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2 text-text-secondary"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-bg-surface border border-border rounded-lg focus:outline-none focus:border-accent-primary/50 focus:ring-2 focus:ring-accent-primary/20 transition-all duration-300 text-text-primary placeholder-text-secondary"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2 text-text-secondary"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-bg-surface border border-border rounded-lg focus:outline-none focus:border-accent-primary/50 focus:ring-2 focus:ring-accent-primary/20 transition-all duration-300 text-text-primary placeholder-text-secondary resize-none"
                      placeholder="Your message..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-bg-surface hover:bg-bg-muted border border-border hover:border-accent-green/50 text-text-primary font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    <Mail size={20} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>
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

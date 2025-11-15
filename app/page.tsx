"use client";

import React from "react";
import {
  Github,
  Mail,
  FileText,
  Home,
  FolderGit2,
  Gitlab,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import ParticleBackground from "./components/ParticleBackground";
import StockholmClock from "./components/StockholmClock";
import GitHubCalendar from "react-github-calendar";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

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

  const skills = [
    { name: "HTML", icon: "🌐", color: "#f97316" },
    { name: "CSS", icon: "🎨", color: "#3b82f6" },
    { name: "JavaScript", icon: "⚡", color: "#eab308" },
    { name: "TypeScript", icon: "📘", color: "#60a5fa" },
    { name: "React", icon: "⚛️", color: "#06b6d4" },
    { name: "C#", icon: "🔷", color: "#a855f7" },
    { name: "Next.js", icon: "▲", color: "#6b7280" },
    { name: "Node.js", icon: "🟢", color: "#22c55e" },
    { name: "Git", icon: "🔀", color: "#ea580c" },
    { name: "Tailwind", icon: "🎐", color: "#22d3ee" },
    { name: "MongoDB", icon: "🍃", color: "#16a34a" },
    { name: "Redux", icon: "🔄", color: "#9333ea" },
    { name: "Express", icon: "🚂", color: "#9ca3af" },
    { name: "Framer Motion", icon: "🎬", color: "#ec4899" },
    { name: "Blender", icon: "🎲", color: "#fb923c" },
    { name: "Unity", icon: "🎮", color: "#d1d5db" },
    { name: "WordPress", icon: "📝", color: "#2563eb" },
    { name: "Figma", icon: "🎨", color: "#ef4444" },
    { name: "SCSS", icon: "💅", color: "#db2777" },
    { name: "Firebase", icon: "🔥", color: "#ca8a04" },
    { name: "Clerk", icon: "🔐", color: "#6366f1" },
    { name: "Context", icon: "🔗", color: "#14b8a6" },
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
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
        <header className="border-b border-white/20">
          <nav className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <StockholmClock />
              <div className="flex items-center gap-6">
                <Link
                  href="/"
                  className="hover:text-gray-300 transition-colors flex items-center gap-2"
                >
                  <Home size={18} />
                  <span className="hidden md:inline">Home</span>
                </Link>
                <Link
                  href="/projects"
                  className="hover:text-gray-300 transition-colors flex items-center gap-2"
                >
                  <FolderGit2 size={18} />
                  <span className="hidden md:inline">Projects</span>
                </Link>
                <a
                  href="/resume.pdf"
                  className="hover:text-gray-300 transition-colors flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText size={18} />
                  <span className="hidden md:inline">Resume</span>
                </a>
                <a
                  href="https://github.com/yourusername"
                  className="hover:text-gray-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow me on Github!"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://gitlab.com/yourusername"
                  className="hover:text-gray-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow me on Gitlab!"
                >
                  <Gitlab size={20} />
                </a>
              </div>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main id="main" className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <section className="min-h-[calc(100vh-80px)] flex items-center justify-center">
            <div className="flex flex-col md:flex-row items-center justify-center w-full gap-12">
              {/* Left side - Text */}
              <div className="flex-1">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 min-h-[1.2em] text-center">
                  <span
                    className="block leading-relaxed"
                    style={{
                      fontFamily: '"Fira Code", monospace',
                      fontSize: "40px",
                    }}
                  >
                    HI
                    <br />
                    I'M <span style={{ color: "#26a641" }}>PONTUS HOGLER</span>
                    <br />
                    <TypeAnimation
                      sequence={[
                        "Curious Learner",
                        2000,
                        "Problem Solver",
                        2000,
                        "Builder",
                        2000,
                      ]}
                      wrapper="span"
                      speed={20}
                      repeat={Infinity}
                      cursor={true}
                    />
                  </span>
                </h1>
              </div>

              {/* Right side - Profile Image */}
              <div className="flex-1 flex justify-center md:justify-end">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-zinc-800 overflow-hidden">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQGMiTPLTp2Yog/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709338866147?e=1764806400&v=beta&t=NGiGgY3l82efPdeFOftUqvtNNTU2WEH5RS6ZlTGdppc"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* GitHub Contributions Section */}
          <section className="mt-24">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-transparent p-8 md:p-10">
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5 pointer-events-none"></div>

              <div className="relative">
                <div className="flex flex-col items-center mb-8">
                  <div className="text-center mb-4">
                    <h2 className="text-3xl font-bold mb-2">GitHub Activity</h2>
                    <p className="text-gray-400">My contributions in 2025</p>
                  </div>
                  <a
                    href="https://github.com/chvlpont"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-green-500/50 transition-all duration-300"
                  >
                    <Github
                      size={20}
                      className="group-hover:text-green-400 transition-colors"
                    />
                    <span className="hidden md:inline text-sm">
                      View Profile
                    </span>
                  </a>
                </div>

                <div className="w-full overflow-x-auto pb-4">
                  <GitHubCalendar
                    username="chvlpont"
                    colorScheme="dark"
                    blockSize={18}
                    fontSize={16}
                    theme={{
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
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="mt-24">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 mb-12 text-center">
              Some things I've built recently
            </p>

            <div className="space-y-8">
              {/* Project 1 */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-transparent hover:border-white/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Project Image */}
                    <div className="md:w-1/3">
                      <div className="relative aspect-video rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 overflow-hidden border border-white/10">
                        <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm">
                          <span className="text-white/60 text-sm font-medium">
                            Project Preview
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="md:w-2/3 space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-2xl md:text-3xl font-bold group-hover:text-cyan-400 transition-colors">
                          E-Commerce Platform
                        </h3>
                        <div className="flex gap-3">
                          <a
                            href="https://github.com/yourusername/ecommerce"
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github size={20} />
                          </a>
                          <a
                            href="https://example.com"
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink size={20} />
                          </a>
                        </div>
                      </div>

                      <p className="text-gray-400 leading-relaxed">
                        A full-stack e-commerce solution featuring real-time
                        inventory tracking, secure payment processing with
                        Stripe, and a comprehensive admin dashboard with
                        analytics.
                      </p>

                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-lg text-xs font-medium">
                          React
                        </span>
                        <span className="px-3 py-1.5 bg-green-500/10 text-green-400 border border-green-500/20 rounded-lg text-xs font-medium">
                          Node.js
                        </span>
                        <span className="px-3 py-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-lg text-xs font-medium">
                          PostgreSQL
                        </span>
                        <span className="px-3 py-1.5 bg-red-500/10 text-red-400 border border-red-500/20 rounded-lg text-xs font-medium">
                          Redis
                        </span>
                        <span className="px-3 py-1.5 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-lg text-xs font-medium">
                          Stripe
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-transparent hover:border-white/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Project Image */}
                    <div className="md:w-1/3">
                      <div className="relative aspect-video rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 overflow-hidden border border-white/10">
                        <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm">
                          <span className="text-white/60 text-sm font-medium">
                            Project Preview
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="md:w-2/3 space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-2xl md:text-3xl font-bold group-hover:text-purple-400 transition-colors">
                          AI Task Manager
                        </h3>
                        <div className="flex gap-3">
                          <a
                            href="https://github.com/yourusername/ai-task-manager"
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github size={20} />
                          </a>
                          <a
                            href="https://example.com"
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-pink-500/50 transition-all duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink size={20} />
                          </a>
                        </div>
                      </div>

                      <p className="text-gray-400 leading-relaxed">
                        Intelligent task management powered by machine learning.
                        Features AI-driven prioritization, smart time
                        estimation, calendar integration, and detailed
                        productivity analytics.
                      </p>

                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-gray-500/10 text-gray-300 border border-gray-500/20 rounded-lg text-xs font-medium">
                          Next.js
                        </span>
                        <span className="px-3 py-1.5 bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 rounded-lg text-xs font-medium">
                          Python
                        </span>
                        <span className="px-3 py-1.5 bg-orange-500/10 text-orange-400 border border-orange-500/20 rounded-lg text-xs font-medium">
                          TensorFlow
                        </span>
                        <span className="px-3 py-1.5 bg-green-500/10 text-green-400 border border-green-500/20 rounded-lg text-xs font-medium">
                          MongoDB
                        </span>
                        <span className="px-3 py-1.5 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-lg text-xs font-medium">
                          AWS
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-transparent hover:border-white/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Project Image */}
                    <div className="md:w-1/3">
                      <div className="relative aspect-video rounded-lg bg-gradient-to-br from-blue-500/20 to-green-500/20 overflow-hidden border border-white/10">
                        <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm">
                          <span className="text-white/60 text-sm font-medium">
                            Project Preview
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="md:w-2/3 space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-2xl md:text-3xl font-bold group-hover:text-blue-400 transition-colors">
                          Real-Time Collaboration Tool
                        </h3>
                        <div className="flex gap-3">
                          <a
                            href="https://github.com/yourusername/collab-tool"
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github size={20} />
                          </a>
                          <a
                            href="https://example.com"
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-green-500/50 transition-all duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink size={20} />
                          </a>
                        </div>
                      </div>

                      <p className="text-gray-400 leading-relaxed">
                        A collaborative workspace enabling distributed teams to
                        work seamlessly together. Features real-time document
                        editing, integrated video conferencing, team chat, and
                        project management tools.
                      </p>

                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-green-500/10 text-green-400 border border-green-500/20 rounded-lg text-xs font-medium">
                          Vue.js
                        </span>
                        <span className="px-3 py-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-lg text-xs font-medium">
                          WebRTC
                        </span>
                        <span className="px-3 py-1.5 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-lg text-xs font-medium">
                          Socket.io
                        </span>
                        <span className="px-3 py-1.5 bg-gray-500/10 text-gray-300 border border-gray-500/20 rounded-lg text-xs font-medium">
                          Express
                        </span>
                        <span className="px-3 py-1.5 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-lg text-xs font-medium">
                          Docker
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mt-24">
            <h2 className="text-3xl font-bold mb-8 text-center">
              The Secret Recipe
            </h2>
            <p className="text-xl text-gray-300 mb-12 text-center">
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
                  {/* Gradient border effect */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${skill.color}33, transparent, ${skill.color}0D)`,
                    }}
                  ></div>

                  {/* Glow effect */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                    style={{
                      background: `radial-gradient(circle at center, ${skill.color}66, transparent)`,
                    }}
                  ></div>

                  {/* Card content */}
                  <div
                    className="relative rounded-xl p-5 bg-zinc-800/50 backdrop-blur-sm group-hover:bg-zinc-800/80 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl border"
                    style={{
                      borderColor: `${skill.color}4D`,
                    }}
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
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
            <p className="text-xl text-gray-300 mb-12 text-center">
              My journey in tech
            </p>

            {/* Timeline Line - Hidden on mobile */}
            <div className="hidden lg:block absolute left-0 top-32 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-purple-500 to-green-500"></div>

            <div className="space-y-8">
              {/* Experience 1 */}
              <div className="relative lg:pl-12">
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-0 top-6 w-4 h-4 rounded-full bg-cyan-500 -translate-x-[7px] shadow-lg shadow-cyan-500/50 animate-pulse"></div>

                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-transparent hover:border-white/20 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold group-hover:text-cyan-400 transition-colors">
                          Senior Software Engineer
                        </h3>
                        <p className="text-gray-400 text-lg mt-1">
                          Tech Company Name
                        </p>
                      </div>
                      <div className="mt-2 md:mt-0 px-4 py-2 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-lg text-sm font-medium">
                        2022 - Present
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>
                          Architected and deployed microservices that reduced
                          system latency by 40%
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>
                          Led a team of 5 engineers to deliver a customer-facing
                          dashboard with 2x faster load times
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>
                          Implemented CI/CD pipelines that decreased deployment
                          time by 60%
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>
                          Mentored junior developers and conducted code reviews
                          to maintain high code quality
                        </span>
                      </li>
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-lg text-xs font-medium">
                        React
                      </span>
                      <span className="px-3 py-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-lg text-xs font-medium">
                        TypeScript
                      </span>
                      <span className="px-3 py-1.5 bg-green-500/10 text-green-400 border border-green-500/20 rounded-lg text-xs font-medium">
                        Node.js
                      </span>
                      <span className="px-3 py-1.5 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-lg text-xs font-medium">
                        AWS
                      </span>
                      <span className="px-3 py-1.5 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-lg text-xs font-medium">
                        Docker
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience 2 */}
              <div className="relative lg:pl-12">
                <div className="hidden lg:block absolute left-0 top-6 w-4 h-4 rounded-full bg-purple-500 -translate-x-[7px] shadow-lg shadow-purple-500/50"></div>

                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-transparent hover:border-white/20 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold group-hover:text-purple-400 transition-colors">
                          Full Stack Developer
                        </h3>
                        <p className="text-gray-400 text-lg mt-1">
                          Startup Inc.
                        </p>
                      </div>
                      <div className="mt-2 md:mt-0 px-4 py-2 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-lg text-sm font-medium">
                        2020 - 2022
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">▹</span>
                        <span>
                          Built a mobile-first web application that improved
                          user engagement by 60%
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">▹</span>
                        <span>
                          Optimized database queries resulting in 3x faster
                          response times
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">▹</span>
                        <span>
                          Integrated third-party APIs and payment gateways for
                          seamless transactions
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">▹</span>
                        <span>
                          Collaborated with designers to create pixel-perfect,
                          responsive interfaces
                        </span>
                      </li>
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-green-500/10 text-green-400 border border-green-500/20 rounded-lg text-xs font-medium">
                        Vue.js
                      </span>
                      <span className="px-3 py-1.5 bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 rounded-lg text-xs font-medium">
                        Python
                      </span>
                      <span className="px-3 py-1.5 bg-green-500/10 text-green-400 border border-green-500/20 rounded-lg text-xs font-medium">
                        Django
                      </span>
                      <span className="px-3 py-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-lg text-xs font-medium">
                        PostgreSQL
                      </span>
                      <span className="px-3 py-1.5 bg-red-500/10 text-red-400 border border-red-500/20 rounded-lg text-xs font-medium">
                        Redis
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience 3 */}
              <div className="relative lg:pl-12">
                <div className="hidden lg:block absolute left-0 top-6 w-4 h-4 rounded-full bg-green-500 -translate-x-[7px] shadow-lg shadow-green-500/50"></div>

                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-transparent hover:border-white/20 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold group-hover:text-green-400 transition-colors">
                          Junior Developer
                        </h3>
                        <p className="text-gray-400 text-lg mt-1">
                          Software Solutions Ltd.
                        </p>
                      </div>
                      <div className="mt-2 md:mt-0 px-4 py-2 bg-green-500/10 text-green-400 border border-green-500/20 rounded-lg text-sm font-medium">
                        2018 - 2020
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">▹</span>
                        <span>
                          Developed and maintained client-facing web
                          applications
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">▹</span>
                        <span>
                          Implemented automated testing that reduced bugs in
                          production by 45%
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">▹</span>
                        <span>
                          Participated in agile ceremonies and contributed to
                          sprint planning
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">▹</span>
                        <span>
                          Refactored legacy code to improve maintainability and
                          performance
                        </span>
                      </li>
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 rounded-lg text-xs font-medium">
                        JavaScript
                      </span>
                      <span className="px-3 py-1.5 bg-red-500/10 text-red-400 border border-red-500/20 rounded-lg text-xs font-medium">
                        Angular
                      </span>
                      <span className="px-3 py-1.5 bg-orange-500/10 text-orange-400 border border-orange-500/20 rounded-lg text-xs font-medium">
                        Java
                      </span>
                      <span className="px-3 py-1.5 bg-green-500/10 text-green-400 border border-green-500/20 rounded-lg text-xs font-medium">
                        Spring Boot
                      </span>
                      <span className="px-3 py-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-lg text-xs font-medium">
                        MySQL
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mt-24">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 mb-12 text-center">
              Have a question or want to work together?
            </p>

            <div className="max-w-2xl mx-auto">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-transparent p-8 md:p-10">
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>

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
                      className="block text-sm font-medium mb-2 text-gray-300"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-zinc-800/50 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 text-white placeholder-gray-500"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2 text-gray-300"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-zinc-800/50 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 text-white placeholder-gray-500"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2 text-gray-300"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-zinc-800/50 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 text-white placeholder-gray-500 resize-none"
                      placeholder="Your message..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2"
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
        <footer className="border-t border-white/20 mt-24">
          <div className="max-w-7xl mx-auto px-6 py-8 text-center text-gray-400">
            <p>© 2025 Your Name. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;

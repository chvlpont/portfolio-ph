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
    { name: "HTML", icon: "🌐", color: "orange-500" },
    { name: "CSS", icon: "🎨", color: "blue-500" },
    { name: "JavaScript", icon: "⚡", color: "yellow-500" },
    { name: "TypeScript", icon: "📘", color: "blue-400" },
    { name: "React", icon: "⚛️", color: "cyan-500" },
    { name: "C#", icon: "🔷", color: "purple-500" },
    { name: "Next.js", icon: "▲", color: "gray-500" },
    { name: "Node.js", icon: "🟢", color: "green-500" },
    { name: "Git", icon: "🔀", color: "orange-600" },
    { name: "Tailwind", icon: "🎐", color: "cyan-400" },
    { name: "MongoDB", icon: "🍃", color: "green-600" },
    { name: "Redux", icon: "🔄", color: "purple-600" },
    { name: "Express", icon: "🚂", color: "gray-400" },
    { name: "Framer Motion", icon: "🎬", color: "pink-500" },
    { name: "Blender", icon: "🎲", color: "orange-400" },
    { name: "Unity", icon: "🎮", color: "gray-300" },
    { name: "WordPress", icon: "📝", color: "blue-600" },
    { name: "Figma", icon: "🎨", color: "red-500" },
    { name: "SCSS", icon: "💅", color: "pink-600" },
    { name: "Firebase", icon: "🔥", color: "yellow-600" },
    { name: "Clerk", icon: "🔐", color: "indigo-500" },
    { name: "Context", icon: "🔗", color: "teal-500" },
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
                <div className="flex items-center justify-between mb-8">
                  <div>
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
            <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
            <p className="text-xl text-gray-300 mb-12">
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
            <h2 className="text-3xl font-bold mb-8">The Secret Recipe</h2>
            <p className="text-xl text-gray-300 mb-12">
              Technologies and tools I use to bring ideas to life.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`group relative border border-white/10 rounded-lg p-4 hover:border-white/30 transition-all duration-300 hover:shadow-lg hover:shadow-${skill.color}/10 hover:-translate-y-1 bg-gradient-to-br from-${skill.color}/5 to-transparent`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="text-3xl">{skill.icon}</div>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section with Timeline */}
          <section className="relative mt-24 py-24">
            <h2 className="text-3xl font-bold mb-12">Experience</h2>

            {/* Timeline Line - Hidden on mobile */}
            <div className="hidden lg:block absolute left-0 top-16 bottom-0 w-px bg-white/20"></div>

            <div className="space-y-12">
              {/* Experience 1 */}
              <div className="relative lg:pl-12">
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-0 top-2 w-3 h-3 rounded-full bg-white -translate-x-[5px]"></div>

                <div className="border border-white/20 rounded-lg p-6 hover:border-white/40 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">
                        Senior Software Engineer
                      </h3>
                      <p className="text-gray-400">Tech Company Name</p>
                    </div>
                    <div className="text-gray-400 mt-2 md:mt-0">
                      2022 - Present
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4 text-gray-300">
                    <li>
                      • Architected and deployed microservices that reduced
                      system latency by 40%
                    </li>
                    <li>
                      • Led a team of 5 engineers to deliver a customer-facing
                      dashboard with 2x faster load times
                    </li>
                    <li>
                      • Implemented CI/CD pipelines that decreased deployment
                      time by 60%
                    </li>
                    <li>
                      • Mentored junior developers and conducted code reviews to
                      maintain high code quality
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      React
                    </span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      TypeScript
                    </span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      Node.js
                    </span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      AWS
                    </span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      Docker
                    </span>
                  </div>
                </div>
              </div>

              {/* Experience 2 */}
              <div className="relative lg:pl-12">
                <div className="hidden lg:block absolute left-0 top-2 w-3 h-3 rounded-full bg-white -translate-x-[5px]"></div>

                <div className="border border-white/20 rounded-lg p-6 hover:border-white/40 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">
                        Full Stack Developer
                      </h3>
                      <p className="text-gray-400">Startup Inc.</p>
                    </div>
                    <div className="text-gray-400 mt-2 md:mt-0">
                      2020 - 2022
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4 text-gray-300">
                    <li>
                      • Built a mobile-first web application that improved user
                      engagement by 60%
                    </li>
                    <li>
                      • Optimized database queries resulting in 3x faster
                      response times
                    </li>
                    <li>
                      • Integrated third-party APIs and payment gateways for
                      seamless transactions
                    </li>
                    <li>
                      • Collaborated with designers to create pixel-perfect,
                      responsive interfaces
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      Vue.js
                    </span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      Python
                    </span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      Django
                    </span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      PostgreSQL
                    </span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      Redis
                    </span>
                  </div>
                </div>
              </div>

              {/* Experience 3 */}
              <div className="relative lg:pl-12">
                <div className="hidden lg:block absolute left-0 top-2 w-3 h-3 rounded-full bg-white -translate-x-[5px]"></div>

                <div className="border border-white/20 rounded-lg p-6 hover:border-white/40 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">Junior Developer</h3>
                      <p className="text-gray-400">Software Solutions Ltd.</p>
                    </div>
                    <div className="text-gray-400 mt-2 md:mt-0">
                      2018 - 2020
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4 text-gray-300">
                    <li>
                      • Developed and maintained client-facing web applications
                    </li>
                    <li>
                      • Implemented automated testing that reduced bugs in
                      production by 45%
                    </li>
                    <li>
                      • Participated in agile ceremonies and contributed to
                      sprint planning
                    </li>
                    <li>
                      • Refactored legacy code to improve maintainability and
                      performance
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      JavaScript
                    </span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      Angular
                    </span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      Java
                    </span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      Spring Boot
                    </span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      MySQL
                    </span>
                  </div>
                </div>
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

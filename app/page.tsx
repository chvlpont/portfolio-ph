"use client";

import React from "react";
import { Github, Mail, FileText } from "lucide-react";
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
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
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
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const projects = [
    {
      name: "TypeSprint",
      url: "https://typesprint-web.vercel.app/",
      image: "/typesprint-screenshot.png",
      description:
        "Multiplayer typing game with solo practice mode careted with Websockets.",
      gradient: {
        from: "green-500",
        to: "emerald-500",
      },
      hoverColor: "emerald-400",
      tags: [
        { label: "Next.js", color: "gray-500" },
        { label: "TypeScript", color: "blue-500" },
        { label: "Supabase", color: "green-500" },
        { label: "PostgreSQL", color: "blue-500" },
        { label: "WebSockets", color: "purple-500" },
      ],
    },
    {
      name: "Imageidentifier",
      url: "https://imageidentifier.ai",
      image: "/imageidentifier-screenshot.png",
      description:
        "AI-powered image identification with real-time processing and object recognition.",
      gradient: {
        from: "cyan-500",
        to: "purple-500",
      },
      hoverColor: "cyan-400",
      tags: [
        { label: "Next.js", color: "gray-500" },
        { label: "TypeScript", color: "blue-500" },
        { label: "Tailwind", color: "cyan-500" },
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
        { label: "Next.js", color: "gray-500" },
        { label: "TypeScript", color: "blue-500" },
        { label: "Supabase", color: "green-500" },
        { label: "Tailwind", color: "cyan-500" },
      ],
    },
    {
      name: "AquaFix",
      url: "https://aquafix.se",
      image: "/aquafix-screenshot.png",
      description:
        "Cleaning services specializing in roof, facade, and gutter cleaning.",
      gradient: {
        from: "blue-500",
        to: "green-500",
      },
      hoverColor: "blue-400",
      tags: [
        { label: "HTML", color: "orange-500" },
        { label: "CSS", color: "blue-500" },
        { label: "WordPress", color: "indigo-500" },
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
      accentColor: "cyan-400",
      responsibilities: [
        "Co-founded and built Webbyro alongside my brother and a friend",
        "Developed affordable websites for businesses using modern web technologies",
        "Currently focusing on developing an AI product",
        "Full-stack development with Next.js, TypeScript, and Supabase",
      ],
      tags: [
        { label: "Next.js", color: "gray-500" },
        { label: "TypeScript", color: "blue-500" },
        { label: "JavaScript", color: "yellow-500" },
        { label: "Tailwind", color: "cyan-500" },
        { label: "Supabase", color: "green-500" },
        { label: "PostgreSQL", color: "blue-500" },
        { label: "Firebase", color: "amber-500" },
        { label: "WordPress", color: "indigo-500" },
        { label: "SEO", color: "purple-500" },
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
      accentColor: "purple-400",
      responsibilities: [
        "Enhanced AI-powered community platform to improve user connections",
        "Implemented new features on both frontend and backend",
        "Improved existing functionality and user experience",
        "Full-stack development with TypeScript, Next.js, and PostgreSQL",
      ],
      tags: [
        { label: "TypeScript", color: "blue-500" },
        { label: "Next.js", color: "gray-500" },
        { label: "PostgreSQL", color: "blue-500" },
        { label: "Supabase", color: "green-500" },
        { label: "Prisma", color: "purple-500" },
        { label: "Tailwind CSS", color: "cyan-500" },
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
      accentColor: "green-400",
      responsibilities: [
        "Developed VR Fire Trainer, a VR fire safety simulation application",
        "Created realistic simulations and effects including smoke, fire, and burn marks",
        "Implemented different types of fire extinguishers in the VR environment",
        "Built 3D environments using Blender and developed gameplay mechanics with C# in Unity",
      ],
      tags: [
        { label: "Unity", color: "gray-500" },
        { label: "C#", color: "purple-500" },
        { label: "Blender", color: "orange-500" },
        { label: "Adobe Substance Painter", color: "red-500" },
        { label: "Jira", color: "blue-500" },
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
    { name: "Redux", icon: SiRedux, color: "#9333ea" },
    { name: "Express", icon: SiExpress, color: "#9ca3af" },
    { name: "Framer Motion", icon: SiFramer, color: "#ec4899" },
    { name: "Blender", icon: SiBlender, color: "#fb923c" },
    { name: "Unity", icon: SiUnity, color: "#d1d5db" },
    { name: "WordPress", icon: SiWordpress, color: "#2563eb" },
    { name: "Figma", icon: SiFigma, color: "#ef4444" },
    { name: "SCSS", icon: SiSass, color: "#db2777" },
    { name: "Firebase", icon: SiFirebase, color: "#ca8a04" },
    { name: "Clerk", icon: SiAuth0, color: "#6366f1" },
    { name: "Context", icon: SiReact, color: "#14b8a6" },
  ];

  return (
    <div className="min-h-screen bg-[#010409] text-white">
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
                  href="https://github.com/chvlpont"
                  className="hover:text-gray-300 transition-colors flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                  <span className="hidden md:inline">GitHub</span>
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
                      fontSize: "35px",
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
              </div>

              {/* Right side - Profile Image */}
              <div className="flex-1 flex justify-center md:justify-end">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-[#161b22] overflow-hidden">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQGMiTPLTp2Yog/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709338866147?e=1764806400&v=beta&t=NGiGgY3l82efPdeFOftUqvtNNTU2WEH5RS6ZlTGdppc"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* About Me Section */}
          <section className="mt-24 mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "#32CD30" }}>
              Some Things About Me
            </h2>

            <div className="max-w-3xl mx-auto space-y-6 text-gray-300">
              <p className="text-xl leading-relaxed font-medium">
                I am <span style={{ color: "#32CD30" }} className="font-semibold">Pontus Hogler</span>,
                currently working as a Co-Founder & Fullstack Developer at Webbyro,
                where I build <span style={{ color: "#32CD30" }} className="font-semibold">modern web solutions</span> and AI products.
              </p>

              <p className="text-xl leading-relaxed font-medium">
                I specialize in{" "}
                <span style={{ color: "#32CD30" }} className="font-semibold">TypeScript</span>,{" "}
                <span style={{ color: "#32CD30" }} className="font-semibold">Next.js</span>, and{" "}
                <span style={{ color: "#32CD30" }} className="font-semibold">Tailwind CSS</span>.
                My tech stack also includes{" "}
                <span style={{ color: "#32CD30" }} className="font-semibold">React</span>,{" "}
                <span style={{ color: "#32CD30" }} className="font-semibold">Node.js</span>,{" "}
                <span style={{ color: "#32CD30" }} className="font-semibold">Supabase</span>, and{" "}
                <span style={{ color: "#32CD30" }} className="font-semibold">PostgreSQL</span>.
              </p>

              <p className="text-xl leading-relaxed font-medium">
                I'm <span style={{ color: "#32CD30" }} className="font-semibold">passionate</span> about creating{" "}
                <span style={{ color: "#32CD30" }} className="font-semibold">seamless user experiences</span> and building
                scalable full-stack applications. I also have experience with XR development
                in Unity and C#, having worked on VR training simulations.
              </p>

              <p className="text-xl leading-relaxed font-medium">
                I <span style={{ color: "#32CD30" }} className="font-semibold">love</span> making side projects and continuously learning about new technologies
                to stay at the <span style={{ color: "#32CD30" }} className="font-semibold">forefront</span> of web development.
              </p>
            </div>
          </section>

          {/* GitHub Contributions Section */}
          <section className="mt-24">
            <div className="p-8 md:p-10">
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

                <div
                  className={`w-full flex justify-center ${
                    isMobile
                      ? "[&>article]:!max-w-full [&_svg]:!max-w-full [&_svg]:!w-full [&_svg]:!h-auto"
                      : ""
                  }`}
                >
                  {!isMobile ? (
                    <div className="scale-[0.96] origin-top transition-transform">
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
                  ) : (
                    <GitHubCalendar
                      username="chvlpont"
                      colorScheme="dark"
                      blockSize={15}
                      fontSize={14}
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
                  )}
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group relative overflow-hidden rounded-xl bg-[#0d1117] hover:bg-[#161b22] hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full"
                >
                  {/* Project Image - Large, no border */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-${project.gradient.from}/20 to-${project.gradient.to}/20`}
                    ></div>
                    <img
                      src={project.image}
                      alt={`${project.name} Screenshot`}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Gradient overlay on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-${project.gradient.from}/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    ></div>
                  </div>

                  {/* Project Info */}
                  <div className="p-5 flex flex-col">
                    <h3
                      className={`text-lg font-bold group-hover:text-${project.hoverColor} transition-colors mb-2`}
                    >
                      {project.name}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag.label}
                          className={`px-2 py-1 bg-${
                            tag.color
                          }/10 text-${tag.color.replace(
                            "-500",
                            "-400"
                          )} border border-${tag.color}/20 rounded text-xs`}
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
                  {/* Card content */}
                  <div className="relative rounded-xl p-5 bg-gradient-to-br from-white/5 via-transparent to-transparent border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl overflow-hidden">
                    {/* Subtle background gradient */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: `linear-gradient(135deg, ${skill.color}0D, transparent, ${skill.color}05)`,
                      }}
                    ></div>

                    {/* Glow effect - always visible, intensifies on hover */}
                    <div
                      className="absolute inset-0 rounded-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 blur-xl pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at center, ${skill.color}66, transparent)`,
                      }}
                    ></div>

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
            <p className="text-xl text-gray-300 mb-12 text-center">
              My journey in tech
            </p>

            <div className="space-y-8">
              {experiences.map((experience) => (
                <div key={experience.company} className="relative">
                  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-transparent hover:border-white/20 transition-all duration-500">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-${experience.gradient.from}/5 via-transparent to-${experience.gradient.to}/5 pointer-events-none`}
                    ></div>
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-${experience.gradient.from}/10 via-transparent to-${experience.gradient.to}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    ></div>

                    <div className="relative p-8 md:p-10">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                        <div>
                          <h3
                            className={`text-2xl md:text-3xl font-bold group-hover:text-${experience.accentColor} transition-colors`}
                          >
                            {experience.title}
                          </h3>
                          <p className="text-gray-400 text-lg mt-1">
                            {experience.company}
                          </p>
                        </div>
                        <div
                          className={`mt-2 md:mt-0 px-4 py-2 bg-${experience.accentColor.replace(
                            "-400",
                            "-500"
                          )}/10 text-${
                            experience.accentColor
                          } border border-${experience.accentColor.replace(
                            "-400",
                            "-500"
                          )}/20 rounded-lg text-sm font-medium`}
                        >
                          {experience.period}
                        </div>
                      </div>

                      <ul className="space-y-3 mb-6 text-gray-300">
                        {experience.responsibilities.map(
                          (responsibility, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span
                                className={`text-${experience.accentColor} mt-1`}
                              >
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
                            className={`px-3 py-1.5 bg-${
                              tag.color
                            }/10 text-${tag.color.replace(
                              "-500",
                              "-400"
                            )} border border-${
                              tag.color
                            }/20 rounded-lg text-xs font-medium`}
                          >
                            {tag.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
                      className="w-full px-4 py-3 bg-[#161b22] border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 text-white placeholder-gray-500"
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
                      className="w-full px-4 py-3 bg-[#161b22] border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 text-white placeholder-gray-500"
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
                      className="w-full px-4 py-3 bg-[#161b22] border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 text-white placeholder-gray-500 resize-none"
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

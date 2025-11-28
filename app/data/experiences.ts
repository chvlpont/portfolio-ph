import { Tag } from "./projects";

export interface Experience {
  title: string;
  company: string;
  period: string;
  gradient: {
    from: string;
    to: string;
  };
  url?: string;
  responsibilities: string[];
  tags: Tag[];
}

export const experiences: Experience[] = [
  {
    title: "Co-Founder & Frontend Developer",
    company: "Image Identifier",
    period: "May 2025 - Present",
    gradient: {
      from: "orange-500",
      to: "purple-500",
    },
    url: "https://imageidentifier.ai/",
    responsibilities: [
      "AI-powered image identification platform trusted by 278,000+ users",
      "AI analyzes visual features and compares with thousands of patterns in real-time",
      "Implemented privacy-first architecture with no data storage or sharing",
      "Delivers accurate identification instantly with confidence scores and related information",
      "Co-founded and built alongside my brother and a friend",
    ],
    tags: [
      { label: "Next.js", color: "#6b7280" },
      { label: "TypeScript", color: "#3b82f6" },
      { label: "Tailwind", color: "#06b6d4" },
      { label: "OpenAI", color: "#10a37f" },
      { label: "Redis", color: "#dc2626" },
    ],
  },
  {
    title: "Co-Founder & Fullstack Developer",
    company: "Webbyro",
    period: "Aug 2024 - Present",
    gradient: {
      from: "cyan-500",
      to: "blue-500",
    },
    responsibilities: [
      "Developed affordable websites for businesses using modern web technologies",
      "Full-stack development with Next.js, TypeScript, and Supabase",
      "Currently focusing on developing an AI product (Imageidentifier.ai)",
      "Co-founded and built Webbyro alongside my brother and a friend",
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

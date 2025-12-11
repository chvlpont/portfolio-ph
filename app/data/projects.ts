import {
  Calendar,
  ShoppingCart,
  MessageSquare,
  LucideIcon,
} from "lucide-react";

export interface Tag {
  label: string;
  color: string;
}

export interface Project {
  name: string;
  url: string;
  image: string;
  description: string;
  gradient: {
    from: string;
    to: string;
  };
  hoverColor?: string;
  tags: Tag[];
}

export interface SchoolProject {
  name: string;
  url: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  iconColorLight: string;
  tags: Tag[];
}

export const projects: Project[] = [
    {
    name: "Coverforge",
    url: "https://coverforgeai.vercel.app/",
    image: "/coverforge-screenshot.png",
    description: "AI-powered document editor with writing assistant and reference tracking.",
    gradient: {
      from: "emerald-500",
      to: "blue-500",
    },
    hoverColor: "emerald-400",
    tags: [
      { label: "React", color: "#06b6d4" },
      { label: "Next.js", color: "#6b7280" },
      { label: "TypeScript", color: "#3b82f6" },
      { label: "Supabase", color: "#22c55e" },
      { label: "PostgreSQL", color: "#3b82f6" },
      { label: "Zustand", color: "#ff9100" },
      { label: "Tailwind", color: "#06b6d4" },
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
      { label: "React", color: "#06b6d4" },
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
      { label: "React", color: "#06b6d4" },
      { label: "Next.js", color: "#6b7280" },
      { label: "TypeScript", color: "#3b82f6" },
      { label: "Tailwind", color: "#06b6d4" },
      { label: "Redis", color: "#ef4444" },
      { label: "OpenAI", color: "#10a37f" },
    ],
  },
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
      { label: "React", color: "#06b6d4" },
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
      { label: "React", color: "#06b6d4" },
      { label: "Next.js", color: "#6b7280" },
      { label: "TypeScript", color: "#3b82f6" },
      { label: "Supabase", color: "#22c55e" },
      { label: "PostgreSQL", color: "#3b82f6" },
      { label: "WebSockets", color: "#a855f7" },
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
      { label: "React", color: "#06b6d4" },
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

export const schoolProjects: SchoolProject[] = [
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
      { label: "React", color: "#06b6d4" },
      { label: "Next.js", color: "#6b7280" },
      { label: "TypeScript", color: "#3b82f6" },
      { label: "Tailwind", color: "#06b6d4" },
      { label: "LocalStorage", color: "#eab308" },
      { label: "Context", color: "#06b6d4" },
    ],
  },
];

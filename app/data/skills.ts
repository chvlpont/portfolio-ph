import { IconType } from "react-icons";
import { ZustandIcon } from "../components/ZustandIcon";
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
  SiPrisma,
  SiRedis,
  SiVite,
  SiAdobecreativecloud,
  SiCanva,
  SiUpstash,
  SiJest,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

export const skills: Skill[] = [
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
  { name: "Substance Painter", icon: SiAdobecreativecloud, color: "#ff6f00" },
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
  { name: "Prisma", icon: SiPrisma, color: "#5a67d8" },
  { name: "Redis", icon: SiUpstash, color: "#00e9a3" },
  { name: "Vite", icon: SiVite, color: "#646cff" },
  { name: "Jest", icon: SiJest, color: "#C21325" },
  { name: "Canva", icon: SiCanva, color: "#00c4cc" },
  { name: "Zustand", icon: ZustandIcon, color: "#ff9100" },
];

export const coreSkills: Skill[] = [
  { name: "React", icon: SiReact, color: "#06b6d4" },
  { name: "Next.js", icon: SiNextdotjs, color: "#6b7280" },
  { name: "TypeScript", icon: SiTypescript, color: "#60a5fa" },
  { name: "JavaScript", icon: SiJavascript, color: "#eab308" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#22d3ee" },
  { name: "Git", icon: SiGit, color: "#ea580c" },
];

import { type IconType } from "react-icons";

import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { SiElectron, SiMongodb } from "react-icons/si";
import { FaGitlab, FaJs, FaNodeJs, FaPhp, FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiShadcnui,
  SiExpress,
  SiPrisma,
  SiGsap,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { FaRust } from "react-icons/fa6";
import { DiMysql } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { SiC } from "react-icons/si";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiTauri } from "react-icons/si";
gsap.registerPlugin(ScrollTrigger);

type T_TechStack = {
  name: string;
  icon: IconType;
  link: string;
};

type T_StackCategory = {
  label: string;
  items: T_TechStack[];
};

const StackCategories: T_StackCategory[] = [
  {
    label: "Markup & Styling",
    items: [
      {
        name: "HTML",
        icon: IoLogoHtml5,
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS",
        icon: IoLogoCss3,
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "TailWindCSS",
        icon: RiTailwindCssFill,
        link: "https://tailwindcss.com",
      },
    ],
  },
  {
    label: "Language",
    items: [
      {
        name: "JavaScript",
        icon: FaJs,
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        link: "https://www.typescriptlang.org",
      },
      { name: "Rust", icon: FaRust, link: "https://www.rust-lang.org" },
      { name: "PHP", icon: FaPhp, link: "https://www.php.net" },
      {
        name: "C",
        icon: SiC,
        link: "https://en.wikipedia.org/wiki/C_(programming_language)",
      },
      { name: "C++", icon: TbBrandCpp, link: "https://isocpp.org" },
      { name: "Java", icon: FaJava, link: "https://www.java.com" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", icon: FaReact, link: "https://react.dev" },
      { name: "Shadcn UI", icon: SiShadcnui, link: "https://ui.shadcn.com" },
      { name: "GSAP", icon: SiGsap, link: "https://gsap.com" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs, link: "https://nodejs.org" },
      { name: "Express.js", icon: SiExpress, link: "https://expressjs.com" },
    ],
  },
  {
    label: "DataBase & ORM",
    items: [
      { name: "MySQL", icon: DiMysql, link: "https://www.mysql.com" },
      {
        name: "PostgreSQL",
        icon: BiLogoPostgresql,
        link: "https://www.postgresql.org",
      },
      { name: "MongoDB", icon: SiMongodb, link: "https://www.mongodb.com" },
      { name: "Prisma", icon: SiPrisma, link: "https://www.prisma.io" },
    ],
  },
  {
    label: "Version Control",
    items: [
      { name: "Git", icon: FaGitAlt, link: "https://git-scm.com" },
      { name: "Github", icon: FaGithub, link: "https://github.com" },
      { name: "GitLab", icon: FaGitlab, link: "https://about.gitlab.com" },
    ],
  },
  {
    label: "Additional",
    items: [
      { name: "Tauri", icon: SiTauri, link: "https://tauri.app" },
      {
        name: "Electron",
        icon: SiElectron,
        link: "https://www.electronjs.org",
      },
    ],
  },
];

const Stack = () => {
  useGSAP(() => {
    gsap.from(".stack-row", {
      y: 12,
      opacity: 0,
      duration: 0.5,
      stagger: 0.06,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".stack-section",
        start: "top 85%",
        toggleActions: "restart none restart none",
      },
    });
  }, []);

  return (
    <div className="stack-section flex justify-center items-center border-b border-b-gray-500/50">
      <div className="hidden md:flex h-full w-full flex-1"></div>

      <div className="w-[90%] md:w-[80%] lg:w-[40%] xl:w-[40%] bg-black border-x border-gray-500/50 min-w-0">
        <div>
          {StackCategories.map((category, index) => (
            <div
              key={category.label}
              className={`stack-row grid grid-cols-1 md:grid-cols-[minmax(0,160px)_1fr] gap-2 p-3 md:gap-4 border-gray-500/50
               ${index === StackCategories.length - 1 ? "" : "border-b"}`}
            >
              <div className="flex items-baseline gap-2 text-sm text-white">
                <span className="tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{category.label}</span>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-2 min-w-0">
                {category.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a href={item.link} target="_blank" key={item.name}>
                      <span className="inline-flex items-center gap-1.5 text-xs md:text-sm text-gray-300 transition-colors hover:text-white cursor-pointer">
                        <Icon className="text-gray-500" size={20} />
                        {item.name}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:flex h-full w-full flex-1"></div>
    </div>
  );
};

export default Stack;

import {
  WorkExperience,
  type ExperienceItemType,
} from "@/components/work-experience";
import { DraftingCompass } from "lucide-react";
const experiences: ExperienceItemType[] = [
  {
    id: "acme-corp",
    companyName: "Sajilo Softwares",
    companyWebsite: "https://sajilosoftware.com/",

    companyLogo: "sajilo-softwares.png",
    isCurrentEmployer: false,
    positions: [
      {
        id: "fei",
        title: "Front-End Intern",
        employmentType: "Full-time",
        icon: <DraftingCompass />,
        employmentPeriod: {
          start: "11.2025",
          end: "4.2026",
        },
        description: `- Built and maintained frontend interfaces for **Sajilo Restaurant Management System** and **Sajilo Hotel Management System**
- Developed reusable UI components with **React**, **TypeScript**, and **Tailwind CSS**
- Implemented data-fetching and caching logic using **TanStack Query** to keep order and booking views in sync with the backend
- Used **shadcn/ui** to build accessible, consistent forms and dashboards across both products`,
        skills: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "TanStackQuery",
          "ShadCn",
        ],
        isExpanded: false,
      },
    ],
  },
  {
    id: "zippos",
    companyName: "Zippos Softwares",
    companyWebsite: "https://globex.example.com",
    companyLogo: "Zippos.png",
    isCurrentEmployer: true,
    positions: [
      {
        id: "globex-swe",
        title: "Full-Stack Engineer",
        employmentType: "Full-time ",
        employmentPeriod: {
          start: "4.2026",
        },
        description: `- Building **POS**, a point-of-sale system for retail businesses shipped in two independent variants
- An **offline desktop app** packaged with **Electron** for native installers across Windows, macOS, and Linux
- A separate **online web app** built on a **PERN** stack (**PostgreSQL**, **Express**, **React**, **Node.js**) with **Prisma** ORM
- Designed the **FIFO batch stock schema** and **transaction-safe billing service** shared conceptually across both variants
- Built **analytics dashboards** using **TanStack Query** and **shadcn/ui**`,
        skills: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "TanStackQuery",
          "ShadCn",
          "Node.js",
          "Express",
          "PostgreSQL",
          "Prisma",
          "Electron",
          "Tauri",
        ],
        isExpanded: false,
      },
    ],
  },
];

export default function Experience() {
  return (
    <div className="w-full  flex justify-center items-center  border-b border-gray-500/50">
      <div className="hidden md:flex h-full w-full flex-1"></div>
      <WorkExperience
        experiences={experiences}
        className="w-[90%] md:w-[80%] lg:w-[40%] border-l border-r border-gray-500/50"
      />
      <div className="hidden md:flex h-full w-full flex-1"></div>
    </div>
  );
}

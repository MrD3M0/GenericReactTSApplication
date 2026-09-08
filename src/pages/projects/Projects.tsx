import {
  LayoutDashboard,
  ShoppingCart,
  Syringe,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import { ProjectElement } from "./projectElement";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDevice } from "@/lib/responsive";

type T_Project = {
  name: string;
  Icon: LucideIcon;
  link?: string;
};

const ProjectsData: T_Project[] = [
  {
    name: "Personal Portfolio",
    Icon: LayoutDashboard,
    link: "https://www.youtube.com/",
  },
  {
    name: "Zap Point-Of-Sale",
    Icon: ShoppingCart,
    link: "https://www.facebook.com/",
  },
  {
    name: "Restaurent MS",
    Icon: UtensilsCrossed,
    link: "https://www.facebook.com/",
  },
  { name: "Pharmacy MS", Icon: Syringe, link: "https://www.facebook.com/" },
];

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useDevice();

  useGSAP(
    () => {
      gsap.from(".project-item", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div className="w-full flex justify-center items-center bg-black border-b border-gray-500/50">
      <div className="hidden md:flex h-full w-full flex-1"></div>
      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 min-w-0 w-[90%] md:w-[80%] lg:w-[40%] border-l border-r border-gray-500/50"
      >
        {ProjectsData.map((project, i) => (
          <ProjectElement
            key={project.name}
            title={project.name}
            icon={project.Icon}
            link={project.link}
            borderLeft={!isMobile && i % 2 !== 0}
            borderBottom={i < 2}
          />
        ))}
      </div>
      <div className="hidden md:flex h-full w-full flex-1"></div>
    </div>
  );
};

export default Projects;

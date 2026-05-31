import { type IconType } from "react-icons";

import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { FaJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiShadcnui } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPrisma } from "react-icons/si";
import { useDevice } from "@/lib/responsive";
import { SiGsap } from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Stack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".stagger-box",
      {
        x: 120,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.15,
        ease: "power3.out",
        repeat: -1,
        
      },
    );
  }, []);

  const { isMobile } = useDevice();
  type T_TechStack = {
    name: string;
    icon: IconType;
  };

  const TechStack: T_TechStack[] = [
    {
      name: "HTML5",
      icon: IoLogoHtml5,
    },
    {
      name: "CSS3",
      icon: IoLogoCss3,
    },
    {
      name: "JavaScript",
      icon: FaJs,
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
    },
    {
      name: "React",
      icon: FaReact,
    },
    {
      name: "Shadcn UI",
      icon: SiShadcnui,
    },
    {
      name: "Node.js",
      icon: FaNodeJs,
    },
    {
      name: "Express.js",
      icon: SiExpress,
    },
    {
      name: "MySQL",
      icon: DiMysql,
    },
    {
      name: "PostgreSQL",
      icon: BiLogoPostgresql,
    },
    {
      name: "Prisma",
      icon: SiPrisma,
    },
    {
      name: "GSAP",
      icon: SiGsap,
    },
  ];

  return (
    <div className=" h-16 flex justify-center items-center border-b border-b-gray-500/50 ">
      <div className=" hidden md:flex h-full w-full flex-1"></div>
      <div
        className={` h-full w-[90%] md:w-[80%] lg:w-[40%]  flex flex-wrap lg:gap-3 gap-2 bg-black border-x border-gray-500/50  ${isMobile && `gap-8`} pt-2 pl-2 `}
      >
        {TechStack.map((item, index) => {
          const Icon = item.icon;
          return (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger>
                  <Icon
                    className="text-gray-500 stagger-box cursor-pointer"
                    size={isMobile ? 25 : 35}
                    onMouseEnter={(e) => {
                      gsap.to(e.currentTarget, {
                        y: -10,
                        scale: 1.2,
                        rotation: 10,
                        duration: 0.3,
                      });
                    }}
                    onMouseLeave={(e) => {
                      gsap.to(e.currentTarget, {
                        y: 0,
                        scale: 1,
                        rotation: 0,
                        duration: 0.3,
                      });
                    }}
                  />
                </TooltipTrigger>
                <TooltipContent variant={"dark"} side="top">
                  {item.name}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
      <div className=" hidden md:flex h-full w-full flex-1"></div>
    </div>
  );
};

export default Stack;

import { FluidGradientText } from "@/components/fluid-gradient-text";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SiGithub,
  SiLinkerd,
  SiDiscord,
  SiYoutube,
  SiInstagram,
  SiX,
} from "react-icons/si";
import type { IconType } from "react-icons";

gsap.registerPlugin(ScrollTrigger);

type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
};

const SOCIAL_LINKS: SocialLink[] = [
  { label: "X (Twitter)", href: "https://x.com/", icon: SiX },
  { label: "GitHub", href: "https://github.com/", icon: SiGithub },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: SiLinkerd },
  { label: "Discord", href: "https://discord.com/", icon: SiDiscord },
  { label: "YouTube", href: "https://youtube.com/", icon: SiYoutube },
  { label: "Instagram", href: "https://instagram.com/", icon: SiInstagram },
];

export default function Connect() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".connect-item", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div className="w-full bg-black">
      <div className="w-full flex justify-center items-center border-b border-gray-500/50">
        <div className="hidden md:flex h-full w-full flex-1"></div>
        <div
          ref={containerRef}
          className="flex min-w-0 flex-wrap items-center justify-center gap-4 w-[90%] md:w-[80%] lg:w-[40%] border-l border-r border-gray-500/50 p-6"
        >
          {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
            <Tooltip key={label}>
              <TooltipTrigger asChild>
                <Button
                  asChild
                  variant="outline"
                  size="icon-lg"
                  className="connect-item bg-[#0f1117] border-white/10 hover:bg-white/[0.06] hover:scale-110 transition-transform duration-200"
                >
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <Icon className="size-5 text-gray-300" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent variant="dark">{label}</TooltipContent>
            </Tooltip>
          ))}
        </div>
        <div className="hidden md:flex h-full w-full flex-1"></div>
      </div>

      <div className="relative w-full text-foreground">
        <div className="pointer-events-none absolute inset-x-0 top-0 text-center text-xs text-muted-foreground select-none">
          <span className="hidden pointer-fine:inline-block">
            Move your cursor within the text below
          </span>
          <span className="hidden pointer-coarse:inline-block">
            Press anywhere within the text below
          </span>
        </div>

        <FluidGradientText text="SUMIT" />
      </div>
    </div>
  );
}
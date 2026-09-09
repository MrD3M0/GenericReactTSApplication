import { SquareArrowOutUpRight, type LucideIcon } from "lucide-react";
import gsap from "gsap";
import { useRef } from "react";

type ProjectElementProps = {
  title: string;
  icon: LucideIcon;
  link?: string;
  borderLeft?: boolean;
  borderBottom?: boolean;
  borderTop?: boolean;
};

export const ProjectElement = ({
  title,
  icon: Icon,
  link,
  borderLeft = true,
  borderBottom = true,
  borderTop = true,
}: ProjectElementProps) => {
  const iconRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    gsap.to(iconRef.current, {
      rotate: 15,
      scale: 1.15,
      duration: 0.3,
      ease: "back.out(2)",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(iconRef.current, {
      rotate: 0,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const content = (
    <div
      className={`flex w-full min-w-0 items-center justify-between gap-4 ${borderTop ? "border-t" : ""} md:${borderBottom ? "border-b" : ""} border-gray-500/50 p-4 transition-colors duration-200 hover:bg-white/[0.03]`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex min-w-0 items-center gap-4">
        <div ref={iconRef} className="shrink-0">
          <Icon className="h-6 w-6 text-gray-400" />
        </div>
        <span className="truncate text-xs md:text-sm font-medium text-gray-200">
          {title}
        </span>
      </div>

      {link && (
        <SquareArrowOutUpRight className="h-4 w-4 shrink-0 text-gray-500 transition-colors duration-200 group-hover:text-gray-200" />
      )}
    </div>
  );

  return (
    <div
      className={`project-item w-full min-w-0 ${borderLeft ? "border-l" : ""} border-gray-500/50 group`}
    >
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full min-w-0"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
};
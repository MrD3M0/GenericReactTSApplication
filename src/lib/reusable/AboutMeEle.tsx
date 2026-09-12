import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type T_AboutMeProps = {
  label?: string;
  icon?: LucideIcon;
  isCompany?: boolean;
  companyName?: string;
  companyLink?: string;
  disableAnchor?: boolean;
  className?: string;
};

const AboutMeEle = ({
  label,
  icon: Icon,
  isCompany,
  companyName,
  companyLink,
  className,
  disableAnchor = false,
}: T_AboutMeProps) => {
  
  return (
    <div
      className={`w-full h-8 min-w-0 mt-0.5! ml-0.5! gap-2 flex items-center justify-start ${className}`}
    >
      {Icon && (
        <span
          className={cn(
            "flex size-6 shrink-0 items-center justify-center rounded-lg",
            "bg-muted text-muted-foreground",
            "border border-muted-foreground/15 ring-1 ring-line ring-offset-1 ring-offset-background",
          )}
        >
          <Icon size={18} className="text-gray-400" />
        </span>
      )}
      {label && (
        <span className="text-[11px] sm:text-xs md:text-sm lg:text-[15px] font-medium flex text-white cursor-default truncate min-w-0">
          {label}
        </span>
      )}

      {isCompany && (
        <a
          target="_blank"
          href={companyLink ? companyLink : "#"}
          className={`text-white text-[11px] sm:text-xs md:text-sm lg:text-[15px] font-bold truncate min-w-0 ${!disableAnchor && "hover:underline hover:underline-offset-4 cursor-pointer"} cursor-default text-left`}
          onClick={(e) => disableAnchor && e.preventDefault()}
        >
          {companyName}
        </a>
      )}
    </div>
  );
};

export default AboutMeEle;
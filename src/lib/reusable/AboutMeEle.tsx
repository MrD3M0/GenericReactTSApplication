import { type LucideIcon } from "lucide-react";
import { useDevice } from "../responsive";

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
  const { isMobile } = useDevice();
  return (
    <div
      className={`w-full h-8 mt-0.5! ml-0.5! gap-2 flex items-center justify-start ${className}`}
    >
      {Icon && (
        <span
          className="p-0.5! bg-[#0f1117] rounded-md
                    border border-white/10
                    shadow-inner shadow-black/40
                    flex items-center justify-center "
        >
          <Icon size={isMobile ? 15 : 24} className="text-gray-400" />
        </span>
      )}
      {label && (
        <span className=" text-[10px] md:text-sm font-medium flex text-white cursor-default">
          {label}
        </span>
      )}

      {isCompany && (
        <a
          target="_blank"
          href={companyLink ? companyLink : "#"}
          className={`text-white text-[10px]  md:text-sm font-bold ${!disableAnchor && "hover:underline hover:underline-offset-4 cursor-pointer"} cursor-default  text-left`}
          onClick={(e) => disableAnchor && e.preventDefault()}
        >
          {companyName}
        </a>
      )}
    </div>
  );
};

export default AboutMeEle;

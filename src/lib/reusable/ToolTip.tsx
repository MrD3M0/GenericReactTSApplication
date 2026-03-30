import { type ReactNode, useState } from "react";

type TooltipProps = {
  content: string;
  children: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
};

export const Tooltip = ({
  content,
  children,
  position = "top",
}: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  const arrowClasses = {
    top: "-bottom-1 left-1/2 -translate-x-1",
    bottom: "-top-1 left-1/2 -translate-x-1/2",
    left: "left-full top-1/2 -translate-y-1/2",
    right: "right-full top-1/2 -translate-y-1/2",
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}

      <div
        className={`
          absolute z-50 px-2 py-1 text-sm text-gray-700 bg-white border rounded shadow
          whitespace-nowrap transition-all duration-200
          ${positionClasses[position]}
          ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
        `}
      >
        {content}

        <div
          className={`
            absolute w-2 h-2 bg-white border-white rotate-45
            ${arrowClasses[position]}
          `}
        />
      </div>
    </div>
  );
};

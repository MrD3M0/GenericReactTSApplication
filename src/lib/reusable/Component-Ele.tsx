import type { LucideIcon } from "lucide-react";

type ComponentEleProps = {
  title: string;
  icon: LucideIcon;
  description: string;
};

const ComponentEle = (args: ComponentEleProps) => {
  return (
    <div className="w-[40%] flex justify-around items-center ">
      <args.icon />
      <div>
        <div className="text-3xl">{args.title}</div>
        <p>{args.description}</p>
      </div>
    </div>
  );
};

export default ComponentEle;

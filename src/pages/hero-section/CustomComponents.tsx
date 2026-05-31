import ComponentEle from "@/lib/reusable/Component-Ele";
import { Table2, ToggleRight, type LucideIcon } from "lucide-react";

type T_Component = {
  name: string;
  Icon: LucideIcon;
  description: string;
};

const CustomComponents = () => {
  const ComponentsData: T_Component[] = [
    {
      name: "Generic Table",
      Icon: Table2,
      description:
        "A generic table component in react-ts based on Shadcn UI, Tanstack Query and with feature such as pagination and searching.",
    },
    {
      name: "Input with Switch",
      Icon: ToggleRight,
      description:
        "An input field with a switch toggle for enabling/disabling the input.",
    },
  ];
  return (
    <div>
      {ComponentsData.map((component) => (
        <ComponentEle
          title={component.name}
          icon={component.Icon}
          description={component.description}
        />
      ))}
    </div>
  );
};

export default CustomComponents;

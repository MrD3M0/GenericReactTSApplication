import { useDevice } from "@/lib/responsive";
import { Home, PhoneCall, Rocket, Terminal } from "lucide-react";

const NavigationBar = () => {
  const { isMobile } = useDevice();
  return (
    <div className="w-full h-[8%] bg-black text-zinc-50 text-md text-center flex justify-center items-center border-y border-gray-500/50 mt-2! ">
      <div className="w-full h-full flex-1"></div>
      <ul
        className={` h-full w-[90%] md:w-[80%] lg:w-[40%] flex items-center justify-center lg:gap-6 gap-5 bg-black border-x border-gray-500/50 ${isMobile && `gap-8`} `}
      >
        <li className="flex gap-0.5 cursor-pointer hover:scale-110 transition duration-300 ease-in-out">
          <Home />
          {!isMobile && <span className="text-[15px]">Home</span>}
        </li>
        <li className="flex gap-0.5 cursor-pointer hover:scale-110 transition duration-300 ease-in-out">
          <Terminal />
          {!isMobile && <span className="text-[15px]">Skills</span>}
        </li>
        <li className="flex gap-0.5 cursor-pointer hover:scale-110 transition duration-300 ease-in-out">
          {" "}
          <Rocket />
          {!isMobile && <span className="text-[15px]">Projects</span>}
        </li>
        <li className="flex gap-0.5 cursor-pointer hover:scale-110 transition duration-300 ease-in-out">
          <PhoneCall />
          {!isMobile && <span className="text-[15px]">Contact</span>}
        </li>
      </ul>
      <div className="w-full h-full flex-1"></div>
    </div>
  );
};

export default NavigationBar;

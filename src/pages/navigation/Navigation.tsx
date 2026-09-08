import { useRef } from "react";
import { useDevice } from "@/lib/responsive";
import { Compass, Home, PhoneCall, Rocket, Terminal } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: Home },
  { id: "journey", label: "Journey", icon: Compass },
  { id: "work", label: "Work", icon: Rocket },
  { id: "connect", label: "Connect", icon: PhoneCall },
];

const NavigationBar = () => {
  const { isMobile } = useDevice();
  const navRef = useRef<HTMLDivElement>(null);
  const stickyPoint = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const nav = navRef.current;
      if (!nav) return;

      ScrollTrigger.create({
        trigger: stickyPoint.current,
        start: "top top",
        onEnter: () => {
          gsap.fromTo(
            nav,
            { y: -12, opacity: 0.6 },
            { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
          );
          nav.classList.add(
            "backdrop-blur-md",
            "bg-black/80",
            "shadow-md",
            "shadow-black/40",
          );
        },
        onLeaveBack: () => {
          gsap.to(nav, { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" });
          nav.classList.remove(
            "backdrop-blur-md",
            "bg-black/80",
            "shadow-md",
            "shadow-black/40",
          );
        },
      });
    },
    { scope: navRef },
  );

  return (
    <>
      <div ref={stickyPoint} className="h-0 w-full" />

      <div
        ref={navRef}
        className="w-full h-12 sticky top-0 z-50 bg-black text-zinc-50 text-md text-center flex justify-center items-center border-y border-gray-500/50 mt-2! "
      >
        <div className="w-full h-full flex-1"></div>
        <ul
          className={` h-full w-[90%] md:w-[80%] lg:w-[40%] flex items-center justify-center lg:gap-6 gap-5 bg-black border-x border-gray-500/50 ${isMobile && `gap-8`} `}
        >
          {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
            <li key={id} className="flex">
              <a
                href={`#${id}`}
                className="flex gap-0.5 items-center cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
              >
                <Icon />
                {!isMobile && <span className="text-[15px]">{label}</span>}
              </a>
            </li>
          ))}
        </ul>
        <div className="w-full h-full flex-1"></div>
      </div>
    </>
  );
};

export default NavigationBar;

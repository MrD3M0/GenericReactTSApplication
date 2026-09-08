import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DotGridSpotlight } from "@/components/dot-grid-spotlight";

const BannerSection = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(imgRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    },
    { scope: wrapperRef },
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = wrapperRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(imgRef.current, {
      x: x * 0.04,
      y: y * 0.04,
      rotateX: -(y * 0.02),
      rotateY: x * 0.02,
      scale: 1.03,
      duration: 0.5,
      ease: "power3.out",
      transformPerspective: 600,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(imgRef.current, {
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)",
    });
  };

  return (
    <div className="w-full flex justify-center items-center bg-black border-b border-gray-500/50">
      <div className="hidden md:flex h-full w-full flex-1"></div>

      <div
        ref={wrapperRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-[90%] md:w-[80%] lg:w-[40%] h-40 md:h-70 border-l border-r border-gray-500/50 flex items-center justify-center overflow-hidden"
      >
        <DotGridSpotlight className="z-0" />

        <img
          ref={imgRef}
          className="relative z-10 w-[50%] md:w-[40%] pointer-events-none will-change-transform"
          src="SK-nobg.png"
          alt="Sumit Karki"
          draggable={false}
        />
      </div>

      <div className="hidden md:flex flex-1 h-full w-full"></div>
    </div>
  );
};

export default BannerSection;

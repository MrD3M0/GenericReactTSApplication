import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import AutoScrollText from "@/lib/reusable/AutoScrollText";
import { useRef, useState } from "react";
import ElectricBorder from "@/components/ElectricBorder";

const HeroSection = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const zapAudioRef = useRef<HTMLAudioElement | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  const startZap = () => {
    setIsHovering(true);
    if (zapAudioRef.current) {
      zapAudioRef.current.currentTime = 0;
      zapAudioRef.current
        .play()
        .catch((err) => console.error("Zap sound blocked:", err));
    }
  };

  const stopZap = () => {
    setIsHovering(false);
    if (zapAudioRef.current) {
      zapAudioRef.current.pause();
      zapAudioRef.current.currentTime = 0;
    }
  };

  // Fixed square size for the actual avatar image / ElectricBorder.
  // This keeps the picture itself always the same look at each breakpoint.
  const avatarSize =
    "w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40";

  // Width-only class for the bordered box around the avatar.
  // No fixed height here on purpose — combined with `self-stretch` below,
  // this box automatically grows to match the height of the info column
  // next to it, so the horizontal border lines always connect properly.
  const avatarBoxWidth = "w-20 sm:w-28 md:w-32 lg:w-40";

  return (
    <div className="w-full flex flex-row justify-center items-center bg-black">
      <div className="hidden md:flex h-full w-full flex-1"></div>
      <div className="w-[90%] md:w-[80%] lg:w-[40%] flex border-r border-gray-500/50">
        <div
          className={`${avatarBoxWidth} shrink-0 self-stretch border-l border-r border-gray-500/50 flex items-center justify-center`}
          onMouseEnter={startZap}
          onMouseLeave={stopZap}
        >
          {isHovering ? (
            <ElectricBorder
              color="#FDD835"
              speed={1}
              chaos={0.15}
              borderRadius={9999}
              className={avatarSize}
            >
              <img
                className={`${avatarSize} rounded-full border border-gray-500/50`}
                src="profile.png"
                alt="Sumit Karki - Full Stack Developer"
              />
            </ElectricBorder>
          ) : (
            <img
              className={`${avatarSize} rounded-full border border-gray-500/50`}
              src="profile.png"
              alt="Sumit Karki - Full Stack Developer"
            />
          )}
          <audio ref={zapAudioRef} src="/zapSound.mp3" loop />
        </div>
        <div className="w-full min-w-0">
          <div className="w-full h-8 md:h-10 border-gray-500/50 border-b text-gray-500 flex items-center">
            <TooltipProvider>
              <Tooltip>
                {/* Responsive text size for MrD3M0 */}
                <TooltipTrigger className="text-xs sm:text-sm md:text-base px-1 truncate">
                  MrD3M0
                </TooltipTrigger>
                <TooltipContent side="right" align="start" variant={"dark"}>
                  IN-GAME-NAME
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div className="min-w-0 px-1 text-lg sm:text-xl md:text-2xl lg:text-4xl border-gray-500/50 border-b font-light text-zinc-200 flex justify-center sm:gap-5 lg:gap-0 items-center gap-1">
            <h1 className="m-0 min-w-0 truncate">Sumit Karki</h1>
            <div className="flex shrink-0">
              <img
                src="./verified.svg"
                className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 shrink-0"
                alt=""
              />
              <img
                className="ml-1 w-4 h-4 sm:w-6 sm:h-6 shrink-0 cursor-pointer rounded-2xl"
                src="./Pronounciation.svg"
                alt="Play pronunciation"
                onClick={playAudio}
              />
              <audio ref={audioRef} src="pronounce.mp3" />
            </div>
          </div>
          {/* Wrapper for AutoScrollText with responsive text size */}
          <div className="text-xs sm:text-sm md:text-base">
            <AutoScrollText />
          </div>
        </div>
      </div>
      <div className="hidden md:flex h-full w-full flex-1"></div>
    </div>
  );
};

export default HeroSection;

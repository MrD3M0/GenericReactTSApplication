import AutoScrollText from "@/lib/reusable/AutoScrollText";
import { Tooltip } from "@/lib/reusable/ToolTip";
import { useRef } from "react";

const HeroSection = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAudio = () => {
    if (audioRef.current) {
      console.log("Audio Played");
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };
  return (
    <div className="w-full flex flex-row justify-center items-center bg-black">
      <div className=" hidden md:flex h-full w-full flex-1"></div>
      <div className="w-[90%] md:w-[80%] lg:w-[40%] flex border-r border-gray-500/50">
        <div className="min-w-40 h-40 border-l border-r  border-gray-500/50">
          <img
            className="w-40 h-40 rounded-full border border-gray-500/50 "
            src="profile.png"
            alt=""
          />
        </div>
        <div className="w-full">
          <div className="w-full h-10 border-gray-500/50 border-b text-gray-500">
            <Tooltip content={"In Game Name"}>MrD3MO</Tooltip>
          </div>

          <div className="text-4xl border-gray-500/50 border-b font-medium  text-zinc-200 flex justify-center items-center gap-1">
            <span>Sumit Karki</span> <img src="./verified.svg" />
            <div>
              <img
                className="ml-1 w-6 cursor-pointer rounded-2xl "
                src="./Pronounciation.svg"
                alt="Play pronunciation"
                onClick={playAudio}
              />
              <audio ref={audioRef} src="../../../public/pronounce.mp3" />
            </div>
          </div>
          <div>
            <AutoScrollText />
          </div>
        </div>
      </div>
      <div className=" hidden md:flex h-full w-full flex-1"></div>
    </div>
  );
};

export default HeroSection;

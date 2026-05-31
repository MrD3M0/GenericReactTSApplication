type T_TitleSize = "sm" | "md" | "lg" | "vlg";
const Title = ({
  TitleLabel,
  TitleSize,
}: {
  TitleLabel: string;
  TitleSize: T_TitleSize;
}) => {
  return (
    <div className="w-full h-8 flex justify-center items-center bg-black  border-b border-b-gray-500/50 ">
      <div className=" hidden md:flex h-full w-full flex-1"></div>
      <div
        className={`w-[90%] md:w-[80%] lg:w-[40%] h-full border-l border-r border-gray-500/50 text-white text-${TitleSize == "sm" ? "2xl" : TitleSize == "md" ? "3xl" : TitleSize == "lg" ? "4xl" : "5xl"} pl-2 pt-1`}
      >
        <span>{TitleLabel}</span>
      </div>
      <div className="hidden md:flex flex-1 h-full w-full"></div>
    </div>
  );
};

export default Title;

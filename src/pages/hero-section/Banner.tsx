const BannerSection = () => {
  return (
    <div className="w-full flex justify-center items-center bg-black  border-b border-gray-500/50 ">
      <div className=" hidden md:flex h-full w-full flex-1"></div>
      <img
        className="w-[90%] md:w-[80%] lg:w-[40%] border-l border-r border-gray-500/50"
        src="banner.png"
        alt="Banner Image"
      />
      <div className="hidden md:flex flex-1 h-full w-full"></div>
    </div>
  );
};

export default BannerSection;

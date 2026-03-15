export default function Separator() {
  return (
    <div className="relative w-full h-9 border-gray-500!">
      {/* Background stripes (behind) */}
      <div
        className="absolute inset-0 bg-black border border-y-gray-500  z-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            135deg,
            rgba(107,114,128,0.9) 0px,
            rgba(107,114,128,0.9) 1.4px,
            transparent 1px,
            transparent 10px
          )`,
        }}
      />

      <div className="relative z-10 h-full w-full flex items-center justify-center border-gray-500!">
        <div className="w-[90%] md:w-[80%] lg:w-[40%] h-full border-l border-r border-gray-500" />
      </div>
    </div>
  );
}

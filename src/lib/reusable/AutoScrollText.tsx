import { useEffect, useState } from "react";

export default function AutoScrollText() {
  const sentences = [
    "$_Build Web Applications;",
    "$_Full-stack Developer;",
    "$_Great listener;",
    "$_Good learner;",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % sentences.length);
    }, 2500); // change every 2.5 seconds

    return () => clearInterval(interval);
  });

  return (
    <div className="relative h-6 sm:h-8 md:h-12 overflow-hidden w-full max-w-md mx-auto ">
      <div
        className="transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateY(-${index * 3}rem)`,
        }}
      >
        {sentences.map((text, i) => (
          <div
            key={i}
            className="h-12 flex items-center justify-center text-sm sm:text-md md:text-lg font-semibold text-gray-500"
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}

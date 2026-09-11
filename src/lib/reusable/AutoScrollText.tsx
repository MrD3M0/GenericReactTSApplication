import { useEffect, useLayoutEffect, useRef, useState } from "react";

const sentences = [
  "$_Build Web Applications;",
  "$_Full-stack Developer;",
  "$_Great listener;",
  "$_Good learner;",
];

export default function AutoScrollText() {
  // Clone the first sentence at the end so the loop can wrap seamlessly
  // instead of sliding backwards through the whole list.
  const items = [...sentences, sentences[0]];

  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [itemHeight, setItemHeight] = useState(0);

  const itemRef = useRef<HTMLDivElement>(null);

  // Measure the actual rendered height of one sentence so the scroll
  // distance always matches the real row height on every screen size,
  // instead of assuming a fixed rem value.
  useLayoutEffect(() => {
    const measure = () => {
      if (itemRef.current) setItemHeight(itemRef.current.offsetHeight);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Advance to the next sentence every 2.5s.
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // When we land on the cloned sentence (end of list), let the
  // transition finish, then snap back to the real first sentence with
  // no animation, so the loop feels continuous instead of reversing.
  useEffect(() => {
    if (index === sentences.length) {
      const timeout = setTimeout(() => {
        setAnimate(false);
        setIndex(0);
      }, 700); // must match the transition duration below
      return () => clearTimeout(timeout);
    }

    if (!animate) {
      const raf = requestAnimationFrame(() => setAnimate(true));
      return () => cancelAnimationFrame(raf);
    }
  }, [index, animate]);

  return (
    <div
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{ height: itemHeight || undefined }}
    >
      <div
        className={`w-full ${
          animate ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{ transform: `translateY(-${index * itemHeight}px)` }}
      >
        {items.map((text, i) => (
          <div
            key={i}
            ref={i === 0 ? itemRef : undefined}
            className="h-8 sm:h-10 md:h-12 flex items-center justify-center text-center text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-500 px-2 whitespace-nowrap overflow-hidden text-ellipsis"
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}

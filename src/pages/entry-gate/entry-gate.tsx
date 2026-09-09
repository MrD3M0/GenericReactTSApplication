import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// ---------------------------------------------------------------------------
// EntryGate — full-screen "click to enter" splash shown once per session.
// Two wireframe panels (matching the site's existing border-gray-500/50 /
// rounded-corner blueprint style) sit stacked with a small gap. A pokeball
// sits on the seam. Clicking (or pressing Enter/Space on) the pokeball plays
// a quick capture-shake, then the panels slide apart like double doors to
// reveal the real page underneath.
//
// Bonus: this click is a genuine user gesture, which is exactly what the
// browser's autoplay policy requires before <audio> is allowed to play.
// Since it fires a real pointerdown on window, it also satisfies the
// "unlockAudio" listener in Connect.tsx — so by the time someone reaches the
// GTA SA menu, hover sound already works on the very first hover.
//
// IMPORTANT: SESSION_KEY is exported so App.tsx can check it too. On a
// refresh where the gate has already been opened this session, this
// component correctly skips rendering itself — but App.tsx needs to know
// that up front (not via onEnter(), which only fires from a real click) or
// the real page stays stuck behind its "not entered yet" lock forever.
// ---------------------------------------------------------------------------

export const SESSION_KEY = "entry-gate:opened";

const MONO = "'JetBrains Mono','Courier New',monospace";

type EntryGateProps = {
  onEnter: () => void;
};

export default function EntryGate({ onEnter }: EntryGateProps) {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return true;
    return window.sessionStorage.getItem(SESSION_KEY) !== "1";
  });

  const rootRef = useRef<HTMLDivElement>(null);
  const topPanelRef = useRef<HTMLDivElement>(null);
  const bottomPanelRef = useRef<HTMLDivElement>(null);
  const pokeballRef = useRef<HTMLButtonElement>(null);
  const idleTweenRef = useRef<gsap.core.Tween | null>(null);
  const [isOpening, setIsOpening] = useState(false);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Idle "breathing" pulse — the one ambient motion on this screen, inviting
  // the click. Skipped entirely for reduced-motion users.
  useEffect(() => {
    if (!visible || prefersReducedMotion || !pokeballRef.current) return;
    idleTweenRef.current = gsap.to(pokeballRef.current, {
      scale: 1.045,
      duration: 1.1,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
    return () => {
      idleTweenRef.current?.kill();
    };
  }, [visible, prefersReducedMotion]);

  const handleEnter = () => {
    if (isOpening) return;
    setIsOpening(true);
    window.sessionStorage.setItem(SESSION_KEY, "1");
    idleTweenRef.current?.kill();

    if (prefersReducedMotion) {
      setVisible(false);
      onEnter();
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setVisible(false);
        onEnter();
      },
    });

    // Capture-style shake, then the doors open.
    tl.to(pokeballRef.current, {
      rotate: -12,
      duration: 0.07,
      ease: "power1.inOut",
    })
      .to(pokeballRef.current, {
        rotate: 10,
        duration: 0.09,
        ease: "power1.inOut",
      })
      .to(pokeballRef.current, {
        rotate: -7,
        duration: 0.08,
        ease: "power1.inOut",
      })
      .to(pokeballRef.current, {
        rotate: 0,
        scale: 1.15,
        duration: 0.12,
        ease: "back.out(3)",
      })
      .to(
        pokeballRef.current,
        { scale: 0, opacity: 0, duration: 0.25, ease: "power2.in" },
        "-=0.02",
      )
      .to(
        topPanelRef.current,
        { yPercent: -120, duration: 0.7, ease: "power3.inOut" },
        "-=0.15",
      )
      .to(
        bottomPanelRef.current,
        { yPercent: 120, duration: 0.7, ease: "power3.inOut" },
        "<",
      )
      .to(rootRef.current, { opacity: 0, duration: 0.2 }, "-=0.15");
  };

  if (!visible) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
      role="dialog"
      aria-modal="true"
      aria-label="Site entry"
    >
      <div className="relative flex w-[92%] sm:w-[85%] md:w-[70%] lg:w-[50%] max-w-[760px] flex-col h-[62vh] sm:h-[56vh]">
        {/* top panel */}
        <div
          ref={topPanelRef}
          className="flex-1 rounded-t-3xl border border-b-0 border-gray-500/50"
        />
        {/* seam gap */}
        <div className="h-[3px] shrink-0 bg-gray-500/50" />
        {/* bottom panel */}
        <div
          ref={bottomPanelRef}
          className="flex-1 rounded-b-3xl border border-t-0 border-gray-500/50"
        />

        {/* pokeball, centered on the seam */}
        <button
          ref={pokeballRef}
          type="button"
          onClick={handleEnter}
          aria-label="Click to enter the site"
          className="group absolute left-1/2 top-1/2 size-24 sm:size-28 md:size-32 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full outline-none"
        >
          <svg
            viewBox="0 0 100 100"
            className="h-full w-full drop-shadow-[0_0_0_rgba(0,0,0,0)] transition-[filter] duration-300 group-hover:drop-shadow-[0_0_18px_rgba(253,216,53,0.45)] group-focus-visible:drop-shadow-[0_0_18px_rgba(253,216,53,0.45)]"
          >
            <defs>
              <clipPath id="pokeball-top-clip">
                <path d="M2,50 A48,48 0 0 1 98,50 Z" />
              </clipPath>
            </defs>

            {/* outer circle, filled with page bg so panel edges don't show through */}
            <circle cx="50" cy="50" r="47" fill="#000" />

            {/* top half fill — transparent by default, accent on hover/focus */}
            <g clipPath="url(#pokeball-top-clip)">
              <rect
                x="0"
                y="0"
                width="100"
                height="52"
                className="fill-transparent transition-colors duration-300 group-hover:fill-[#FDD835]/90 group-focus-visible:fill-[#FDD835]/90"
              />
            </g>

            <circle
              cx="50"
              cy="50"
              r="47"
              fill="none"
              stroke="#cfd3d6"
              strokeWidth="2"
            />
            <line
              x1="4"
              y1="50"
              x2="96"
              y2="50"
              stroke="#cfd3d6"
              strokeWidth="2"
            />
            <circle
              cx="50"
              cy="50"
              r="12"
              fill="#000"
              stroke="#cfd3d6"
              strokeWidth="2"
            />
            <circle
              cx="50"
              cy="50"
              r="5"
              fill="#000"
              stroke="#cfd3d6"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </div>

      <p
        className="mt-8 text-xs sm:text-sm text-gray-500 select-none"
        style={{ fontFamily: MONO }}
        aria-hidden="true"
      >
        click to enter
        <span className="ml-0.5 inline-block animate-pulse">_</span>
      </p>
    </div>
  );
}

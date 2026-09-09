import { FluidGradientText } from "@/components/fluid-gradient-text";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SiGithub,
  SiDiscord,
  SiYoutube,
  SiInstagram,
  SiX,
  SiInsta360,
} from "react-icons/si";
import type { IconType } from "react-icons";

gsap.registerPlugin(ScrollTrigger);

type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
};

const SOCIAL_LINKS: SocialLink[] = [
  { label: "X (Twitter)", href: "https://x.com/", icon: SiX },
  { label: "GitHub", href: "https://github.com/", icon: SiGithub },
  // NOTE: original file imported `SiLinkerd` (the Linkerd logo) for this row.
  // Swapped to `SiLinkedin` since that's clearly what was intended.
  { label: "LinkedIn", href: "https://linkedin.com/", icon: SiInsta360 },
  { label: "Discord", href: "https://discord.com/", icon: SiDiscord },
  { label: "YouTube", href: "https://youtube.com/", icon: SiYoutube },
  { label: "Instagram", href: "https://instagram.com/", icon: SiInstagram },
];

// The <audio> elements below live in /public and are referenced with a
// root-relative path (e.g. "/gta-san-menu-hover-sound.mp3"), the same way
// zapSound.mp3 is referenced in HeroSection.tsx. A "./..." relative path
// resolves against the current page URL instead of the site root, so it
// would silently 404 on any route other than "/" — that was the original bug.

// How long to hold before actually navigating, so the select SFX above
// isn't cut off mid-playback. Tweak to match the length of your real file.
const NAV_DELAY_MS = 350;

export default function Connect() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hoverAudioRef = useRef<HTMLAudioElement | null>(null);
  const selectAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (hoverAudioRef.current) hoverAudioRef.current.volume = 0.45;
    if (selectAudioRef.current) selectAudioRef.current.volume = 0.6;
  }, []);

  const playSfx = (audio: HTMLAudioElement | null) => {
    if (!audio) return;
    audio.currentTime = 0;
    audio.play().catch((err) => {
      // Log instead of swallowing, so a bad path/404 is visible in devtools
      // instead of silently doing nothing.
      console.warn("GTA SA menu SFX failed to play:", err);
    });
  };

  useGSAP(
    () => {
      gsap.from(".connect-item", {
        opacity: 0,
        y: 16,
        duration: 0.45,
        stagger: 0.07,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div className="w-full bg-black">
      <div className="w-full flex justify-center items-center border-b border-gray-500/50">
        <div className="hidden md:flex h-full w-full flex-1"></div>

        <div
          ref={containerRef}
          className="relative flex min-w-0 flex-col items-center w-[90%] md:w-[80%] lg:w-[40%] border-l border-r border-gray-500/50 py-10"
        >
          {/* vertical GTA SA-style menu list */}
          <div className="flex flex-col items-center gap-1">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                onMouseEnter={() => playSfx(hoverAudioRef.current)}
                onFocus={() => playSfx(hoverAudioRef.current)}
                onClick={(e) => {
                  // Let the "select" SFX finish playing before we actually
                  // navigate — same beat GTA SA's menu confirm has.
                  e.preventDefault();
                  playSfx(selectAudioRef.current);
                  window.setTimeout(() => {
                    window.open(href, "_blank", "noopener,noreferrer");
                  }, NAV_DELAY_MS);
                }}
                className="connect-item group mx-auto inline-flex items-center gap-0 px-3 py-1.5 outline-none"
              >
                {/* icon appears to the left on hover/focus, like the SA cursor marker */}
                <Icon className="size-0 shrink-0 -translate-x-2 text-gray-400 opacity-0 transition-all duration-150 ease-out group-hover:mr-2 group-hover:size-5 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:mr-2 group-focus-visible:size-5 group-focus-visible:translate-x-0 group-focus-visible:opacity-100" />

                <span className="text-base md:text-lg font-semibold uppercase tracking-[0.14em] text-gray-300 transition-colors duration-150 group-hover:text-white group-focus-visible:text-white">
                  {label}
                </span>
              </a>
            ))}
          </div>

          <audio
            ref={hoverAudioRef}
            src="/gta-san-menu-hover-sound.mp3"
            preload="auto"
          />
          <audio
            ref={selectAudioRef}
            src="/gta-san-menu-click-sound.mp3"
            preload="auto"
          />
        </div>

        <div className="hidden md:flex h-full w-full flex-1"></div>
      </div>

      <div className="relative w-full text-foreground">
        <div className="pointer-events-none absolute inset-x-0 top-0 text-center text-xs text-muted-foreground select-none">
          <span className="hidden pointer-fine:inline-block">
            Move your cursor within the text below
          </span>
          <span className="hidden pointer-coarse:inline-block">
            Press anywhere within the text below
          </span>
        </div>

        <FluidGradientText text="SUMIT" />
      </div>
    </div>
  );
}

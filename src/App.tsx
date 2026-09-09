// App.tsx
import { lazy, Suspense, useState } from "react";
import NavigationBar from "./pages/navigation/Navigation";
import BannerSection from "./pages/hero-section/Banner";
import HeroSection from "./pages/hero-section/HeroSection";
import Separator from "./lib/reusable/Separator";
import AboutMe from "./pages/hero-section/AboutMe";
import Title from "./lib/reusable/Title";
import StackSkeleton from "./pages/skeletonLoaders/StackSkeleton";
import ExperienceSkeleton from "./pages/skeletonLoaders/ExperienceSkeleton";
import ProjectsSkeleton from "./pages/skeletonLoaders/ProjectsSkeleton";
import FooterSkeleton from "./pages/skeletonLoaders/FooterSkeleton";
import Connect from "./pages/Connect/Connect";
import SplashCursor from "./components/SplashCursor";
import EntryGate from "./pages/entry-gate/entry-gate";

const Experience = lazy(() => import("./pages/Experience/WorkExperience"));
const Stack = lazy(() => import("./pages/skills-section/Stack"));
const Projects = lazy(() => import("./pages/projects/Projects"));

function App() {
  const [entered, setEntered] = useState(false);

  return (
    <div className="dark w-full min-h-screen box-border bg-black absolute">
      <EntryGate onEnter={() => setEntered(true)} />

      {/* Prevent scroll/interaction with the real page until the gate is
          dismissed — also avoids double-mounting animated sections behind it. */}
      <div
        className={entered ? "" : "h-screen overflow-hidden"}
        aria-hidden={!entered}
      >
        <SplashCursor />
        <NavigationBar />
        <section id="home">
          <BannerSection />
          <HeroSection />
          <Separator />
          <AboutMe />
        </section>

        <section id="journey">
          <Title TitleLabel="Experience" TitleSize="md" />
          <Suspense fallback={<ExperienceSkeleton />}>
            <Experience />
          </Suspense>
          <Separator />
          <Title TitleLabel="Tech-Stack" TitleSize="md" />
          <Suspense fallback={<StackSkeleton />}>
            <Stack />
          </Suspense>
        </section>

        {/* Experience isn't in the nav, keep it between sections */}

        <section id="work">
          <Title TitleLabel="Projects" TitleSize="md" />
          <Suspense fallback={<ProjectsSkeleton />}>
            <Projects />
          </Suspense>
        </section>

        <section id="connect">
          <Title TitleLabel="Connect" TitleSize="md" />
          <Suspense fallback={<FooterSkeleton />}>
            <Connect />
          </Suspense>
        </section>
      </div>
    </div>
  );
}
export default App;

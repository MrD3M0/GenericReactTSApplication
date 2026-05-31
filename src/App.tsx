import Separator from "./lib/reusable/Separator";
import Title from "./lib/reusable/Title";
import AboutMe from "./pages/hero-section/AboutMe";
import BannerSection from "./pages/hero-section/Banner";
import HeroSection from "./pages/hero-section/HeroSection";
import NavigationBar from "./pages/navigation/Navigation";
import Stack from "./pages/skills-section/Stack";

function App() {
  return (
    <div className="w-full min-h-screen overflow-y-auto box-border bg-black">
      <NavigationBar />
      <BannerSection />
      <HeroSection />
      <Separator />
      <AboutMe />
      <Title TitleLabel="Tech Stack" TitleSize="sm" />
      <Stack />
      <Title TitleLabel="Components" TitleSize="sm" />
    </div>
  );
}

export default App;

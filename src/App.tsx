import Separator from "./lib/reusable/Separator";
import AboutMe from "./pages/hero-section/AboutMe";
import BannerSection from "./pages/hero-section/Banner";
import HeroSection from "./pages/hero-section/HeroSection";
import NavigationBar from "./pages/navigation/Navigation";

function App() {
  return (
    <div className="w-screen h-screen overflow-y-scroll m-0 p-0 box-border bg-black ">
      <NavigationBar />
      <BannerSection />
      <HeroSection />
      <Separator />
      <AboutMe/>
    </div>
  );
}

export default App;

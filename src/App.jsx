import Navbar from "./components/Navbar";
import BackgroundFX from "./components/BackgroundFX";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import FeaturedPulseProject from "./components/FeaturedPulseProject";
import OtherProjects from "./components/OtherProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-5 focus:top-5 focus:z-[200] rounded-2xl bg-white text-black px-4 py-3 font-semibold"
      >
        Skip to content
      </a>

      <BackgroundFX />
      <Navbar />
      <main id="main" className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <FeaturedPulseProject />
        <OtherProjects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

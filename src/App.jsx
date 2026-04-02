import Navbar from "./components/Navbar";
import BackgroundFX from "./components/BackgroundFX";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
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
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

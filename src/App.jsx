import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />      
      <Certifications />
      <About />
      <Contact />
      
    </div>
  );
}

export default App;

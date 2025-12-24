import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useRef } from "react";
import { Toaster } from "./components/ui/sonner";

function App() {
  const heroRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);
  return (
    <>
      <Nav
        heroRef={heroRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">
        <main>
          <section ref={heroRef} className="scroll-mt-20">
            <Hero projectsRef={projectsRef} contactRef={contactRef} />
          </section>
        </main>

        <section ref={aboutRef} className="scroll-mt-20">
          <About />
        </section>
        <section ref={projectsRef} className="scroll-mt-20">
          <Projects />
        </section>
        <section ref={contactRef} className="scroll-mt-20">
          <Contact />
        </section>
      </div>
      <Toaster position="top-center" />
    </>
  );
}

export default App;

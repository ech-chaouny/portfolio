import { useEffect, useRef, useState } from "react";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Lenis from "@studio-freight/lenis";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Social from "./components/Social";

const App = () => {
  const stickyElement = useRef(null);
  const socialElement = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [backTop, setBackTop] = useState(false);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  return (
    <section
      className={`${isDarkMode ? "bg-secondary" : "bg-white "} duration`}
    >
      <Navbar isDarkMode={isDarkMode} />
      <section
        id="hero"
        className="h-screen w-full paddingX flex justify-center items-center"
      >
        <Hero ref={stickyElement} isDarkMode={isDarkMode} />
      </section>
      <About
        setBackTop={setBackTop}
        setIsDarkMode={setIsDarkMode}
        isDarkMode={isDarkMode}
      />
      <Projects isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer backTop={backTop} />
      <Cursor stickyElement={stickyElement} socialElement={socialElement} />
      <Social ref={socialElement} isDarkMode={isDarkMode} />
    </section>
  );
};

export default App;

import { useEffect, useRef, useState } from "react";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Lenis from "@studio-freight/lenis";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const App = () => {
  const stickyElement = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  return (
    <section className={`${isDarkMode ? "bg-primary" : "bg-white "} duration`}>
      <Navbar isDarkMode={isDarkMode} />
      <section
        id="hero"
        className="h-screen w-full flex justify-center items-center"
      >
        <Hero ref={stickyElement} isDarkMode={isDarkMode} />
      </section>
      <About setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer />
      <Cursor stickyElement={stickyElement} />
    </section>
  );
};

export default App;

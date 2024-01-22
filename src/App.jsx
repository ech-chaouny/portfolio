import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Lenis from "@studio-freight/lenis";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Social from "./components/Social";
import Preloader from "./components/Preloader";

const App = () => {
  const stickyElement = useRef(null);
  const socialElement = useRef(null);
  const projectElement = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [backTop, setBackTop] = useState(false);
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    setTimeout(() => {
      window.scrollTo({ top: 0 });
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <main
      className={`main ${
        isDarkMode ? "bg-secondary" : "bg-white-100 "
      } duration`}
    >
      <AnimatePresence mode="wait">
        {/* {isLoading && <Preloader />} */}
      </AnimatePresence>
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
      <Projects
        ref={projectElement}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
      <Contact isDarkMode={isDarkMode} />
      <Footer backTop={backTop} />
      <Cursor
        stickyElement={stickyElement}
        socialElement={socialElement}
        projectElement={projectElement}
      />
      <Social ref={socialElement} isDarkMode={isDarkMode} />
    </main>
  );
};

export default App;

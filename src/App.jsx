import { useEffect, useRef, useState } from "react";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Lenis from "@studio-freight/lenis";

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
    <section
      className={`${
        isDarkMode ? "bg-secondary duration-900" : "bg-white duration-900"
      }`}
    >
      <Navbar isDarkMode={isDarkMode} />
      <section className="h-screen w-full flex justify-center items-center">
        <Hero ref={stickyElement} />
      </section>
      <About setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <Cursor stickyElement={stickyElement} />
    </section>
  );
};

export default App;

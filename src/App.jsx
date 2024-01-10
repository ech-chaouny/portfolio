import { useEffect, useRef } from "react";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";

const App = () => {
  const stickyElement = useRef(null);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  });
  return (
    <>
      <Navbar />
      <section className="h-screen w-full flex justify-center items-center">
        <Hero ref={stickyElement} />
      </section>
      <About />
      <Cursor stickyElement={stickyElement} />
    </>
  );
};

export default App;

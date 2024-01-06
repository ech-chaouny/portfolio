import { useState } from "react";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";

const App = () => {
  const [cursorVariant, setCursorVariant] = useState("default");
  const textEnter = () => setCursorVariant("textHover");
  const textLeave = () => setCursorVariant("default");
  return (
    <>
      <Navbar onMouseEnter={textEnter} onMouseLeave={textLeave} />
      <section className="h-screen w-full flex justify-center items-center">
        <Hero onMouseEnter={textEnter} onMouseLeave={textLeave} />
      </section>
      <Cursor
        cursorVariant={cursorVariant}
        textEnter={textEnter}
        textLeave={textLeave}
      />
    </>
  );
};

export default App;

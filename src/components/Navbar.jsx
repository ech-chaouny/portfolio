import React, { forwardRef } from "react";
import { Blacklogo } from "../assets";
import Magent from "./Magent";

const Navbar = forwardRef(function index(props, ref) {
  return (
    <header className="sm:px-10 px-8 w-full flex items-center justify-between fixed py-5 bg-white z-0">
      <a href="#hero" aria-label="logo">
        <Blacklogo />
      </a>
      <nav className="flex items-center gap-10 font-normal text-xl text-black-200">
        <Magent>
          <a href="#hero">Home</a>
        </Magent>
        <Magent>
          <a href="#about">About</a>
        </Magent>
        <Magent>
          <a href="#projects">Projects</a>
        </Magent>
        <Magent>
          <a href="#contact">Let's Talk</a>
        </Magent>
      </nav>
    </header>
  );
});

export default Navbar;

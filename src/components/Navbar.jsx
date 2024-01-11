import React, { forwardRef } from "react";
import { Blacklogo } from "../assets";
import { Whitelogo } from "../assets";
import Magent from "./Magent";

const Navbar = ({ isDarkMode }) => {
  return (
    <header
      className={`sm:px-10 px-8 w-full flex items-center justify-between z-10 py-5 fixed ${
        isDarkMode ? "bg-secondary duration-900" : "bg-white duration-900"
      }`}
    >
      <a href="#hero" aria-label="logo">
        {!isDarkMode ? <Blacklogo /> : <Whitelogo />}
      </a>
      <nav
        className={`flex items-center gap-10 font-normal text-xl ${
          !isDarkMode ? "text-black-200" : "text-white-200"
        }`}
      >
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
};

export default Navbar;

import React from "react";
import { Blacklogo } from "../assets";

const Navbar = ({ ...props }) => {
  return (
    <header className="sm:px-10 px-8 w-full flex items-center justify-between fixed py-3.5 bg-white">
      <a href="#hero" aria-label="logo">
        <Blacklogo />
      </a>
      <nav className="flex items-center gap-10 font-normal text-xl text-black-200">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a
          {...props}
          className="rounded-[20px] pt-2.5 py-2 px-10 bg-tertiary text-white-200"
          href="#contact"
        >
          Let's Talk
        </a>
      </nav>
    </header>
  );
};

export default Navbar;

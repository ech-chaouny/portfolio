import React, { forwardRef, useState } from "react";
import { Blacklogo, Close, CloseWhite, Menu, MenuWhite } from "../assets";
import { Whitelogo } from "../assets";
import Magent from "./Magent";

const Navbar = ({ isDarkMode }) => {
  const [active, setActive] = useState();
  const [toggle, setToggle] = useState(false);
  return (
    <header
      className={`sm:px-10 px-8 w-full flex items-center justify-between z-10 py-5 fixed duration ${
        isDarkMode ? "bg-secondary" : "bg-white "
      }`}
    >
      <a href="#hero" aria-label="logo">
        {!isDarkMode ? <Blacklogo /> : <Whitelogo />}
      </a>
      <nav
        className={`hidden sl:flex items-center gap-10 font-medium text-xl ${
          !isDarkMode ? "text-black-200 " : "text-white-200"
        }`}
      >
        <a
          href="#hero"
          className={`${
            !isDarkMode
              ? "text-black-100 hover:text-black"
              : "text-white-200 hover:text-white"
          } duration-200`}
        >
          Home
        </a>
        <a
          href="#about"
          className={`${
            !isDarkMode
              ? "text-black-100 hover:text-black"
              : "text-white-200 hover:text-white"
          } duration-200`}
        >
          About
        </a>
        <a
          href="#projects"
          className={`${
            !isDarkMode
              ? "text-black-100 hover:text-black"
              : "text-white-200 hover:text-white"
          } duration-200`}
        >
          Projects
        </a>
        <a
          href="#contact"
          className={`${
            !isDarkMode
              ? "text-black-100 hover:text-black"
              : "text-white-200 hover:text-white"
          } duration-200`}
        >
          Let's Talk
        </a>
      </nav>
      <nav className="sl:hidden flex flex-1 justify-end items-end">
        {toggle ? (
          isDarkMode ? (
            <CloseWhite
              className="w-[28px] h-[28px]"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <Close
              className="w-[28px] h-[28px]"
              onClick={() => setToggle(!toggle)}
            />
          )
        ) : isDarkMode ? (
          <MenuWhite
            className="w-[28px] h-[28px]"
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <Menu
            className="w-[28px] h-[28px]"
            onClick={() => setToggle(!toggle)}
          />
        )}
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl
          `}
        >
          <ul className="list-none flex justify-end items-start flex-col gap-4"></ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

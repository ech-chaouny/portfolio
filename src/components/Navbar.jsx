import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Blacklogo, CloseWhite, Logo, Menu, MenuWhite } from "../assets";
import { Whitelogo } from "../assets";
import Magent from "./Magent";
import { navLinks } from "../constants";

const Navbar = ({ isDarkMode }) => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState();
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    setToggle(!toggle);
  };

  const menuVars = {
    initial: { scaleY: 0 },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.3,
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        saggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.09,
        saggerDirection: 1,
      },
    },
  };

  const linkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };
  return (
    <>
      <header
        className={`sm:px-10 px-8 w-full flex items-center justify-between z-10 py-5 fixed duration ${
          isDarkMode ? "bg-secondary" : "bg-white "
        }`}
      >
        <a
          href="#hero"
          aria-label="logo"
          onClick={() => {
            setActive("");
          }}
        >
          {!isDarkMode ? <Blacklogo /> : <Whitelogo />}
        </a>
        <nav
          className={`hidden sl:flex items-center gap-8 font-medium text-[18px] ${
            !isDarkMode ? "text-black-200 " : "text-white-200"
          }`}
        >
          {navLinks.slice(0, 3).map((link, index) => (
            <a
              key={index}
              className={`${
                !isDarkMode
                  ? active === link.title
                    ? "text-black"
                    : "text-white-300 hover:text-black"
                  : active === link.title
                  ? "text-white"
                  : "text-black-100 hover:text-white"
              } duration-200`}
              href={link.link}
              onClick={() => {
                setActive(link.title);
              }}
            >
              {link.title}
            </a>
          ))}
          <Magent>
            <a
              href="#contact"
              className={`rounded-full pb-2.5 pt-3 px-6 ${
                !isDarkMode
                  ? "text-white-100 bg-tertiary hover:bg-black-300"
                  : "text-black-300 bg-white-100 hover:bg-white-200"
              } duration-200`}
            >
              Let's Talk
            </a>
          </Magent>
        </nav>
        <nav className="sl:hidden flex flex-1 justify-end items-end cursor-pointer">
          {isDarkMode ? (
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
        </nav>
      </header>
      <AnimatePresence>
        {toggle && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed h-screen z-10 bg-secondary text-white origin-top top-0 left-0 w-full"
          >
            <div className="absolute flex w-full justify-end px-8 py-7">
              <CloseWhite
                className="w-[28px] cursor-pointer h-[28px]"
                onClick={handleClick}
              />
            </div>
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col h-full justify-center items-center gap-8 font-generalSans text-[35px] text-white-100 font-medium"
            >
              {navLinks.map((link, index) => (
                <div className="overflow-hidden">
                  <motion.div variants={linkVars}>
                    <a
                      key={index}
                      className="hover:text-white-300"
                      href={link.link}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(link.title);
                      }}
                    >
                      {link.title}
                    </a>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

import React, { forwardRef, useLayoutEffect, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { Ismael, IsmaelSmile } from "../assets";

const Hero = forwardRef(function index(props, ref) {
  console.log(props);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const sm = useTransform(scrollYProgress, [0, 1], [90, -90]);
  const md = useTransform(scrollYProgress, [0, 1], [120, -120]);
  return (
    <div
      ref={ref}
      className="flex flex-col justify-center items-center text-center pt-10"
    >
      <IsmaelSmile className="w-60" />
      <h1
        className={`font-black ${
          props.isDarkMode ? "text-white-300" : "text-secondary"
        } duration font-generalSans text-[60px] mt-5 tracking-tight leading-tight`}
      >
        Hello, I'm
        <br />
        <span>Ismael Ech-chaouny</span>
      </h1>
      <motion.p
        className={`mt-5 text-[20px] max-w-[500px] font-generalSans ${
          props.isDarkMode ? "text-white-300" : "text-secondary"
        } font-medium duration`}
      >
        A passionate Front-end Developer devoted to the art of coding.
      </motion.p>
    </div>
  );
});

export default Hero;

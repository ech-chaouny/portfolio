import React, { forwardRef, useLayoutEffect, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const Hero = forwardRef(function index(props, ref) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const sm = useTransform(scrollYProgress, [0, 1], [90, -90]);
  const md = useTransform(scrollYProgress, [0, 1], [120, -120]);
  return (
    <div
      ref={ref}
      className="sm:max-w-[80%] max-w-[90%] flex flex-col justify-center items-center text-center"
    >
      <h1 className="font-black text-secondary font-generalSans xl:leading-[9rem] leading-[3.5rem] xl:text-9xl lg:text-8xl sm:text-7xl text-[50px]">
        Hello, I'm
        <br />
        <span>Smaeel Uny</span>
      </h1>
      <motion.p
        style={{ y: sm }}
        className="mt-5 lg:text-3xl sm:text-2xl text-[20px] max-w-[500px] font-generalSans text-secondary font-medium"
      >
        A passionate Front-end Developer devoted to the art of coding.
      </motion.p>
    </div>
  );
});

export default Hero;

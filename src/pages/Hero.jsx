import React, { forwardRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { IsmaelSmile } from "../assets";

const Hero = forwardRef(function index(props, ref) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [90, -90]);
  const md = useTransform(scrollYProgress, [0, 1], [110, -110]);
  return (
    <>
      <div
        ref={ref}
        className="flex flex-col justify-center items-center text-center pt-12"
      >
        <IsmaelSmile className="w-60" />
        <h1
          className={`font-black ${
            props.isDarkMode ? "text-white-300" : "text-secondary"
          } duration font-generalSans xs:text-[60px] text-[32px] mt-6 tracking-tight leading-tight`}
        >
          Hello, I'm
          <br />
          <span>Ismael Ech-chaouny</span>
        </h1>
        <p
          className={`mt-5 xs:text-[25px] text-[18px] max-w-[500px] font-generalSans ${
            props.isDarkMode ? "text-white-300" : "text-secondary"
          } font-medium duration`}
        >
          A passionate Front-end Developer devoted to the art of coding. 👋
        </p>
      </div>
      <motion.div
        style={{ y: md }}
        className="absolute right-0 bottom-0 mr-12 mb-16"
      >
        <a
          href="#about"
          className="flex flex-col justify-center items-center gap-3"
        >
          <div
            className="w-[30px] h-[57px]
          rounded-3xl border-[3px] border-secondary
          flex justify-center items-start p-2"
          >
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 rounded-full bg-secondary mb-1"
            />
          </div>
          <span className="font-generalSans text-secondary font-semibold">
            Scroll down
          </span>
        </a>
      </motion.div>
    </>
  );
});

export default Hero;

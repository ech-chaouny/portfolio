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
    <div
      ref={ref}
      className="flex flex-col justify-center items-center text-center pt-12"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <IsmaelSmile className="w-60" />
      </motion.div>
      <h1
        className={`font-black ${
          props.isDarkMode ? "text-white-300" : "text-secondary"
        } duration font-generalSans xs:text-[60px] text-[32px] mt-6 tracking-tight leading-tight`}
      >
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ delay: 2.3, duration: 1, ease: [0.37, 0, 0.63, 1] }}
          >
            Hello, I'm
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ delay: 2.3, duration: 1, ease: [0.37, 0, 0.63, 1] }}
          >
            Ismael Ech-chaouny
          </motion.div>
        </div>
      </h1>
      <div className=" overflow-hidden">
        <motion.p
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          transition={{ delay: 2.5 }}
          className={`mt-5 xs:text-[25px] text-[18px] max-w-[500px] font-generalSans ${
            props.isDarkMode ? "text-white-300" : "text-secondary"
          } font-medium duration`}
        >
          A passionate Front-end Developer devoted to the art of coding. 👋
        </motion.p>
      </div>
    </div>
  );
});

export default Hero;

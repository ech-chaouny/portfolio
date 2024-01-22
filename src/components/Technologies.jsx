import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { technologies } from "../constants";
import { Tech } from "../assets";
import { staggerContainer } from "../utils/motion";

const Technologies = ({ isDarkMode }) => {
  const fadeIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  return (
    <div className="sl:h-screen flex sl:flex-row flex-col gap-14">
      <div className="sl:w-1/2 w-full">
        <h1 className="text-2xl sm:text-3xl text-secondary font-semibold font-generalSans">
          TECHNOLOGIES
        </h1>
        <p
          className={`sl:text-xl mt-5 font-normal ${
            isDarkMode ? "text-white-300" : "text-black-300"
          } duration-500`}
        >
          I always focus on the technologies that help me reach a high level in
          my career as a front-end developer, but I am also proficient in php,
          laravel and also MySQL, but now I am focusing more on these
          technologies
        </p>
        <div className="sl:flex hidden flex-col items-center mt-8">
          <Tech className="size-[21rem]" />
        </div>
      </div>

      <div className="sl:w-1/2 w-full sl:px-14 sl:pb-0 pb-20 grid grid-cols-2 justify-center gap-6 h-[75vh]">
        {technologies.map((technology, index) => (
          <motion.div
            variants={fadeIn("left", 0.2, 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            key={index}
            className={`${
              index == 2 || index == 0
                ? "bg-secondary text-white"
                : "text-black"
            } flex flex-col justify-start h-[170px] sl:w-[200px]
            p-5 rounded-xl border-[1.5px] border-white-200 hover:border-black duration-500 shadow-sm`}
          >
            {<technology.icon className="md:w-10 h-10 w-8" />}
            <span className="font-generalSans font-medium md:text-[16px] mt-[4rem]">
              {technology.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;

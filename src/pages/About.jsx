import React, { useEffect, useRef, useState } from "react";
import { technologies } from "../constants";
import Magent from "../components/Magent";
import { MyPhoto } from "../assets";
import { motion, useTransform, useScroll } from "framer-motion";

const About = ({ setIsDarkMode, isDarkMode }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  useEffect(() => {
    scrollYProgress.onChange((latest) => {
      if (latest >= 0.2 && latest <= 0.7) {
        setIsDarkMode(true);
      } else {
        setIsDarkMode(false);
      }
    });
    console.log(isDarkMode);
  });
  return (
    <section id="about" className="w-full h-full flex flex-col justify-center">
      <motion.div
        className="paddingX py-28 h-auto xl:h-screen flex flex-col justify-center"
        ref={container}
      >
        <h1 className="text-2xl sm:text-3xl text-black-200 font-semibold font-generalSans">
          WHO I'M
        </h1>
        <p
          className={`pt-8 text-3xl sm:text-[40px] xl:text-[4rem] ${
            isDarkMode ? "text-white-300" : "text-tertiary"
          } font-semibold font-generalSans duration leading-10 sm:leading-tight`}
        >
          I'm here to craft user interfaces and web applications that seamlessly
          align with the distinctive concepts and color palettes embedded within
          your creative vision.
        </p>
      </motion.div>
      <h1
        className={`text-5xl font-semibold font-generalSans ${
          isDarkMode ? "text-white-300" : "text-tertiary"
        } text-center sl:text-8xl`}
      >
        ABOUT ME
      </h1>
      <div className="paddingX paddingY w-full flex flex-col sl:flex-row justify-between items-center gap-10">
        <div className="w-full h-full">
          <img src={MyPhoto} alt="profile" className="profile" />
        </div>
        <div className="w-full h-full text-center md:text-start">
          <h3 className="xl:text-[30px] sm:text-[27px] xs:text-[22px] font-bold font-generalSans text-tertiary">
            A Junior Front-end Developer based in Casablanca, Morroco 📍
          </h3>
          <p className="md:mt-8 mt-5 md:text-[22px] font-normal text-black-300">
            As a Junior Front-End Developer, I focus on developing my skills by
            mastering HTML, CSS, JavaScript, ReactJs, NextJs, Tailwind, SCSS. I
            specialize in designing and maintaining responsive websites that
            prioritize a seamless user experience. My expertise extends to
            crafting dynamic and engaging interfaces, leveraging clean and
            optimized code. I am well-versed in the latest development tools and
            techniques. Additionally, I am a team player who thrives in
            collaborating with cross-functional teams to produce outstanding web
            applications.
          </p>
        </div>
      </div>
      {/* <div className="paddingX flex flex-col justify-center items-center">
        <h1 className="text-2xl sm:text-3xl text-black-200 font-semibold font-generalSans">
          TECHNOLOGIES
        </h1>
        <p className="text-2xl mt-8 max-w-[800px] text-center font-normal text-tertiary">
          I always focus on the technologies that help me reach a high level in
          my career as a front-end developer, but I am also proficient in php,
          laravel and also MySQL, but now I am focusing more on these
          technologies
        </p>
        <div className="py-6 flex flex-wrap max-w-[800px] justify-center items-center gap-3">
          {technologies.map((technology, index) => (
            <Magent key={index}>
              <div className="technologies">
                {<technology.icon className=" w-[28px]" />}
                <span className="mt-[2px] font-generalSans font-medium text-[18px]">
                  {technology.name}
                </span>
              </div>
            </Magent>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default About;

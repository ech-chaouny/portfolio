import React, { useEffect, useRef } from "react";

import { MyPhoto } from "../assets";
import { motion, useScroll, useInView } from "framer-motion";
import Technologies from "../components/Technologies";
import { slideUpAbout } from "../utils/motion";

const About = ({ setIsDarkMode, isDarkMode, setBackTop }) => {
  const phrase = [
    "I'm here to craft user interfaces and",
    "web applications that seamlessly",
    " align with the distinctive concepts",
    "and color palettes embedded within",
    "your creative vision.",
  ];

  const container = useRef(null);
  const aboutPhrase = useRef(null);
  const isInView = useInView(aboutPhrase);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (latest) => {
      if (latest >= 0.25 && latest <= 0.7) {
        setIsDarkMode(true);
        setBackTop(true);
      } else if (latest <= 0.25) {
        setIsDarkMode(false);
        setBackTop(false);
      } else {
        setIsDarkMode(false);
      }
    });
  }, []);
  return (
    <section
      id="about"
      className="paddingX flex flex-col justify-center max-w-7xl mx-auto"
    >
      <div
        ref={container}
        className="py-28 h-auto xl:h-screen flex flex-col justify-center"
      >
        <h4 className="text-2xl sm:text-3xl text-black-200 font-semibold font-generalSans">
          WHO I'M
        </h4>
        <p
          ref={aboutPhrase}
          className={`pt-8 text-3xl sm:text-[40px] xl:text-[4rem] ${
            isDarkMode ? "text-white-300" : "text-tertiary"
          } font-semibold font-generalSans duration leading-10 sm:leading-tight`}
        >
          {phrase.map((word, index) => {
            return (
              <span
                key={index}
                className="relative overflow-hidden inline-flex"
              >
                <motion.span
                  variants={slideUpAbout}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
      </div>
      <Technologies isDarkMode={isDarkMode} />
      <p className="sl:text-[18px] text-[16px] font-generalSans text-black-200 uppercase font-medium mb-2 sl:mb-5">
        Introduction
      </p>
      <h1
        className={`text-4xl font-bold font-generalSans ${
          isDarkMode ? "text-white-300" : "text-tertiary"
        } sl:md:text-[60px] uppercase`}
      >
        About Me.
      </h1>
      <div className="paddingY flex flex-col sl:flex-row justify-center items-center gap-10">
        <div className="w-full sl:w-[83%] h-full">
          <img src={MyPhoto} alt="profile" className="profile" />
        </div>
        <div className="w-full h-full">
          <h3 className="sm:text-[28px] xs:text-[22px] font-bold font-generalSans text-tertiary">
            A Junior Front-end Developer based in Casablanca, Morroco 📍
          </h3>
          <p
            className={`md:mt-8 mt-5 md:text-[22px] font-normal text-black-300 ${
              isDarkMode ? "text-white-300" : "text-tertiary"
            } `}
          >
            As a Junior Front-End Developer, I focus on developing my skills by
            mastering HTML, CSS, JavaScript, ReactJs, NextJs, Tailwind, SCSS. I
            specialize in designing and maintaining responsive websites that
            prioritize a seamless user experience. My expertise extends to
            crafting dynamic and engaging interfaces, leveraging clean and
            optimized code. I am well-versed in the latest development tools and
            techniques. Additionally, I am a team player who thrives in
            collaborating with cross-functional teams to produce outstanding web
            applications. 💻
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

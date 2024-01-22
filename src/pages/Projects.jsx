import React, { forwardRef, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../constants";
import {
  fadeIn,
  slideIn,
  slideUpAbout,
  staggerContainer,
} from "../utils/motion";

const Projects = forwardRef(function index(props, ref) {
  const darkModeRef = useRef(null);
  const videoRef = useRef(null);
  const { scrollYProgress: darkModeScrollYProgress } = useScroll({
    target: darkModeRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    // Ensure ScrollTrigger is activated
    gsap.registerPlugin(ScrollTrigger);

    // Set initial state using gsap.set and useRef
    gsap.set(".videos-item", {
      clipPath: function () {
        return "inset(0px 0px 0px)";
      },
    });
    const animation = gsap.to(".videos-item:not(:last-child)", {
      clipPath: function () {
        return "inset(0px 0px 100%)";
      },
      stagger: 0.5,
      ease: "none",
    });
    ScrollTrigger.create({
      trigger: videoRef.current,
      start: "top top",
      end: "bottom bottom",
      animation: animation,
      scrub: true,
    });
  }, []);

  useEffect(() => {
    darkModeScrollYProgress.on("change", (latest) => {
      if (latest >= 0.07 && latest <= 0.83) {
        props.setIsDarkMode(true);
      } else {
        props.setIsDarkMode(false);
      }
    });
  }, []);
  return (
    <motion.section
      id="projects"
      ref={darkModeRef}
      className="pt-24 paddingX max-w-7xl mx-auto w-full"
    >
      <div className="">
        <p className="sl:text-[18px] text-[16px] font-generalSans text-black-200 uppercase font-medium mb-2 sl:mb-5">
          My work
        </p>
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="overflow-hidden py-2"
        >
          <motion.h1
            variants={slideIn("up", "tween", 0, 0.5)}
            className={`text-4xl font-bold font-generalSans ${
              props.isDarkMode ? "text-white-300" : "text-tertiary"
            } sl:md:text-[60px] uppercase`}
          >
            Projects.
          </motion.h1>
        </motion.div>
        <p className="md:mt-8 mt-5 md:text-[22px] font-normal text-white-300 max-w-3xl">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively. 🧩
        </p>
      </div>
      <div ref={videoRef} className="sl:flex hidden gap-20">
        <div className="w-[70%] h-auto">
          <div className="flex felx-col items-center sticky w-full h-[100vh] top-10">
            <div ref={ref} className="h-[30vw] w-[40vw] relative">
              {projects.map((project, index) => {
                return (
                  <ProjectsVideos index={index} key={index} {...project} />
                );
              })}
            </div>
          </div>
        </div>
        <div className="relative z-2 w-1/2 h-full">
          {projects.map((project, index) => {
            return <ProjectsTexts key={index} {...project} />;
          })}
        </div>
      </div>
      <div className="sl:hidden flex flex-col mt-10">
        {projects.map((project, index) => {
          return <ProjectsMobile key={index} {...project} />;
        })}
      </div>
    </motion.section>
  );
});

const ProjectsMobile = ({ video, url, title, num, body, tags }) => {
  return (
    <>
      <div className="w-full h-full my-8">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img
            src={video}
            alt={title}
            className="w-full rounded-[20px] object-contain"
          />
        </a>
      </div>
      <div className="mb-14 flex flex-col items-center justify-center text-center">
        <div className="w-[90%] flex flex-col items-center justify-center">
          <h4 className="text-white-300 font-semibold xl:text-[50px] font-generalSans">
            {num}
          </h4>
          <h1 className="text-white-100 font-semibold text-[25px] font-generalSans">
            {title}
          </h1>
          <p className="font-normal text-white-300 text-[16px]">{body}</p>
          <div className="flex mt-3 gap-3">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="rounded-3xl px-3 py-1 bg-white-200 flex justify-center items-center"
              >
                <span className="font-medium text-[16px] text-black-300">
                  {tag.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const ProjectsVideos = ({ index, video, url, title }) => {
  return (
    <a
      className={`videos-item absolute rounded-[20px] overflow-hidden`}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ zIndex: 3 - index }}
    >
      <img src={video} alt={title} className="w-full object-contain" />
    </a>
  );
};

const ProjectsTexts = ({ num, title, body, tags }) => {
  return (
    <div className="h-[100vh] flex flex-col justify-center">
      <h4 className="text-white-300 font-semibold xl:text-[50px] font-generalSans">
        {num}
      </h4>
      <h1 className="text-white-100 font-semibold xl:text-[35px] text-[25px] font-generalSans">
        {title}
      </h1>
      <p className="font-normal text-white-300 xl:text-[18px]">{body}</p>
      <div className="flex mt-3 gap-3">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="rounded-3xl px-3 py-1 bg-white-200 flex justify-center items-center"
          >
            <span className="font-medium text-[16px] text-black-300">
              {tag.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

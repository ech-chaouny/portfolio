import React, { useEffect, useRef } from "react";
import { Project1, Project2, Project3 } from "../assets";
import { motion, useScroll } from "framer-motion";

const Projects = ({ isDarkMode, setIsDarkMode }) => {
  const ProjectRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ProjectRef,
    offset: ["start end", "end start"],
  });
  useEffect(() => {
    scrollYProgress.onChange((latest) => {
      if (latest >= 0.1 && latest <= 0.8) {
        setIsDarkMode(true);
      } else {
        setIsDarkMode(false);
      }
    });
    console.log(isDarkMode);
  });
  return (
    <motion.section
      id="projects"
      ref={ProjectRef}
      className="paddingX w-full flex flex-col justify-center items-center"
    >
      <h1
        className={`text-5xl font-semibold font-generalSans ${
          isDarkMode ? "text-white-300" : "text-tertiary"
        } text-center sl:text-8xl`}
      >
        PROJECTS
      </h1>
      <div className="px-32 flex flex-row items-center h-[500px] mt-14 w-[1125px] bg-tertiary rounded-[200px] gap-10">
        <div className="w-1/2">
          <h4 className="text-white font-medium text-[36px] font-generalSans">
            01
          </h4>
          <h1 className="text-white-100 font-semibold text-[48px] font-generalSans">
            Project Name
          </h1>
          <p className="text-white-100 font-medium text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <div className="flex mt-3 gap-3">
            <div className="rounded-3xl px-5 py-2 bg-white-200 flex justify-center items-center">
              <span className="font-medium text-[16px] text-black-300">
                React Js
              </span>
            </div>
            <div className="px-5 py-2 rounded-3xl bg-white-200 flex justify-center items-center">
              <span className="font-medium text-[16px] text-black-300">
                Taiwlind Css
              </span>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src={Project1}
            alt="Project1"
            className="w-auto h-auto rounded-[80px]"
          />
        </div>
      </div>
      <div className="px-28 flex flex-row items-center h-[500px] mt-14 w-[1125px] bg-tertiary rounded-[200px] gap-16">
        <div className="w-1/2">
          <img
            src={Project2}
            alt="Project2"
            className="w-auto h-auto rounded-[80px]"
          />
        </div>
        <div className="w-1/2">
          <h4 className="text-white font-medium text-[36px] font-generalSans">
            02
          </h4>
          <h1 className="text-white-100 font-semibold text-[48px] font-generalSans">
            Project Name
          </h1>
          <p className="text-white-100 font-medium text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <div className="flex mt-3 gap-3">
            <div className="rounded-3xl px-5 py-2 bg-white-200 flex justify-center items-center">
              <span className="font-medium text-[16px] text-black-300">
                React Js
              </span>
            </div>
            <div className="px-5 py-2 rounded-3xl bg-white-200 flex justify-center items-center">
              <span className="font-medium text-[16px] text-black-300">
                Taiwlind Css
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-32 flex flex-row items-center h-[500px] my-14 w-[1125px] bg-tertiary rounded-[200px] gap-10">
        <div className="w-1/2">
          <h4 className="text-white font-medium text-[36px] font-generalSans">
            03
          </h4>
          <h1 className="text-white-100 font-semibold text-[48px] font-generalSans">
            Project Name
          </h1>
          <p className="text-white-100 font-medium text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <div className="flex mt-3 gap-3">
            <div className="rounded-3xl px-5 py-2 bg-white-200 flex justify-center items-center">
              <span className="font-medium text-[16px] text-black-300">
                React Js
              </span>
            </div>
            <div className="px-5 py-2 rounded-3xl bg-white-200 flex justify-center items-center">
              <span className="font-medium text-[16px] text-black-300">
                Taiwlind Css
              </span>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src={Project3}
            alt="Project3"
            className="w-auto object-contain h-auto rounded-[80px]"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;

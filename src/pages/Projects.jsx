import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "../constants";

const Projects = ({ isDarkMode, setIsDarkMode }) => {
  const darkModeRef = useRef(null);
  const videoRef = useRef(null);
  const { scrollYProgress: darkModeScrollYProgress } = useScroll({
    target: darkModeRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: projectScrollYProgress } = useScroll({
    target: videoRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    darkModeScrollYProgress.on("change", (latest) => {
      if (latest >= 0.07 && latest <= 0.9) {
        setIsDarkMode(true);
      } else {
        setIsDarkMode(false);
      }
    });
  });
  return (
    <motion.section
      id="projects"
      ref={darkModeRef}
      className="pt-24 max-w-7xl mx-auto w-full"
    >
      <div className="paddingX">
        <p className="sl:text-[18px] text-[16px] font-generalSans text-black-200 uppercase font-medium mb-2 sl:mb-5">
          My work
        </p>
        <h1
          className={`text-4xl font-bold font-generalSans ${
            isDarkMode ? "text-white-300" : "text-tertiary"
          } sl:md:text-[60px] uppercase`}
        >
          Projects.
        </h1>
        <p className="md:mt-8 mt-5 md:text-[22px] font-normal text-white-300 max-w-3xl">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively. 🧩
        </p>
      </div>
      <div className="md:my-16 my-10 flex flex-row justify-center gap-10">
        <div className="w-[70%] h-full">
          {projects.map((project, index) => {
            return <ProjctesVideos key={index} {...project} />;
          })}
        </div>
        <div className="w-[30%] h-full">
          {projects.map((project, index) => {
            return <ProjctesTexts key={index} {...project} />;
          })}
        </div>
      </div>
    </motion.section>
  );
};

const ProjctesVideos = ({ video, title }) => {
  return (
    <div className="sticky top-20">
      <motion.div className="w-full">
        <video
          src={video}
          alt={title}
          autoPlay
          loop
          muted
          type="video/mp4"
          className="w-auto h-auto rounded-[20px] relative"
        />
      </motion.div>
    </div>
  );
};
const ProjctesTexts = ({ num, title, body, tags }) => {
  return (
    <div className="h-[88.5vh] flex flex-col justify-center">
      <h4 className="text-white-100 font-medium text-[40px] font-generalSans">
        {num}
      </h4>
      <h1 className="text-white-100 font-semibold text-[35px] font-generalSans">
        {title}
      </h1>
      <p className="font-normal text-white-100 text-[18px]">{body}</p>
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

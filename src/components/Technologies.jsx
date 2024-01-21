import React from "react";
import { technologies } from "../constants";
import { Tech } from "../assets";

const Technologies = ({ isDarkMode }) => {
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
          <div
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;

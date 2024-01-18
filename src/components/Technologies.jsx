import React from "react";
import { technologies } from "../constants";

const Technologies = ({ isDarkMode }) => {
  return (
    <div className="h-screen flex flex-col">
      <h1 className="text-2xl sm:text-3xl text-black-200 font-semibold font-generalSans">
        TECHNOLOGIES
      </h1>
      <p
        className={`sl:text-2xl mt-5 max-w-3xl font-normal ${
          isDarkMode ? "text-white-300" : "text-black-300"
        } duration-500`}
      >
        I always focus on the technologies that help me reach a high level in my
        career as a front-end developer, but I am also proficient in php,
        laravel and also MySQL, but now I am focusing more on these technologies
      </p>
      <div className="py-6 flex flex-wrap gap-5">
        {technologies.map((technology, index) => (
          <div
            key={index}
            className="tech-card md:h-32 md:w-[17rem] h-28 w-40 border-2 rounded-2xl"
          >
            {<technology.icon className="md:w-12 w-8 saturate-0" />}
            <span className="font-generalSans font-medium md:text-[20px] text-black-300">
              {technology.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;

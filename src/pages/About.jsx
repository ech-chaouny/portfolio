import React, { useRef } from "react";
import { Javascript } from "../assets";

const About = () => {
  // const container = useRef(null);
  // const [isInViewport, setIsInViewport] = useState(false);

  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ["start end", "end start"],
  // });
  return (
    <section
      // ref={container}
      id="about"
      className="w-full h-full flex flex-col justify-center"
    >
      <div className="paddingX paddingY h-screen flex flex-col justify-center">
        <h1 className="text-2xl sm:text-3xl text-black-200 font-semibold font-generalSans">
          WHO I'M
        </h1>
        <p className="pt-8 text-3xl sm:text-7xl text-black-100 font-semibold font-generalSans leading-10 sm:leading-tight">
          I'm here to craft user interfaces and web applications that seamlessly
          align with the distinctive concepts and color palettes embedded within
          your creative vision.
        </p>
      </div>
      <div className="paddingX h-screen flex flex-col justify-center items-center">
        <h1 className="text-2xl sm:text-3xl text-black-200 font-semibold font-generalSans">
          TECHNOLOGIES
        </h1>
        <p className="text-2xl mt-8 max-w-[800px] text-center font-[500] text-secondary">
          I always focus on the technologies that help me reach a high level in
          my career as a front-end developer, but I am also proficient in php,
          laravel and also MySQL, but now I am focusing more on these
          technologies
        </p>
        <div className="py-6 flex flex-row justify-center items-center gap-3">
          {/* <div className="py-4 flex gap-2 px-6 bg-tertiary rounded-full">
            <Javascript />
            <span className=" text-white-100 mt-[2px] font-generalSans font-medium text-[18px]">
              JavaScript
            </span>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;

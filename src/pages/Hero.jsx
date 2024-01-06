import React from "react";

const Hero = ({ ...props }) => {
  return (
    <div className="sm:max-w-[80%] max-w-[90%] flex flex-col justify-center items-center text-center">
      <h1
        {...props}
        className="font-black text-secondary font-generalSans xl:leading-[9rem] leading-[3.5rem] xl:text-9xl lg:text-8xl sm:text-7xl text-[50px]"
      >
        HELLO, I'M
        <br />
        <span>ISMAEL UNY</span>
      </h1>
      <p
        {...props}
        className="mt-5 lg:text-3xl sm:text-2xl text-[20px] max-w-[500px] font-generalSans text-secondary font-medium"
      >
        A passionate Front-end Developer devoted to the art of coding.
      </p>
    </div>
  );
};

export default Hero;

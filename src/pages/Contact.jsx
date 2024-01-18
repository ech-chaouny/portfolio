import React from "react";
import { ContactImage, Github, Instagram, Linkedin } from "../assets";

const Contact = ({ isDarkMode }) => {
  return (
    <section id="contact" className="padding max-w-7xl mx-auto">
      <p className="sl:text-[18px] text-[16px] font-generalSans text-black-200 uppercase font-medium mb-2 sl:mb-5">
        GET IN TOUCH
      </p>
      <h1
        className={`mb-14 text-4xl font-bold font-generalSans ${
          isDarkMode ? "text-white-300" : "text-tertiary"
        } sl:md:text-[60px] uppercase`}
      >
        Contact.
      </h1>
      <div className="flex sl:flex-row flex-col justify-center sl:gap-20 gap-14">
        <div className="w-auto h-full flex justify-center">
          <ContactImage className="sl:size-[26rem] size-[16rem] sl:p-8" />
          {/* <h4 className="mt-8 text-[25px] font-semibold text-tertiary tracking-tight">
            Find me on social networks
          </h4> */}
          {/* <div>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 items-center mt-3 mb-3 w-40"
            >
              <Linkedin className="size-[28px]" />
              <span className="text-tertiary font-medium text-[20px] mt-1">
                LinkedIn
              </span>
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 items-center mb-3 w-40"
            >
              <Github className="size-[28px]" />
              <span className="text-tertiary font-medium text-[20px] mt-1">
                Github
              </span>
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 items-center mb-3 w-40"
            >
              <Instagram className="size-[28px]" />
              <span className="text-tertiary font-medium text-[20px] mt-1">
                Instagram
              </span>
            </a>
          </div> */}
        </div>
        {/* <div className="w-[555px] h-[580px] p-14 bg-tertiary rounded-[50px]">
          <h2 className="text-[42px] font-semibold text-white-200 tracking-tight leading-tight">
            I'm always happy to work with you
          </h2>
          <h4 className="mt-8 text-[36px] font-medium text-white-200 tracking-tight leading-10">
            don't be shy! We can bring any idea you have in mind to life
          </h4>
          <h4 className="mt-8 text-[26px] font-semibold text-white-200 tracking-tight">
            Find me on social networks
          </h4>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-3 items-center mt-2 mb-2 w-40"
          >
            <Linkedin className="size-[32px]" />
            <span className="text-white-200 font-medium text-[25px] mt-1">
              LinkedIn
            </span>
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-3 items-center mb-2 w-40"
          >
            <Github className="size-[32px]" />
            <span className="text-white-200 font-medium text-[25px] mt-1">
              Github
            </span>
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-3 items-center mb-2 w-40"
          >
            <Instagram className="size-[32px]" />
            <span className="text-white-200 font-medium text-[25px] mt-1">
              Instagram
            </span>
          </a>
        </div> */}
        <div className="sl:w-1/2 w-full">
          <h2 className="sl:text-[36px] text-[30px] font-semibold text-tertiary tracking-tight leading-8">
            I'm just a few keystrokes away.
          </h2>
          <p className="mt-4 text-[20px] font-normal text-tertiary tracking-tight">
            don't be shy! We can bring any idea you have in mind to life
          </p>
          <form action="" className="mt-5">
            <input
              type="text"
              placeholder="What's your name?*"
              className="h-12 px-6 outline-none placeholder:text-white-300
              text-black-300 bg-white-100 w-full border-2
              border-tertiary rounded-3xl text-[18px]"
            />
            <input
              type="email"
              placeholder="What's your email?*"
              className="mt-5 h-12 px-6 bg-white-100 outline-none placeholder:text-white-300
              text-black-300 w-full border-2
              border-tertiary rounded-3xl text-[18px]"
            />
            <textarea
              rows="5"
              placeholder="What do you want to say?"
              className="mt-5 pt-6 px-6 bg-white-100 outline-none placeholder:text-white-300
              text-black-300 w-full border-2 border-tertiary rounded-[30px] text-[18px]"
            />
            <button
              type="submit"
              className="mt-3 bg-tertiary hover:bg-black-300 duration-300 py-3 px-6 rounded-3xl font-medium text-white-100"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

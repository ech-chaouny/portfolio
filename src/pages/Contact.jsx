import React from "react";
import { Contactsmile, Github, Instagram, Linkedin } from "../assets";

const Contact = ({ isDarkMode }) => {
  return (
    <>
      <h1
        className={`mt-14 text-5xl font-semibold font-generalSans ${
          isDarkMode ? "text-white-300" : "text-tertiary"
        } text-center sl:text-8xl`}
      >
        CONTACT
      </h1>
      <div className="paddingX paddingY flex md:flex-row flex-col items-center justify-center gap-16">
        <div className="w-[555px] border-2 border-white-200 duration-300 hover:border-tertiary p-12 rounded-[40px]">
          <h2 className="text-[42px] font-semibold text-tertiary tracking-tight leading-tight">
            I'm always happy to work with you
          </h2>
          <h4 className="mt-8 text-[30px] font-medium text-tertiary tracking-tight leading-10">
            don't be shy! We can bring any idea you have in mind to life
          </h4>
          <h4 className="mt-8 text-[25px] font-semibold text-tertiary tracking-tight">
            Find me on social networks
          </h4>
          <div className="flex justify-between gap-2">
            <div>
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
            </div>
            {/* <Contactsmile className="w-52" style={{ marginTop: "-3rem" }} /> */}
          </div>
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
        <div className="w-[555px] h-[580px] p-12 border-black bg-white rounded-[40px]">
          <h2 className="text-[40px] font-semibold text-tertiary tracking-tight leading-10">
            I'm just a few keystrokes away.
          </h2>
          <form action="" className="mt-5">
            <input
              type="text"
              placeholder="Your Name"
              className="h-12 px-6 outline-none placeholder:text-white-300
              text-white-100 bg-black-200 w-full border-2
              border-tertiary rounded-3xl text-[18px] font-normal"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="mt-5 h-12 px-6 outline-none placeholder:text-white-300
              text-white-100 bg-black-200 w-full border-2
              border-tertiary rounded-3xl text-[18px] font-normal"
            />
            <textarea
              rows="5"
              placeholder="What do you want to say?"
              className="mt-5 pt-6 px-6 outline-none placeholder:text-white-300
              text-white-100 bg-black-200 w-full border-2
              border-tertiary rounded-[40px] text-[18px]"
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
    </>
  );
};

export default Contact;

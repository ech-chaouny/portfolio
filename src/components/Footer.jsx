import React from "react";
import { BackTop, Github, Instagram, Linkedin } from "../assets";

const Footer = ({ backTop }) => {
  return (
    <>
      <div className="flex flex-col sl:justify-between sl:flex-row justify-center bg-white-200 items-center text-[16px] py-8 sl:px-24 gap-4">
        <span className="font-generalSans font-medium text-secondary">
          Website designed by @me
        </span>
        <div className="font-generalSans font-semibold text-secondary">
          ©{" "}
          <span className="font-generalSans font-medium text-secondary">
            2024{" "}
          </span>
          ISMAEL ECH-CHAOUNY
        </div>
        <div className="flex gap-4">
          <a href="">
            <Linkedin className="size-5" />
          </a>
          <a href="">
            <Github className="size-5" />
          </a>
          <a href="">
            <Instagram className="size-5" />
          </a>
        </div>
      </div>
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed right-0 pb-5 pr-5 bottom-0 cursor-pointer ${
          backTop ? "flex" : "hidden"
        }`}
      >
        {/* <span>Back to top</span> */}
        <BackTop className="lg:w-10 w-8 h-auto" />
      </div>
    </>
  );
};

export default Footer;

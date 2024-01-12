import React from "react";
import { BackTop } from "../assets";

const Footer = () => {
  return (
    <div className="flex flex-row justify-between items-center py-5 px-10">
      <span className="font-generalSans font-medium text-[18px] text-secondary">
        Website designed by @me
      </span>
      <div className="font-generalSans font-semibold text-[18px] text-secondary">
        ©{" "}
        <span className="font-generalSans font-normal text-[18px] text-secondary">
          2024{" "}
        </span>
        ISMAEL ECH-CHAOUNY
      </div>
      <a
        href="#hero"
        className="flex items-center gap-3 font-generalSans font-semibold text-[18px] text-secondary"
      >
        <span>Back to top</span>
        <BackTop />
      </a>
    </div>
  );
};

export default Footer;

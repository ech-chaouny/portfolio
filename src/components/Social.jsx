import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import {
  Github,
  GithubW,
  Instagram,
  InstagramW,
  Linkedin,
  LinkedinW,
} from "../assets";
import Magent from "./Magent";

const Social = forwardRef(function index(props, ref) {
  return (
    <motion.div
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ delay: 3, duration: 1 }}
      ref={ref}
      className="xl:flex hidden flex-col w-auto h-auto fixed bottom-0 left-0 ml-12 mb-16 gap-9"
    >
      <Magent>
        <a href="">
          {!props.isDarkMode ? (
            <Linkedin className="size-5" />
          ) : (
            <LinkedinW className="size-5" />
          )}
        </a>
      </Magent>
      <Magent>
        <a href="">
          {!props.isDarkMode ? (
            <Instagram className="size-5" />
          ) : (
            <InstagramW className="size-5" />
          )}
        </a>
      </Magent>
      <Magent>
        <a href="">
          {!props.isDarkMode ? (
            <Github className="size-5" />
          ) : (
            <GithubW className="size-5" />
          )}
        </a>
      </Magent>
    </motion.div>
  );
});

export default Social;

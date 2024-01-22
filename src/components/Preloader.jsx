import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp } from "../utils/motion";

const words = ["Hello", "I'm", "Ismael", "Ech", "Chaouny"];

const Preloader = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index == words.length - 1) return;

    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150
    );
  }, [index]);

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="flex flex-col gap-5 fixed w-full h-screen z-50 top-0 left-0 justify-center items-center bg-secondary"
    >
      <motion.p
        variants={opacity(1)}
        initial="initial"
        animate="enter"
        className="font-generalSans text-white text-4xl font-medium"
      >
        {words[index]}
      </motion.p>
    </motion.div>
  );
};

export default Preloader;

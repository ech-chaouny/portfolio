import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = ({ cursorVariant }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const mouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };
  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  });
  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
    },
    textHover: {
      width: 150,
      height: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "#EBEBEA",
      mixBlendMode: "difference",
    },
    buttonHover: {
      width: 100,
      height: 100,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      backgroundColor: "#EBEBEA",
      mixBlendMode: "difference",
    },
  };
  return (
    <motion.div
      variants={variants}
      animate={cursorVariant}
      transition={{
        type: "tween",
        ease: "backOut",
      }}
      className="cursor"
    />
  );
};

export default Cursor;

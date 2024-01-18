import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = ({ stickyElement, socialElement }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [socialHovred, setSocialHovred] = useState(false);
  const cursorSize = isHovered ? 200 : socialHovred ? 40 : 20;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),

    y: useSpring(mouse.y, smoothOptions),
  };
  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };
  const mouseOver = (e) => {
    setIsHovered(true);
  };
  const mouseLeave = (e) => {
    setIsHovered(false);
  };
  const mouseSOver = (e) => {
    setSocialHovred(true);
  };
  const mouseSLeave = (e) => {
    setSocialHovred(false);
  };
  useEffect(() => {
    document.body.style.cursor = isHovered ? "none" : "auto";

    window.addEventListener("mousemove", mouseMove);
    stickyElement.current.addEventListener("mouseover", mouseOver);
    stickyElement.current.addEventListener("mouseleave", mouseLeave);
    socialElement.current.addEventListener("mouseover", mouseSOver);
    socialElement.current.addEventListener("mouseleave", mouseSLeave);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      stickyElement.current.removeEventListener("mouseover", mouseOver);
      stickyElement.current.removeEventListener("mouseleave", mouseLeave);
      socialElement.current.removeEventListener("mouseover", mouseSOver);
      socialElement.current.removeEventListener("mouseleave", mouseSLeave);
    };
  });
  return (
    <motion.div
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
      }}
      animate={{
        width: cursorSize,
        height: cursorSize,
        mixBlendMode: isHovered
          ? "difference"
          : socialHovred
          ? "difference"
          : "",
        backgroundColor: isHovered ? "white" : socialHovred ? "white" : "",
      }}
      className="cursor lg:flex hidden"
    />
  );
};

export default Cursor;

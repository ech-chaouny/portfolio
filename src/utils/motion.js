export const slideUp = {
  initial: {
    y: "0",
  },
  exit: {
    y: "-100vh",
    transition: {
      duration: 0.8,
      ease: [0.75, 0, 0.24, 1],
      delay: 0.2,
    },
  },
};
export const opacity = (duration) => {
  return {
    initial: {
      opacity: 0,
    },

    enter: {
      opacity: 1,

      transition: { duration: duration, delay: 0.2 },
    },
  };
};
export const slideUphero = {
  initial: {
    y: "100%",
  },

  enter: (i) => ({
    y: "0%",
    transition: {
      duration: 0.5,
      delay: 0.02 * i,
    },
  }),

  closed: {
    y: "100%",
    transition: { duration: 0.5 },
  },
};

export const slideUpAbout = {
  initial: {
    y: "100%",
  },

  open: (i) => ({
    y: "0%",
    transition: {
      duration: 0.5,
      delay: 0.02 * i,
    },
  }),

  closed: {
    y: "100%",
    transition: { duration: 0.5 },
  },
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#F5F3EF",
        "white-100": "#EBEBEA",
        "white-200": "#D7D7D5",
        "white-300": "#B0B0AB",
        "white-400": "#92928B",
        "black-100": "#7E7E77",
        "black-200": "#696963",
        "black-300": "#4A4A45",
        tertiary: "#20201D",
        secondary: "#151514",
        primary: "#0A0A0A",
      },
      fontFamily: {
        generalSans: ["General Sans", "sans-serif"],
        LeagueSpartan: ["League Spartan", "sans-serif"],
      },
      screens: {
        xs: "470px",
        sl: "850px",
      },
    },
  },
  plugins: [],
};

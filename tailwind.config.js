/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A0A0A",
        secondary: "#151514",
        tertiary: "#20201D",
        "black-100": "#7E7E77",
        "black-200": "#696963",
        "black-300": "#4A4A45",
        "white-100": "#EBEBEA",
        "white-200": "#D7D7D5",
        "white-300": "#B0B0AB",
        "white-400": "#92928B",
      },
      fontFamily: {
        generalSans: ["General Sans", "sans-serif"],
        LeagueSpartan: ["League Spartan", "sans-serif"],
      },
      screens: {
        xs: "470px",
        sl: "860px",
      },
    },
  },
  plugins: [],
};

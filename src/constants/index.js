import {
  Css,
  Html,
  Javascript,
  TypeScript,
  Reactjs,
  Sass,
  Nextjs,
  Tailwindcss,
  GTA,
  Agency,
  GTA1,
} from "../assets";

export const technologies = [
  {
    icon: Javascript,
    name: "JavaScript",
    type: "Frontend",
  },

  {
    icon: TypeScript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    icon: Reactjs,
    name: "React JS",
    type: "Frontend",
  },

  {
    icon: Nextjs,
    name: "Next JS",
    type: "Frontend",
  },

  {
    icon: Tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    icon: Sass,
    name: "Sass",
    type: "Frontend",
  },
];

export const projects = [
  {
    url: "https://www.github/echchaouny.com",
    num: "01",
    video: GTA,
    title: "GTA 6 Website",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    tags: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
  },

  {
    url: "https://www.github.com",
    num: "02",
    video: Agency,
    title: "Landing page agency",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    tags: [
      {
        name: "Next Js",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
  },

  {
    url: "www.facebook.com",
    num: "03",
    video: GTA1,
    title: "GTA 6 Website",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
  },
];

export const navLinks = [
  { title: "Home", link: "#hero" },
  { title: "About", link: "#about" },
  { title: "Projects", link: "#projects" },
  { title: "Contact", link: "#contact" },
];

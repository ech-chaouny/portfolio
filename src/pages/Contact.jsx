import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import { ContactImage } from "../assets";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
import {
  fadeIn,
  slideIn,
  slideUpAbout,
  staggerContainer,
} from "../utils/motion";

const Contact = ({ isDarkMode }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const formRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (form.name !== "" && form.email !== "" && form.message !== "") {
      setIsLoading(true);
      emailjs
        .send(
          "service_7paqlg3",
          "template_iltvgni",
          {
            from_name: form.name,
            to_name: "Ismael",
            from_email: form.email,
            to_email: "chaouniismail4@gmail.com",
            message: form.message,
          },
          "0q_Iq6Z0DvP-5R7zg"
        )
        .then(
          () => {
            setIsLoading(false);
            setForm({ name: "", email: "", message: "" });
            showAlert({
              show: true,
              text: "Thank you. I will reply you as soon as possible.",
              type: "success",
            });
            setTimeout(() => {
              hideAlert();
            }, [3000]);
          },
          (error) => {
            setIsLoading(false);
            console.log(error);
            showAlert({
              show: true,
              text: "something went wrong. Please try again",
              type: "danger",
            });
          }
        );
    } else {
      showAlert({
        show: true,
        text: "Don't leave anything empty, please?",
        type: "danger",
      });
      setTimeout(() => {
        hideAlert();
      }, [3000]);
    }
  };
  return (
    <section id="contact" className="paddingX pb-16 max-w-7xl mx-auto">
      {alert.show && <Alert {...alert} />}
      <p className="sl:text-[18px] text-[16px] font-generalSans text-black-200 uppercase font-medium mb-2 sl:mb-5">
        GET IN TOUCH
      </p>
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="overflow-hidden py-2"
      >
        <motion.h1
          variants={slideIn("up", "tween", 0, 0.5)}
          className={`text-4xl font-bold font-generalSans ${
            isDarkMode ? "text-white-300" : "text-tertiary"
          } sl:md:text-[60px] uppercase `}
        >
          Contact.
        </motion.h1>
      </motion.div>
      <div className="mt-14 flex sl:flex-row flex-col justify-center sl:gap-20 gap-14">
        <motion.div
          variants={fadeIn("up", "", 0.2, 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="w-auto h-full flex justify-center"
        >
          <ContactImage className="sl:size-[26rem] size-[16rem] sl:p-8" />
        </motion.div>
        {/* <div className="w-[555px] h-[580px] p-14 bg-tertiary rounded-[50px]">
          <h2 className="text-[42px] font-semibold text-white-200 tracking-tight leading-tight">
            I'm always happy to work with you
          </h2>
          <h4 className="mt-8 text-[36px] font-medium text-white-200 tracking-tight leading-10">
            don't be shy! We can bring any idea you have in mind to life
          </h4>
          <h4 className="mt-8 text-[26px] font-semibold text-white-200 tracking-tight">
            Find me on social networks
          </h4>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-3 items-center mt-2 mb-2 w-40"
          >
            <Linkedin className="size-[32px]" />
            <span className="text-white-200 font-medium text-[25px] mt-1">
              LinkedIn
            </span>
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-3 items-center mb-2 w-40"
          >
            <Github className="size-[32px]" />
            <span className="text-white-200 font-medium text-[25px] mt-1">
              Github
            </span>
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-3 items-center mb-2 w-40"
          >
            <Instagram className="size-[32px]" />
            <span className="text-white-200 font-medium text-[25px] mt-1">
              Instagram
            </span>
          </a>
        </div> */}
        <div className="sl:w-1/2 w-full">
          <h2 className="sl:text-[36px] text-[30px] font-semibold text-tertiary tracking-tight leading-8">
            I'm just a few keystrokes away.
          </h2>
          <p className="mt-4 text-[20px] font-normal text-tertiary tracking-tight">
            don't be shy! We can bring any idea you have in mind to life
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="mt-5">
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="What's your name?*"
              className="h-12 px-6 outline-none placeholder:text-white-300
              text-black-300 bg-white w-full border-2
              border-tertiary rounded-3xl text-[18px]"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="What's your email?*"
              className="mt-5 h-12 px-6 bg-white outline-none placeholder:text-white-300
              text-black-300 w-full border-2
              border-tertiary rounded-3xl text-[18px]"
              onChange={handleChange}
            />
            <textarea
              rows="5"
              name="message"
              value={form.message}
              placeholder="What do you want to say?"
              className="mt-5 pt-6 px-6 bg-white outline-none placeholder:text-white-300
              text-black-300 w-full border-2 border-tertiary rounded-[30px] text-[18px]"
              onChange={handleChange}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="mt-3 bg-tertiary hover:bg-black-300 duration-300 py-3 px-6 rounded-3xl font-medium text-white-100"
            >
              {!isLoading ? "Send Message" : "Sending..."}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

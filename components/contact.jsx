"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import SectionHeading from "./section-heading";
import { useSectionInView } from "../lib/hooks";
import emailjs from "@emailjs/browser";
import { EXTRA_LINKS } from "../constants/index";

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    const { name, email, message } = form;
    if (name.trim().length < 3) {
      toast.error("Invalid Name");
      return false;
    }

    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.trim().toLowerCase().match(emailRegex)) {
      toast.error("Invalid E-mail");
      return false;
    }

    if (message.trim().length < 5) {
      toast.error("Invalid Message");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
      form,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ).then(() => {
      toast.success("Thank You. I will get back to you as soon as possible.");
    }).catch((error) => {
      console.log(error);
      toast.error("Sorry. Something went wrong.");
    }).finally(() => {
      setLoading(false);
      setForm({
        name: "",
        email: "",
        message: "",
      });
    });
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 text-center w-[min(100%,38rem)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>My contact</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at my <Link className="underline" href={`mailto:${EXTRA_LINKS.email}`}>e-mail</Link> or through this form.
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        autoComplete="off"
        autoCapitalize="off"
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          id="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          className="h-14 rounded-lg px-4 borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          required
          maxLength={200}
          autoComplete="off"
          autoCapitalize="off"
        />
        <input
          type="email"
          name="email"
          id="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your email"
          className="h-14 rounded-lg my-4 px-4 borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          required
          maxLength={100}
          autoComplete="off"
          autoCapitalize="off"
        />
        <textarea
          name="message"
          id="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your message"
          className="h-52 rounded-lg mb-4 borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          required
          maxLength={500}
        />
        <button
          type="submit"
          className="group flex self-center sm:self-start items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950 disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10"
          disabled={loading}
        >
          {loading ? (
            <span className="h-5 w-5 animate-spin rounded-full border-b-2 border-white" />
          ) : (
            <>
              Submit <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </>
          )}
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;

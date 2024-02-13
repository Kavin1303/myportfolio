import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import carhubImg from "../public/carhub.png";
import ecommerceImg from "../public/ecommerce.png";


// Navigation links
export const LINKS = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

// External links
export const EXTRA_LINKS = {
  linkedin: "https://www.linkedin.com/in/kavin-prasath-18b2b224a/",
  github: "https://github.com/Kavin1303",
  resume: "/resume.pdf",
  source_code: "https://github.com/Kavin1303/portfolio",
  email: "jkavinprasath1303@gmail.com",
};

// Data for work experience
export const EXPERIENCES_DATA = [
  {
    title: "Web Development Bootcamp",
    location: "IIITA, Prayagraj, Uttar Pradesh, IN",
    description:
      "Successfully completed an intensive 1-month Web Development Bootcamp. Acquired expertise in React components, state management with Redux, Creating and interacting with RESTful APIs.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Teaching Assitant",
    location: "IIITA,Prayagraj, Uttar Pradesh, IN",
    description:
      "Working as a TEaching Assitant to professors and provideng them in assitance for organizing and conduting lab and tutorial sessions for Physics and Python",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
];

// Data for projects
export const PROJECTS_DATA = [
  {
    title: "ECommerce Store",
    description:
      "A MERN stack based eCommerce store that allows users to order different products amd post reviews. It supports real-time payments using Stripe.",
    tags: ["React", "Node.js", "MongoDB", "Express", "React Router", "Stripe"],
    imageUrl: ecommerceImg,
    projectUrl: "https://ecommerce-app-next.vercel.app/",
  },
  {
    title: "Parkinson Disease Prediction",
    description:
      "A Machine learning model to predict parkinson disease based on patient's voice data analysis",
    tags: ["Python","Pandas","Logistic Regression","K-Nearest Neighbour","Random Forest"],
    imageUrl: carhubImg,
    projectUrl: "https://carhb.vercel.app/",
  },
];

// Data for skills
export const SKILLS_DATA = [
  "C++",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Git",
  "MongoDB",
  "Redux",
  "Express",
  "SQL",
  "Python",
  "Framer Motion",
  "Operating Systems",
  "Database Management System",
  "Data Structures and Algorithms",
  "Computer Networks",
  "Object Oriented Programming",
  "Low Level Design",
  "System Design"
];

export const OWNER_NAME = "Kavin Prasath J";

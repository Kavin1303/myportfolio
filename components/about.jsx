// client-side component
"use client";

// Import necessary dependencies and components.
import { motion } from "framer-motion";

import SectionHeading from "./section-heading";
import { useSectionInView } from "../lib/hooks";

// Define the About component.
const About = () => {
  // Use the useSectionInView custom hook to track when the "About" section is in view.
  const { ref } = useSectionInView("About");

  // Return the About section, which uses framer-motion for animations.
  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      {/* Display the section heading for "About me." */}
      <SectionHeading>About me</SectionHeading>

      {/* Display a paragraph with information about the user's background and interests. */}
      <p>
        Following my graduation with a bachelor's degree, my journey led me to delve deeper into 
        the world of technology. Fueled by a burgeoning passion for software development, 
        I embarked on an M.Tech program at IIITA, supplementing my formal education with bootcamps 
        and online courses to master <b>full-stack web development</b>. 
        The allure of programming for me lies in the thrill of problem-solving.
        there's an unparalleled satisfaction in unraveling complex challenges. 
        My expertise lies in <b>Backend Development</b>. 
        Beyond these, I venture into the realms of competitive programming with C++ and Python, and I'm also deeply fascinated by the potentials of <i>machine learning and deep learning</i>.
        I'm on a constant quest to expand my technical skills, seeking a <b>Oppurtunity</b> 
        where I can contribute my skills as a software developer and continue to grow.
      </p>

      {/* Display another paragraph about the user's interests and hobbies. */}
      <p>
        <i className="italic">When I'm not coding</i>, I enjoy playing video
        games, watching movies, reading books(particulary Science fiction and fantasy genre). I also enjoy{" "}
        <b className="font-medium">learning new things</b>. I am currently
        learning about <b className="font-medium">Greek Mythology</b>.
      </p>
    </motion.section>
  );
};

// Export the About component.
export default About;

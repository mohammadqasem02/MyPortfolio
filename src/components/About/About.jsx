import "remixicon/fonts/remixicon.css";
import "./About.css";
import { motion } from "framer-motion";

export const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const descVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="about section" id="about">
      <motion.div
        className="about__container container grid"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <motion.h2
          className="section__title-1"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
        >
          About Me.
        </motion.h2>

        <motion.div
          className="about__info"
          variants={descVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
        >
          <p className="about__desc">
            As a recent graduate with a passion for web development, I hold a
            patent for simplifying user experiences. I’m eager to apply my
            skills to build intuitive web and mobile applications. I’m a skilled
            full-stack developer with a strong foundation in HTML, CSS, and
            JavaScript. I’m proficient in responsive design, using frameworks
            like Bootstrap and Tailwind CSS, and libraries like jQuery and
            React. I have developed backend solutions with C#, .NET Core, and
            MVC technologies. Additionally, I have experience designing APIs for
            smooth data interactions and working with MySQL and SQL Server
            Management Studio for data storage and retrieval.
          </p>

          <div className="about__buttons">
            <a href="#contact" className="button">
              <i className="ri-send-plane-line" /> Contact Me
            </a>
            <a
              href="https://www.linkedin.com/in/mohammad-qasem-0558592b2/"
              target="_blank"
              rel="noopener noreferrer"
              className="button__ghost"
            >
              <i className="ri-linkedin-line" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

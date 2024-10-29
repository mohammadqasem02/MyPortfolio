import "./Project.css";
import projects from "./ProjectData";
import { motion } from "framer-motion";

const projectVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.1,
    },
  }),
  hover: {
    scale: 1.05,
    boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
  },
};

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title-1">
        <span>Projects . </span>
      </h2>
      <div className="proj__container container grid">
        {projects.map((project, index) => (
          <motion.article
            className="proj__card"
            key={project.id}
            variants={projectVariants}
            initial="hidden"
            animate="visible"
            custom={index}
            whileHover="hover" // Apply hover effect
          >
            <div className="proj__image">
              <img
                src={project.image}
                alt={project.title}
                className="proj__img"
              />
              <a
                href={project.link}
                className="proj__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-arrow-right-up-line" />
              </a>
            </div>
            <div className="proj__content">
              <h3 className="proj__subtitle">Website</h3>
              <h2 className="proj__title">{project.title}</h2>
              <p className="proj__desc">{project.description}</p>
            </div>
            <div className="proj__buttons">
              <a
                href="https://github.com/mohammadqasem02"
                target="_blank"
                className="proj__link"
                rel="noopener noreferrer"
              >
                <i className="ri-github-line" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
export default Projects;

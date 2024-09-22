import "remixicon/fonts/remixicon.css";
import "./Home.css";
import { motion } from "framer-motion";

export const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="home section" id="home">
      <motion.div
        className="home__container container grid"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <h1 className="home__name">Mohammad Qasem</h1>

        <div className="home__perfil">
          <div className="home__image" />

          <div className="home__social">
            <a href="#" className="home__social-link">
              <i className="ri-instagram-line" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammad-qasem-0558592b2/"
              className="home__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-linkedin-box-line" />
            </a>
            <a
              href="https://github.com/mohammadqasem02?tab=repositories"
              className="home__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-github-line" />
            </a>
          </div>
        </div>

        <div className="home__info">
          <p className="home__desc">
            I`m a skilled full-stack developer with a strong foundation in HTML,
            CSS, and JavaScript. I have developed backend solutions with C#,
            .NET Core, and MVC technologies.
          </p>
          <a href="#about" className="home__scroll">
            <div className="home__scroll-box">
              <i className="ri-arrow-down-s-line" />
            </div>
            <span className="home__scroll-text">Scroll Down</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

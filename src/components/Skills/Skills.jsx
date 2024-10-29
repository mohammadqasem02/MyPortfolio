import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaDatabase,
  FaReacteurope,
} from "react-icons/fa";
import { SiDotnet, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import "./Skills.css";

const CsharpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    fill="#239120"
    width="48px"
    height="48px"
  >
    <path d="M24,1L1,13v22l23,12l23-12V13L24,1z M24,3.1L44.3,14L24,24.9L3.7,14L24,3.1z M22,26.1L4,16v16L22,45V26.1z M26,45L44,32V16L26,26.1V45z" />
    <text x="15" y="32" fill="white" fontSize="12" fontWeight="bold">
      C#
    </text>
  </svg>
);

const skills = [
  { name: "HTML5", level: 100, icon: <FaHtml5 /> },
  { name: "CSS", level: 98, icon: <FaCss3Alt /> },
  { name: "JavaScript", level: 98, icon: <FaJsSquare /> },
  { name: "React", level: 90, icon: <FaReact /> },
  { name: "Bootstrap", level: 100, icon: <FaBootstrap /> },
  { name: "Tailwind", level: 100, icon: <SiTailwindcss /> },
  { name: "jQuery", level: 65, icon: <FaJsSquare /> },
  { name: "SQL-DB", level: 85, icon: <FaDatabase /> },
  { name: "C#", level: 85, icon: <CsharpIcon /> },
  { name: "ASP.NET Core", level: 90, icon: <SiDotnet /> },
  { name: "ASP.NET MVC", level: 95, icon: <SiDotnet /> },
  { name: "React Native", level: 80, icon: <FaReacteurope /> },
];

export const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills__container container">
        <h2 className="section__title-2">My Skills</h2>
        <div className="skills">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="skill-card__icon">{skill.icon}</div>
              <h3 className="skill-card__title">{skill.name}</h3>
              <div className="skill-card__bar">
                <div
                  className="skill-card__level"
                  style={{ "--skill-level-width": `${skill.level}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

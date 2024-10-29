import "./Certificates.css";
import c1 from "../../../assets/images/Asp-core0Certificate.jpg";
import c2 from "../../../assets/images/critificate react.jpg";
import c3 from "../../../assets/images/Cirteficate-StepByStep2-1.png";
import c4 from "../../../assets/images/frontend_developer_react certificate-1.png";
import c5 from "../../../assets/images/javascript_intermediate certificate-1.png";
const certificates = [
  {
    id: 1,
    image: c1,
    title: "AspCore Development Certificate",
    from: "Udemy",
    link: "https://www.udemy.com/course/aspnet-core-development/",
  },
  {
    id: 2,
    image: c2,
    title: "React JS Certification",
    from: "Udemy",
    link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
  },
  {
    id: 3,
    image: c3,
    title: "Full Stack Certificate",
    from: "Step By Step",
  },
  {
    id: 4,
    image: c4,
    title: "React JS Certification",
    from: "Hacker Rank",
  },
  {
    id: 5,
    image: c5,
    title: "JavaScript Certificate",
    from: "Hacker Rank",
  },
];

export const Certificates = () => {
  return (
    <section className="certificates section" id="certificates">
      <h2 className="section__title">Certificates</h2>
      <div className="certificates__container">
        {certificates.map((certificate) => (
          <div className="certificate__card" key={certificate.id}>
            <a
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate__link"
            >
              <img src={certificate.image} className="certificate__image" />
              <div className="certificate__details">
                <h3 className="certificate__title">{certificate.title}</h3>
                <p className="certificate__from">{certificate.from}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

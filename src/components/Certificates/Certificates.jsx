import "./Certificates.css";
import c1 from "../../../assets/images/Asp-core0Certificate.jpg";
import c2 from "../../../assets/images/critificate react.jpg";
const certificates = [
  {
    id: 1,
    image: c1,
    title: "AspCore Development Certificate",
    from: "Udemy",
    link: "https://www.udemy.com/course/aspnet-core-development/", // Example link
  },
  {
    id: 2,
    image: c2,
    title: "React JS Certification",
    from: "Udemy",
    link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/", // Example link
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

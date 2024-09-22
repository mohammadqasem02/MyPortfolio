import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <ul className="footer__links">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="footer__link">
              Services
            </a>
          </li>
          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>
        </ul>
        <span className="footer__copy">
          © All Rights Reserved By Mohammad Qasem
        </span>
      </div>
    </footer>
  );
};

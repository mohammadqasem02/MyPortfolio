import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";
import "remixicon/fonts/remixicon.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
    closeMenu();
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1151) {
        setIsMobile(false);
        closeMenu();
      } else {
        setIsMobile(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <span className="nav__logo-circle">M</span>
          <span className="nav__logo-name">Mohd Qas.</span>
        </a>
        <div
          className={`nav__menu ${menuOpen && isMobile ? "open" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            {[
              "home",
              "about",
              "skills",
              "certificates",
              "projects",
              "contact",
            ].map((item) => (
              <motion.li
                key={item}
                className={`nav__item ${activeItem === item ? "active" : ""}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.a
                  href={`#${item}`}
                  className="nav__link"
                  onClick={() => handleItemClick(item)}
                  whileHover={{ color: "#ff6347" }} // Change color on hover
                  transition={{ duration: 0.2 }} // Transition for color change
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.a>
              </motion.li>
            ))}
          </ul>
          {isMobile && (
            <div className="nav__close" id="nav-close" onClick={closeMenu}>
              <i className="ri-close-line ri" />
            </div>
          )}
        </div>

        {isMobile && (
          <div className="nav__buttons">
            <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
              <i className="ri-menu-4-line ri" />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

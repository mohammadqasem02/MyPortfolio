import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import "./Contact.css";

export const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_edg3d6x",
        "template_l35safn",
        form.current,
        "zGyPUWJSmye6OVkW5"
      )
      .then(
        () => {
          setMessage("Message sent successfully ✅");
          setTimeout(() => {
            setMessage(""); // Remove message after 4 seconds
          }, 4000);
          form.current.reset(); // Reset the form
        },
        () => {
          setMessage("Message not sent (service error) ❌");
        }
      );
  };

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.2 },
    },
  };

  return (
    <motion.section
      className="contact section"
      id="contact"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="contact__container grid">
        <div className="contact__data">
          <h2 className="section__title-2">
            <span>Contact Me .</span>
          </h2>
          <p className="contact__desc-1">
            I will read all emails. Send me any message you want and I`ll get
            back to you.
          </p>
          <p className="contact__desc-2">
            I need your <b>Name</b> and <b>Email Address</b>, but you won`t
            receive anything other than your reply.
          </p>
          <div className="geometric-box" />
        </div>
        <motion.div
          className="contact__mail"
          variants={formVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="contact__title">Send Me A Message</h2>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact__form"
            id="contact-form"
          >
            <div className="contact__group">
              <div className="contact__box">
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="contact__input"
                  required
                  placeholder="First Name"
                />
                <label htmlFor="name" className="contact__label">
                  First Name
                </label>
              </div>
              <div className="contact__box">
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className="contact__input"
                  required
                  placeholder="Email Address"
                />
                <label htmlFor="email" className="contact__label">
                  Email Address
                </label>
              </div>
            </div>
            <div className="contact__box contact__area">
              <input
                type="text"
                id="subject"
                name="user_subject"
                className="contact__input"
                required
                placeholder="Subject"
              />
              <label htmlFor="subject" className="contact__label">
                Subject
              </label>
            </div>
            <div className="contact__box contact__area">
              <textarea
                name="user_message"
                id="message"
                className="contact__input"
                required
                placeholder="Message"
              />
              <label htmlFor="message">Message</label>
            </div>
            <p className="contact__message" id="contact-message">
              {message}
            </p>
            <button type="submit" className="contact__button button">
              <i className="ri-send-plane-line" /> Send Message
            </button>
          </form>
        </motion.div>
        <div className="contact__social">
          <div className="contact__social-data">
            <div>
              <p className="contact__social-desc-1">Does not send emails</p>
              <p className="contact__social-desc-2">
                Write me on my social networks
              </p>
            </div>
            <div className="contact__social-links">
              <a
                href="https://web.facebook.com/mohammad.qasem.98478/"
                target="_blank"
                rel="noreferrer"
                className="contact__social-link"
              >
                <i className="ri-facebook-circle-line" />
              </a>
              <a
                href="https://www.instagram.com/lightlink24?igsh=ZjY3aGNwM3plNXgy"
                target="_blank"
                rel="noreferrer"
                className="contact__social-link"
              >
                <i className="ri-instagram-line" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohammad-qasem-0558592b2/"
                target="_blank"
                rel="noreferrer"
                className="contact__social-link"
              >
                <i className="ri-linkedin-box-line" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

import React, { useContext } from "react";
import { GlobalContext } from "./utils/global.context";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const { state } = useContext(GlobalContext);
  const { theme } = state;

  return (
    <footer className={`footer ${theme}`}>
      <div className="footer-container">
        <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/images/DH.png`} alt="Logo" />
        </div>
        <div className="social-icons">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="social-icon" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="social-icon" />
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok className="social-icon" />
          </a>
          <a
            href="https://www.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

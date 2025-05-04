import React from "react";
import "./Footer.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container py-10 px-6 md:px-10 text-center md:text-left">
      {/* Top Border and Title */}
      <div className="footer-title-container border-t-2 border-gray-300 pt-6 md:pt-10">
        <h1 className="footer-title text-3xl md:text-4xl font-bold text-gray-800 mb-2">Sustainable Bhava</h1>
        <div className="footer-divider bg-gray-300 mx-auto md:mx-0 mb-6 w-16 h-1 rounded"></div>
      </div>

      {/* Social Icons */}
      <div className="footer-social-icons flex justify-center md:justify-start space-x-6 text-gray-800 mt-4">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors duration-300">
          <FaInstagram className="text-3xl md:text-4xl" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors duration-300">
          <FaLinkedin className="text-3xl md:text-4xl" />
        </a>
      </div>
    </div>
  );
};

export default Footer;

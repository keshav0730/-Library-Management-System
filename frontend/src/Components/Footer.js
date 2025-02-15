import React from "react";
import "./Footer.css";
import { FaTwitter, FaLinkedin, FaTelegram, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Contact Section */}
        <div className="footer-section">
          <h2>📌 Contact Us</h2>
          <p><b>Librarian</b></p>
          <p>Government School</p>
          <p>Madhubani - 847401, Bihar</p>
          <p>India</p>
          <p><b>Email:</b> kumarmishra0301@gmail.com</p>
        </div>

        {/* Useful Links Section */}
        <div className="footer-section">
          <h2>🔗 Useful Links</h2>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Librarian Section */}
        <div className="footer-section">
          <h2>📖 Librarian</h2>
          <p><b>Name:</b> Keshav K Mishra </p>
          <p><b>Education:</b> Master's in Library Science</p>
          <p><b>Contact:</b> +91 7783843737</p>
        </div>

        {/* Social Links Section */}
        <div className="footer-section social-section">
          <h2>📲 Follow Us</h2>
          <div className="social-icons">
            <a href="https://x.com/KeshavMishra07" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="icon twitter" />
            </a>
            <a href="https://www.linkedin.com/in/keshav-k-mishra-b3089b165/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon linkedin" />
            </a>
            <a href="https://web.telegram.org/a/#8081464056" target="_blank" rel="noopener noreferrer">
              <FaTelegram className="icon telegram" />
            </a>
            <a href="https://www.instagram.com/keshav0730" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon instagram" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} All rights reserved | Designed with ❤️ by <b>Keshav K Mishra</b>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

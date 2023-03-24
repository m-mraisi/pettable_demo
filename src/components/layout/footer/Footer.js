/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <ul className="social-icons">
        <li>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <AiFillFacebook />
          </a>
        </li>
        <li>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <AiOutlineTwitter />
          </a>
        </li>
        <li>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <AiFillInstagram />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <AiFillLinkedin />
          </a>
        </li>
      </ul>
      <div className="terms-container">
        <p className="copy">
          &copy; {currentYear} Pettable. All rights reserved.
        </p>
        <nav class="links">
          <a href="#">Terms Of Use</a>
          <a href="#">Privacy Policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

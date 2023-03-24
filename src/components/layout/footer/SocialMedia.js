import React from "react";
import "./SocialMedia.css";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const SocialMedia = () => {
  return (
    <footer className="footer-social">
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
    </footer>
  );
};

export default SocialMedia;

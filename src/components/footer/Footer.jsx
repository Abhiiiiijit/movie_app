// import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Copyright | 2023 | @abhiiiiiijeet
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaInstagram />
          </span> 
          <span className="icon">
            <FaLinkedin />
          </span>
          <span className="icon">
            <FaGithub/>
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;

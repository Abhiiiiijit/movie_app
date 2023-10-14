// import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms and Condition</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        {/* <div className="infoText"></div> */}
        <div className="infoText">Copyright | 2023 | @abhiiiiiijeet</div>
        <div className="socialIcons">
          <span className="iconInsta">
            <FaInstagram />
          </span>
          <span className="iconLinkedin">
            <FaLinkedin />
          </span>
          <span className="iconGitHub">
            {/* <a href="https://www.google.com">
              <button> */}
            <FaGithub />
            {/* </button>
            </a> */}
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;

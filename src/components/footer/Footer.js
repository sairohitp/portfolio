import React from "react";
import FooterCSS from "./Footer.module.css";

import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";


const Footer = () => {
  return (
    <div id={FooterCSS.supernav}>
        <nav className={FooterCSS.flex}>
          <span className="material-symbols-outlined">article</span>
          <span className="material-symbols-outlined">mail</span>
          <span className="symbols"><FaLinkedinIn /></span>
          <span className="symbols"><FaGithub /></span>
        </nav>
    </div>
  );
};

export default Footer;

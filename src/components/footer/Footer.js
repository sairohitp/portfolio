import React from "react";
import FooterCSS from "./Footer.module.css";

import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";


const Footer = () => {
  return (
    <div id={FooterCSS.supernav}>
      <div className="subbody">
        <nav className={FooterCSS.flex}>
          <span class="material-symbols-outlined">article</span>
          <span class="material-symbols-outlined">mail</span>
          <span class="symbols"><FaLinkedinIn /></span>
          <span class="symbols"><FaGithub /></span>
        </nav>
      </div>
    </div>
  );
};

export default Footer;

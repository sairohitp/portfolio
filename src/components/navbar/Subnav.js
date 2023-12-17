import React from "react";
import NavbarCSS from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Subnav = () => {
  return (
    <div id={NavbarCSS.supernav}>
      <div id={NavbarCSS.subNav}>
        <Link to="/experience">
          <h6>Experience</h6>
        </Link>
        <Link to="/projects">
          <h6>Projects</h6>
        </Link>
        <Link to="/education">
          <h6>Education</h6>
        </Link>
        <Link to="/achievements">
          <h6>Achievements</h6>
        </Link>
      </div>
    </div>
  );
};

export default Subnav;

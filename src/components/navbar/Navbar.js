import React from "react";
import NavbarCSS from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id={NavbarCSS.supernav}>
      
        <nav>
          <Link to="/">
            <div>
              <h6 id = {NavbarCSS.siteTitle}>Hello, I’m Sai Rohit</h6>
            </div>
          </Link>

          <div className={NavbarCSS.flex}>
            <Link to="/experience">
              <h6>Experience</h6>
            </Link>
            <Link to="/experience">
              <h6>Projects</h6>
            </Link>
            <Link to="/experience">
              <h6>Education</h6>
            </Link>
            <Link to="/experience">
              <h6>Achievements</h6>
            </Link>
          </div>

          <div>
            <div>
              <span class="material-symbols-outlined navIcon">language</span>
            </div>

            <div>
              <span class="material-symbols-outlined navIcon">contrast</span>
            </div>
          </div>
        </nav>
      
    </div>
  );
};

export default Navbar;

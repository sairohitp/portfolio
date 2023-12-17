import React from "react";
import NavbarCSS from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id={NavbarCSS.supernav}>
      
      <div className="internalSubbody">

        <nav className={NavbarCSS.flex}>
          <div>
            <h6>
              <b>Hello, I’m Sai Rohit</b>
            </h6>
          </div>

          <div className={NavbarCSS.flex}>
            <Link to = "/experience">
              <h6>Experience</h6>
            </Link>
            <a href="">
              <h6>Projects</h6>
            </a>
            <a href="">
              <h6>Education</h6>
            </a>
            <a href="">
              <h6>Achievements</h6>
            </a>
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
    </div>
  );
};

export default Navbar;

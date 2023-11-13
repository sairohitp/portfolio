import React from "react";
import NavbarCSS from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div id={NavbarCSS.supernav}>
      <div className="subbody">
        <nav className={NavbarCSS.flex}>
          <div>
            <p>
              <b>Hello, I’m Sai Rohit</b>
            </p>
          </div>

          <div className={NavbarCSS.flex}>
            <a href="">
              <p>Experience</p>
            </a>
            <a href="">
              <p>Projects</p>
            </a>
            <a href="">
              <p>Education</p>
            </a>
            <a href="">
              <p>Achievements</p>
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

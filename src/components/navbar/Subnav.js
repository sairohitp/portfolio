import React from "react";
import NavbarCSS from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Subnav = (props) => {
  return (
    <div id={NavbarCSS.supernav}>
      <div id={NavbarCSS.subNav}>
        {props.subnavLinks.map((item, index) => (
          <Link key={index} to={item.route}>
            <h6>{item.text}</h6>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Subnav;
import React from 'react'
import NavbarCSS from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div id = {NavbarCSS.supernav}>
      <div className = "subbody">
        <nav className = {NavbarCSS.flex}>
          
            <div>
              <h3>SAI ROHIT</h3>
            </div>

            <div className = {NavbarCSS.flex}>
              <div className = {NavbarCSS.flex}>
                <a href =""><p>about</p></a>
                <a href =""><p>education</p></a>
                <a href =""><p>skills</p></a>
                <a href =""><p>projects</p></a>
                <a href =""><p>experience</p></a>
                <a href =""><p>awards</p></a>
                <a href =""><p>certifications</p></a>
                <a href =""><p>recommendations</p></a>
                <a href =""><p>contact</p></a>
              </div>
              <div>
                icon
              </div>
            </div>

        </nav>
      </div>
    </div>
  )
}

export default Navbar
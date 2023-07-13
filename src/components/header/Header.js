import React from "react";
import HeaderCSS from "./Header.module.css"

const Header = () => {
    return (
        <header>
            <span className={HeaderCSS.headertxt}>helllo world helllo world helllo</span>
            <span className={HeaderCSS.headertxtstrong}>
                <span className={HeaderCSS.headertxt}> helllo world</span>&#8202;
                hello world
                &#8202;<span className={HeaderCSS.headertxt}>hello world</span>
            </span>
            <span className={HeaderCSS.headertxt}>world helllo world helllo world</span>
        </header>
    );
};

export default Header;

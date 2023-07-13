import React from "react";
import me from "../../assets/me.jpg";

import AboutmeCSS from "./Aboutme.module.css";

const Aboutme = () => {
    return (
        <section>
            <div className={AboutmeCSS.sectionbody}>

                <div id={AboutmeCSS.sectiontitle}>
                    <span>about me</span>
                </div>

                <div className={AboutmeCSS.sectionbody}>
                    <div>
                        <img src={me} alt="Me" id={AboutmeCSS.myimg}></img>
                    </div>

                    <div>
                        <p>
                            Hello, I’m Sai Rohit. A dedicated and driven
                            undergrad student with a strong passion for
                            technology and business.
                            <br />
                            <br />
                            My focus lies in software development, where I
                            actively contribute to projects by designing UI/UX,
                            developing front-end code, and collaborating on
                            back-end implementation, with a proactive
                            problem-solving approach and a commitment to staying
                            up-to-date with the latest technologies, I strive to
                            make a tangible impact in the industry.
                            <br />
                            <br />
                            I’m diligent, innovative, and highly motivated,
                            always seeking for opportunities to showcase my
                            skills, gain exposure, and contribute to
                            cutting-edge solutions.
                            <br />
                            <br />
                            In addition to my technical skills, I possess
                            excellent communication and interpersonal abilities,
                            allowing me to effectively collaborate with
                            cross-functional teams
                        </p>
                    </div>
                </div>
            
            </div>
        </section>
    );
};

export default Aboutme;

import React from "react";
import EducationCSS from "./Education.module.css"

import srm from "../../assets/education/srm.png"
import narayana from "../../assets/education/narayana.png"

const Education = () => {
    return (
        <section id = {EducationCSS.parentsection}>
            
            <div className = {EducationCSS.sectionbody}>
            

                <div className = {EducationCSS.strip}>
                    <div className = {EducationCSS.innerstrip}>
                        <div>
                            <img src={srm} alt="srm" id = {EducationCSS.img}></img>
                        </div>
                        <div className = {EducationCSS.innerstriptext}>
                            <h3>SRM Institute of Science & Technology</h3>
                            <h5>
                                Bachelors of Technology in Computer Science
                                Engineering
                            </h5>
                            <h5>
                                Kattankulathur Campus, Chennai, Tamil Nadu,
                                India
                            </h5>
                        </div>
                    </div>
                    <div>
                        <h5>2021 – 2025</h5>
                    </div>
                </div>

                <div className = {EducationCSS.strip}>
                    <div className = {EducationCSS.innerstrip}>
                        <div>
                            <img src={narayana} alt="srm" id = {EducationCSS.img}></img>
                        </div>
                        <div className = {EducationCSS.innerstriptext}>
                            <h3>Narayana Group of Institutions</h3>
                            <h5>
                            Senior Secondary CBSE in Physics, Math, Chemistry & Computer Science
                            </h5>
                            <h5>
                            Pallavaram Campus, Chennai, Tamil Nadu, India
                            </h5>
                        </div>
                    </div>
                    <div>
                        <h5>2019 – 2021</h5>
                    </div>
                </div>

                <div className = {EducationCSS.strip}>
                    <div className = {EducationCSS.innerstrip}>
                        <div>
                            <img src={narayana} alt="srm" id = {EducationCSS.img}></img>
                        </div>
                        <div className = {EducationCSS.innerstriptext}>
                            <h3>Narayana Group of Institutions</h3>
                            <h5>
                            Secondary CBSE in Physics, Math, Chemistry, Biology & Social Studies
                            </h5>
                            <h5>
                            Pallavaram Campus, Chennai, Tamil Nadu, India
                            </h5>
                        </div>
                    </div>
                    <div>
                        <h5>2016 – 2019</h5>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;

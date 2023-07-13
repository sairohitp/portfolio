import React from "react";

import CertificationsCSS from "./Certifications.module.css";

import dsaabdb from "../../assets/certifications/dsaabdb.jpeg";
import Certificate from "./Certificate";
import Skill from "./Skill";

const Certifications = () => {
    return (
        <section id={CertificationsCSS.parentsection}>
            <div className={CertificationsCSS.sectionbody}>
                <div id={CertificationsCSS.sectiontitle}>
                    <span>certifications</span>
                </div>

                <div className={CertificationsCSS.subsectionbody}>
                    

                    <div id={CertificationsCSS.projectgrid}>
                        <Certificate
                            certificateIMG={dsaabdb}
                            certificateTitle="IBM Full Stack Software Developer Professional"
                            certificateIssuer="Coursera • Online • IBM"
                            certificateDate="25/05/23"
                            skill={[
                                <Skill skill="Cloud" />,
                                <Skill skill="VCS" />,
                                <Skill skill="HTML" />,
                                <Skill skill="CSS" />,
                                <Skill skill="JS" />,
                                <Skill skill="ReactJS" />,
                            ]}
                        />

                        <Certificate
                            certificateIMG={dsaabdb}
                            certificateTitle="IBM Full Stack Software Developer Professional"
                            certificateIssuer="Coursera • Online • IBM"
                            certificateDate="25/05/23"
                            skill={[
                                <Skill skill="Cloud" />,
                                <Skill skill="VCS" />,
                                <Skill skill="HTML" />,
                                <Skill skill="CSS" />,
                                <Skill skill="JS" />,
                                <Skill skill="ReactJS" />,
                            ]}
                        />
                        <Certificate
                            certificateIMG={dsaabdb}
                            certificateTitle="IBM Full Stack Software Developer Professional"
                            certificateIssuer="Coursera • Online • IBM"
                            certificateDate="25/05/23"
                            skill={[
                                <Skill skill="Cloud" />,
                                <Skill skill="VCS" />,
                                <Skill skill="HTML" />,
                                <Skill skill="CSS" />,
                                <Skill skill="JS" />,
                                <Skill skill="ReactJS" />,
                            ]}
                        />
                        <Certificate
                            certificateIMG={dsaabdb}
                            certificateTitle="IBM Full Stack Software Developer Professional"
                            certificateIssuer="Coursera • Online • IBM"
                            certificateDate="25/05/23"
                            skill={[
                                <Skill skill="Cloud" />,
                                <Skill skill="VCS" />,
                                <Skill skill="HTML" />,
                                <Skill skill="CSS" />,
                                <Skill skill="JS" />,
                                <Skill skill="ReactJS" />,
                            ]}
                        />
                    </div>

                    <div className={CertificationsCSS.pagiation}>
                        <div className="material-symbols-outlined filled">
                            circle
                        </div>
                        <div className="material-symbols-outlined unfilled">
                            circle
                        </div>
                        <div className="material-symbols-outlined unfilled">
                            circle
                        </div>
                        <div className="material-symbols-outlined unfilled">
                            circle
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;

import React from 'react'
import CertificationsCSS from "../../components/certifications/Certifications.module.css";

import dsaabdb from "../../assets/certifications/dsaabdb.jpeg";
import Certificate from "../../components/certifications/Certificate";
import Skill from "../../components/certifications/Skill";

const CertificationsContent = () => {
    return (
        <section id={CertificationsCSS.parentsection}>
            <div className={CertificationsCSS.sectionbody}>




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

            </div>
        </section>
    )
}

export default CertificationsContent
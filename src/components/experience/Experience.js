import React from "react";
import ExperienceCSS from "./Experience.module.css";

import Organization from "./Organization";

import trainingmug from "../../assets/experience/trainingmug.png";
import liftoff from "../../assets/experience/scholastic/liftoff.jpeg";

import Position from "./Position";

import studyjam from "../../assets/experience/scholastic/activities/studyjam.jpg";

import Activities from "./Activities";

const Experience = () => {
    return (
        <section id={ExperienceCSS.parentsection}>
            <div className={ExperienceCSS.sectionbody}>
                <div id={ExperienceCSS.sectiontitle}>
                    <span>experience</span>
                </div>

                <div className={ExperienceCSS.subsectionbody}>
                    {/* subnav */}

                    <div id={ExperienceCSS.subnavParent}>
                        <div id={ExperienceCSS.subnav}>
                            <div>
                                <h6>Corporate</h6>
                            </div>
                            <div>
                                <h6>Scholastic</h6>
                            </div>
                            <div>
                                <h6>Entrepreneurial</h6>
                            </div>
                        </div>
                    </div>

                    {/* content */}

                    <div id={ExperienceCSS.sectionBodyContent}>
                        {/* strip */}

                        <div className={ExperienceCSS.strip}>
                            {/* Title */}

                            <div className={ExperienceCSS.title}>
                                <div
                                    className={
                                        ExperienceCSS.titleRightInnerContent
                                    }
                                >
                                    <img
                                        src={trainingmug}
                                        className={ExperienceCSS.img}
                                        alt="trainingmug"
                                    ></img>
                                </div>

                                <div
                                    className={
                                        ExperienceCSS.titleLeftInnerContent
                                    }
                                >
                                    <div>
                                        <h3>TrainingMug</h3>
                                    </div>
                                    <div>
                                        <h5>10 mos</h5>
                                    </div>
                                </div>
                            </div>

                            {/* strip content */}

                            <div className={ExperienceCSS.stripChildContent}>
                                <div className={ExperienceCSS.stripContent}>
                                    <div
                                        className={
                                            ExperienceCSS.stripContentInnerLeft
                                        }
                                    >
                                        <div
                                            className={
                                                ExperienceCSS.stripInnerContentSubHeading
                                            }
                                        >
                                            <div>
                                                <h4
                                                    className={
                                                        ExperienceCSS.positionTitle
                                                    }
                                                >
                                                    Web Developer
                                                </h4>
                                            </div>
                                            <div>
                                                <h5>Mar 2023 – Present</h5>
                                            </div>
                                        </div>

                                        <div
                                            className={
                                                ExperienceCSS.stripInnerContentSubHeading
                                            }
                                        >
                                            <div>
                                                <h5>
                                                    Full–time · Chennai, Tamil
                                                    Nadu, India
                                                </h5>
                                            </div>
                                            <div>
                                                <h5>5 mos</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <p>
                                            • Designated work on user
                                            experience, flow control, state
                                            management and interface design.
                                            <br />
                                            • Complete design revamp of the
                                            admin console, main website and user
                                            application was assigned.
                                            <br />• Embodied modern features
                                            using apt iconography, accessibility
                                            toggles, depth and translucency.
                                        </p>
                                    </div>

                                    <div>
                                        <h5>
                                            <span
                                                className={
                                                    ExperienceCSS.skillIssue
                                                }
                                            >
                                                Skills:
                                            </span>{" "}
                                            User Experience (UX) · Figma
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr />

                        <Organization
                            organizationIMG={liftoff}
                            organizationName="Liftoff"
                            organizationDuration="10 mos"
                            positions={[
                                <Position
                                    position="Head of Design"
                                    positionDateRange="Jan 2023 – May 2023"
                                    positionDescription="Full–time · Chennai, Tamil Nadu, India"
                                    positionDuration="5 mos"
                                    positionContentLine1="• Collaborate and Audit the usability, interaction, overall design and presentation of projects."
                                    positionContentLine2="• Manage task boards, associates and the work being handled by everyone else."
                                    activities={[
                                        <Activities
                                            activityIMG={studyjam}
                                            activityTitle="Google Cloud Study Jam"
                                            activityDescription="A comprehensive event showcasing the core functionalities and features of the Google Cloud Platform was taken up by the club lead, members who were involved in organizing the event were naturally considered as participants as well."
                                        />,
                                        <Activities
                                            activityIMG={studyjam}
                                            activityTitle="Google Cloud Study Jam"
                                            activityDescription="A comprehensive event showcasing the core functionalities and features of the Google Cloud Platform was taken up by the club lead, members who were involved in organizing the event were naturally considered as participants as well."
                                        />,
                                    ]}
                                    positionSkills="User Experience (UX) · Figma"
                                />,

                                <Position
                                    position="Head of Design"
                                    positionDateRange="Jan 2023 – May 2023"
                                    positionDescription="Full–time · Chennai, Tamil Nadu, India"
                                    positionDuration="5 mos"
                                    positionContentLine1="• Collaborate and Audit the usability, interaction, overall design and presentation of projects."
                                    positionContentLine2="• Manage task boards, associates and the work being handled by everyone else."
                                    activities={[
                                        <Activities
                                            activityIMG={studyjam}
                                            activityTitle="Google Cloud Study Jam"
                                            activityDescription="A comprehensive event showcasing the core functionalities and features of the Google Cloud Platform was taken up by the club lead, members who were involved in organizing the event were naturally considered as participants as well."
                                        />,
                                        <Activities
                                            activityIMG={studyjam}
                                            activityTitle="Google Cloud Study Jam"
                                            activityDescription="A comprehensive event showcasing the core functionalities and features of the Google Cloud Platform was taken up by the club lead, members who were involved in organizing the event were naturally considered as participants as well."
                                        />,
                                    ]}
                                    positionSkills="User Experience (UX) · Figma"
                                />
                            ]}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

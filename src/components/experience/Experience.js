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
            

                

                    {/* content */}

                    <div id={ExperienceCSS.sectionBodyContent}>
                        {/* strip */}

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
                
            
        </section>
    );
};

export default Experience;

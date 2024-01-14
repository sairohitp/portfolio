import React from 'react'
import Education from '../../components/education/Education'
import srm from "../../assets/education/srm.png"
import Activities from '../../components/experience/Activities'
import studyjam from "../../assets/experience/scholastic/activities/studyjam.jpg";
import EducationCSS from "../../components/education/Education.module.css"

const EducationContent = () => {
    return (
        <>
            <section id={EducationCSS.parentsection}>

                <div className={EducationCSS.sectionbody}>

                    <div className={EducationCSS.strip}>
                        <Education
                            educationIMG={srm}
                            educationInstituteTitle="SRM Institute of Science & Technology"
                            educationMajor="Bachelors of Technology in Computer Science Engineering"
                            educationInstituteLocation="Kattankulathur Campus, Chennai, Tamil Nadu, India"
                            activities={[
                                <Activities
                                    key="activity1"
                                    activityIMG={studyjam}
                                    activityTitle="Google Cloud Study Jam"
                                    activityDescription="A comprehensive event showcasing the core functionalities and features of the Google Cloud Platform was taken up by the club lead, members who were involved in organizing the event were naturally considered as participants as well."
                                />,
                                <Activities
                                    key="activity2"
                                    activityIMG={studyjam}
                                    activityTitle="Google Cloud Study Jam"
                                    activityDescription="A comprehensive event showcasing the core functionalities and features of the Google Cloud Platform was taken up by the club lead, members who were involved in organizing the event were naturally considered as participants as well."
                                />,
                            ]}
                            educationSkillsList="User Experience (UX) · Figma"
                            educationDuration="2021 – 2025"
                        />
                    </div>

                    <hr />

                    <div className={EducationCSS.strip}>
                        <Education
                            educationIMG={srm}
                            educationInstituteTitle="SRM Institute of Science & Technology"
                            educationMajor="Bachelors of Technology in Computer Science Engineering"
                            educationInstituteLocation="Kattankulathur Campus, Chennai, Tamil Nadu, India"
                            activities={[
                                <Activities
                                    key="activity1"
                                    activityIMG={studyjam}
                                    activityTitle="Google Cloud Study Jam"
                                    activityDescription="A comprehensive event showcasing the core functionalities and features of the Google Cloud Platform was taken up by the club lead, members who were involved in organizing the event were naturally considered as participants as well."
                                />,
                                <Activities
                                    key="activity2"
                                    activityIMG={studyjam}
                                    activityTitle="Google Cloud Study Jam"
                                    activityDescription="A comprehensive event showcasing the core functionalities and features of the Google Cloud Platform was taken up by the club lead, members who were involved in organizing the event were naturally considered as participants as well."
                                />,
                            ]}
                            educationSkillsList="User Experience (UX) · Figma"
                            educationDuration="2021 – 2025"
                        />
                    </div>

                </div>
            </section>
        </>
    )
}

export default EducationContent
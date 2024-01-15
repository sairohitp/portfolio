import React from 'react'
import Award from "../../components/awards/Award";

import AwardsCSS from "../../components/awards/Awards.module.css";

import hackatoge from "../../assets/awards/hackatoge.jpg";
import concepto from "../../assets/awards/concepto.jpeg";

const AchievementContent = () => {
  return (
        <section id={AwardsCSS.parentsection}>
            <div className={AwardsCSS.sectionbody}>

                <div className={AwardsCSS.subsectionbody}>

                        <Award
                            awardIMG={hackatoge}
                            awardTitle="iVOLUTION '23"
                            awardDate="03/2023"
                            awardSubtitle1Left="Design Sprint"
                            awardSubtitle1Right="Issued by Swift Coding Club"
                            awardSubtitle2Left="SRM Institute of Science & Technology"
                            awardSubtitle2Right="Chennai, India"
                            awardDescriptionLine1='• Our team "Wireshark" secured 3rd place in a 24hr long hackathon, conducted at IIT Madras research park.'
                            awardDescriptionLine2="• We designed and developed a social networking mobile application, with complete functionality."
                            awardDescriptionLine3="• 4 major reviews were conducted throughout the competition, and we had passed the various stages."
                        />

                        <hr />

                        <Award
                            awardIMG={hackatoge}
                            awardTitle="Hackatoge"
                            awardDate="03/2023"
                            awardSubtitle1Left="24 Hour Hackathon"
                            awardSubtitle1Right="Issued by DXC Texus"
                            awardSubtitle2Left="IIT Madras Research Park"
                            awardSubtitle2Right="Chennai, India"
                            awardDescriptionLine1='• Our team "Wireshark" secured 3rd place in a 24hr long hackathon, conducted at IIT Madras research park.'
                            awardDescriptionLine2="• We designed and developed a social networking mobile application, with complete functionality."
                            awardDescriptionLine3="• 4 major reviews were conducted throughout the competition, and we had passed the various stages."
                        />

                        <hr />

                        <Award
                            awardIMG={concepto}
                            awardTitle="Concepto 3.0"
                            awardDate="03/2023"
                            awardSubtitle1Left="Ideathon"
                            awardSubtitle1Right="Issued by DXC Texus"
                            awardSubtitle2Left="SRM Institute of Science & Technology"
                            awardSubtitle2Right="Kattankulathur, TN"
                            awardDescriptionLine1='• Our team "ThinkStrange" secured 3rd place in a two day ideathon, conducted at SRM University.'
                            awardDescriptionLine2="• We presented our idea's pitch deck and the business model canvas to the judges and audience."
                            awardDescriptionLine3="• Post-pitch followed up with a very elaborate and interesting Q&A session which we had cleared."
                        />

                        <hr />

                        <Award
                            awardIMG={hackatoge}
                            awardTitle="Merit semester(s)"
                            awardDate="03/2023"
                            awardSubtitle1Left="Scholarship"
                            awardSubtitle1Right="Issued by SRM IST"
                            awardDescriptionLine1='• Our team "Wireshark" secured 3rd place in a 24hr long hackathon, conducted at IIT Madras research park.'
                            awardDescriptionLine2="• We designed and developed a social networking mobile application, with complete functionality."
                            awardDescriptionLine3="• 4 major reviews were conducted throughout the competition, and we had passed the various stages."
                        />



                    
                </div>
            </div>
        </section>
  )
}

export default AchievementContent
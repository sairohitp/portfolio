import React from "react";
import Award from "./Award";

import AwardsCSS from "./Awards.module.css";

import hackatoge from "../../assets/awards/hackatoge.jpg";
import concepto from "../../assets/awards/concepto.jpeg";

const Awards = () => {
    return (
        <section id={AwardsCSS.parentsection}>
            <div className={AwardsCSS.sectionbody}>
                <div id={AwardsCSS.sectiontitle}>
                    <span>awards</span>
                </div>

                <div className={AwardsCSS.subsectionbody}>
                    <div>
                        <Award
                            awardIMG={hackatoge}
                            awardRank = "#3"
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
                            awardRank = "#3"
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
                            awardRank = "<1000"
                            awardTitle="Merit semester(s)"
                            awardDate="05/2021 – 05/2023"
                            awardSubtitle1Left="Scholarship"
                            awardSubtitle1Right="Issued by SRM IST"
                            
                            awardDescriptionLine1='• Our team "Wireshark" secured 3rd place in a 24hr long hackathon, conducted at IIT Madras research park.'
                            awardDescriptionLine2="• We designed and developed a social networking mobile application, with complete functionality."
                            awardDescriptionLine3="• 4 major reviews were conducted throughout the competition, and we had passed the various stages."
                        />

                        
                    </div>

                    <div className={AwardsCSS.pagiation}>
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

export default Awards;

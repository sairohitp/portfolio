import React from "react";
import ExperienceCSS from "./Experience.module.css";

const Position = (props) => {
    return (
        <div className = {ExperienceCSS.stripContent}>
            
            
            {/* content */}

            <div className={ExperienceCSS.stripTextContent}>
                <div className={ExperienceCSS.stripContentInnerLeft}>
                    <div className={ExperienceCSS.stripInnerContentSubHeading}>
                        <div>
                            <h6 className={ExperienceCSS.positionTitle}>
                                {props.position}
                            </h6>
                        </div>
                        <div>
                            <h6>{props.positionDateRange}</h6>
                        </div>
                    </div>

                    <div className={ExperienceCSS.stripInnerContentSubHeading}>
                        <div>
                            <h6>{props.positionDescription}</h6>
                        </div>
                        <div>
                            <h6>{props.positionDuration}</h6>
                        </div>
                    </div>
                </div>

                <div>
                    <p>
                        {props.positionContentLine1}
                        <br />
                        {props.positionContentLine2}
                        <br />
                        {props.positionContentLine3}
                    </p>
                </div>
            </div>


            {/* activities */}

            <div className={ExperienceCSS.stripInnerActivityBoundingBox}>
                <h6>
                    <span className={ExperienceCSS.subsubsubtitle}>
                        Activities & Records:
                    </span>
                </h6>
            {props.activities}
            </div>
            


            {/* skills */}

            <div>
                <h6>
                    <span className={ExperienceCSS.subsubsubtitle}>
                        Skills:
                    </span>{" "}
                    {props.positionSkills}
                </h6>
            </div>

        </div>
    );
};

export default Position;

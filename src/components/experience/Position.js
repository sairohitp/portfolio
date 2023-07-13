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
                            <h4 className={ExperienceCSS.positionTitle}>
                                {props.position}
                            </h4>
                        </div>
                        <div>
                            <h5>{props.positionDateRange}</h5>
                        </div>
                    </div>

                    <div className={ExperienceCSS.stripInnerContentSubHeading}>
                        <div>
                            <h5>{props.positionDescription}</h5>
                        </div>
                        <div>
                            <h5>{props.positionDuration}</h5>
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
                <h5>
                    <span className={ExperienceCSS.subsubsubtitle}>
                        Activities & Records:
                    </span>
                </h5>
            {props.activities}
            </div>
            


            {/* skills */}

            <div>
                <h5>
                    <span className={ExperienceCSS.subsubsubtitle}>
                        Skills:
                    </span>{" "}
                    {props.positionSkills}
                </h5>
            </div>

        </div>
    );
};

export default Position;

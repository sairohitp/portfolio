import React from "react";

import ExperienceCSS from "./Experience.module.css";

const Organization = (props) => {
    return (
        <div className={ExperienceCSS.strip}>
            {/* Title */}

            <div className={ExperienceCSS.title}>
                <div className={ExperienceCSS.titleRightInnerContent}>
                    <img
                        src={props.organizationIMG}
                        className={ExperienceCSS.img}
                        alt="liftoff"
                    ></img>
                </div>

                <div className={ExperienceCSS.titleLeftInnerContent}>
                    <div>
                        <h3>{props.organizationName}</h3>
                    </div>
                    <div>
                        <h5>{props.organizationDuration}</h5>
                    </div>
                </div>
            </div>

            {/* strip content */}

            <div className={ExperienceCSS.stripChildContent}>
                <div className={ExperienceCSS.positionListBox}>
                    {props.positions.map((position, index) => (
                        <React.Fragment key={index}>
                            {position}
                            {index !== props.positions.length - 1 && <hr />}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Organization;

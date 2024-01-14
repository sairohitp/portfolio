import React from "react";
import EducationCSS from "./Education.module.css"

const Education = (props) => {
    return (

        <>
            <div className={EducationCSS.innerstrip}>
                <div>
                    <img src={props.educationIMG} alt="srm" id={EducationCSS.img}></img>
                </div>
                <div className={EducationCSS.innerstriptext}>
                    <div>
                        <h3>{props.educationInstituteTitle}</h3>
                        <h6>
                            {props.educationMajor}
                        </h6>
                        <h6>
                            {props.educationInstituteLocation}
                        </h6>
                    </div>

                    <div>
                        <h6>Activities & Records:</h6>
                        {props.activities}
                    </div>

                    <div>
                        <h6><b>Skills:</b> {props.educationSkillsList}</h6>
                    </div>
                </div>
            </div>
            <div>
                <h6>{props.educationDuration}</h6>
            </div>

        </>
    );
};

export default Education;

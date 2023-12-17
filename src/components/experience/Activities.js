import React from 'react'
import ExperienceCSS from "./Experience.module.css";

const Activities = (props) => {
  return (
    

                <div className={ExperienceCSS.stripInnerActivityStrip}>
                    <div>
                        <img
                            src={props.activityIMG}
                            className={ExperienceCSS.stripInnerActivityIMG}
                            alt=""
                        ></img>
                    </div>

                    <div className={ExperienceCSS.stripInnerActivityContent}>
                        <div>
                            <h6>{props.activityTitle}</h6>
                        </div>
                        <div>
                            <p>{props.activityDescription}</p>
                        </div>
                    </div>
                </div>
                
            
  )
}

export default Activities
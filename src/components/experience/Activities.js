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
                            <h5>{props.activityTitle}</h5>
                        </div>
                        <div>
                            <p>{props.activityDescription}</p>
                        </div>
                    </div>
                </div>
                
            
  )
}

export default Activities
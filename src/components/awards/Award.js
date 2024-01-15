import React from 'react'
import AwardsCSS from "./Awards.module.css"

const Award = (props) => {
    return (
        <div className={AwardsCSS.awardstrip}>

            <div>
                <img src={props.awardIMG} className={AwardsCSS.awardIMG} alt=""></img>
            </div>

            <div className={AwardsCSS.awardContent}>



                <div className={AwardsCSS.awardSubheadings}>

                    <div className={AwardsCSS.awardSubheading}>
                        <div><h3>{props.awardTitle}</h3></div>
                        <div><h6>{props.awardDate}</h6></div>
                    </div>

                    <div className={AwardsCSS.awardSubheading}>
                        <div><h6>{props.awardSubtitle1Left}</h6></div>
                        <div><h6>{props.awardSubtitle1Right}</h6></div>
                    </div>

                    <div className={AwardsCSS.awardSubheading}>
                        <div><h6>{props.awardSubtitle2Left}</h6></div>
                        <div><h6>{props.awardSubtitle2Right}</h6></div>
                    </div>

                </div>



                <div className={AwardsCSS.awardContentDescription}>
                    <p>
                        {props.awardDescriptionLine1}<br />
                        {props.awardDescriptionLine2}<br />
                        {props.awardDescriptionLine3}
                    </p>
                </div>

            </div>

        </div>
    )
}

export default Award
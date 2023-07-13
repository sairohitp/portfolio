import React from 'react'

import CertificationsCSS from "./Certifications.module.css"
import Skill from './Skill'

const Certificate = (props) => {
  return (
    <div className={CertificationsCSS.card}>
                            <img src = {props.certificateIMG} alt = ""></img>
                            <h5>{props.certificateTitle}</h5>
                            <div className = {CertificationsCSS.certficaionSubtitle}>
                                <div><h5>{props.certificateIssuer}</h5></div>
                                <div><h5>{props.certificateDate}</h5></div>
                            </div>
                            
                            <div className={CertificationsCSS.plainskillrow}>
                                {props.skill}
                            </div>

                        </div>
  )
}

export default Certificate
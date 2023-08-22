import React from 'react'
import ContactCSS from "../../components/contact/ContactCSS.module.css"

const Contact = () => {
  return (
    <section id = {ContactCSS.parentsection}>
        <div className = {ContactCSS.sectionbody}>
            
            <div id = {ContactCSS.sectiontitle}>
                <span>contact</span>
            </div>

            <div id = {ContactCSS.contactor}>

            </div>
        </div>
    </section>
  )
}

export default Contact
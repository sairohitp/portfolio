import React from 'react'
import HomeContentCSS from "./HomeContent.module.css"
import me from "../../assets/me.jpg"

const HomeContent = () => {
  return (
    <div className={HomeContentCSS.homeContent}>
        <div>
            {/* text */}
            <div className={HomeContentCSS.homeContentText}>
                <div>
                    <h4>I’m a pre–final year CSE student at SRM Institute of Science and Technology, Kattankulathur – <br/>Chennai, India</h4>
                </div>
                <div>
                    <p>
                    I’m a front–end developer, and a proficient UI / UX designer.
                    <br/><br/>
                    I'm diligent, innovative, and highly motivated, always seeking opportunities to showcase my skills, 
                    gain exposure, and contribute to cutting-edge solutions.
                    <br/><br/>
                    Currently studying and exploring core programming, web development and HCI.
                    My hobbies span from photography to writing down stories, ideas and visualising the universe.
                    My favourite media genre is etherealism and sophistication, music that transports you to another dimension.
                    <br/><br/>
                    "Design creates culture, culture shapes values, and values determine the future."
                    </p>
                </div>
            </div>

            {/* image */}
            <div className={HomeContentCSS.homeContentImage}>
                <img src = {me}></img>
            </div>
        </div>
        <div className={HomeContentCSS.gridContainer}>
            {/* skills grid */}

        <div>
                <div className = {HomeContentCSS.gridItemTitle}><h6>Programming</h6></div>
                <div className = {HomeContentCSS.gridItem}><h6>Python (Proficient)</h6></div>
                <div className = {HomeContentCSS.gridItem}><h6>C</h6></div>
                <div className = {HomeContentCSS.gridItem}><h6>C++</h6></div>
                <div className = {HomeContentCSS.gridItem}><h6>Data Structures</h6></div>
                <div className = {HomeContentCSS.gridItem}><h6>Advanced Algorithms</h6></div>
                <div className = {HomeContentCSS.gridItem}><h6>Computer Networks</h6></div>
</div>
<div>
                <div className = {HomeContentCSS.gridItemTitle}><h6>Frontend Technologies</h6></div>
                <div className = {HomeContentCSS.gridItem}><h6>HTML, CSS, SASS</h6></div>
                <div className = {HomeContentCSS.gridItem}><h6>Tailwind</h6></div>
                <div className = {HomeContentCSS.gridItem}><h6>JavaScript</h6></div>
                <div className = {HomeContentCSS.gridItem}><h6>jQuery</h6></div>
                <div className = {HomeContentCSS.gridItem}><h6>ReactJS, NextJS</h6></div>
                <div className = {HomeContentCSS.gridItem}><h6>NodeJS</h6></div>
</div>
<div>
                <div className = {HomeContentCSS.gridItemTitle}><h6>Backend Technologies</h6></div>
                <div className = {HomeContentCSS.gridItem}><h6>PHP</h6></div>
                <div className = {HomeContentCSS.gridItem}><h6>MySQL</h6></div>
                <div className = {HomeContentCSS.gridItem}><h6>Supabase</h6></div>
                <div className = {HomeContentCSS.gridItem}><h6>MongoDB</h6></div>
                <div className = {HomeContentCSS.gridItem}><h6>PostgreSQL</h6></div>
                <div className = {HomeContentCSS.gridItem}><h6>Stripe</h6></div>
</div>
<div>
                <div className = {HomeContentCSS.gridItemTitle}><h6>UI Design</h6></div>
                <div className = {HomeContentCSS.gridItem}><h6>Information Architecture</h6></div>
                <div className = {HomeContentCSS.gridItem}><h6>Wireframe</h6></div>
                <div className = {HomeContentCSS.gridItem}><h6>Interaction Design</h6></div>
                <div className = {HomeContentCSS.gridItem}><h6>Interface Design</h6></div>
                <div className = {HomeContentCSS.gridItem}><h6>Rapid Prototyping</h6></div>
                <div className = {HomeContentCSS.gridItem}><h6>Design System</h6></div>
</div>
<div>
                <div className = {HomeContentCSS.gridItemTitle}><h6>UX Research</h6></div>
                <div className = {HomeContentCSS.gridItem}><h6>Contextual Inquiry</h6></div>
                <div className = {HomeContentCSS.gridItem}><h6>Contextual Research</h6></div>
                <div className = {HomeContentCSS.gridItem}><h6>Marketing Analysis</h6></div>
                <div className = {HomeContentCSS.gridItem}><h6>Co-creation Workshop</h6></div>
                <div className = {HomeContentCSS.gridItem}><h6>Usability Study</h6></div>
                <div className = {HomeContentCSS.gridItem}><h6>Focus Groups</h6></div>
</div>

        </div>
    </div>
  )
}

export default HomeContent
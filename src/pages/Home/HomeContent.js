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
                    <h6>
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
                    </h6>
                </div>
            </div>

            {/* image */}
            <div>
                <img src = {me}></img>
            </div>
        </div>
        <div>
            {/* skills grid */}
        </div>
    </div>
  )
}

export default HomeContent
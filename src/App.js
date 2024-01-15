import "./App.css";

import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home";
import Experience from "./pages/Experience/Experience"
import Projects from "./pages/Projects/Projects"
import Education from "./pages/Education/Education"
import Achievements from "./pages/Achievements/Achievements"
import Certifications from "./pages/Certifications/Certifications";
import Recommendations from "./pages/Recommendations/Recommendations";

// h1 22
// h2 20
// h3 14, lineheight: 1
// h4 13, lineheight: 1
// h5 13, lineheight: 1.5
// h6 12, lineheight: 1
// p 12, lineheight: 1.5

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/education" element={<Education />} />
                <Route path="/achievements" element={<Achievements />} />
                
                <Route path="/certifications" element={<Certifications />} />
                <Route path="/recommendations" element={<Recommendations />} />
                {/* <Route path="/*" element={<404 />} /> */}
            </Routes>
{/*             
            <Aboutme />
            <Education />
            <Skills />
            <Projects/>
            <Experience />
            <Awards />
            <Certifications />
            <Recommendations />
            <Contact /> */}
        </div>
    );
}

export default App;

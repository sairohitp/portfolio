import "./App.css";

import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home";
import Experience from "./pages/Experience/Experience"

// h1 22
// h2 20
// h3 18
// h4 16
// p 14, lineheight: 21
// h5 14
// h6 12

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/experience" element={<Experience />} />
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

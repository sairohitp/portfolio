import "./App.css";
import Aboutme from "./components/aboutme/Aboutme";
import Awards from "./components/awards/Awards";
import Certifications from "./components/certifications/Certifications";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

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
            <Navbar />
            <Header />
            <Aboutme />
            <Education />
            <Skills />
            <Projects/>
            <Experience />
            <Awards />
            <Certifications />
        </div>
    );
}

export default App;

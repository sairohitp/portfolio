import React from "react";
import ProjectsCSS from "./Projects.module.css"

import calculator from "../../assets/projects/calculator.jpeg"

const Projects = () => {
    return (
        <section id = {ProjectsCSS.parentsection}>

            <div className = {ProjectsCSS.sectionbody}>

                    <div id = {ProjectsCSS.projectgrid}>

                        

                        <div className={ProjectsCSS.card}>
                            <img src = {calculator}></img>
                        </div>

                        <div className={ProjectsCSS.card}>
                            <img src = {calculator}></img>
                        </div>

                        <div className={ProjectsCSS.card}>
                            <img src = {calculator}></img>
                        </div>

                        <div className={ProjectsCSS.card}>
                            <img src = {calculator}></img>
                        </div>

                        <div className={ProjectsCSS.card}>
                            <img src = {calculator}></img>
                        </div>

                        <div className={ProjectsCSS.card}>
                            <img src = {calculator}></img>
                        </div>

                        <div className={ProjectsCSS.card}>
                            <img src = {calculator}></img>
                        </div>

                        <div className={ProjectsCSS.card}>
                            <img src = {calculator}></img>
                        </div>

                        <div className={ProjectsCSS.card}>
                            <img src = {calculator}></img>
                        </div>

                    
                    </div>
                </div>

            

        </section>
    );
};

export default Projects;

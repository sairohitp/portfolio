import React from 'react'

import Navbar from '../../components/navbar/Navbar'
import Subnav from '../../components/navbar/Subnav'
import ProjectsContent from './ProjectsContent'
import Footer from '../../components/footer/Footer'

const Projects = () => {
  return (
<>
    <Navbar />

    <Subnav
      subnavLinks={[
        { text: "All", route: "/projects" },
        { text: "Web", route: "/webprojects" },
        { text: "App", route: "/appprojects" },
        { text: "Design", route: "/designprojects" },
      ]}
    />

    <ProjectsContent />

    
    <Footer />
    <div className="subbody"></div>
  </>
  )
}

export default Projects
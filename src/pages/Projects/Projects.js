import React from 'react'

import Navbar from '../../components/navbar/Navbar'
import Subnav from '../../components/navbar/Subnav'
import ExperienceContent from '../Experience/ExperienceContent'
import Footer from '../../components/footer/Footer'

const Projects = () => {
  return (
<>
    <Navbar />

    <Subnav
      subnavLinks={[
        { text: "All", route: "/experience" },
        { text: "Corporate", route: "/corporate" },
        { text: "Scholastic", route: "/scholastic" },
        { text: "Entrepreneurial", route: "/entrepreneurial" },
      ]}
    />

    
    <Footer />
    <div className="subbody"></div>
  </>
  )
}

export default Projects
import React from 'react'

import Navbar from '../../components/navbar/Navbar'
import Subnav from '../../components/navbar/Subnav'

import Footer from '../../components/footer/Footer'

const Achievements = () => {
  return (
    <>
    <Navbar />

      <Subnav
        subnavLinks={[
          { text: "Competitions", route: "/competitions" },
          { text: "Certifications", route: "/certifications" },
          { text: "Recommendations", route: "/recommendations" }
        ]}
      />


      <Footer />
      <div className="subbody"></div>
  </>
  )
}

export default Achievements
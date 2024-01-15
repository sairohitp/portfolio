import React from 'react'

import Navbar from '../../components/navbar/Navbar'
import Subnav from '../../components/navbar/Subnav'
import CertificationsContent from './CertificationsContent'
import Footer from '../../components/footer/Footer'

const Certifications = () => {
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

      <CertificationsContent />
      <Footer />
      <div className="subbody"></div>
  </>
  )
}

export default Certifications
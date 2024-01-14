import React from 'react'

import Navbar from '../../components/navbar/Navbar'
import Subnav from '../../components/navbar/Subnav'
import EducationContent from "./EducationContent"
import Footer from '../../components/footer/Footer'

const Education = () => {
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

      <EducationContent />
      <Footer />
      <div className="subbody"></div>
    </>
  )
}

export default Education
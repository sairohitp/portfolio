import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Subnav from '../../components/navbar/Subnav'
import ExperienceContent from './ExperienceContent'

const Experience = () => {
  return (
    <>
      <Navbar />
      <Subnav />
      <ExperienceContent/>
      <Footer />
      <div className="subbody"></div>
    </>
  )
}

export default Experience
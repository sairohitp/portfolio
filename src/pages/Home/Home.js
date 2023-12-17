import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import HomeContent from "./HomeContent";
import Subnav from "../../components/navbar/Subnav";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* <Subnav/> */}
      <HomeContent/>
      <Footer />
      <div className="subbody"></div>
    </>
  );
};

export default Home;

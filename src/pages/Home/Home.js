import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import HomeContent from "./HomeContent";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeContent/>
      <Footer />
      <div className="subbody"></div>
    </>
  );
};

export default Home;

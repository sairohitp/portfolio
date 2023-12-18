import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Subnav from "../../components/navbar/Subnav";
import ExperienceContent from "./ExperienceContent";

const Experience = () => {
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

      <ExperienceContent />
      <Footer />
      <div className="subbody"></div>
    </>
  );
};

export default Experience;

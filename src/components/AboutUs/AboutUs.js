import React from "react";
import AboutBanner from "./AboutBanner";
import AboutContent from "./AboutContent";
import AboutIdea from "./AboutIdea";
import AboutPortfolio from "./AboutPortfolio";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <AboutBanner></AboutBanner>
      <AboutContent></AboutContent>
      <AboutPortfolio></AboutPortfolio>
      <AboutIdea></AboutIdea>
    </div>
  );
};

export default AboutUs;

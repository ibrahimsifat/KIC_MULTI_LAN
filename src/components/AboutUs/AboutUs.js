import React from 'react';
import Footer from '../../shared/Footer';
import LoginNavigation from '../../shared/LoginNavigation';
import HomeClients from '../Home/HomeClients/HomeClients';
import AboutBanner from './AboutBanner';
import AboutContent from './AboutContent';
import AboutIdea from './AboutIdea';
import AboutPortfolio from './AboutPortfolio';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div>
         <LoginNavigation></LoginNavigation>
          <AboutBanner></AboutBanner>
          <AboutContent></AboutContent>
          <AboutPortfolio></AboutPortfolio>
          <AboutIdea></AboutIdea>
          <HomeClients></HomeClients>
          <Footer></Footer>
        </div>
    );
};

export default AboutUs;
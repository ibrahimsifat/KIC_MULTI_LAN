import React from 'react';
import Footer2 from '../../shared/Footer2';
import LoginNavigation from '../../shared/LoginNavigation';
import HomeClients from '../Home/HomeClients/HomeClients';
import AboutBanner from './AboutBanner';
import AboutContent from './AboutContent';
import AboutIdea from './AboutIdea';
import AboutPortfolio from './AboutPortfolio';
import './AboutUs.css'
import cookies from 'js-cookie'
const AboutUs = () => {
    const IsArabic=cookies.get('i18next') ==='ar'
    return (
        <div className={!IsArabic?'monsterratFont':"arabic-font-1" }>
         <LoginNavigation></LoginNavigation>
          <AboutBanner></AboutBanner>
          <AboutContent></AboutContent>
          <AboutPortfolio></AboutPortfolio>
          <AboutIdea></AboutIdea>
          <HomeClients></HomeClients>
          <Footer2></Footer2>
        </div>
    );
};

export default AboutUs;
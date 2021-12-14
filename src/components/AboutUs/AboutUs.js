import React from 'react';
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
    
          <AboutBanner></AboutBanner>
          <AboutContent></AboutContent>
          <AboutPortfolio></AboutPortfolio>
          <AboutIdea></AboutIdea>
          {/* <HomeClients2></HomeClients2> */}
    
        </div>
    );
};

export default AboutUs;
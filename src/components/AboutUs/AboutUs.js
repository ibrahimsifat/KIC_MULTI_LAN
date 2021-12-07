import React from 'react';
import Footer from '../../shared/Footer';
import HomeClients2 from '../Home/HomeClients/HomeClients2';
import AboutBanner from './AboutBanner';
import AboutContent from './AboutContent';
import AboutIdea from './AboutIdea';
import AboutPortfolio from './AboutPortfolio';
import './AboutUs.css'
import cookies from 'js-cookie'
import Navigation3 from '../../shared/Navigation3';

const AboutUs = () => {
    const IsArabic=cookies.get('i18next') ==='ar'
    return (
        <div className={!IsArabic?'monsterratFont':"arabic-font-1" }>
         <Navigation3></Navigation3>
          <AboutBanner></AboutBanner>
          <AboutContent></AboutContent>
          <AboutPortfolio></AboutPortfolio>
          <AboutIdea></AboutIdea>
          {/* <HomeClients2></HomeClients2> */}
          <Footer></Footer>
        </div>
    );
};

export default AboutUs;
import React from 'react';
import Footer2 from '../../shared/Footer2';
import LoginNavigation from '../../shared/LoginNavigation';
import Banner from './Banner/Banner';
import Banner2 from './Banner/Banner2';
import BootSlier from './BootSlier';
import HomeAbout from './HomeAbout/HomeAbout';
import HomeClients from './HomeClients/HomeClients';
import HomePortfolio from './HomePortfolio/HomePortfolio';
import Homeservices from './HomeService/Homeservices';
import Philosophy from './Philosophy/Philosophy';
import TestimonialSlider from './Testimonial/TestimonialSlider';
import Vision from './Vision';
const Home = () => {
    return (
        <div>
            <LoginNavigation></LoginNavigation>
            <Banner2></Banner2>
            <HomeAbout></HomeAbout>
            {/* <Vision></Vision> */}
            <HomePortfolio></HomePortfolio>
            <Philosophy></Philosophy>
            <HomeClients></HomeClients>
            <BootSlier></BootSlier>
            <Footer2></Footer2>
        </div>
    );
};

export default Home;
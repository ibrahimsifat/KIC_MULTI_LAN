import React from 'react';
import Footer from '../../shared/Footer';
import Banner from './Banner/Banner';
import BootSlier from './BootSlier';
import HomeAbout from './HomeAbout/HomeAbout';
import HomeClients from './HomeClients/HomeClients';
import HomeClients2 from './HomeClients/HomeClients2';
import HomePortfolio from './HomePortfolio/HomePortfolio';
import Homeservices from './HomeService/Homeservices';
import HomeSimpleService from './HomeSimpleService/HomeSimpleService';

import Philsoplhy2 from './Philosophy/Philsoplhy2';
import TestimonialSlider from './Testimonial/TestimonialSlider';
import Vision from './Vision';
const Home = () => {
    return (
        <div>
     
            <Banner></Banner>
            {/* <HomeAbout></HomeAbout> */}
            <Vision></Vision>
            {/* <Homeservices></Homeservices> */}
            <HomePortfolio></HomePortfolio>
            <Philsoplhy2></Philsoplhy2>
            {/* <HomeClients></HomeClients> */}
            {/* <HomeSimpleService></HomeSimpleService> */}
            {/* <BootSlier></BootSlier> */}
            {/* <HomeClients2></HomeClients2> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;
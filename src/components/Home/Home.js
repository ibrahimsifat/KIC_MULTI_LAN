import React from 'react';
import Footer from '../../shared/Footer';
import Banner from './Banner/Banner';

import HomePortfolio from './HomePortfolio/HomePortfolio';

import Vision from './Vision';
const Home = () => {
    return (
        <div>
     
            <Banner></Banner>
            {/* <HomeAbout></HomeAbout> */}
            <Vision></Vision>
            {/* <Homeservices></Homeservices> */}
            <HomePortfolio></HomePortfolio>
            {/* <Philsoplhy2></Philsoplhy2> */}
            {/* <HomeClients></HomeClients> */}
            {/* <HomeSimpleService></HomeSimpleService> */}
            {/* <BootSlier></BootSlier> */}
            {/* <HomeClients2></HomeClients2> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;
import React from 'react';
import Footer from '../../shared/Footer';
import Banner from './Banner/Banner';
import HomeClients from './HomeClients/HomeClients';
import HomePortfolio from './HomePortfolio/HomePortfolio';
import Philosophy from './Philosophy/Philosophy';
import Vision from './Vision';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Vision></Vision>
            <HomePortfolio></HomePortfolio>
            <Philosophy></Philosophy>
            <HomeClients></HomeClients>
            <Footer></Footer>
        </div>
    );
};

export default Home;
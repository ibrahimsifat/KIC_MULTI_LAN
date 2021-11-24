import React from 'react';
import Footer2 from '../../shared/Footer2';
import GraphicDesignService from './GraphicDesignService';
import ServicesBanner from './SerivcesBanner';
import ServiceClients from './ServiceClients';
import ServiceDownloadPortfolio from './ServiceDownloadPortfolio';
import ServiceMarketing from './ServiceMarketing';
import ServicePrinting from './ServicePrinting';
import ServiceWebdesign from './ServiceWebdesign';

const Services = () => {
    return (
        <div>
            <ServicesBanner></ServicesBanner>
            <GraphicDesignService></GraphicDesignService>
            <ServicePrinting></ServicePrinting>
            <ServiceWebdesign></ServiceWebdesign>
            <ServiceMarketing></ServiceMarketing>
            <ServiceDownloadPortfolio></ServiceDownloadPortfolio>
            <ServiceClients></ServiceClients>
          <Footer2></Footer2>
        </div>
    );
};

export default Services;
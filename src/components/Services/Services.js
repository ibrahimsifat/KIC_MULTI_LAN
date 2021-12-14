import React from 'react';
import GraphicDesignService from './GraphicDesignService';
import ServicesBanner from './SerivcesBanner';
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
            {/* <ServiceClients></ServiceClients> */}
       
        </div>
    );
};

export default Services;
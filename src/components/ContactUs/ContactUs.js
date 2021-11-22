import React from 'react';
import HomeClients from '../Home/HomeClients/HomeClients';
import ContactAgency from './ContactAgency';
import ContactBanner from './ContactBanner';
import ContactFooter from './ContactFooter';

const ContactUs = () => {
    return (
        <div>
            <ContactBanner></ContactBanner>
            <ContactAgency></ContactAgency>
            <HomeClients></HomeClients>
            <ContactFooter></ContactFooter>
        </div>
    );
};

export default ContactUs;
import React from 'react';
import LoginNavigation from '../../shared/LoginNavigation';
import HomeClients from '../Home/HomeClients/HomeClients';
import ContactAgency from './ContactAgency';
import ContactBanner from './ContactBanner';
import ContactBannertwo from './ContactBannertwo';
import ContactFooter from './ContactFooter';

const ContactUs = () => {
    return (
        <div>
            <LoginNavigation></LoginNavigation>
            <ContactBannertwo></ContactBannertwo>
            <ContactAgency></ContactAgency>
            <HomeClients></HomeClients>
            <ContactFooter></ContactFooter>
        </div>
    );
};

export default ContactUs;
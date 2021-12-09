import React from 'react';
import Footer from '../../shared/Footer';
import ContactAgency from './ContactAgency';
import ContactBanner from './ContactBanner';



const ContactUs = () => {
    return (
        <div>
      
            <ContactBanner></ContactBanner>
            <ContactAgency></ContactAgency>
            {/* <HomeClients></HomeClients> */}
            {/* <ContactFooter></ContactFooter> */}
            <Footer></Footer>
        </div>
    );
};

export default ContactUs;
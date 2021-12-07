import React from 'react';
import './ContactUs.css'
import { useTranslation } from 'react-i18next';
const ContactAgency = () => {
    const { t } = useTranslation()

    return (
        <div className=' w-full  '>
          <img src={t('contact_agency_banner')} alt="" />
        </div>
    );
};

export default ContactAgency;
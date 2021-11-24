import React from 'react';
import './ContactUs.css'
import cookies from 'js-cookie'
import { useTranslation } from 'react-i18next';
const ContactAgency = () => {
    const { t } = useTranslation()
    const IsArabic=cookies.get('i18next') ==='ar'
    return (
        <div className='contact-anner w-full relative monsterratFont'>
          <p className={!IsArabic?'uppercase font-extrabold md:text-5xl text-2xl textred absolute md:top-56 top-40 left-40 tracking-tight'
        :
        'uppercase font-extrabold md:text-5xl text-2xl textred absolute md:top-56 top-32 right-80 tracking-widest'
        }>{t('Contact_Agency_one')}</p>
        </div>
    );
};

export default ContactAgency;
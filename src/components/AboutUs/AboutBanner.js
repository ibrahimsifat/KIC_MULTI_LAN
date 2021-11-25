import React from 'react';
import AboutHero from '../../img/aboutbgicon2.png'
import cookies from 'js-cookie'
import { useTranslation } from 'react-i18next';
const AboutBanner = () => {
const IsArabic=cookies.get('i18next') ==='ar'
const { t } = useTranslation()
    return (
      
        <div className='aboutBg-img relative pt-32 '>
            <div className={!IsArabic?'sm:flex justify-end md:mr-28  md:py-12 lg:py-16 py-10 items-center mr-auto'
            :
            'sm:flex justify-start inline-block md:py-12 lg:py-16 py-10  items-center md:mr-28 mr-4'
        }>
            <div className={!IsArabic?'monsterratFont  md:mx-6 mx-4 md:w-8/12 text-end':"arabic-font-1  md:mx-6 mx-4 md:w-8/12 text-end" } >
               <p> <span className='textred text-3xl sm:text-2xl md:text-3xl lg:text-6xl tracking-tight	 font-bold'>{t('About_Banner_one')}</span></p>
                 <p className='tracking-widest text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-white'>{t('About_Banner_two')}</p>
                 <p className='text-white font-regular md:text-md text-sm md:mt-8 mt-3   '>
                 {t('About_Banner_three')}</p>
                 <p className='text-white font-regular md:text-md text-sm   mt-3 '>
                 {t('About_Banner_four')}
                </p>
                 <p className='text-white font-regular md:text-md text-sm  mt-1  '>   {t('About_Banner_five')}</p>
               </div>
            </div>

            <div className=" md:inline-block hidden absolute left-2 bottom-2">
                <img className='w-full' src={AboutHero} alt="" />
            </div>
        </div>
    );
};

export default AboutBanner;
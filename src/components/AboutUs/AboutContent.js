import React from 'react';
import { useTranslation } from 'react-i18next';
import './AboutUs.css'
const AboutContent = () => {
    const { t } = useTranslation()
    return (
        <div className='about_content flex justify-start items-center'>
            <div className='md:px-10 mx-5 md:pr-10 container ml-6 md:w-6/12 monsterratFont '>
               <p> <span className=' text-3xl sm:text-2xl md:text-3xl lg:text-5xl tracking-tight uppercase content-color font-bold'>   {t('About_Content_one')}</span></p>
                    <p className=' font-semibold md:text-md text-sm md:mt-6 mt-3   '>
                    {t('About_Content_two')}</p>
                 <p className=' font-semibold md:text-md text-sm   mt-2 '>
                 {t('About_Content_three')}
                </p>
             
               </div>
        </div>
    );
};

export default AboutContent;
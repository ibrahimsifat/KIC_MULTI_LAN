import React from 'react';
import cookies from 'js-cookie'
import { useTranslation } from 'react-i18next';
import './AboutUs.css'
const AboutContent = () => {
    const IsArabic=cookies.get('i18next') ==='ar'
    const { t } = useTranslation()
    return (
        <div  className=' about_content flex justify-start items-center'>
            <div data-aos="fade-left" data-aos-easing="linear"
        data-aos-duration="1000" className={!IsArabic?'w-full  monsterratFont md:px-10 mx-4 md:mx-16 md:pr-20  md:mt-0 mt-4 ml-6 md:w-7/12 ':"container mx-auto arabic-font-1  md:mx-16 mx-4 w-full md:mt-0  mt-4  md:w-7/12 " }>
               <p> <span className=' text-3xl  md:text-4xl lg:text-5xl tracking-tight uppercase content-color font-bold'>   {t('About_Content_one')}</span></p>
                    <p className=' font-semibold md:text-md text-md md:mt-6 mt-3   '>
                    {t('About_Content_two')}</p>
                 <p className=' font-semibold md:text-md text-md   mt-2 '>
                 {t('About_Content_three')}
                </p>
             
               </div>
        </div>
    );
};

export default AboutContent;
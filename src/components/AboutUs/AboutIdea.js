import React from 'react';
import './AboutUs.css'
import IdeaIcon from '../../img/aboutIdeaicon.png';
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie'
const AboutIdea = () => {
    const IsArabic=cookies.get('i18next') ==='ar'
    const { t } = useTranslation()
    return (
       
                 <div className='aboutIdeaBg flex flex-col   justify-center items-center '>
            <div className='grid sm:grid-cols-4 px-4 gap-4 pb-8 container'>
             
              <div className='col-span-2'>
                  <img data-aos="fade-left" data-aos-easing="linear"
     data-aos-duration="1000" src={IdeaIcon} alt="" />
                  </div>  
              <div className='flex justify-center items-center md:mr-44   col-span-2   '>
                        
                    <div className={IsArabic?' md:ml-0 ml-6 ':' md:ml-44 ml-6  '} > 
                                    
                            <h1 className=' text-3xl font-extrabold sm:text-4xl md:text-4xl lg:text-5xl text-transparent uppercase strokeme'>
                            {t('home_idea_first')}
                            </h1>
                            <h1 className=' text-3xl font-extrabold sm:text-4xl md:text-4xl lg:text-5xl text-transparent uppercase strokeme'>
                            {t('home_idea_second')}</h1>
                            <h1 className=' text-3xl font-extrabold sm:text-4xl md:text-4xl lg:text-5xl text-transparent uppercase strokeme'>
                            {t('home_idea_three')}</h1>

                    </div>
            </div>
              </div>

          
        </div>
     
    );
};

export default AboutIdea;
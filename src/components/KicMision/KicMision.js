import React from 'react';
import cookies from 'js-cookie'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './KicVision.css'
import VIsionImg from '../../img/mision.jpg'
import VIsionImgArabic from '../../img/mision-arabic.jpg'
import Navigation2 from '../../shared/Navigation2';
const KicMision = () => {
    const IsArabic=cookies.get('i18next') ==='ar'
    const { t } = useTranslation()
    return (
        <div >
            <Navigation2></Navigation2>
            <div className='mb-16'>
                <div className='VisionsBanner'>
                <div className='   flex justify-center flex-col items-center pt-20'>
            <p className="text-black font-extrabold text-3xl md:text-5xl uppercase">
                
            {t('home_vision_first')}
                </p>
               <div className="text-black font-semibold text-xl mt-2 flex">
                   <Link className=' no-underline text-black' to='/'>{t('service_allClients_two')}</Link>
                    <span className='px-2'>/</span> <span className=' '>{t('service_allClients_three')}</span>
                    </div>
        </div>
                </div>
                
            </div>
          {!IsArabic&&  <div className="">
                <img className='block mx-auto' src={VIsionImg} alt="" />

            </div>}
            {IsArabic&&<div className="">
                <img className='block mx-auto' src={VIsionImgArabic} alt="" />

            </div>}
        </div>
    );
};

export default KicMision;
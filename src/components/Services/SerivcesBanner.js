import React from 'react';
import cookies from 'js-cookie'
import { useTranslation } from 'react-i18next';
import LoginNavigation from '../../shared/LoginNavigation';
import './Serivces.css'
const ServicesBanner = () => {
    const IsArabic=cookies.get('i18next') ==='ar'
    const { t } = useTranslation()
    return (
        <div className='service-bg-img h-screen	'>
         <div className='pt-10'>
         <LoginNavigation></LoginNavigation>
    <div className='flex justify-center items-center '>
    <div className='grid lg:grid-cols-2 '>
             <div className="home-content left flex flex-col justify-center lg:items-right items-end">
          <div className='md:w-8/12 w-12/12 px-3 lg:mt-52 md:mt-44 mt-24 block'>
          <p className={!IsArabic?'monsterratFont text-white text-xl':"arabic-font-2 text-white text-xl" }>{t('Service_Banner_one')}</p>
                <h1 className='bg-white py-1 md:w-64 w-52 ml-auto mt-4'> </h1>
          </div>

             </div>
             <div className="right w-12/12 mt-2 md:mt-8 px-4">
            
             </div>
                
         </div>
    </div>
         </div>
        </div>
    );
};

export default ServicesBanner;
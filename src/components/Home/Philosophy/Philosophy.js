import React from 'react';
import cookies from 'js-cookie'
import { useTranslation } from 'react-i18next';
import './Philosophy.css'

const Philosophy = () => {
  const { t } = useTranslation()
  const IsArabic=cookies.get('i18next') ==='ar'
    return (
        <div className='philosophybg flex flex-col md:pb-0 pb-16 justify-center items-center '>
            <div className='grid sm:grid-cols-4 px-4 pb-8 py-5 container'>
              <div className='col-span-3'>
              <div > 
                      
              <h1 className={!IsArabic?'monsterratFont text-3xl font-extrabold sm:text-4xl md:text-4xl lg:text-5xl text-white uppercase':'arabic-font-1 text-3xl font-extrabold sm:text-4xl md:text-4xl lg:text-5xl text-white uppercase'}>{t('home_PHILOSOPHY_first')}</h1>
                <h1 className={!IsArabic?'text-white  py-4 md:my-6 md:text-md text-xl monsterratFont ':'text-white  my-4 md:my-6 text-sm lg:text-xl arabic-font-1 '}>{t('home_PHILOSOPHY_second')}</h1>
              </div>
              </div>
            </div>
        </div>
    );
};

export default Philosophy;
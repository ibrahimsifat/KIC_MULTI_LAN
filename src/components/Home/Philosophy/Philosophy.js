import React from 'react';
import { useTranslation } from 'react-i18next';
import './Philosophy.css'

const Philosophy = () => {
  const { t } = useTranslation()
    return (
        <div className='philosophybg flex flex-col  justify-center items-center '>
            <div className='grid sm:grid-cols-4 px-4 pb-8 container'>
              <div className='col-span-3'>
              <div > 
                      
              <h1 className='monsterratFont text-3xl font-extrabold sm:text-4xl md:text-4xl lg:text-5xl text-white uppercase'>{t('home_PHILOSOPHY_first')}</h1>
                <h1 className='text-white  my-4 md:my-6 sm:text-sm lg:text-xl monsterratFont'>{t('home_PHILOSOPHY_second')}</h1>
              </div>
              </div>
            </div>
        </div>
    );
};

export default Philosophy;
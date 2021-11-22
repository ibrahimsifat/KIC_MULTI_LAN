import React from 'react';
import VisionsBg from '../../img/visions-bg.jpg';
import '../../App.css'
import { useTranslation } from 'react-i18next';
const Vision = () => {
  const { t } = useTranslation()
    return (
        <div>
          <div className="grid md:grid-cols-2">
          <div className="left">
                <img src={VisionsBg} alt="" />
            </div>
            <div className=" right bgred flex justify-center items-center lg-pt-0 pt-8">
              <div className='px-8 md:px-16'>
              <h1 className='monsterratFont tracking-tighter font-extrabold	 text-3xl sm:text-5xl md:text-4xl lg:text-5xl mb-6 lg:mb-8'>{t('home_vision_first')}</h1>
                <p className='text-white  mb-4 md:my-10 lg:my-0  sm:text-md lg:text-xl monsterratFont'>{t('home_vision_second')}</p>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Vision;
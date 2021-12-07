import React from 'react';
import Fade from 'react-reveal/Fade';
import cookies from 'js-cookie'
import VisionsBg from '../../img/visions-bg.jpg';
import '../../App.css'
import { useTranslation } from 'react-i18next';
const Vision = () => {
  const { t } = useTranslation()
  const IsArabic=cookies.get('i18next') ==='ar'
    return (
        <div>
          <div className="grid md:grid-cols-2">
          <div className="left">
                <img src={VisionsBg} alt="" />
            </div>
            <div className=" right bgred flex justify-center items-center lg-pt-0 pt-8">
            <Fade right>   <div className={!IsArabic?'px-8 md:px-16 monsterratFont':'px-8 md:px-16 arabic-font-2  '}>
              <h1 className=' tracking-tighter font-extrabold	 text-3xl sm:text-5xl md:text-4xl lg:text-5xl mb-6 lg:mb-8'>{t('home_vision_first')}</h1>
                <p className='text-white  mb-4 md:my-10 lg:my-0  sm:text-md lg:text-md '>{t('home_vision_second')}</p>
                <p className='text-white  mb-4 md:my-10 lg:my-0  sm:text-md lg:text-md '>{t('home_vision_second2')}</p>
              </div>
              </Fade>
            </div>
          </div>
        </div>
    );
};

export default Vision;
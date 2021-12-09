import React from 'react';
import cookies from 'js-cookie'
import Hero from '../../../img/Hero.png'
import './Banner.css'
import { useTranslation } from 'react-i18next';
import { AiOutlineDownload } from 'react-icons/ai';
import Navigation3 from '../../../shared/Navigation3';

const Banner = () => {
    const { t } = useTranslation()
    const IsArabic=cookies.get('i18next') ==='ar'
    return (
        <div className={!IsArabic?'bg-img':'bg-img-arabic'}>
         <div className=''>
         <Navigation3></Navigation3>
    <div className='flex justify-center items-center '>
    <div  className='grid md:grid-cols-2 '>
             <div data-aos="fade-up-left"  data-aos-easing="linear"
     data-aos-duration="1000" className="home-content left flex flex-col justify-center lg:items-right items-center">
                <div className={!IsArabic?'monsterratFont text-right px-4  md:my-0 my-8 md:pt-0 pt-8 ':
                'text-right px-4  md:my-0 my-8 md:pt-0 pt-8 arabic-font-1 '}>
                <p><span className='text-3xl md:text-3xl text-white'>{t('home_banner_first')}</span> 
                <span className='textred text-3xl sm:text-5xl md:text-5xl lg:text-6xl  font-bold'> {t('home_banner_second')}</span></p>
                 <p className=' text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-white'>{t('home_banner_three')}</p>
                 <p className='textred font-bold text-3xl sm:text-5xl md:text-5xl lg:text-6xl'>{t('home_banner_fourth')}</p>
                <a href='../Profile.pdf' download="KIC Portfolio" 
                className="mt-3 md:mx-6 mx-2 mb-6 md:mb-0 md:mt-4 inline-block py-2 px-4 text-white bgred hover:bg-purple-900 duration-500  shadow text-start no-underline button"
                >
                    <AiOutlineDownload className={!IsArabic?'inline text-2xl animate-bounce mr-2 -ml-2':'inline text-2xl animate-bounce ml-2 -mr-2'} />
                    {t('home_banner_six')}</a>

                </div>
             </div>
             <div data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1000" className="right w-12/12 mt-2 md:mt-8 px-4">
                <img  src={Hero} alt="" />
             </div>
                
         </div>
    </div>
         </div>
        </div>
    );
};

export default Banner;
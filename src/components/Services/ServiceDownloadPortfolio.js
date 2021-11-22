import React from 'react';
import './Serivces.css'
import Shap from '../../img/service-portfolio-save.png'
import { useTranslation } from 'react-i18next';
const ServiceDownloadPortfolio = () => {
    const { t } = useTranslation()
    return (
        <div className='downloadPortfolio_bg my-4 relative'>
            <div>
                <img className='lg:w-32  md:w-28 w-24 absolute -top-20 md:right-32 right-28 lg:right-44' src={Shap} alt="" />
            </div>
            <div className="flex justify-center items-center">
            <i class="fas fa-chevron-right  text-gray-400 
             text-3xl sm:text-4xl md:text-3xl lg:text-4xl mb-6 lg:mb-8 mr-10 "></i>
           <a href='../Profile.pdf' download="KIC Portfolio" className=' fromLeft monsterratFont tracking-tighter font-extrabold uppercase py-9 text-white text-3xl sm:text-4xl md:text-3xl lg:text-4xl mb-6 lg:mb-8'>
           {t('service_portfolio_one')}</a>
           <i class="fas fa-chevron-left text-3xl sm:text-4xl md:text-3xl lg:text-4xl mb-6 lg:mb-8 ml-10 text-gray-400 "></i>
            </div>
        </div>
    );
};

export default ServiceDownloadPortfolio;
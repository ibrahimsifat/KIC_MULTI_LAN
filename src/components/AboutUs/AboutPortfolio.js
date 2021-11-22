import React from 'react';
import { useTranslation } from 'react-i18next';
import './AboutUs.css'
const AboutPortfolio = () => {
    const { t } = useTranslation()
    return (
        <div className='about_portfolio_bg mb-2'>
           <div className="container mx-auto pt-44 monsterratFont md:px-6 px-5">
                
            <p className='uppercase font-extrabold text-white md:text-4xl sm:text-3xl text-2xl '>{t('home_portfolio_first')}</p>
            <p className='uppercase font-extrabold text-white md:text-4xl sm:text-3xl text-2xl '>{t('home_portfolio_second')}</p>

            <a href='../Profile.pdf' download="KIC Portfolio" className='uppercase font-extrabold text-white md:text-4xl sm:text-3xl text-2xl cursor-pointer  duration-500 pb-2
            hover_border fromRight
           w-44
            inline-block
            
            '>{t('home_portfolio_three')}</a>
        
           </div>
        </div>
    );
};

export default AboutPortfolio;
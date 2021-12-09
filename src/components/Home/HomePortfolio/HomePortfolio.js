import React from 'react';
import './HomePortfolio.css'
import Sabe from '../../../img/home-portfolio-shep.png'
const HomePortfolio = () => {

    return (
        <div className=' homePortfolioBg relative '>
             <div className=''>
          <div className="grid md:grid-cols-2">
          <div className="left">
        <div  className='px-8 md:px-16 '>
                <img className='absolute lg:-top-12 -top-16 md:-right-0  w-16 lg:w-64 lg:inline-block hidden'  src={Sabe} alt="" />
              </div>
             
            </div>
            <div className="  flex justify-center items-center lg-pt-0 pt-8">
             {/* <div className={!IsArabic?"container mx-auto pt-52 monsterratFont md:mr-44 px-5":"container absolute top-60 md:right-32  px-5"}>
                
                <p className='uppercase font-extrabold  md:text-white  text-blue-600  lg:text-5xl md:text-4xl sm:text-4xl text-3xl '>{t('home_portfolio_first')}</p>
                <p className='uppercase font-extrabold md:text-white  text-blue-600 lg:text-5xl  md:text-4xl sm:text-4xl text-3xl '>{t('home_portfolio_second')}</p>
    
                <a href='../Profile.pdf' download="KIC Portfolio" className='uppercase font-extrabold  md:text-white  text-blue-600 lg:text-5xl  md:text-4xl sm:text-4xl text-3xl cursor-pointer  duration-500 pb-2
                hover_border fromRight
               w-71
                inline-block
                no-underline
                '>{t('home_portfolio_three')}</a>
            
               </div> */}
        
            </div>
          </div>
        </div>
        </div>
    );
};

export default HomePortfolio;
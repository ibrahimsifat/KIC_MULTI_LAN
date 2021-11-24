import React, { useEffect } from 'react';
import './AllPortfolio.css'
import LoginNavigation from '../../shared/LoginNavigation'
import { Link } from 'react-router-dom';
import kicFristImg from '../../img/kicPort.png'
import '../../App.css'
import SinglePortfolio from './SinglePortfolio';

import { useTranslation } from 'react-i18next';
import { useState } from 'react/cjs/react.development';
const AllPortfolioBanner = () => {
    const { t } = useTranslation()
    const [portfolios,setPortfolios]=useState([])
    useEffect(()=>{
        fetch('AllPortfolio.json')
        .then(res=>res.json())
        .then(data=>setPortfolios(data))
    },[])
  
    return (
        <div>
            <div className="bg-purple-100 font-sans leading-normal tracking-normal">


<div className="w-full m-0 p-0 bg-cover bg-bottom bgImage "
style={{height:'500px',maxHeight:'560px'}} >
    <LoginNavigation></LoginNavigation>
        <div className="container  mx-auto text-center break-normal">

                <p className="text-white mt-32 font-extrabold text-3xl md:text-5xl">
                {t('allPortfolio_one')}
               
                </p>
               <div className="mx-auto text-center flex justify-center">
               <p className="text-white font-semibold text-xl flex  mx-auto text-center mt-2"><Link className='nav_hover text-white no-underline' to='/'>{t('service_allClients_two')}</Link><span className="mx-2">/</span> <span className='nav_hover '>{t('allPortfolio_two')}</span></p>
               </div>
               
        </div>
    </div>

    <div className="container px-4  md:px-0 max-w-6xl mx-auto -mt-24">
        
        <div className="mx-0 sm:mx-6 ">
            
       
         

            <div className="bg-purple-100 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
                
           
            <div className="flex h-full rounded overflow-hidden shadow-lg ">
                <a href="..." className="bg-blue-100 flex flex-wrap no-underline hover:no-underline">
                    <div className="w-full md:w-2/3 rounded-t ">	
                        <img src={kicFristImg} className="h-full w-full shadow" alt=''/>
                    </div>

                    <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink ">
                        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden bg-purple-50 ">
                            <p className="w-full text-gray-600 text-xs md:text-sm pt-6 px-6">{t('allPortfolio_three')}</p>
                            <div className="w-full font-bold text-xl text-gray-900 px-6 mb-7 ">👋 {t('allPortfolio_four')}</div>
                            <p className="text-gray-800 font-serif text-base px-6 mb-5">
                            {t('allPortfolio_five')}
                            </p>
                           <div className='mx-4'>
                           <Link className='bg-btn px-4 py-2 mx-auto inline-block font-semibold no-underline duration-500 rounded-md mt-3 mx-12 text-white'
                           to="../Profile.pdf" target="_blank" download>
                            {t('allPortfolio_six')}
                            </Link>
                           </div>

                        </div>

                                        </div>

                </a>
            </div>
      


     
            <div className="container grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-1 mt-16 pb-16">

            {
                portfolios.map(portfolio=><SinglePortfolio
                key={portfolio.id}
                portfolio={portfolio}
                ></SinglePortfolio>)
            }
           
             
            </div>
        
                    
        </div>
        
        
        
    </div>


</div>



</div>
        </div>
    );
};

export default AllPortfolioBanner;
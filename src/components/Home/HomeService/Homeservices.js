import React, { useEffect } from 'react';

import cookies from 'js-cookie'
import LoginNavigation from '../../../shared/LoginNavigation'
import { Link, NavLink } from 'react-router-dom';
import kicFristImg from '../../../img/kicPort.png'
import '../../../App.css'


import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import SinglePortfolio from '../../AllPortfolio/SinglePortfolio';
const Homeservices = () => {
    const IsArabic=cookies.get('i18next') ==='ar'
    const { t } = useTranslation()
    const [portfolios,setPortfolios]=useState([])
    useEffect(()=>{
        fetch('AllPortfolio.json')
        .then(res=>res.json())
        .then(data=>setPortfolios(data))
    },[])
  const sliecdService=portfolios.slice(1,9)
    return (
        <div>
            <div className="bg-purple-100 font-sans leading-normal tracking-normal">

       


    <div className="container px-4  md:px-0 max-w-6xl mx-auto -mt-32">
                  
         
      
            <div className=' text-center pt-32'> 
    
                <h1 className='md:text-4xl text-2xl uppercase  sm:text-3xl font-bold '>Resent Work</h1>
               <p className='text-gray-700 mt-2 text-sm'>- WE ARE STRONGER -</p>
            </div>
            <div className="container grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-16 pb-16">

            {
                sliecdService.map(portfolio=><SinglePortfolio
                key={portfolio.id}
                portfolio={portfolio}
                ></SinglePortfolio>)
            }
           
             
            </div>
        
                    
        </div>
        
        
        
    </div>


</div>



    );
};

export default Homeservices;
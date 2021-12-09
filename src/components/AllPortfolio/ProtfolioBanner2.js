import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SinglePortfolio from './SinglePortfolio';
import cookies from 'js-cookie'
import Navigation3 from '../../shared/Navigation3';
const ProtfolioBanner2 = () => {
    const { t } = useTranslation()
    const [portfolios,setPortfolios]=useState([])
    useEffect(()=>{
        fetch('../AllPortfolio.json')
        .then(res=>res.json())
        .then(data=>setPortfolios(data))
    },[])
    const IsArabic=cookies.get('i18next') ==='ar'
    return (
        <div>
            
            <div className="w-full m-0 p-0 bg-cover bg-bottom bgImage "
style={{height:'500px',maxHeight:'560px'}} >
    <Navigation3></Navigation3>
        <div className="container  mx-auto text-center break-normal">

                <p className="text-white mt-32 font-extrabold text-3xl md:text-5xl">
                {t('allPortfolio_one')}
               
                </p>
               <div className="mx-auto text-center flex justify-center">
               <p className="text-white font-semibold text-xl flex  mx-auto text-center mt-2"><Link className='nav_hover text-white no-underline' to='/'>{t('service_allClients_two')}</Link><span className="mx-2">/</span> <span className='nav_hover '>{t('allPortfolio_two')}</span></p>
               </div>
               
        </div>
       
    </div>
    <div className="flex w-10/12 mx-auto rounded shadow-lg ">
                <div  className="bg-blue-100 flex flex-wrap ">
                    <div className="w-full md:w-2/3 rounded-t ">	
                        <img src='https://i.ibb.co/rZrJpmS/43.jpg' className="w-full h-full shadow" alt=''/>
                    </div>

                    <div className={!IsArabic?'monsterratFont w-full md:w-1/3 flex flex-col flex-grow items-center  flex-shrink':"arabic-font-1 w-full md:w-1/3 flex flex-col flex-grow flex-shrink" }>
                        <div className="flex-1 bg-white rounded-t rounded-b-none bg-purple-50 md:pt-44 ">
                            
                            <div className="w-full font-bold text-xl text-gray-900 px-6 mb-7 mt-3">👋 {t('allPortfolio_four')}</div>
                            <p className="text-gray-800 font-serif md:text-xl text-base px-6 mb-4">
                            {t('allPortfolio_five')}
                            </p>
                           <div className='mx-4'>
                               
                           <Link className='bg-btn lg:px-4 py-2 mb-4 mx-auto inline-block 
                           lg:text-xl md:text-md text-sm font-semibold no-underline duration-500 rounded-md mx-12 text-white'
                           to="../Profile.pdf" target="_blank" download>
                            {t('allPortfolio_six')}
                            </Link>
                           </div>

                        </div>

                                        </div>

                </div>
            </div>
<div className=' my-20 text-center'> 
    
    <h1 className='md:text-4xl text-2xl uppercase  sm:text-3xl font-bold '>{t('allPortfolio_seven')}</h1>
   <p className='text-gray-700 mt-2 text-sm'>- {t('allPortfolio_eight')} -</p>
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
    );
};

export default ProtfolioBanner2;
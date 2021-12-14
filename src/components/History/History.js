import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './History.css'
import Img from '../../img/kicPort.png'

const History = () => {
    const { t } = useTranslation()
    return (
        <div>
         
            <div className='mb-16'>
                <div className='HistoryBanner'>
                <div className=' container  flex justify-center flex-col items-center pt-32'>
            <p className="text-black font-extrabold text-3xl md:text-5xl uppercase">
                
            {t('home_history')}
                </p>
               <div className="text-black font-semibold text-xl mt-2 flex">
                   <Link className=' no-underline text-black' to='/'>{t('service_allClients_two')}</Link>
                    <span className='px-2'>/</span> <span className=' '>{t('service_allClients_three')}</span>
                    </div>
        </div>
                </div>
                
            </div>
       <div className=' text-center mb-16 '>
       <section className="text-gray-600 body-font ">
  <div className=" md:px-12   py-24 mx-auto grid lg:grid-cols-2">
    <div className="flex flex-wrap -mx-4 mt-auto mb-auto content-start sm:pr-10">
      <div className="w-full sm:p-4 px-4 mb-6">
        <h1 className="title-font text-4xl font-extrabold mb-2 text-gray-900 uppercase ">{t('home_history3')}</h1>
        <div className="leading-relaxed md:text-xl text-md mt-3">{t('home_history2')}</div>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-bold text-3xl text-gray-900">200+</h2>
        <p className="leading-relaxed font-bold ">{t('home_history4')}</p>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-bold text-3xl text-gray-900">1.8K</h2>
        <p className="leading-relaxed font-bold">{t('home_history5')}</p>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-bold text-3xl text-gray-900">20+</h2>
        <p className="leading-relaxed font-bold">{t('home_history6')}</p>
      </div>
     
    </div>
    <div className="mt-6 sm:mt-0 border-l">
      <img className="object-cover object-center w-full h-full" src={Img} alt="stats"/>
    </div>
  </div>
</section>

       </div>

            
        </div>
    );
};

export default History;
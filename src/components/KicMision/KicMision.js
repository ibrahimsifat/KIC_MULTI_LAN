import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './KicVision.css'
import VIsionImg from '../../img/KICADV.png'
import VIsionImg2 from '../../img/KICADVarabic.png'
import cookies from 'js-cookie'

import MisionTimeline from './MisionTimeline';

const KicMision = () => {
const IsArabic=cookies.get('i18next') ==='ar'
    const { t } = useTranslation()
    return (
        <div className=''>
       
            <div className='mb-16'>
                <div className='VisionsBanner'>
                <div className='   flex justify-center flex-col items-center pt-44 '>
            <p className="text-black font-extrabold text-3xl md:text-5xl uppercase arabic-font-1">
                
            {t('vision_first')}
                </p>
               <div className="text-black font-semibold text-xl mt-2 flex">
                   <Link className=' no-underline text-black' to='/'>{t('service_allClients_two')}</Link>
                    <span className='px-2'>/</span> <span className=' '>{t('vision_one')}</span>
                    </div>
        </div>
                </div>
                
            </div>
         { !IsArabic? <div className="grid sm:grid-cols-2 justify-center md:w-10/12 mx-auto w-11/12 items-center">
           <div><img src={VIsionImg} alt=""className='sm:border-r w-full' /></div>
           <MisionTimeline ></MisionTimeline>
           </div>: <div className="grid sm:grid-cols-2 justify-center md:w-10/12 mx-auto w-11/12 items-center"> 
              <MisionTimeline ></MisionTimeline>
           <div><img src={VIsionImg2} alt=""className='sm:border-r w-full' /></div>
       
           </div>}
        
        </div>
    );
};

export default KicMision;
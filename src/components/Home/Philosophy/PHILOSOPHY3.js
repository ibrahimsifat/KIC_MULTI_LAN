import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Img from  '../../../img/PHILOSOPHY.jpg'
import Navigation3 from '../../../shared/Navigation3';
import Philsoplhy2 from './Philsoplhy2'
import './Philosophy.css'
const PHILOSOPHY3 = () => {
    const { t } = useTranslation()
    return (
        <>
        <Navigation3></Navigation3>
        <div className='bg-PHILOSOPHY'>
        <div className='pt-32  flex justify-center flex-col items-center'>
            <p className="text-white font-extrabold text-3xl md:text-5xl uppercase">
                
                 our {t ('Navigation_philosophy')}
                </p>
               <div className="text-white font-semibold text-xl mt-2 flex">
                   <Link className=' no-underline text-white' to='/'>{t('service_allClients_two')}</Link>
                    <span className='px-2'>/</span> <span className=' '>{t('Navigation_philosophy')}</span>
                    </div>
        </div>
            {/* <img className='w-full h-96' src={Img} alt="" /> */}
            <Philsoplhy2></Philsoplhy2>
        </div>
        </>
    );
};

export default PHILOSOPHY3;
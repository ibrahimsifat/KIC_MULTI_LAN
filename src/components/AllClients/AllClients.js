import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Footer from '../../shared/Footer';
import Navigation3 from '../../shared/Navigation3';
import AllClientsDetails from './AllClentsDetails';
import './AllClients.css'
const AllClients = () => {
    const { t } = useTranslation()
    return (
        <div>
            <div className='allclientbg'>
        <Navigation3></Navigation3>
            <div className='  mt-32 flex justify-center flex-col items-center'>
            <p className="text-white font-extrabold text-3xl md:text-5xl uppercase">
                
                  {t('service_allClients_one')}
                </p>
               <div className="text-white font-semibold text-xl mt-2 flex">
                   <Link className=' no-underline text-white' to='/'>{t('service_allClients_two')}</Link>
                    <span className='px-2'>/</span> <span className=' '>{t('service_allClients_three')}</span>
                    </div>
        </div>
      </div>
        <div className='mb-20'>
        <AllClientsDetails></AllClientsDetails>
 
        <Footer></Footer>
        </div>
            
        </div>
    );
};

export default AllClients;
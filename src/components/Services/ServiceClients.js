import React from 'react';
import clientBgIcon from '../../img/client-bg-icon.png'
import clientImg from '../../img/client-100.jpg'
import clientImg1 from '../../img/client-101.jpg'
import clientImg2 from '../../img/client-102.jpg'
import clientImg3 from '../../img/client-103.jpg'
import clientImg4 from '../../img/client-104.jpg'
import { useTranslation } from 'react-i18next';
const ServiceClients = () => {
    const { t } = useTranslation()

    return (
        <div className=''>
            <div className="my-20 relative ">
                <div className=' md:px-20'> 
                <h1 className='lg:ml-20 ml:ml-10 sm:ml-8 ml-16 monsterratFont text-3xl font-extrabold sm:text-4xl md:text-4xl lg:text-5xl textred my-4 uppercase'><p>{t('home_clients_first')}</p></h1>
                <div className="grid md:grid-cols-5 sm:grid-cols-3 ">
                    <img className='w-44 block mx-auto' src={clientImg} alt="" />
                    <img className='w-44 block mx-auto' src={clientImg1} alt="" />
                    <img className='w-44 block mx-auto' src={clientImg2} alt="" />
                    <img className='w-44 block mx-auto' src={clientImg3} alt="" />
                    <img className='w-44 block mx-auto' src={clientImg4} alt="" />
                </div>
                </div>
         <div className='relative'>
         <img className='w-36 pb-4 absolute top-3 left-5' src={clientBgIcon} alt="" />
         </div>
            </div>
        </div>
    );
};

export default ServiceClients;
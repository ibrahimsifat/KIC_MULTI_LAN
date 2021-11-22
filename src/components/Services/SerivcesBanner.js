import React from 'react';
import LoginNavigation from '../../shared/LoginNavigation';
import './Serivces.css'
const ServicesBanner = () => {
    return (
        <div className='service-bg-img h-screen	'>
         <div className='pt-10'>
         <LoginNavigation></LoginNavigation>
    <div className='flex justify-center items-center '>
    <div className='grid lg:grid-cols-2 '>
             <div className="home-content left flex flex-col justify-center lg:items-right items-end">
          <div className='md:w-8/12 w-12/12 px-3 lg:mt-52 md:mt-44 mt-24 block'>
          <p className='text-white monsterratFont text-xl'>We handle everything linked to branding,
                social media, digital design, photography,
                and consultancy, Our goal is to help our
                clients grow and gain exposure with the
                right designs, tone of voice and tools.</p>
                <h1 className='bg-white py-1 md:w-64 w-52 ml-auto mt-4'> </h1>
          </div>

             </div>
             <div className="right w-12/12 mt-2 md:mt-8 px-4">
            
             </div>
                
         </div>
    </div>
         </div>
        </div>
    );
};

export default ServicesBanner;
import React from 'react';
import './Serivces.css'
import PrintingBG from '../../img/servicePrinting-0.png'
const ServicePrinting = () => {
    return (
        <div className='mb-6'>
            <div>
          <div className="grid md:grid-cols-5">
            <div className=" col-span-3 print-bg right  flex justify-center items-center lg-pt-0 pt-8 h-96 ">
              <div className='px-8 md:px-16'>
              <h1 className='monsterratFont tracking-tighter font-extrabold uppercase text-white text-3xl sm:text-5xl md:text-4xl lg:text-5xl mb-6 lg:mb-8'>printing services</h1>
                <p className='text-white font-regular  mb-4 md:my-10 lg:my-0  sm:text-md lg:text-xl monsterratFont'>
                    We provide customers with timely, high-quality,
                    more comprehensive design, plate-making, multi
                    -color printing, processing, and gradually form a
                    variety  exquisite picture books, posters, product
                    samples, high-end color boxes, calendar, desk
                    calendar, and other printing products.</p>
              </div>
            </div>
            <div className="left col-span-3 md:-mt-0 -mt-12 md:col-span-2">
                <img className='lg:w-full md:h-96 md:w-full' src={PrintingBG} alt="" />
            </div>
          </div>
        </div>
        </div>
    );
};

export default ServicePrinting;
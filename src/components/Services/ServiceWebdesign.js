import React from 'react';
import './Serivces.css'
import WebdesignBG from '../../img/serviceWebdesign-01.png'
const ServiceWebdesign = () => {
    return (
        <div className='mb-6'>
            <div>
          <div className="grid md:grid-cols-2">
          <div className="left">
                <img className='lg:w-full md:h-96 md:w-full' src={WebdesignBG} alt="" />
            </div>
            <div className=" right bg-web flex justify-center items-center lg-pt-0 pt-8 h-96 ">
              <div className='px-8 md:px-16'>
              <h1 className='monsterratFont tracking-tighter font-extrabold uppercase text-white text-3xl sm:text-5xl md:text-4xl lg:text-5xl mb-6 lg:mb-8'>Web Design</h1>
                <p className='text-white font-regular  mb-4 md:my-10 lg:my-0  sm:text-md lg:text-xl monsterratFont'>
                    A professional website is the face of your
                    company. We always study the market and
                    the target audience before designing and
                    developing any professional websites.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default ServiceWebdesign;
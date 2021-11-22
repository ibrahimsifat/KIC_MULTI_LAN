import React from 'react';
import './Philosophy.css'

const Philosophy = () => {
    return (
        <div className='philosophybg flex flex-col  justify-center items-center '>
            <div className='grid sm:grid-cols-4 px-4 pb-8 container'>
              <div className='col-span-3'>
              <div > 
                      
              <h1 className='monsterratFont text-3xl font-extrabold sm:text-4xl md:text-4xl lg:text-5xl text-white uppercase'>kic philosophy</h1>
                <h1 className='text-white  my-4 md:my-6 sm:text-sm lg:text-xl monsterratFont'>It doesn’t matter how many people you reach if you don’t have the right message. While quality and precision are fundamental components of our work, the
                relationship with our clients has undoubtedly remained the core element
                of success that has always been a companion of the KIC journey.</h1>
              </div>
              </div>
            </div>
        </div>
    );
};

export default Philosophy;
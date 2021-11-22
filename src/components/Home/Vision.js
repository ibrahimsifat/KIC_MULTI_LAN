import React from 'react';
import VisionsBg from '../../img/visions-bg.jpg';
import '../../App.css'
const Vision = () => {
    return (
        <div>
          <div className="grid md:grid-cols-2">
          <div className="left">
                <img src={VisionsBg} alt="" />
            </div>
            <div className=" right bgred flex justify-center items-center lg-pt-0 pt-8">
              <div className='px-8 md:px-16'>
              <h1 className='monsterratFont tracking-tighter font-extrabold	 text-3xl sm:text-5xl md:text-4xl lg:text-5xl mb-6 lg:mb-8'>KIC VISIONS</h1>
                <p className='text-white  mb-4 md:my-10 lg:my-0  sm:text-md lg:text-xl monsterratFont'>KIC is a specialist sustainability communications
agency, with comprehensive and in-depth expertise
in printing and advertising. As the pioneer of printing
and advertising services for more than 28 years,
our priority is to provide high quality services to all
our clients.</p>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Vision;
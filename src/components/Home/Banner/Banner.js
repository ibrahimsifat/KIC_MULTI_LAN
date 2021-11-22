import React from 'react';
import LoginNavigation from '../../../shared/LoginNavigation';
import Hero from '../../../img/Hero.png'
import './Banner.css'
const Banner = () => {
    return (
        <div className='bg-img h-	'>
         <div className='pt-10'>
         <LoginNavigation></LoginNavigation>
    <div className='flex justify-center items-center '>
    <div className='grid md:grid-cols-2 '>
             <div className="home-content left flex flex-col justify-center lg:items-right items-center">
                <div className='text-right px-4  md:my-0 my-8 md:pt-0 pt-8 '>
                <p><span className=' text-3xl md:text-3xl text-white'>WE'RE</span> <span className='textred text-3xl sm:text-5xl md:text-5xl lg:text-6xl  font-bold'>PRINTING</span></p>
                 <p className=' text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-white'>AND ADVERTISING</p>
                 <p className='textred font-bold text-3xl sm:text-5xl md:text-5xl lg:text-6xl'>AGENCY</p>
                </div>

             </div>
             <div className="right w-12/12 mt-2 md:mt-8 px-4">
                <img  src={Hero} alt="" />
             </div>
                
         </div>
    </div>
         </div>
        </div>
    );
};

export default Banner;
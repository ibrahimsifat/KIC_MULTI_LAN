import React from 'react';
import AboutHero from '../../img/aboutbgicon2.png'
const AboutBanner = () => {
    return (
      
        <div className='aboutBg-img relative pt-32'>
            <div className='sm:flex justify-end inline-block md:py-12 lg:py-16 py-10  items-center'>
            <div className='monsterratFont md:mx-6 mx-4 md:w-7/12' >
               <p> <span className='textred text-3xl sm:text-2xl md:text-3xl lg:text-6xl tracking-tight	 font-bold'>WHO</span></p>
                 <p className='tracking-widest text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-white'>WE ARE</p>
                 <p className='text-white font-regular md:text-md text-sm md:mt-8 mt-3   '>
                    We are a creative design, social media, branding and printing agency
                   based in Jeddah, Saudi Arabia, made of graphic designers, art directors,
                   social media strategists, and creative directors. Our team come from
                   different backgrounds: we seek for diversity and innovative minds.</p>
                 <p className='text-white font-regular md:text-md text-sm   mt-3 '>
                    KIC was established in 1993 by the founder Atef Jebreal,    since then KIC
                    has proven to add that extra spark to your business no matter where you are!
                </p>
                 <p className='text-white font-regular md:text-md text-sm  mt-1  '>We have built our reputation based on trust and quality with our clients.</p>
               </div>
            </div>

            <div className=" md:inline-block hidden absolute left-2 bottom-2">
                <img className='w-full' src={AboutHero} alt="" />
            </div>
        </div>
    );
};

export default AboutBanner;
import React from 'react';
import './AboutUs.css'
const AboutContent = () => {
    return (
        <div className='about_content flex justify-start items-center'>
            <div className='md:px-10 mx-5 md:pr-10 container ml-6 md:w-6/12 monsterratFont '>
               <p> <span className=' text-3xl sm:text-2xl md:text-3xl lg:text-5xl tracking-tight uppercase content-color font-bold'>Content is king</span></p>
                    <p className=' font-semibold md:text-md text-sm md:mt-6 mt-3   '>
                    From idea generation, to creative execution, we can create
targeted and impactful campaigns to reach your target audience.
</p>
                 <p className=' font-semibold md:text-md text-sm   mt-2 '>
                 With an extensive portfolio of happy clients, we love nothing
more than creating a campaign that works and achieves
results. No matter the platform, from Facebook to Twitter to
Programmatic, we can help!
                </p>
             
               </div>
        </div>
    );
};

export default AboutContent;
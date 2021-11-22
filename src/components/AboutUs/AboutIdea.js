import React from 'react';
import './AboutUs.css'
import IdeaIcon from '../../img/aboutIdeaicon.png';
const AboutIdea = () => {
    return (
       
                 <div className='aboutIdeaBg flex flex-col  justify-center items-center '>
            <div className='grid sm:grid-cols-5 px-4 pb-8 container'>
             
              <div className='col-span-3'>
                  <img src={IdeaIcon} alt="" />
                  </div>  
              <div className='flex justify-center items-center md:ml-10'>
                        
                    <div className=' md:ml-0 ml-6' > 
                                    
                            <h1 className='monsterratFont text-3xl font-extrabold sm:text-4xl md:text-4xl lg:text-5xl text-transparent uppercase strokeme'>when</h1>
                            <h1 className='monsterratFont text-3xl font-extrabold sm:text-4xl md:text-4xl lg:text-5xl text-transparent uppercase strokeme'>quality</h1>
                            <h1 className='monsterratFont text-3xl font-extrabold sm:text-4xl md:text-4xl lg:text-5xl text-transparent uppercase strokeme'>matters</h1>

                    </div>
            </div>
              </div>

          
        </div>
     
    );
};

export default AboutIdea;
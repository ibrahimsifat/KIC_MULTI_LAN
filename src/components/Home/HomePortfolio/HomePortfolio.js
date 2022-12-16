import React from 'react';
import Sabe from '../../../img/home-portfolio-shep.png';
import './HomePortfolio.css';

const HomePortfolio = () => {

  return (
    <div className=' homePortfolioBg relative '>
      <div className=''>
        <div className="grid md:grid-cols-2">
          <div className="left">
            <div className='px-8 md:px-16 '>
              <img className='absolute lg:-top-12 -top-16 md:-right-0  w-16 lg:w-64 lg:inline-block hidden' src={Sabe} alt="" />
            </div>

          </div>
          <div className="  flex justify-center items-center lg-pt-0 pt-8">


          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePortfolio;
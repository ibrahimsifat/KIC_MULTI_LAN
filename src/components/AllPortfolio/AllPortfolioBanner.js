import React from 'react';
import './AllPortfolio.css'
import LoginNavigation from '../../shared/LoginNavigation'
import { Link } from 'react-router-dom';
import kicFristImg from '../../img/kicPort.png'
import '../../App.css'
import SinglePortfolio from './SinglePortfolio';
import Img1 from '../../img/AllPorfolio/1.jpg'
import Img2 from '../../img/AllPorfolio/2.jpg'
import Img3 from '../../img/AllPorfolio/3.jpg'
import Img4 from '../../img/AllPorfolio/4.jpg'
import Img5 from '../../img/AllPorfolio/5.jpg'
import Img6 from '../../img/AllPorfolio/6.jpg'
import Img7 from '../../img/AllPorfolio/7.jpg'
import Img8 from '../../img/AllPorfolio/8.jpg'
import Img9 from '../../img/AllPorfolio/9.jpg'
import Img10 from '../../img/AllPorfolio/10.jpg'
import Img11 from '../../img/AllPorfolio/11.jpg'
import Img12 from '../../img/AllPorfolio/12.jpg'
import Img13 from '../../img/AllPorfolio/13.jpg'
import Img14 from '../../img/AllPorfolio/14.jpg'
import Img15 from '../../img/AllPorfolio/15.jpg'
import Img16 from '../../img/AllPorfolio/16.jpg'
import Img17 from '../../img/AllPorfolio/17.jpg'
import Img18 from '../../img/AllPorfolio/18.jpg'
import Img19 from '../../img/AllPorfolio/19.jpg'
import Img20 from '../../img/AllPorfolio/20.jpg'
import Img21 from '../../img/AllPorfolio/21.jpg'
import Img22 from '../../img/AllPorfolio/22.jpg'
import Img23 from '../../img/AllPorfolio/23.jpg'
import Img24 from '../../img/AllPorfolio/24.jpg'
import Img25 from '../../img/AllPorfolio/25.jpg'
import Img26 from '../../img/AllPorfolio/26.jpg'
import Img27 from '../../img/AllPorfolio/27.jpg'
import { useTranslation } from 'react-i18next';
const AllPortfolioBanner = () => {
    const { t } = useTranslation()
  
    return (
        <div>
            <div className="bg-purple-100 font-sans leading-normal tracking-normal">


<div className="w-full m-0 p-0 bg-cover bg-bottom bgImage "
style={{height:'500px',maxHeight:'560px'}} >
    <LoginNavigation></LoginNavigation>
        <div className="container  mx-auto text-center break-normal">

                <p className="text-white mt-32 font-extrabold text-3xl md:text-5xl">
                {t('allPortfolio_one')}
               
                </p>
               <div className="mx-auto text-center flex justify-center">
               <p className="text-white font-semibold text-xl flex  mx-auto text-center mt-2"><Link className='nav_hover text-white no-underline' to='/'>{t('service_allClients_two')}</Link><span className="mx-2">/</span> <span className='nav_hover '>{t('allPortfolio_two')}</span></p>
               </div>
               
        </div>
    </div>

    <div className="container px-4  md:px-0 max-w-6xl mx-auto -mt-24">
        
        <div className="mx-0 sm:mx-6 ">
            
       
         

            <div className="bg-purple-100 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
                
           
            <div className="flex h-full rounded overflow-hidden shadow-lg ">
                <a href="..." className="bg-blue-100 flex flex-wrap no-underline hover:no-underline">
                    <div className="w-full md:w-2/3 rounded-t ">	
                        <img src={kicFristImg} className="h-full w-full shadow" alt=''/>
                    </div>

                    <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink ">
                        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden bg-purple-50 ">
                            <p className="w-full text-gray-600 text-xs md:text-sm pt-6 px-6">{t('allPortfolio_three')}</p>
                            <div className="w-full font-bold text-xl text-gray-900 px-6 mb-7 ">👋 {t('allPortfolio_four')}</div>
                            <p className="text-gray-800 font-serif text-base px-6 mb-5">
                            {t('allPortfolio_five')}
                            </p>
                           <div className='mx-4'>
                           <Link className='bg-btn px-4 py-2 mx-auto inline-block font-semibold no-underline duration-500 rounded-md mt-3 mx-12 text-white'
                           to="../Profile.pdf" target="_blank" download>
                            {t('allPortfolio_six')}
                            </Link>
                           </div>

                        </div>

                                        </div>

                </a>
            </div>
      


     
            <div className="container grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 pb-16">

            
               <SinglePortfolio title='Graphic Design' des='UI/UX Designer' img={Img1}></SinglePortfolio>
               <SinglePortfolio title='Graphic Design' des='UI/UX Designer' img={Img2}></SinglePortfolio>
               <SinglePortfolio title='Graphic Design' des='UI/UX Designer' img={Img3}></SinglePortfolio>
               <SinglePortfolio title='Graphic Design' des='UI/UX Designer' img={Img4}></SinglePortfolio>
               <SinglePortfolio title='Graphic Design' des='UI/UX Designer' img={Img5}></SinglePortfolio>
               <SinglePortfolio title='Graphic Design' des='UI/UX Designer' img={Img6}></SinglePortfolio>
               <SinglePortfolio title='Graphic Design' des='UI/UX Designer' img={Img7}></SinglePortfolio>
               <SinglePortfolio title='Business Cards' des='Print service' img={Img8}></SinglePortfolio>
               <SinglePortfolio title='Rabycad CD Design' des='UI/UX Designer' img={Img9}></SinglePortfolio>
               <SinglePortfolio title='Graphic Design' des='UI/UX Designer' img={Img10}></SinglePortfolio>
               <SinglePortfolio title='Graphic Design' des='UI/UX Designer' img={Img11}></SinglePortfolio>
               <SinglePortfolio title='Rabycad CD Design' des='UI/UX Designer' img={Img12}></SinglePortfolio>
               <SinglePortfolio title='Graphic Design' des='UI/UX Designer' img={Img13}></SinglePortfolio>
               <SinglePortfolio title='Flyer' des='Print Design' img={Img14}></SinglePortfolio>
               <SinglePortfolio title='GFlat Web Design' des='Print Design' img={Img15}></SinglePortfolio>
               <SinglePortfolio title='Graphic Design' des='UI/UX Designer' img={Img16}></SinglePortfolio>
               <SinglePortfolio title='Graphic Design' des='UI/UX Designer' img={Img17}></SinglePortfolio>
               <SinglePortfolio title='Graphic Design' des='UI/UX Designer' img={Img18}></SinglePortfolio>
               <SinglePortfolio title='Graphic Design' des='UI/UX Designer' img={Img19}></SinglePortfolio>
               <SinglePortfolio title='Graphic Design' des='UI/UX Designer' img={Img20}></SinglePortfolio>
               <SinglePortfolio title='Graphic Design' des='UI/UX Designer' img={Img21}></SinglePortfolio>
               <SinglePortfolio title='Graphic Design' des='UI/UX Designer' img={Img22}></SinglePortfolio>
               <SinglePortfolio title='Graphic Design' des='UI/UX Designer' img={Img23}></SinglePortfolio>
               <SinglePortfolio title='Graphic Design' des='UI/UX Designer' img={Img24}></SinglePortfolio>
               <SinglePortfolio title='Graphic Design' des='UI/UX Designer' img={Img25}></SinglePortfolio>
               <SinglePortfolio title='Graphic Design' des='UI/UX Designer' img={Img26}></SinglePortfolio>
               <SinglePortfolio title='Graphic Design' des='UI/UX Designer' img={Img27}></SinglePortfolio>
             
            </div>
        
                    
        </div>
        
        
        
    </div>


</div>



</div>
        </div>
    );
};

export default AllPortfolioBanner;
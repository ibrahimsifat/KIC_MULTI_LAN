import React from 'react';

import { useTranslation } from 'react-i18next';
import './Philosophy.css'


import Img from '../../../img/homebg-02.jpg'
import { Link } from 'react-router-dom';
const Philosophy = () => {
  
  const { t } = useTranslation()

    return (
      <>

      <div className='bg-PHILOSOPHY'>
        <div className='pt-32  flex justify-center flex-col items-center'>
            <p className="text-white font-extrabold text-3xl md:text-5xl uppercase">
                
                 {t ('Navigation_philosophy')}
                </p>
               <div className="text-white font-semibold text-xl mt-2 flex">
                   <Link className=' no-underline text-white' to='/'>{t('service_allClients_two')}</Link>
                    <span className='px-2'>/</span> <span className=' '>{t('Navigation_philosophy')}</span>
                    </div>
        </div>
           
          
        </div>
      <div class="container mx-auto mt-10 my-20 lg:px-20">
		<div class="relative w-full my-4 lg:w-9/12 mr-auto rounded-2xl shadow-xl">
			<img alt="Card" src={Img} class="max-w-full rounded-lg "/>
        </div>
		<div class="relative w-full lg:-mt-96 lg:w-3/6 p-8 ml-auto bg-blue-800 rounded-xl z-50">
		    <div class="flex flex-col text-white">
				<div>
					<svg xmlns="http://www.w3.org/2000/svg" class="text-indigo-200 fill-current w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24"><path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z"/></svg>
                </div>
                <p class="text-white md:text-xl my-4 px-2">
                {t('home_PHILOSOPHY_second')}
                </p>
                <div class="flex justify-between pl-2">
                    <h3 class="font-bold text-2xl"> </h3>
                    <i class="fas fa-quote-right text-2xl" />
                </div>
            </div>
        </div>
    </div>
        
        </>
    );
};

export default Philosophy;
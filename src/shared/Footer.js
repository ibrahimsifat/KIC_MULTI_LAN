
import React, { useState } from "react";
import cookies from 'js-cookie'
import { useTranslation } from "react-i18next";
import '../App.css'

import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import { NavLink } from "react-router-dom";

const IsArabic=cookies.get('i18next') ==='ar'
const Footer = () => {

    const { t } = useTranslation()
    return (
     <div className={!IsArabic?' footer-bg pt-8  monsterratFont':' footer-bg pt-8 arabic-font-1'}>
   <div className="mt-8">   
   <div className='container mx-auto grid  lg:grid-cols-3  md:grid-cols-2 justify-between items-start '>
    <Details></Details>
     <Pages></Pages>
         <Subscribe></Subscribe>
         </div> 
         <p className="md:mt-8 mt-5 pb-2 text-center text-white  "> {t('home_footer_copyright')} © 2021 KIC.</p>
   </div>
     </div>
    );
};


const Pages=()=>{
    const { t } = useTranslation()
    return(
        <>
        <div className=' flex text-white mb-4'>
        <div class="  md:mx-4 mx-4 ">
        <p className={!IsArabic?'text-white font-bold text-xl arabic-font-1 pb-1': 'text-white font-bold text-xl monsterratFont pb-1'}>{t('Footer_Pages')}</p>
            <p className='border-b-2 border-red-600 border-fuchsia-600 w-14'></p>
        <nav class="list-none  mt-3">
          <li>
          <NavLink className='text-white no-underline font-   block' to='/'>{t('Navigation_home')}</NavLink>
          </li>
          <li>
          <NavLink className='ml-0 text-white no-underline font-  py-2 block ' to='/aboutus'>{t('Navigation_About')}</NavLink>
          </li>
          <li>
          <NavLink className='text-white  no-underline font-   block' to='/visions'>{t('vision_first')}</NavLink>
          </li>
          <li>
          <NavLink className='text-white no-underline py-2  block' to='/history'>{t('home_history')}</NavLink>
          </li>
          <li>
          <NavLink className='text-white  no-underline font-   block' to='/services'> {t('Navigation_Service')}</NavLink>
          </li>
         
        </nav>
      </div>
       
        <div class="  md:mx-4 mx-4 ">
        <p className={!IsArabic?'text-white font-bold text-xl arabic-font-1 pb-1': 'text-white font-bold text-xl monsterratFont pb-1'}>{t('Footer_Pages')}</p>
            <p className='border-b-2 border-red-600 border-fuchsia-600 w-14'></p>
        <nav class="list-none  mt-3">
        <li>
          <NavLink className='text-white no-underline block'  to='/allclients'>{t('Navigation_Clients')}</NavLink>
          </li>
          <li>
          <NavLink className='text-white    no-underline py-2  block'  to='/allclientsrecognition'>{t('Navigation_recognition')}</NavLink>
          </li>
        
          <li>
          <NavLink className='text-white   no-underline block'  to='/philosophy'>{t('Navigation_philosophy')}</NavLink>
          </li>
          <li>
          <NavLink className='text-white    no-underline py-2  py-1 block' to='/allportfolio'> {t('Navigation_Portfolio')}</NavLink>
          </li>
          <li>
          <NavLink className='text-white  no-underline font-  block'   to='/contactus'> {t('Navigation_Touch')}</NavLink>
          </li>
          
        </nav>
      </div>
       




        {/* <p className='text-xl text-white text- font-bold mx-4'>{t('Footer_Pages')}</p>
        
        <span className='border-b-2 border-red-600 block mx-4  border-fuchsia-600 w-16'></span>
        <div className="grid grid-cols-2 mx-4">
       
        <div className='hover:text-red-500 text-left '>
        
              
                
              
               
               
            </div>
    
            <div className='text-white text-left mr-8'>
           
                
               
                
              
               
            </div>
          
        </div> */}
        </div>
        </>
    )
}




const Subscribe=()=>{
  const SuccessMessage=<div className=" md:text-2xl  mt-3 text-green-400">Thanks for subscribe</div>
  const [success,setSuccess]=useState(false)
  const { t } = useTranslation()
  const handleOnSubmut=(e)=>{
   e.preventDefault()
   setSuccess(true)
   e.target.email.value=""
  }
  return(
    <div class="  ">

     
        <div class="wrapper  rounded-sm shadow-lg">

            <div class="cad border px-8 py-2">
                <div class="card-image mt-6 mb-2">
                    <svg 
                        class="w-10 h-10 text-indigo-500 fill-current"
                        xmlns="http://www.w3.org/2000/svg" 
                        width="512" height="512.002" 
                        viewBox="0 0 512 512.002">
                        <g transform="translate(0 0.002)">
                            <path d="M64,257.6,227.9,376a47.72,47.72,0,0,0,56.2,0L448,257.6V96a32,32,0,0,0-32-32H96A32,32,0,0,0,64,96ZM160,160a16,16,0,0,1,16-16H336a16,16,0,0,1,16,16v16a16,16,0,0,1-16,16H176a16,16,0,0,1-16-16Zm0,80a16,16,0,0,1,16-16H336a16,16,0,0,1,16,16v16a16,16,0,0,1-16,16H176a16,16,0,0,1-16-16Z" opacity="0.4"/><path d="M352,160a16,16,0,0,0-16-16H176a16,16,0,0,0-16,16v16a16,16,0,0,0,16,16H336a16,16,0,0,0,16-16Zm-16,64H176a16,16,0,0,0-16,16v16a16,16,0,0,0,16,16H336a16,16,0,0,0,16-16V240A16,16,0,0,0,336,224ZM329.4,41.4C312.6,29.2,279.2-.3,256,0c-23.2-.3-56.6,29.2-73.4,41.4L152,64H360ZM64,129c-23.9,17.7-42.7,31.6-45.6,34A48,48,0,0,0,0,200.7v10.7l64,46.2Zm429.6,34c-2.9-2.3-21.7-16.3-45.6-33.9V257.6l64-46.2V200.7A48,48,0,0,0,493.6,163ZM256,417.1a79.989,79.989,0,0,1-46.888-15.192L0,250.9V464a48,48,0,0,0,48,48H464a48,48,0,0,0,48-48V250.9l-209.1,151A80,80,0,0,1,256,417.1Z"/>
                        </g>
                    </svg>
                </div>

                <div class="w-full">
          
                    {!success?<p class=" md:text-2xl text-xl text-white mt-3 ">{t('Subscribe_one')}<span className="md:text-3xl text-2xl font-bold">  {t('Subscribe_two')}</span></p>:SuccessMessage}
                </div>

               { !IsArabic? <form onSubmit={handleOnSubmut}>
                <div class="card-mail flex items-center my-6">
                 <input  id="mail" type="email" name="email" class="border-l border-t border-b border-gray-200 rounded-l-md w-full  md:text-lg md:px-3 px-2 md:py-2 py-1 text-sm" placeholder={t('Subscribe_three')}/>
                    <button type="submit" class="bg-indigo-500 hover:bg-orange-600 hover:border-indigo-600 text-white font-bold capitalize md:px-3 px-2 md:py-2 py-1  md:text-lg rounded-r-md border-t border-r text-sm border-b border-indigo-500">{t('Subscribe_four')}</button>
                </div>
                 </form>:
                  <form onSubmit={handleOnSubmut}>
                  <div class="card-mail flex items-center my-6">
                      <button type="submit" class="bg-indigo-500 hover:bg-orange-600 hover:border-indigo-600 text-white font-bold capitalize md:px-3 px-2 md:py-2 py-1  md:text-lg rounded-r-md border-t border-r text-sm border-b border-indigo-500">{t('Subscribe_four')}</button>
                   <input  id="mail" type="email" name="email" class="border-l border-t border-b border-gray-200 rounded-l-md w-full  md:text-lg md:px-3 px-2 md:py-2 py-1 text-sm" placeholder={t('Subscribe_three')}/>
                  </div>
                   </form>
                 }
            </div>
        </div>

    </div>
  )
}

const Details=()=>{
    const { t } = useTranslation()

    return(
        <div className=" mx-3 mb-5">
        <div className=''>
 
      <p className={!IsArabic?'text-white font-bold text-xl arabic-font-1 pb-1': 'text-white font-bold text-xl monsterratFont pb-1'}>{t('home_footer_first')}</p>
            <p className='border-b-2 border-red-600 border-fuchsia-600 w-32'></p>
         
    

             <div className='w-full  mt-3'>
         

         
{!IsArabic?<a href="https://wa.me/+966505353820" target="_blank" rel="noopener noreferrer" className="flex justify- items-center no-underline	">
<button id="whatsapp" class="  sticky duration-500 border-2 border-green-600 fixed  md:w-8 w-10 transform hover:-translate-y-1   md:h-8 h-10 text-2xl rounded hover:bg-green-600 hover:text-white text-white flex justify-center items-center">
<BsFillTelephoneFill className="text-" style={{fontSize:'16px'}}/>
</button>
<button className="no-underline text-md text-white mx-2 border-0">+966505353820</button>
</a>:
<a href="https://wa.me/+966505353820" target="_blank" rel="noopener noreferrer" className="flex justify- items-center no-underline	">
<button id="whatsapp" class="  sticky duration-500 border-2 border-green-600 fixed  md:w-8 w-10 transform hover:-translate-y-1   md:h-8 h-10 text-2xl rounded hover:bg-green-600 hover:text-white text-white flex justify-center items-center">
<BsFillTelephoneFill className="text-" style={{fontSize:'16px'}}/>
</button>
<button className="no-underline rote-text text-md text-white mx-2 text-right border-0">966505353820+</button>
</a>
}


<a href="mailto:atif@kicadv.com" className="flex justify- items-center no-underline	mt-3">
<button id="mail" class="  sticky duration-500 border-2 border-blue-600 fixed  md:w-8 w-10 transform hover:-translate-y-1   md:h-8 h-10 text-2xl rounded hover:bg-blue-600 hover:text-white text-white flex justify-center items-center">
<AiOutlineMail className="text-" style={{fontSize:'16px'}}/>
</button>
<button className="no-underline text-md text-white mx-2 border-0">atif@kicadv.com</button>
</a>


<a href="https://www.instagram.com/kicadvertising/" target="_blank" rel="noopener noreferrer" className="flex justify- items-center no-underline	my-3"> 
<button id="instagram" class="border-2 hover:border-0 border-pink-500 bg-gradient-to-b text-2xl hover:from-indigo-600 hover:via-pink-600 hover:to-yellow-500 min-w-wull hover:text-white  text-pink-600 md:w-8 w-10 md:h-8 h-10  transform hover:-translate-y-1 rounded duration-500 flex justify-center items-center">
<FiInstagram style={{fontSize:'16px'}}/>
</button>
<button className="no-underline text-md text-white mx-2 border-0">Kicadvertising</button>
</a>

<a href="https://www.facebook.com/KIC-Printing-Advertising-333673783382403/" target="_blank" rel="noopener noreferrer" className="flex justify- items-center no-underline	">
<button id="facebook" class="  sticky duration-500 border-2 border-blue-600 fixed  md:w-8 w-10 transform hover:-translate-y-1   md:h-8 h-10 text-2xl rounded hover:bg-blue-600 hover:text-white text-white flex justify-center items-center">
<FaFacebookF className="text-" style={{fontSize:'16px'}}/>
</button>
<button className="no-underline text-md text-white mx-2 border-0">kicadv</button>
</a>

       </div>
        </div>
         </div>
    )
}



tippy('#facebook',{
  content:'Facebook',
  animation:'fade',
  delay:[200,200]
});
tippy('#instagram',{
  content:'Instagram',
  animation:'fade',
  delay:[200,200]
});
 tippy('#whatsapp',{
  content:'Whatsapp',
  animation:'fade',
  delay:[200,200]
});
tippy('#twitter',{
  content:'Twitter',
  animation:'fade',
  delay:[200,200]
});
tippy('#youtube',{
  content:'Youtube',
  animation:'fade',
  placement: 'left-start',
  delay:[200,200]
});

tippy('#mail',{
  content:'Send us mail',
  animation:'fade',
  placement: 'top',
  delay:[200,200]
});






export default Footer;

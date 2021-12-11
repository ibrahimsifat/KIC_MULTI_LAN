import {  faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import cookies from 'js-cookie'
import { useTranslation } from "react-i18next";
import '../App.css'
import Foot from "./Foot";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

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
         <Foot></Foot>
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
        <div className='mx-auto '>

        <p className='text-xl text-white text- font-bold mx-4'>{t('Footer_Pages')}</p>
        
        <span className='border-b-2 border-red-600 block mx-4  border-fuchsia-600 w-16'></span>
        <div className="grid grid-cols-2 mx-4">
       
        <div className='hover:text-red-500 text-left '>
        
                <NavLink className='ml-0 mt-4 text-white no-underline font-bold  py-1 block' to='/'>{t('Navigation_home')}</NavLink>
                <NavLink className='ml-0 text-white no-underline font-bold  py-1 block mt-2' to='/aboutus'>{t('Navigation_About')}</NavLink>
                <NavLink className='text-white mt-2 no-underline font-bold  py-1 block' to='/visions'>{t('vision_first')}</NavLink>
                <NavLink className='text-white mt-2 no-underline font-bold  py-1 block' to='/history'>{t('home_history')}</NavLink>
                <NavLink className='text-white mt-2 no-underline font-bold  py-1 block' to='/services'> {t('Navigation_Service')}</NavLink>
                <NavLink className='text-white mt-2 no-underline font-bold  py-1 block'  to='/allclients'>{t('Navigation_Clients')}</NavLink>
            </div>
    
            <div className='text-white text-left mr-8'>
           
                <NavLink className='text-white  mt-4  no-underline font-bold  py-1 block'  to='/allclientsrecognition'>{t('Navigation_recognition')}</NavLink>
                <NavLink className='text-white  mt-2  no-underline font-bold  py-1 block' to='/promotionalgefts'> {t('Navigation_promotional')}</NavLink>
                <NavLink className='text-white  mt-2  no-underline font-bold  py-1 block'  to='/philosophy'>{t('Navigation_philosophy')}</NavLink>
                <NavLink className='text-white  mt-2  no-underline font-bold  py-1 block' to='/allportfolio'> {t('Navigation_Portfolio')}</NavLink>
                <NavLink className='text-white  mt-2  no-underline font-bold  py-1 block'   to='/contactus'> {t('Navigation_Touch')}</NavLink>
            </div>
          
        </div>
        </div>
        </>
    )
}






const Details=()=>{
    const { t } = useTranslation()

    return(
        <div className=" mx-3 mb-5">
        <div className=''>
      <div>
      <p className='text-white font-bold text-xl arabic-font-1 pb-1'>{t('home_footer_first')}</p>
            <p className='border-b-2 border-red-600 border-fuchsia-600 w-32'></p>
            <p className='font-semibold text-white mt-1 mb-2'>{t('home_footer_second')} <span className='textred tracking-widest'>+966505353820</span></p>
            <p className='font-semibold text-white mt-2 mb-2'>{t('home_footer_three')} <span className='textred traking-wider'>atif@kicadv.com</span></p>
      </div>

             <div className='w-full flex mt-3'>
         
<a href="https://www.facebook.com/KIC-Printing-Advertising-333673783382403/" target="_blank" rel="noopener noreferrer">
<button id="facebook" class="  sticky duration-500 border-2 border-blue-600 fixed  md:w-12 w-10 transform hover:-translate-y-3   md:h-12 h-10 text-2xl rounded-full hover:bg-blue-600 hover:text-white text-blue-600  flex justify-center items-center">
<FaFacebookF className=""/>
</button>
</a>



<a href="https://www.instagram.com/kicadvertising/" target="_blank" rel="noopener noreferrer">
<button id="instagram" class="mx-2 border-2 hover:border-0 border-pink-500 bg-gradient-to-b text-2xl hover:from-indigo-600 hover:via-pink-600 hover:to-yellow-500 min-w-wull hover:text-white  text-pink-600 md:w-12 w-10 md:h-12 h-10  transform hover:-translate-y-3 rounded-full duration-500 flex justify-center items-center">
<FiInstagram/>
</button>
</a>

<a href="https://wa.me/+966505353820" target="_blank" rel="noopener noreferrer">
<button id="whatsapp" class=" duration-500    md:w-12 w-10 md:h-12 h-10 border-2 rounded-full border-green-600 transform hover:-translate-y-3  text-2xl text-green-500 hover:bg-green-600 hover:text-white flex justify-center items-center">
<BsWhatsapp/>
</button>
</a>

<a href="https://twitter.com/home" target="_blank" rel="noopener noreferrer">
<button id="twitter" class=" mx-2 transform hover:-translate-y-3  border-2 md:w-12 w-10 md:h-12 h-10 rounded-full duration-500 text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white text-2xl flex justify-center items-center">
<BsTwitter/>
</button>
</a>


<a href="mailto:atif@kicadv.com">
<button id="mail" class=" transform hover:-translate-y-3  border-2 md:w-12 w-10 md:h-12 h-10 rounded-full duration-500 text-blue-500 border-blue-500  hover:bg-blue-500 hover:text-white text-2xl flex justify-center items-center">
<GrMail/>
  </button>

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

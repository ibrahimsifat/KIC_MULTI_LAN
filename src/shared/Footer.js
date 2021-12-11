import {  faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import cookies from 'js-cookie'
import { useTranslation } from "react-i18next";
import '../App.css'
import Foot from "./Foot";
import { FaFacebookF } from "react-icons/fa";

import { NavLink } from "react-router-dom";
const faceBookIcon= <FontAwesomeIcon icon={faFacebookF} />
const instagramIcon= <FontAwesomeIcon icon={faInstagram} />
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
         <p className="md:mt-8 mt-5 pb-2 text-center md:text-white text-black  "> {t('home_footer_copyright')} © 2021 KIC.</p>
   </div>
     </div>
    );
};


const Pages=()=>{
    const { t } = useTranslation()
    return(
        <>
        <div className='mx-auto '>

        <p className='text-xl text-white text- font-bold'>{t('Footer_Pages')}</p>
        
        <span className='border-b-2 border-red-600 block   border-fuchsia-600 w-16'></span>
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
         

<button id="facebook" class="bg-white  sticky duration-500 border-2 border-blue-600 fixed  w-12 transform hover:-translate-y-3   h-12 text-2xl rounded-full hover:bg-blue-600 hover:text-white text-blue-600 ">
<FaFacebookF/>
</button>





<button id="instagram" class=" border-2 hover:border-0 border-pink-500 bg-gradient-to-b text-2xl hover:from-indigo-600 hover:via-pink-600 hover:to-yellow-500 min-w-wull hover:text-white bg-white text-pink-600 w-12 h-12  transform hover:-translate-y-3 rounded-full duration-500 ">
<i class="fab fa-instagram"></i>
</button>



<button id="whatsapp" class="bg-white duration-500    w-12 h-12 border-2 rounded-full border-green-600 transform hover:-translate-y-3  text-2xl text-green-500 hover:bg-green-600 hover:text-white">
<i class="fab fa-whatsapp"></i>
</button>



<button id="twitter" class="bg-white  transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white text-2xl">
<i class="fab fa-twitter"></i>
</button>


<button id="youtube" class="bg-white transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-red-500 border-red-500 hover:bg-red-500 hover:text-white text-2xl">
<i class="fab fa-youtube"></i>
</button>


<button id="snapchat" class="bg-white transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-yellow-300 border-yellow-300 hover:bg-yellow-300 hover:text-white text-2xl">
<i class="fab fa-snapchat-ghost"></i>
</button>  
             </div>
        </div>
         </div>
    )
}
export default Footer;

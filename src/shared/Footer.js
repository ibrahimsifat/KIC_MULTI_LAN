import {  faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTranslation } from "react-i18next";
import '../App.css'
const faceBookIcon= <FontAwesomeIcon icon={faFacebookF} />
const instagramIcon= <FontAwesomeIcon icon={faInstagram} />
const Footer = () => {
    const { t } = useTranslation()
    return (
     <div className='footer-bg py-20 '>
    <div className='grid md:grid-cols-2 justify-between items-start  md:ml-0 sm:ml-32 '>
    <div className="left mx-auto">
            <p className='textred font-semibold text-xl monsterratFont   pb-2'>{t('home_footer_first')}</p>
            <p className='border-b-2 border-red-600 border-fuchsia-600 w-32'></p>
            <p className='font-semibold text-white mt-4 mb-2'>{t('home_footer_second')} <span className='textred '>+966505353820</span></p>
            <p className='font-semibold text-white mt-4 mb-2'>{t('home_footer_three')} <span className='textred '>atif@kicadv.com</span></p>
             
         </div>
         <div className="right  mx-auto flex justify-center items-center">
         <div className='relative mx-auto md:py-0 py-8'>
         <textarea className='rounded-xl bg-transparent border-dotted border-4 border-white focus:outline-none text-white p-5  lg:w-96 lg:h-52 md:w-72 md:h-48 w-72 h-44 ml-4 md:mr-16 sm:mr-10   sm:ml-10'  id="doted" ></textarea>
         <button className=' hover:bg-red-800 duration-500 absolute lg:left-36 left-20 sm:left-24 md:left-28  md:-bottom-1 bottom-7 bgred py-1 px-8 rounded-md font-semibold text-white'>{t('home_footer_first')}</button>
         </div>
    </div>

         <div className='md:ml-56 ml-12 md:mt-0 mt-10 flex'>
             <a href='https://www.facebook.com/KIC-Printing-Advertising-333673783382403/' target='_blank'rel="noreferrer"  className='mr-4 bgred facebookIcon hover:text-white duration-500 hover:bg-red-800  rounded-full'>{faceBookIcon}</a>
             <a href='https://www.instagram.com/kicadvertising/' target='_blank' rel="noreferrer"  className='mr-4 bgred instagramIcon rounded-full hover:text-white duration-500 hover:bg-red-800'>{instagramIcon}</a>
         </div>
         </div>
     </div>
    );
};

export default Footer;

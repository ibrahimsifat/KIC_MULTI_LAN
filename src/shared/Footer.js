import {  faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import cookies from 'js-cookie'
import { useTranslation } from "react-i18next";
import '../App.css'
import Foot from "./Foot";
import { NavLink } from "react-router-dom";
const faceBookIcon= <FontAwesomeIcon icon={faFacebookF} />
const instagramIcon= <FontAwesomeIcon icon={faInstagram} />
const IsArabic=cookies.get('i18next') ==='ar'
const Footer = () => {
    const { t } = useTranslation()
    return (
     <div className={!IsArabic?' footer-bg pt-8 mb-0 monsterratFont':' footer-bg pt-8 arabic-font-1'}>
    <div className='container mx-auto grid  lg:grid-cols-3  md:grid-cols-2 justify-between items-center '>
    <Details></Details>
     <Pages></Pages>
         <Foot></Foot>
         </div>
         <div className="md:mt-8 mt-2 text-center md:text-white text-black  "> {t('home_footer_copyright')} © 2021 KIC.</div>
     </div>
    );
};


const Pages=()=>{
    const { t } = useTranslation()
    return(
        <>
        <div className={!IsArabic?'md:mx-0 ml-3 mx-auto':'md:mx-0 mr-5 mx-auto'}>
<div className="mx-auto mb-3">
<p className={!IsArabic?'text-xl text-white text-center font-bold':'text-xl text-white text-center font-bold'}>{t('Footer_Pages')}</p>
<span className='border-b-2 border-red-600 block mx-auto  border-fuchsia-600 w-16'></span>
</div>
        <div className="grid grid-cols-2">
               <div className=' '>
        <div className='text-white text-left'>
                <NavLink className='ml-0 text-white no-underline  py-1 block' to='/aboutus'>{t('Navigation_About')}</NavLink>
                <NavLink className='text-white no-underline  py-1 block' to='/visions'>{t('vision_first')}</NavLink>
                <NavLink className='text-white no-underline  py-1 block' to='/history'>{t('home_history')}</NavLink>
                <NavLink className='text-white no-underline  py-1 block' to='/services'> {t('Navigation_Service')}</NavLink>
                <NavLink className='text-white no-underline  py-1 block'  to='/allclients'>{t('Navigation_Clients')}</NavLink>
            </div>
                </div>
                <div>
    
                        
                   
        
                    <div className='text-white text-left mr-4'>
                        <NavLink className='text-white no-underline  py-1 block'  to='/allclientsrecognition'>{t('Navigation_recognition')}</NavLink>
                        <NavLink className='text-white no-underline  py-1 block' to='/promotionalgefts'> {t('Navigation_promotional')}</NavLink>
                        <NavLink className='text-white no-underline  py-1 block'  to='/philosophy'>{t('Navigation_philosophy')}</NavLink>
                        <NavLink className='text-white no-underline  py-1 block' to='/allportfolio'> {t('Navigation_Portfolio')}</NavLink>
                        <NavLink className='text-white no-underline  py-1 block'   to='/contactus'> {t('Navigation_Touch')}</NavLink>
                    </div>
                </div>
        </div>
        </div>
        </>
    )
}






const Details=()=>{
    const { t } = useTranslation()

    return(
        <div className=" md:-mt-6 mb-5 text-center">
        <div className={!IsArabic?"text-left":"text-right mr-4"}>
        <p className='text-white font-bold text-xl arabic-font-1 pb-1'>{t('home_footer_first')}</p>
            <p className='border-b-2 border-red-600 border-fuchsia-600 w-32'></p>
            <p className='font-semibold text-white mt-1 mb-2'>{t('home_footer_second')} <span className='textred tracking-widest'>+966505353820</span></p>
            <p className='font-semibold text-white mt-2 mb-2'>{t('home_footer_three')} <span className='textred traking-wider'>atif@kicadv.com</span></p>

             <div className='w-full flex mt-3'>
             <a href='https://www.facebook.com/KIC-Printing-Advertising-333673783382403/' target='_blank'rel="noreferrer"  className=' bgred facebookIcon hover:text-white duration-500 hover:bg-red-800 text-white socialpadding rounded-full'>{faceBookIcon}</a>
             <a href='https://www.instagram.com/kicadvertising/' target='_blank' rel="noreferrer"  className='mx-3 bgred instagramIcon rounded-full hover:text-white duration-500 hover:bg-red-800 socialpadding text-white'>{instagramIcon}</a>    
             </div>
        </div>
         </div>
    )
}
export default Footer;

import {  faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTranslation } from "react-i18next";
import '../App.css'
import FooterLogo from '../img/fotterLogo.png'
const faceBookIcon= <FontAwesomeIcon icon={faFacebookF} />
const instagramIcon= <FontAwesomeIcon icon={faInstagram} />
const Footer = () => {
    const { t } = useTranslation()
    return (
     <div className=' footer-bg pt-20 '>
    <div className='container mx-auto md:flex justify-between items-start   '>
    <div className="  ">
            <p className='textred font-semibold text-xl monsterratFont   pb-1'>{t('home_footer_first')}</p>
            <p className='border-b-2 border-red-600 border-fuchsia-600 w-32'></p>
            <p className='font-semibold text-white mt-1 mb-2'>{t('home_footer_second')} <span className='textred '>+966505353820</span></p>
            <p className='font-semibold text-white mt-2 mb-2'>{t('home_footer_three')} <span className='textred '>atif@kicadv.com</span></p>

            <p className='my-4 font-bold text-white '>MR. ATIF JEBREAL</p>
             <div className='w-full flex mt-3'>
             <a href='https://www.facebook.com/KIC-Printing-Advertising-333673783382403/' target='_blank'rel="noreferrer"  className=' bgred facebookIcon hover:text-white duration-500 hover:bg-red-800 text-white socialpadding rounded-full'>{faceBookIcon}</a>
             <a href='https://www.instagram.com/kicadvertising/' target='_blank' rel="noreferrer"  className='mx-3 bgred instagramIcon rounded-full hover:text-white duration-500 hover:bg-red-800 socialpadding text-white'>{instagramIcon}</a>    
             </div>
         </div>
      <div className='md:mt-0 mt-8'>
          <img src={FooterLogo} alt="" />
      </div>
         </div>
         <div class="mt-8 text-center text-white pb-3 ">© 2021 KIC. {t('home_footer_copyright')}.</div>
     </div>
    );
};

export default Footer;

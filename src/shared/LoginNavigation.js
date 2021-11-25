
import { Turn as Hamburger } from 'hamburger-react'
import React, { useEffect, useState } from "react";
import {  NavLink } from "react-router-dom";
import '../App.css'
import logo from '../../src/img/logo.png'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next'
import cookies from 'js-cookie'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const facebookIcon=<FontAwesomeIcon icon ={faFacebookF}/>
const instagramIcon=<FontAwesomeIcon icon ={faInstagram}/>
const globalIcon=<FontAwesomeIcon icon ={faGlobe}/>
const  LoginNavigation=() =>{
  const [isOpen, setOpen] = useState(false)

  const [navbarOpen, setNavbarOpen] = useState(false);

// for Language btn
const languages = [
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
  {
    code: 'ar',
    name: 'العربية',
    dir: 'rtl',
    country_code: 'sa',
  },
]

const GlobeIcon = ({ width = 20, height = 20 }) => (
 <i>{globalIcon}</i>
)
const IsArabic=cookies.get('i18next') ==='ar'

const currentLanguageCode = cookies.get('i18next') || 'en'
const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
const { t } = useTranslation()

useEffect(() => {
  console.log('Setting page stuff')
  document.body.dir = currentLanguage.dir || 'ltr'
  document.title = t('app_title')
}, [currentLanguage, t])


  return (
    <div className={!IsArabic?'monsterratFont':"arabic-font-1" }>
      <div className="bg-white  z-30 navigation  flex flex-wrap items-center justify-between   ">
      
        <div className=" container   mx-auto flex flex-wrap items-center justify-between ">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <NavLink to='/'
              className="text-sm font-bold leading-relaxed inline-block ml-2 py-2 whitespace-nowrap uppercase  "
              
            >
             <NavLink className='relative' to='/'> <img className=' md:w-20 sm:w-16 w-14 ' src={logo} alt="" />
             <div className={!IsArabic?'w-6 h-6 absolute top-0 -right-16 rounded-full bg-red-500 animate-ping':'w-6 h-6 absolute top-0 right-2 rounded-full bg-red-500 animate-ping'}>

             </div>
             </NavLink>
            </NavLink>
      
         <button className=" cursor-pointer text-xl leading-none px-1 py-1 rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
           <Hamburger toggled={isOpen} toggle={setOpen} />
            </button>

          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className={!IsArabic?"block navnav md:bg-transparent bg-white-500 md:py-0 py-2 md:t-center text-bl md:flex flex-col lg:flex-row list-none ml-auto":" navnav block md:bg-transparent bg-white-500 md:py-0 py-2 md:t-center text-bl md:flex flex-col lg:flex-row list-none mr-auto"}
            
            >
            <li className="mx-3 fromLeft ">
                <NavLink to='/' 
                  className="no-underline text-li  py-2 flex items-center text-sm uppercase font-bold leading-snug   "
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
               
               {t('Navigation_home')}
                </NavLink>
                </li>
                <li className="mx-3 fromLeft ">
                <NavLink to='/aboutus' activeClassName="selected"
                  className="no-underline text-li	 py-2 flex items-center text-sm uppercase font-bold leading-snug    "
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
               
               {t('Navigation_About')}
                </NavLink>
                </li>
                <li className="mx-3 fromLeft">
                <NavLink to='/services' activeClassName="selected"
                  className="no-underline text-li	 py-2 flex items-center text-sm uppercase font-bold leading-snug  "
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
               {t('Navigation_Service')}
                </NavLink>
                </li>
                <li class="group inline-block login">
  <button
   
  >
    <NavLink to='/allclients'onClick={() => setNavbarOpen(!navbarOpen)} class="no-underline text-li	 py-2 flex items-center text-sm uppercase font-bold leading-snug ">{t('Navigation_Clients')}</NavLink>
  
  </button>
  <ul
    class="bg-white border  rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top "
  >
  <li><NavLink to='/allclients' onClick={() => setNavbarOpen(!navbarOpen)} class="rounded-sm no-underline mt-2 block  text-li cursor-pointer">{t('Navigation_Clients')}</NavLink></li>
  <li> <NavLink to='/allclientsrecognition' onClick={() => setNavbarOpen(!navbarOpen)} class="rounded-sm no-underline  text-li hover:bg-gray-100 cursor-pointer mb-2 block  ">{t('Navigation_recognition')}</NavLink></li>


   

  </ul>
</li>



              <li className="mx-3 fromLeft">
                <NavLink to='/allportfolio' activeClassName="selected"
                  className="no-underline text-li	 py-2 flex items-center text-sm uppercase font-bold leading-snug    "
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
               
               {t('Navigation_Portfolio')}
                </NavLink>
                </li>
                <li className="mx-3 fromLeft">
                <NavLink to='/contactus' activeClassName="selected"

                  className="no-underline text-li	 py-2 flex items-center text-sm uppercase font-bold leading-snug    "
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  {t('Navigation_Touch')}
               
                </NavLink>
                </li>
             
             <div className="dropdown">
            <button
              className="btn  dropdown-toggle cursor-pointer text-li 	outlineglobal"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <GlobeIcon className='inline'/>
            </button>
            <ul className="dropdown-menu outlineglobal" aria-labelledby="dropdownMenuButton1">
              <p>
                <span className="dropdown-item-text">{t('language')}</span>
              </p>
              {languages.map(({ code, name, country_code }) => (
                <li key={country_code}>
                  <p
                    
                    className={classNames('dropdown-item cursor-pointer	', {
                      disabled: currentLanguageCode === code,
                    })}
                    onClick={() => {
                      i18next.changeLanguage(code)
                    }}
                  >
                    <span
                      className={`flag-icon flag-icon-${country_code} mx-2`}
                      style={{
                        opacity: currentLanguageCode === code ? 0.5 : 1,
                      }}
                    ></span>
                    {name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
  
<li className='mx-2 mt-2'>
         <a href='https://www.facebook.com/KIC-Printing-Advertising-333673783382403/' target='_blank' rel="noreferrer" className='text-black mt-2'>{facebookIcon}</a>
</li>
<li className="mx-2 fromLeft mt-2">
<a href='https://www.instagram.com/kicadvertising/' target='_blank' rel="noreferrer" className='text-black mt-2'>{instagramIcon}</a>
</li>

            </ul>
          </div>
        </div>
      </div>
     
    </div>
  );
}




export default LoginNavigation;
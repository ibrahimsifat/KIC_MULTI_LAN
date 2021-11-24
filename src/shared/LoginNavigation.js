
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

const facebookIcon=<FontAwesomeIcon icon ={faFacebookF}/>
const instagramIcon=<FontAwesomeIcon icon ={faInstagram}/>
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
  <svg
    xmlns="http://www.w.org/2000/svg"
    width={width}
    height={height}
    fill="currentColor"
    className="bi bi-globe"
    viewBox="0 0 16 16"
  >
    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
  </svg>
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
    <>
      <div className="bg-white  z-30 navigation  flex flex-wrap items-center justify-between   ">
      
        <div className=" container   mx-auto flex flex-wrap items-center justify-between ">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <NavLink to='/'
              className="text-sm font-bold leading-relaxed inline-block ml-2 py-2 whitespace-nowrap uppercase  "
              
            >
             <NavLink className='relative' to='/'> <img className=' md:w-20 sm:w-16 w-14 ' src={logo} alt="" />
             <div className='w-6 h-6 absolute top-0 -right-16 rounded-full bg-red-500 animate-ping'>

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
              className="btn btn-link dropdown-toggle cursor-pointer text-li 	"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <GlobeIcon className='inline'/>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
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
     
    </>
  );
}




export default LoginNavigation;
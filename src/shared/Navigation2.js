
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
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
const globalIcon=<FontAwesomeIcon icon ={faGlobe}/>
const  Navigation2=() =>{
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


const IsArabic=cookies.get('i18next') ==='ar'

const currentLanguageCode = cookies.get('i18next') || 'en'
const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
const { t } = useTranslation()

useEffect(() => {
  document.body.dir = currentLanguage.dir || 'ltr'
  document.title = t('app_title')
}, [currentLanguage, t])


  return (
    <div className={!IsArabic?'monsterratFont  lg:flex  items-center justify-center ':"arabic-font-1   " }>
      <div className=" z-30 navigation  lg:flex  items-center justify-between">
      
        <div className="    mx-auto flex pt-3 lg:px-5">
          <div className="  rounded-t-2xl relative flex items-center justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <div className="flex justify-start items-center mr-auto">
                <div>
                    <NavLink className='relative  sm:mx-4' to='/'> <img className=' md:w-20 sm:w-16 w-14 mx-2 ' src={logo} alt="" />
                    {/* <p className={!IsArabic?'md:w-6 md:h-6 w-3 h-3 absolute lg:top-10 md:top-5 top-0 md:-right-14  -right-14 rounded-full bg-red-500 animate-ping':'md:w-6 md:h-6 w-3 h-3  absolute top-0 right-2 rounded-full bg-red-500 animate-ping'}>
                    </p> */}
                    </NavLink>
                </div>
                <div className='md:ml-3'>

                    <h1 className='monsterratFont md:text-xl lg:text-2xl text-sm font-semibold uppercase text-gray-400'>   {t('Logo_text_1')}</h1>
                    {/* <h1 className='text-xs text-red-400 -mt-2 text-xs font-semibold'>For Design and Printing Service</h1> */}
                </div>
              <div>
          </div>
          </div>

          </div>
        </div>
                <div>
                        
                  <button className=" absolute md:top-8 top-4 right-2 sm:right-10 cursor-pointer text-xl leading-none px-2 py-1 text-white rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                      >
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                      </button>
                </div>
          <div
            className={
              "lg:flex flex-grow items-center md:bg-transparent  lg:mt-6 " +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className={!IsArabic?"block z-50 navnav  rounded-b-2xl  md:py-0 py-2 px-3 md:t-center text-bl md:flex flex-col lg:flex-row list-none md:ml-auto mx-auto":"block z-50 navnav  rounded-b-2xl  md:py-0 py-2 px-3 md:t-center text-bl md:flex flex-col lg:flex-row list-none md:ml-auto mx-auto"}
            
            >
          <li className={!IsArabic?"md:mr-3 fromLeft":"md:ml-3  fromLeft"}>
                <NavLink to='/' 
                  className="no-underline text-li text-white md:my-0 my-2 hover:text-indigo-300 duration-500 py-2 flex items-center text-sm uppercase font-bold leading-snug  "
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
               
               {t('Navigation_home')}
                </NavLink>
                </li>
                <li className="group inline-block login">
  <button
   
  >
    <p  onClick={() => setNavbarOpen(!navbarOpen)} className="no-underline text-li	 py-2 flex items-center text-sm uppercase font-bold leading-snug md:mx-2 text-white md:my-0 my-2 hover:text-indigo-300 duration-500 "> {t('Navigation_About')}</p>
  
  </button>
  <ul
    className="bg-indigo-800 border-2 border-indigo-600  rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top px-3 "
  >
  <li>
    <NavLink to='/aboutus' onClick={() => setNavbarOpen(!navbarOpen)} className="rounded-sm no-underline text-white text-li cursor-pointer mb-2  block  mt-3 uppercase">{t('Navigation_About')}</NavLink>
    </li>
  <li>
    <NavLink to='/visions' onClick={() => setNavbarOpen(!navbarOpen)} className="rounded-sm no-underline text-white text-li cursor-pointer mb-2  block  mt-3 uppercase">{t('home_vision_first')}</NavLink>
    </li>
  <li>
    <NavLink to='/history' onClick={() => setNavbarOpen(!navbarOpen)} className="rounded-sm no-underline text-white text-li cursor-pointer mb-2  block  mt-3 uppercase">{t('home_history')}</NavLink>
    </li>
 


   

  </ul>
</li>



                <li className="md:mx-2  fromLeft">
                <NavLink to='/services' activeClassName="selected"
                  className="no-underline text-li	text-white md:my-0 my-2 hover:text-indigo-300 duration-500 py-2 flex items-center text-sm uppercase font-bold leading-snug  "
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
               {t('Navigation_Service')}
                </NavLink>
                </li>
                <li className="group inline-block login">
  <button
   
  >
    <NavLink to='/allclients' onClick={() => setNavbarOpen(!navbarOpen)} className="no-underline text-li	 py-2 flex items-center text-sm uppercase font-bold leading-snug md:mx-2 text-white md:my-0 my-2 hover:text-indigo-300 duration-500 ">{t('Navigation_Clients')}</NavLink>
  
  </button>
  <ul
    className="bg-indigo-800 border-2 border-indigo-600  rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top px-3 "
  >
  <li><NavLink to='/allclients' onClick={() => setNavbarOpen(!navbarOpen)} className="rounded-sm no-underline text-white text-li cursor-pointer mb-2  block  mt-2 uppercase">{t('Navigation_Clients')}</NavLink></li>
  <p> <NavLink to='/allclientsrecognition' onClick={() => setNavbarOpen(!navbarOpen)} className="rounded-sm no-underline text-white text-li cursor-pointer mb-2  block  mt-2 uppercase">{t('Navigation_recognition')}</NavLink></p>


   

  </ul>
</li>



              <li className="md:mx-2  fromLeft">
                <NavLink to='/promotionalgefts' activeClassName="selected"
                  className="no-underline text-li	text-white md:my-0 my-2 hover:text-indigo-300 duration-500 py-2 flex items-center text-sm uppercase font-bold leading-snug    "
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
               
               {t('Navigation_promotional')}
                </NavLink>
                </li>
              <li className="md:mx-2  fromLeft">
                <NavLink to='/allportfolio' activeClassName="selected"
                  className="no-underline text-li	text-white md:my-0 my-2 hover:text-indigo-300 duration-500 py-2 flex items-center text-sm uppercase font-bold leading-snug    "
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
               
               {t('Navigation_Portfolio')}
                </NavLink>
                </li>
                <li className="md:mx-2  fromLeft">
                <NavLink to='/contactus' activeClassName="selected"

                  className="no-underline text-li	text-white md:my-0 my-2 hover:text-indigo-300 duration-500 py-2 flex items-center text-sm uppercase font-bold leading-snug    "
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  {t('Navigation_Touch')}
               
                </NavLink>
                </li>
             
             <div className="dropdown">
            <button
              className="btn  dropdown-toggle cursor-pointer text-white md:my-0 my-2 hover:text-indigo-300 duration-500 	outlineglobal"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
             <i className='text-white md:my-0 my-2 hover:text-indigo-300 duration-500'>{globalIcon}</i>
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
{/*   
<span className='md:mx-2 mx-3 mt-3 '>
         <a href='https://www.facebook.com/KIC-Printing-Advertising-333673783382403/' target='_blank' rel="noreferrer" className='text-white md:my-0 my-2 hover:text-indigo-300 duration-500 '>{facebookIcon}</a>
</span>
<span className="md:mx-2 mx-3  mt-3">
<a href='https://www.instagram.com/kicadvertising/' target='_blank' rel="noreferrer" className='text-white md:my-0 my-2 hover:text-indigo-300 duration-500 '>{instagramIcon}</a>
</span> */}

            </ul>
          </div>
        </div>
      </div>
     
   
  );
}




export default Navigation2;
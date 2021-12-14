import { Turn as Hamburger } from 'hamburger-react'
import React, { useEffect, useState } from "react";
import {  NavLink } from "react-router-dom";
import '../App.css'
import Slide from 'react-reveal/Slide';
import Rotate from 'react-reveal/Rotate';
import logo from '../../src/img/logo.png'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next'
import cookies from 'js-cookie'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
// import CMYK from '../img/cmyk-for-logo.png'

const globalIcon=<FontAwesomeIcon icon ={faGlobe}/>
const  Navigation3=() =>{
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
    <div className={!IsArabic?'monsterratFont -my-3  bg-white lg:flex  items-center justify-between  ':"arabic-font-1  lg:flex  items-center justify-between bg-white " }>
      <div className="my_container w-full mx-auto z-30 my-0 py-0  lg:flex  items-center justify-between">
      
        <div className="    mx-auto flex  items-center justify-between">
          <div className=" relative flex items-center justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <div className="flex justify-start items-center mr-auto">
          <Rotate top left>  <div>
                    <NavLink className='  mx-1 ' to='/'> <img className=' md:w-64 sm:w-44 w-36   mx-2 my-0' src={logo} alt="" />
                    
                    </NavLink>
                </div>
                </Rotate>
                {/* <div className='md:ml-3'>

                    <h6 className='monsterratFont md:text-md lg:text-xl text-sm  font- -m-2 uppercase text-gray-400 '>   {t('Logo_text_1')}</h6>
                    <h6 className='monsterratFont md:text-md lg:text-xl text-sm  font- -m-2 uppercase text-gray-400 '>   {t('Logo_text_2')}</h6>
                  
                </div> */}
              <div>
          </div>
          </div>

          </div>
        </div>
                <div>
                        
                  <button className={!IsArabic?" absolute  sm:top-0 top-1  right-2 sm:right-10 sm:mt-3 cursor-pointer text-xl leading-none px-2 py-1 text-black rounded bg-transparent block lg:hidden outline-none focus:outline-none":" absolute sm:top-0 top-4 left-2 sm:mt-6 sm:left-10 cursor-pointer text-xl leading-none px-2 py-1 text-black rounded bg-transparent block lg:hidden outline-none focus:outline-none"}
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                      >
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                      </button>
                </div>
                <Slide top>
        
          <div
            className={
              "lg:flex flex-grow items-center md:bg-transparent justify-center lg:mt-3 " +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className={!IsArabic?" bg-white  z-50 navnav  rounded-b-2xl  md:py-0  px-3 md:t-center text-bl md:flex flex-col lg:flex-row list-none md:ml-auto ":" z-50 navnav bg-white  rounded-b-2xl  md:py-0 px-3 md:t-center text-bl md:flex flex-col lg:flex-row list-none md:mr-auto "}
            
            >
          <li className={!IsArabic?"md:mr-5 fromLeft":"md:ml-3  fromLeft"}>
                <NavLink to='/' 
                  className="no-underline text-li text-black  my-2  duration-300 py-2 flex items-center text-sm  uppercase font-bold leading-snug  hover:text-pink-500  "
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
               
               {t('Navigation_home')}
                </NavLink>
                </li>
                <li className="group inline-block login">
  <button
   
  >
    <NavLink to='/aboutus' activeClassName="selected" onClick={() => setNavbarOpen(!navbarOpen)} className="no-underline text-li	 md:py-2 flex items-center text-sm  uppercase font-bold leading-snug hover:text-pink-500  lg:mx-4 text-black  md:my-2 duration-300 "> {t('Navigation_About')}</NavLink>
  
  </button>
  <ul
    className="bg-white border-2 border-red-500 border-opacity-25 rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top px-3 "
  >
  <li>
    <NavLink to='/aboutus' onClick={() => setNavbarOpen(!navbarOpen)} className="rounded-sm no-underline text-black text-li cursor-pointer mb-2  block  mt-3 uppercase font-bold text-sm  hover:text-red-500 ">{t('Navigation_About')}</NavLink>
    </li>
  <li>
    <NavLink to='/visions' onClick={() => setNavbarOpen(!navbarOpen)} className="rounded-sm no-underline text-black text-li cursor-pointer mb-2  block  mt-3 uppercase font-bold text-sm  hover:text-red-500 ">{t('vision_first')}</NavLink>
    </li>
  <li>
    <NavLink to='/history' onClick={() => setNavbarOpen(!navbarOpen)} className="rounded-sm no-underline text-black text-li cursor-pointer mb-2  block  mt-3 uppercase font-bold text-sm  hover:text-red-500 ">{t('home_history')}</NavLink>
    </li>
 
    <li className=" fromLeft ">
                <NavLink to='/philosophy' activeClassName="selected"
                  className="no-underline text-li	text-black  my-2 hover:text-indigo-300 duration-300 py-2 flex items-center text-sm  uppercase font-bold leading-snug hover:text-pink-500     "
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
               
               {t('Navigation_philosophy')}
                </NavLink>
                </li>

   

  </ul>
</li>















<li className='lg:hidden'> 
    <NavLink to='/visions' onClick={() => setNavbarOpen(!navbarOpen)} className="rounded-sm text-sm  font-bold text-black  no-underline  text-li cursor-pointer mb-2  block  mt-3 uppercase">{t('vision_first')}</NavLink>
    </li>
  <li className='lg:hidden'>
    <NavLink to='/history' onClick={() => setNavbarOpen(!navbarOpen)} className="rounded-sm no-underline text-sm  font-bold text-black text-li cursor-pointer mb-2  block  mt-3 uppercase">{t('home_history')}</NavLink>
    </li>


                <li className="lg:mx-4  fromLeft">
                <NavLink to='/services' activeClassName="selected"
                  className="no-underline text-li	text-black  my-2 hover:text-indigo-300 duration-300 py-2 flex items-center text-sm  uppercase font-bold leading-snug hover:text-pink-500   "
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
               {t('Navigation_Service')}
                </NavLink>
                </li>
                <li className="group inline-block login">
  <button
   
  >
    <NavLink to='/allclients' activeClassName="selected" onClick={() => setNavbarOpen(!navbarOpen)} className="no-underline text-li	 md:py-2 flex items-center text-sm  uppercase font-bold leading-snug hover:text-pink-500  lg:mx-4 text-black  my-2 hover:text-indigo-300 duration-300 ">{t('Navigation_Clients')}</NavLink>
  
  </button>
  <ul
    className="bg-white border-2 border-red-500  rounded-sm transform scale-0 group-hover:scale-100 absolute border-opacity-25
  transition duration-150 ease-in-out origin-top px-3 "
  >
  <li><NavLink to='/allclients' onClick={() => setNavbarOpen(!navbarOpen)} className="rounded-sm no-underline text-black text-sm  font-bold hover:text-red-500 text-li cursor-pointer mb-2  block  mt-2 uppercase">{t('Navigation_Clients')}</NavLink></li>
  <li> <NavLink to='/allclientsrecognition' onClick={() => setNavbarOpen(!navbarOpen)} className="rounded-sm no-underline text-black text-sm  font-bold hover:text-red-500 text-li cursor-pointer mb-2  block  mt-2 uppercase">{t('Navigation_recognition')}</NavLink></li>


   

  </ul>
</li>
<li className='lg:hidden text-sm '> <NavLink to='/allclientsrecognition' onClick={() => setNavbarOpen(!navbarOpen)} className="rounded-sm no-underline text-black font-bold text-li cursor-pointer my-2  block  my-2 uppercase">{t('Navigation_recognition')}</NavLink></li>


              <li className="lg:mx-4  fromLeft">
                <NavLink to='/promotionalgefts' activeClassName="selected"
                  className="no-underline text-li	text-black  my-2 hover:text-indigo-300 duration-300 py-2 flex items-center text-sm  uppercase font-bold leading-snug hover:text-pink-500     "
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
               
               {t('Navigation_promotional')}
                </NavLink>
                </li>
              <li className="    lg:hidden">
                <NavLink to='/philosophy' activeClassName="selected"
                  className="no-underline text-li	text-black  my-2 hover:text-indigo-300 duration-300 py-2 flex items-center text-sm  uppercase font-bold leading-snug hover:text-pink-500     "
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
               
               {t('Navigation_philosophy')}
                </NavLink>
                </li>
              
  <li></li>
              <li className="lg:mx-4  fromLeft">
                <NavLink to='/allportfolio' activeClassName="selected"
                  className="no-underline text-li	text-black  my-2 hover:text-indigo-300 duration-300 py-2 flex items-center text-sm  uppercase font-bold leading-snug hover:text-pink-500     "
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
               
               {t('Navigation_Portfolio')}
                </NavLink>
                </li>
                <li className="lg:mx-4  fromLeft">
                <NavLink to='/contactus' activeClassName="selected"

                  className="no-underline text-li	text-black  my-2 hover:text-indigo-300 duration-300 py-2 flex items-center text-sm  uppercase font-bold leading-snug hover:text-pink-500     "
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  {t('Navigation_Touch')}
               
                </NavLink>
                </li>
             
             <div className="dropdown">
            <button
              className="btn  dropdown-toggle cursor-pointer text-black  my-2 hover:text-indigo-300 duration-300 	outlineglobal"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
             <i className='text-black  my-2 hover:text-indigo-300 duration-300'>{globalIcon}</i>
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
                      window.location.reload()
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
         <a href='https://www.facebook.com/KIC-Printing-Advertising-333673783382403/' target='_blank' rel="noreferrer" className='text-black  my-2 hover:text-indigo-300 duration-300 '>{facebookIcon}</a>
</span>
<span className="md:mx-2 mx-3  mt-3">
<a href='https://www.instagram.com/kicadvertising/' target='_blank' rel="noreferrer" className='text-black md:my-0 my-2 hover:text-indigo-300 duration-300 '>{instagramIcon}</a>
</span> */}

            </ul>
          </div>

</Slide>

        </div>
      </div>
     
   
  );
}




export default Navigation3;
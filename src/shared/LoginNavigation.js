
import { Turn as Hamburger } from 'hamburger-react'
import React, { useState } from "react";
import {  NavLink } from "react-router-dom";
import '../App.css'
import logo from '../../src/img/logo.png'


// const userIcon=<FontAwesomeIcon icon ={faUser}/>
// const menuIcon=<FontAwesomeIcon icon ={faBars}/>
const  LoginNavigation=() =>{
  const [isOpen, setOpen] = useState(false)

  const [navbarOpen, setNavbarOpen] = useState(false);
  // const [colorChange, setColorchange] = useState(false);
  // const changeNavbarColor = () =>{
  //    if(window.scrollY >= 1){
  //      setColorchange(true);
  //    }
  //    else{
  //      setColorchange(false);
  //    }
  // };
  // window.addEventListener('scroll', changeNavbarColor);
  return (
    <>
      {/* <nav className={colorChange ? 'navbar colorChange sticky top-0 ' : 'navbar'}> */}

      <div className="bg-white  z-30 navigation  flex flex-wrap items-center justify-between px-2  ">
      
        <div className=" container px-4 mx-auto flex flex-wrap items-center justify-between ">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <NavLink to='/'
              className="text-sm font-bold leading-relaxed inline-block ml-2 py-2 whitespace-nowrap uppercase  "
              
            >
             <NavLink to='/'> <img className='md:w-20 sm:w-16 w-14' src={logo} alt="" /></NavLink>
            </NavLink>
            <button
              className=" cursor-pointer text-xl leading-none px-1 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
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
            <ul className=" navnav md:bg-transparent bg-white-500 md:py-0 py-5 md:t-center text-bl md:flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="mx-3 fromLeft">
                <NavLink to='/' 
                  className=" py-2 flex items-center text-sm uppercase font-bold leading-snug   "
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
               Home
               
                </NavLink>
                </li>
                <li className="mx-3 fromLeft">
                <NavLink to='/aboutus' activeClassName="selected"
                  className=" py-2 flex items-center text-sm uppercase font-bold leading-snug    "
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
               About Us
                </NavLink>
                </li>
                <li className="mx-3 fromLeft">
                <NavLink to='/services' activeClassName="selected"
                  className=" py-2 flex items-center text-sm uppercase font-bold leading-snug    "
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
               Our Service
                </NavLink>
                </li>
                <li className="mx-3 fromLeft">
                <NavLink to='/allclients' activeClassName="selected"
                  className=" py-2 flex items-center text-sm uppercase font-bold leading-snug    "
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
               Our Clients
                </NavLink>
                </li>
                <li className="mx-3 fromLeft">
                <NavLink to='/allportfolio' activeClassName="selected"
                  className=" py-2 flex items-center text-sm uppercase font-bold leading-snug    "
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
               Portfolio
                </NavLink>
                </li>
                <li className="mx-3 fromLeft">
                <NavLink to='/contactus' activeClassName="selected"

                  className=" py-2 flex items-center text-sm uppercase font-bold leading-snug    "
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
               Get in Touch
                </NavLink>
                </li>
             
            </ul>
          </div>
        </div>
      </div>
      {/* </nav> */}
    </>
  );
}




export default LoginNavigation;
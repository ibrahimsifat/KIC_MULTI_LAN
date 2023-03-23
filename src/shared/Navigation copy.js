import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { Turn as Hamburger } from "hamburger-react";
import i18next from "i18next";
import cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Rotate from "react-reveal/Rotate";
import Slide from "react-reveal/Slide";
import { NavLink } from "react-router-dom";
import logo from "../../src/img/logo.png";
import "../App.css";
// import CMYK from '../img/cmyk-for-logo.png'

const globalIcon = <FontAwesomeIcon icon={faGlobe} />;
const Navigation3 = () => {
  const [isOpen, setOpen] = useState(false);

  const [navbarOpen, setNavbarOpen] = useState(false);

  // for Language btn
  const languages = [
    {
      code: "en",
      name: "English",
      country_code: "gb",
    },
    {
      code: "ar",
      name: "العربية",
      dir: "rtl",
      country_code: "sa",
    },
  ];

  const IsArabic = cookies.get("i18next") === "ar";

  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  return (
    <div
      className={
        !IsArabic
          ? "container  -my-3  bg-white lg:flex  items-center justify-between  "
          : " container lg:flex  items-center justify-between bg-white "
      }
    >
      <div className=" w-full mx-auto z-30 my-0 py-0  ">
        <div className=" w-full my_container  mx-auto flex  items-center justify-between">
          <div className=" relative flex items-center justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="flex justify-start items-center mr-auto lg:-mb-6">
              <Rotate top left>
                {" "}
                <div>
                  <NavLink className="  mx-1 " to="/">
                    {" "}
                    <img
                      className=" md:w-64 sm:w-44 w-36   mx-2 my-0"
                      src={logo}
                      alt=""
                    />
                  </NavLink>
                </div>
              </Rotate>

              <div></div>
            </div>
          </div>
        </div>
        <div>
          <button
            className={
              !IsArabic
                ? " absolute  sm:top-0 top-1  right-2 sm:right-10 sm:mt-3 cursor-pointer text-xl leading-none px-2 py-1 text-black rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                : " absolute sm:top-0 top-4 left-2 sm:mt-6 sm:left-10 cursor-pointer text-xl leading-none px-2 py-1 text-black rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            }
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </button>
        </div>
        <Slide top>
          <div
            className={
              "lg:flex  flex-grow items-center mx-auto  justify-center lg:mt-3 " +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul
              className={
                !IsArabic
                  ? "w-full lg:rounded-full mb-2 pushable justify-center bg-black mb-0 z-50   md:py-0 px-4 md:px-0  text-bl md:flex flex-col lg:flex-row list-none  "
                  : " w-full z-50 justify-center px-4 pushable md:px-0 bg-black lg:rounded-full  md:py-0  mb-0 text-bl md:flex flex-col lg:flex-row list-none  "
              }
            >
              <li
                className={!IsArabic ? "md:mr-5 fromLeft" : "md:ml-3  fromLeft"}
              >
                <NavLink
                  to="/"
                  className="no-underline text-li text-white my-2  duration-300 py-2 flex items-center text-sm  uppercase font-bold leading-snug  hover:text-pink-500  "
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  {t("Navigation_home")}
                </NavLink>
              </li>
              <li className="group inline-block login">
                <button>
                  <NavLink
                    to="/aboutus"
                    activeClassName="md:selected"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    className="no-underline text-li	 md:py-2 flex items-center text-sm  uppercase font-bold leading-snug hover:text-pink-500  lg:mx-4 text-white lg:my-2 duration-300 "
                  >
                    {" "}
                    {t("Navigation_About")}
                  </NavLink>
                </button>
                <ul
                  className="bg-black border-2 border-indigo-100 border-opacity-25 rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top px-3 "
                >
                  <li className="">
                    <NavLink
                      to="/visions"
                      activeClassName="md:selected"
                      onClick={() => setNavbarOpen(!navbarOpen)}
                      className="rounded-sm text-sm  font-bold text-white no-underline  text-li cursor-pointer mb-2  block  mt-3 uppercase"
                    >
                      {t("vision_first")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/history"
                      activeClassName="md:selected"
                      onClick={() => setNavbarOpen(!navbarOpen)}
                      className="rounded-sm no-underline text-white cursor-pointer mb-2  block  mt-3 uppercase font-bold text-sm  hover:text-red-500 "
                    >
                      {t("home_history")}
                    </NavLink>
                  </li>

                  <li className=" fromLeft ">
                    <NavLink
                      to="/philosophy"
                      activeClassName="md:selected"
                      className="no-underline text-li	text-white my-2 hover:text-indigo-300 duration-300 py-2 flex items-center text-sm  uppercase font-bold leading-snug hover:text-pink-500     "
                      onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                      {t("Navigation_philosophy")}
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="lg:hidden">
                <NavLink
                  to="/visions"
                  activeClassName="md:selected"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  className="rounded-sm text-sm  font-bold text-white no-underline  text-li cursor-pointer mb-2  block  mt-3 uppercase"
                >
                  {t("vision_first")}
                </NavLink>
              </li>
              <li className="lg:hidden">
                <NavLink
                  to="/history"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  className="rounded-sm no-underline text-sm   font-bold text-white text-li cursor-pointer mb-2  block  mt-3 uppercase"
                >
                  {t("home_history")}
                </NavLink>
              </li>

              <li className="lg:mx-4  fromLeft">
                <NavLink
                  to="/services"
                  activeClassName="md:selected"
                  className="no-underline text-li	text-white my-2 hover:text-indigo-300 duration-300 py-2 flex items-center text-sm  uppercase font-bold leading-snug hover:text-pink-500   "
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  {t("Navigation_Service")}
                </NavLink>
              </li>
              <li className="group inline-block login">
                <button>
                  <NavLink
                    to="/allclients"
                    activeClassName="md:selected"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    className="no-underline text-li	 md:py-2 flex items-center text-sm  uppercase font-bold leading-snug hover:text-pink-500  lg:mx-4 text-white my-2 hover:text-indigo-300 duration-300 "
                  >
                    {t("Navigation_Clients")}
                  </NavLink>
                </button>
                <ul
                  className="bg-black border-2 border-indigo-100  rounded-sm transform scale-0 group-hover:scale-100 absolute border-opacity-25
  transition duration-150 ease-in-out origin-top px-3 "
                >
                  <li>
                    <NavLink
                      to="/allclients"
                      onClick={() => setNavbarOpen(!navbarOpen)}
                      className="rounded-sm no-underline text-white text-sm  font-bold hover:text-red-500 text-li cursor-pointer mb-2  block  mt-2 uppercase"
                    >
                      {t("Navigation_Clients")}
                    </NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink
                      to="/allclientsrecognition"
                      onClick={() => setNavbarOpen(!navbarOpen)}
                      className="rounded-sm no-underline text-white text-sm  font-bold hover:text-red-500 text-li cursor-pointer mb-2  block  mt-2 uppercase"
                    >
                      {t("Navigation_recognition")}
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="lg:hidden text-sm ">
                {" "}
                <NavLink
                  to="/allclientsrecognition"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  className="rounded-sm no-underline text-white font-bold text-li cursor-pointer block  my-2 uppercase"
                >
                  {t("Navigation_recognition")}
                </NavLink>
              </li>

              <li className="lg:mx-4  fromLeft">
                <NavLink
                  to="/promotionalgefts"
                  activeClassName="md:selected"
                  className="no-underline text-li	text-white my-2 hover:text-indigo-300 duration-300 py-2 flex items-center text-sm  uppercase font-bold leading-snug hover:text-pink-500     "
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  {t("Navigation_promotional")}
                </NavLink>
              </li>
              <li className="    lg:hidden">
                <NavLink
                  to="/philosophy"
                  activeClassName="md:selected"
                  className="no-underline text-li	text-white my-2 hover:text-indigo-300 duration-300 py-2 flex items-center text-sm  uppercase font-bold leading-snug hover:text-pink-500     "
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  {t("Navigation_philosophy")}
                </NavLink>
              </li>

              <li></li>
              <li className="lg:mx-4  fromLeft">
                <NavLink
                  to="/allportfolio"
                  activeClassName="md:selected"
                  className="no-underline text-li	text-white my-2 hover:text-indigo-300 duration-300 py-2 flex items-center text-sm  uppercase font-bold leading-snug hover:text-pink-500     "
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  {t("Navigation_Portfolio")}
                </NavLink>
              </li>
              <li className="lg:mx-4  fromLeft">
                <NavLink
                  to="/contactus"
                  activeClassName="md:selected"
                  className="no-underline text-li	text-white my-2 hover:text-indigo-300 duration-300 py-2 flex items-center text-sm  uppercase font-bold leading-snug hover:text-pink-500     "
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  {t("Navigation_Touch")}
                </NavLink>
              </li>

              <div className="dropdown">
                <button
                  className="btn  dropdown-toggle cursor-pointer text-black my-2 hover:text-indigo-300 duration-300 	outlineglobal"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="text-white my-2 hover:text-indigo-300 duration-300">
                    {globalIcon}
                  </i>
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-dark outlineglobal"
                  aria-labelledby="dropdownMenuButton2"
                >
                  <p>
                    <span className="dropdown-item-text">{t("language")}</span>
                  </p>
                  {languages.map(({ code, name, country_code }) => (
                    <li key={country_code}>
                      <p
                        className={classNames("dropdown-item cursor-pointer	", {
                          disabled: currentLanguageCode === code,
                        })}
                        onClick={() => {
                          i18next.changeLanguage(code);
                          window.location.reload();
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
         <a href='https://www.facebook.com/KIC-Printing-Advertising-333673783382403/' target='_blank' rel="noreferrer" className='text-white my-2 hover:text-indigo-300 duration-300 '>{facebookIcon}</a>
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
};

export default Navigation3;

import i18next from "i18next";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { AiFillCloseCircle } from "react-icons/ai";
import logo from "../../src/img/logo.png";
// import component 👇
import { FaBars } from "react-icons/fa";
import Drawer from "react-modern-drawer";
//import styles 👇
import "react-modern-drawer/dist/index.css";
import { Slide } from "react-reveal";
import { NavLink } from "react-router-dom";
import { languages2 } from "../utils/data";
const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const IsArabic = Cookies.get("i18next") === "ar";
  return (
    <>
      <div className="flex justify-between items-center px-4 py-3">
        {" "}
        <div>
          <NavLink to="/">
            <img className=" w-40 sm:w-44 " src={logo} alt="" />
          </NavLink>
        </div>
        <div>
          <button onClick={toggleDrawer}>
            <FaBars size={33} className="mt-1 hover:text-red-600-200" />
          </button>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="right"
            className="w-9/12 h-screen"
          >
            <button onClick={toggleDrawer} className="">
              <AiFillCloseCircle size={40} />
            </button>
            <div className="flex justify-center items-center h-screen">
              <ul className="p-0 text-center">
                <li>
                  <NavItem
                    path={"/"}
                    toggleDrawer={toggleDrawer}
                    NavigationText={"Navigation_home"}
                  />
                </li>
                <li>
                  <NavItem
                    path={"/aboutus"}
                    toggleDrawer={toggleDrawer}
                    NavigationText={"Navigation_About"}
                  />
                </li>

                <li>
                  <NavItem
                    path={"/visions"}
                    toggleDrawer={toggleDrawer}
                    NavigationText={"vision_first"}
                  />
                </li>
                <li>
                  <NavItem
                    path={"/history"}
                    toggleDrawer={toggleDrawer}
                    NavigationText={"home_history"}
                  />
                </li>

                <li>
                  <NavItem
                    path={"/services"}
                    toggleDrawer={toggleDrawer}
                    NavigationText={"Navigation_Service"}
                  />
                </li>
                <li>
                  <NavItem
                    path={"/allclients"}
                    toggleDrawer={toggleDrawer}
                    NavigationText={"Navigation_Clients"}
                  />
                </li>

                <li>
                  <NavItem
                    path={"/allclientsrecognition"}
                    toggleDrawer={toggleDrawer}
                    NavigationText={"Navigation_recognition"}
                  />
                </li>

                <li>
                  <NavItem
                    path={"/promotionalgefts"}
                    toggleDrawer={toggleDrawer}
                    NavigationText={"Navigation_promotional"}
                  />
                </li>
                <li>
                  <NavItem
                    path={"/philosophy"}
                    toggleDrawer={toggleDrawer}
                    NavigationText={"Navigation_philosophy"}
                  />
                </li>

                <li></li>
                <li className="lg:mx-4  fromLeft">
                  <NavItem
                    path={"/allportfolio"}
                    toggleDrawer={toggleDrawer}
                    NavigationText={"Navigation_Portfolio"}
                  />
                </li>
                <li className="lg:mx-4  fromLeft">
                  <NavItem
                    path={"/contactus"}
                    toggleDrawer={toggleDrawer}
                    NavigationText={"Navigation_Touch"}
                  />
                </li>

                {/* // language switcher */}
                <li className="lg:mx-4  fromLeft mt-2.5">
                  {!IsArabic ? (
                    <p
                      onClick={() => {
                        i18next.changeLanguage(languages2.ar.code);
                        // window.location.reload();
                      }}
                    >
                      <div className="bg-gray-800 p-2 flex justify-center items-center rounded-md cursor-pointer">
                        <span
                          className={`flag-icon flag-icon-${languages2.ar.country_code}  cursor-pointer text-3xl `}
                        ></span>
                        <span className="mx-2 font-bold text-white">
                          {languages2.ar.name}
                        </span>
                      </div>
                    </p>
                  ) : (
                    <p
                      onClick={() => {
                        i18next.changeLanguage(languages2.en.code);
                        // window.location.reload();
                      }}
                    >
                      <div className="bg-gray-800 p-2 flex justify-center items-center rounded-md cursor-pointer">
                        <span
                          className={`flag-icon flag-icon-${languages2.en.country_code}   text-3xl `}
                        ></span>
                        <span className="mx-2 font-bold text-white">
                          {languages2.en.name}
                        </span>
                      </div>
                    </p>
                  )}
                </li>
              </ul>
            </div>
          </Drawer>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
const NavItem = ({ toggleDrawer, NavigationText, path }) => {
  const { t } = useTranslation();
  return (
    <div>
      <NavLink
        to={path}
        activeClassName="md:selected"
        className="no-underline my-2 duration-300 py-2 flex items-center  text-black hover:text-purple-700 uppercase font-bold text-xl   "
        onClick={toggleDrawer}
      >
        <Slide left> {t(NavigationText)}</Slide>
      </NavLink>
    </div>
  );
};

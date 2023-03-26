import i18next from "i18next";
import cookies from "js-cookie";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Rotate } from "react-reveal";
import { NavLink } from "react-router-dom";
import logo from "../../src/img/logo.png";
import "../App.css";
import { languages, languages2 } from "../utils/data";
import useWindowDimensions from "../utils/useWindowDimensions";
import MobileNav from "./MobileNav";
// import CMYK from '../img/cmyk-for-logo.png'

// const globalIcon = <FontAwesomeIcon icon={faGlobe} />;
const Navigation3 = () => {
  // const [isOpen, setOpen] = useState(false);
  const { width } = useWindowDimensions();
  const IsArabic = cookies.get("i18next") === "ar";

  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  return (
    <div>
      {width > 1030 ? (
        <div
          className={
            !IsArabic
              ? "container  -my-2  bg-white lg:flex  items-center justify-between hidden md:block "
              : " container   lg:flex  items-center justify-between bg-white hidden md:block"
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
                        <img
                          className=" md:w-64 sm:w-44 w-36 mx-2 my-0"
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

            {/* <Slide top> */}
            <div
              className={
                "lg:flex  flex-grow items-center mx-auto  justify-center lg:mt-3 "
              }
              id="example-navbar-danger"
            >
              <ul
                className={
                  !IsArabic
                    ? "w-full lg:rounded-full mb-2 pushable justify-center bg-black  z-50   md:py-0 px-4 md:px-0  text-bl md:flex flex-col lg:flex-row list-none  "
                    : " w-full z-50 justify-center px-4 pushable md:px-0 bg-black lg:rounded-full  md:py-0  mb-0 text-bl md:flex flex-col lg:flex-row list-none  "
                }
              >
                <li
                  className={
                    !IsArabic ? "md:mr-5 fromLeft" : "md:ml-3  fromLeft"
                  }
                >
                  <NavItem path={"/"} NavigationText={"Navigation_home"} />
                </li>
                <li className="group inline-block login">
                  <button>
                    <NavItem
                      path={"/aboutus"}
                      NavigationText={"Navigation_About"}
                    />
                  </button>
                  <DropDownMenu>
                    <li className="">
                      <NavItem
                        path={"/visions"}
                        NavigationText={"vision_first"}
                      />
                    </li>
                    <li>
                      <NavItem
                        path={"/history"}
                        NavigationText={"home_history"}
                      />
                    </li>

                    <li className=" fromLeft ">
                      <NavItem
                        path={"/philosophy"}
                        NavigationText={"Navigation_philosophy"}
                      />
                    </li>
                  </DropDownMenu>
                </li>

                <li className="lg:mx-4  fromLeft">
                  <NavItem
                    path={"/services"}
                    NavigationText={"Navigation_Service"}
                  />
                </li>
                <li className="group inline-block login">
                  <button>
                    <NavItem
                      path={"/allclients"}
                      NavigationText={"Navigation_Clients"}
                    />
                  </button>
                  <DropDownMenu>
                    <li>
                      <NavItem
                        path={"/allclients"}
                        NavigationText={"Navigation_Clients"}
                      />
                    </li>
                    <li>
                      <NavItem
                        path={"/allclientsrecognition"}
                        NavigationText={"Navigation_recognition"}
                      />
                    </li>
                  </DropDownMenu>
                </li>

                <li className="lg:mx-4  fromLeft">
                  <NavItem
                    path={"/promotionalgefts"}
                    NavigationText={"Navigation_promotional"}
                  />
                </li>

                <li></li>
                <li className="lg:mx-4  fromLeft">
                  <NavItem
                    path="allportfolio"
                    NavigationText={"Navigation_Portfolio"}
                  />
                </li>
                <li className="lg:mx-4  fromLeft">
                  <NavItem
                    path="/contactus"
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
                      <span
                        className={`flag-icon flag-icon-${languages2.ar.country_code}  cursor-pointer text-xl text-white`}
                      ></span>
                      {languages2.ar.name}
                    </p>
                  ) : (
                    <p
                      onClick={() => {
                        i18next.changeLanguage(languages2.en.code);
                        // window.location.reload();
                      }}
                    >
                      <span
                        className={`flag-icon flag-icon-${languages2.en.country_code}  cursor-pointer text-xl text-white`}
                      ></span>
                      {languages2.en.name}
                    </p>
                  )}
                </li>
              </ul>
            </div>
            {/* </Slide> */}
          </div>
        </div>
      ) : (
        <MobileNav />
      )}
    </div>
  );
};

export default Navigation3;

const NavItem = ({ NavigationText, path }) => {
  const { t } = useTranslation();
  return (
    <div>
      <NavLink
        to={path}
        activeClassName="md:selected"
        className="no-underline text-li	text-white my-2 hover:text-indigo-300 duration-300 py-2 flex items-center text-sm  uppercase font-bold  "
      >
        {t(NavigationText)}
      </NavLink>
    </div>
  );
};

const DropDownMenu = ({ children }) => {
  return (
    <ul
      className="bg-black border-2 border-indigo-100  rounded-sm transform scale-0 group-hover:scale-100 absolute border-opacity-25
  transition duration-150 ease-in-out origin-top px-3 "
    >
      {children}
    </ul>
  );
};

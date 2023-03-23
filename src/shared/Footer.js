import cookies from "js-cookie";
import React from "react";
import { useTranslation } from "react-i18next";
import "../App.css";

import {
  BsFillTelephoneFill,
  BsInstagram,
  BsSnapchat,
  BsTwitter,
} from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { NavLink } from "react-router-dom";

import FooterLo from "../img/footerlogo.png";
import Foot from "./Foot";
const IsArabic = cookies.get("i18next") === "ar";
const Footer = () => {
  const BG = {
    backgroundColor: "#849CFD",
    // background:  linearGradient("to top, #fff000 0%, #000fff 100%"),
  };

  const { t } = useTranslation();
  return (
    <div
      style={BG}
      className={
        !IsArabic ? " bg- pt-8  monsterratFont" : " footer- pt-8 arabic-font-1"
      }
    >
      <div className="mt-8">
        <div className="container mx-auto grid  lg:grid-cols-3  md:grid-cols-2 justify-between items-start ">
          <FooterLogo></FooterLogo>
          <Pages></Pages>
          <Foot></Foot>
          {/* //  <Subscribe></Subscribe>  */}
        </div>
        <p className="md:mt-8 mt-5 pb-2 text-center text-white  ">
          {" "}
          {t("home_footer_copyright")} © 2021 KIC.
        </p>
      </div>
    </div>
  );
};

const FooterLogo = () => {
  return (
    <div className="md:px-0 ">
      <img className="md:w-72 w-10/12" src={FooterLo} alt="" />

      {/* <div className="w-full flex  mt-1">
        {/* {!IsArabic ? (
          <a
            href="https://wa.me/+966505353820"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify- items-center no-underline	"
          >
            <button
              id="whatsapp"
              className="  sticky duration-500 border-2 border-green-600 fixed  md:w-8 w-10 transform hover:-translate-y-1   md:h-8 h-10 text-2xl rounded hover:bg-green-600 hover:text-white text-white flex justify-center items-center"
            >
              <BsFillTelephoneFill
                className="text-"
                style={{ fontSize: "16px" }}
              />
            </button>
            <button className="no-underline text-md text-white mx-2 border-0"></button>
          </a>
        ) : (
          <a
            href="https://wa.me/+966505353820"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify- items-center no-underline	"
          >
            <button
              id="whatsapp"
              className="  sticky duration-500 border-2 border-green-600 fixed  md:w-8 w-10 transform hover:-translate-y-1   md:h-8 h-10 text-2xl rounded hover:bg-green-600 hover:text-white text-white flex justify-center items-center"
            >
              <BsFillTelephoneFill
                className="text-"
                style={{ fontSize: "16px" }}
              />
            </button>
            <button className="no-underline rote-text text-md text-white mx-2 text-right border-0"></button>
          </a>
        )} 
        <a
          href="https://wa.me/+966505353820"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify- items-center no-underline	"
        >
          <button
            id="whatsapp"
            className="  sticky duration-500 border-2 border-green-600 fixed  md:w-8 w-10 transform hover:-translate-y-1   md:h-8 h-10 text-2xl rounded hover:bg-green-600 hover:text-white text-white flex justify-center items-center"
          >
            <BsFillTelephoneFill
              className="text-"
              style={{ fontSize: "16px" }}
            />
          </button>
          <button className="no-underline text-md text-white mx-2 border-0"></button>
        </a>
        <a
          href="mailto:atif@kicadv.com"
          className="flex justify- items-center no-underline	"
        >
          <button
            id="mail"
            className="  sticky duration-500 border-2 border-blue-600 fixed  md:w-8 w-10 transform hover:-translate-y-1   md:h-8 h-10 text-2xl rounded hover:bg-blue-600 hover:text-white text-white flex justify-center items-center"
          >
            <AiOutlineMail className="text-" style={{ fontSize: "16px" }} />
          </button>
          <button className="no-underline text-md text-white mx-2 border-0"></button>
        </a>

        <a
          href="https://www.instagram.com/kicadvertising/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify- items-center no-underline	my-3"
        >
          <button
            id="instagram"
            className="border-2 hover:border-0 border-pink-500 bg-gradient-to-b text-2xl hover:from-indigo-600 hover:via-pink-600 hover:to-yellow-500 min-w-wull hover:text-white  text-pink-600 md:w-8 w-10 md:h-8 h-10  transform hover:-translate-y-1 rounded duration-500 flex justify-center items-center"
          >
            <FiInstagram style={{ fontSize: "16px" }} />
          </button>
          <button className="no-underline text-md text-white mx-2 border-0"></button>
        </a>

        <a
          href="https://www.facebook.com/KIC-Print-Advertising-100128565876881"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify- items-center no-underline	"
        >
          <button
            id="facebook"
            className="  sticky duration-500 border-2 border-blue-600 fixed  md:w-8 w-10 transform hover:-translate-y-1   md:h-8 h-10 text-2xl rounded hover:bg-blue-600 hover:text-white text-white flex justify-center items-center"
          >
            <FaFacebookF className="text-" style={{ fontSize: "16px" }} />
          </button>
          <button className="no-underline text-md text-white mx-2 border-0"></button>
        </a>
      </div> */}
      <div className="mt-3">
        <div class="flex flex-wrap  gap-2">
          <a
            href="https://wa.me/+966505353820"
            target="_blank"
            rel="noreferrer"
          >
            <button class="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
              <BsFillTelephoneFill
                className="text-"
                style={{ fontSize: "16px" }}
              />
            </button>
          </a>
          <a href="mailto:kic121@hotmail.com" target="_blank" rel="noreferrer">
            <button class="bg-blue-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
              <GrMail style={{ fontSize: "16px" }} />
            </button>
          </a>
          <a
            href="https://twitter.com/Kicadv1"
            target="_blank"
            rel="noreferrer"
          >
            <button class="bg-blue-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
              <BsTwitter style={{ fontSize: "16px" }} />
            </button>
          </a>
          <a
            href="https://www.instagram.com/kicadv_sa/"
            target="_blank"
            rel="noreferrer"
          >
            <button class="bg-pink-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
              <BsInstagram style={{ fontSize: "16px" }} />
            </button>
          </a>
          <a
            href="https://www.snapchat.com/add/kicadv1"
            target="_blank"
            rel="noreferrer"
          >
            <button class="bg-yellow-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
              <BsSnapchat style={{ fontSize: "16px" }} />
            </button>
          </a>
          <a
            href="https://www.tiktok.com/@kicadv1"
            target="_blank"
            rel="noreferrer"
          >
            <button class="bg-black p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
              <FaTiktok style={{ fontSize: "16px" }} />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
const Pages = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className=" flex text-white mb-4">
        <div className="  md:mx-4  ">
          {/* <div className="text-center">
        <p className={!IsArabic?'text-white font-bold text-xl arabic-font-1 pb-1': 'text-black font-bold text-xl monsterratFont pb-1'}>{t('Footer_Pages')}</p>
            <p className='border-b-2 border-red-600 border-fuchsia-600 w-14 mx-auto'></p>
        </div> */}
          <div className="grid grid-cols-2">
            <nav className="list-none  mt-3">
              <li>
                <NavLink
                  className="text-white no-underline font-   block"
                  to="/"
                >
                  {t("Navigation_home")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="ml-0 text-white no-underline font-  py-3 block "
                  to="/aboutus"
                >
                  {t("Navigation_About")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-white  no-underline font-   block"
                  to="/visions"
                >
                  {t("vision_first")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-white no-underline py-3  block"
                  to="/history"
                >
                  {t("home_history")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-white  no-underline font-   block"
                  to="/services"
                >
                  {" "}
                  {t("Navigation_Service")}
                </NavLink>
              </li>
            </nav>
            <nav className="list-none  mt-3">
              <li>
                <NavLink
                  className="text-white no-underline block"
                  to="/allclients"
                >
                  {t("Navigation_Clients")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-white    no-underline py-3  block"
                  to="/allclientsrecognition"
                >
                  {t("Navigation_recognition")}
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="text-white   no-underline block"
                  to="/philosophy"
                >
                  {t("Navigation_philosophy")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-white    no-underline py-2  py-3 block"
                  to="/allportfolio"
                >
                  {" "}
                  {t("Navigation_Portfolio")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-white  no-underline font-  block"
                  to="/contactus"
                >
                  {" "}
                  {t("Navigation_Touch")}
                </NavLink>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

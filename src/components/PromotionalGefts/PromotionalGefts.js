import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import Img from "../../img/promotional-gefts-(1).JPG";
import Img2 from "../../img/promotional-gefts-(2).JPG";
import "./PromotionalGefts.css";
const PromotionalGefts = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="container flex justify-between  items-center my-5 ">
        <div>
          <NavLink
            className="no-underline cursor-pointer text-black hover:text-blue-400"
            to="/"
          >
            {t("Navigation_home")}
          </NavLink>{" "}
          /{" "}
          <NavLink
            className="no-underline cursor-pointer text-black hover:text-blue-400"
            to="/allclients"
          >
            {t("Navigation_promotional")}
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/"
            className="flex justify-center  items-center     mx-auto"
          >
            <button className="inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-black text-white text-sm font-bold rounded-md">
              <div className="px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                  />
                </svg>
              </div>
              {/* Back To clients */}
              {t("Back")}
            </button>
          </NavLink>
        </div>
      </div>
      <div className="bg-gray-00  pb-16 ">
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark md:w-9/12 slide  mx-auto bg-gray-700"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active "
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>
          <div className="carousel-inner border-4 border-gray-600 ">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={Img} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={Img2} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default PromotionalGefts;

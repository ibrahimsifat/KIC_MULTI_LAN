import React from "react";
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import "./Serivces.css";
const ServicesBanner = () => {
  const { t } = useTranslation();
  return (
    <div className=" service-bg-img h-screen	">
      <div className="">
        <div className="flex justify-center items-center ">
          <div className="my_container grid lg:grid-cols-3 ">
            <div className="home-content col-span-2  left  -col justify-center lg:items-right items-end">
              <Fade left>
                <div className=" px-3 lg:mt-52 md:mt-44 mt-16 block">
                  <p className=" text-white md:text-2xl sm:text-xl text-md">
                    {t("Service_Banner_one")}
                  </p>
                  <h1 className="bg-white py-1 md:w-80 sm:w-72 w-52 ml-auto mt-4 md:mr-8">
                    {" "}
                  </h1>
                </div>
              </Fade>
            </div>
            <div className="right w-12/12 mt-2 md:mt-8 px-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesBanner;

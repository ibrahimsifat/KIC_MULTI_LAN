import React from "react";
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import MarketingBG from "../../img/serviceMerkating-01.png";
import "./Serivces.css";
const ServiceMarketing = () => {
  const { t } = useTranslation();
  return (
    <>
      {" "}
      <div className="mb-6">
        <div>
          <div className="grid md:grid-cols-5">
            <div className=" col-span-3 marketing-bg right  flex justify-center items-center lg-pt-0 pt-8 h-96 ">
              <div className=" px-8 md:px-16">
                <Fade right>
                  <h1 className=" tracking-tighter font-extrabold uppercase text-white text-3xl sm:text-5xl md:text-4xl lg:text-5xl mb-6 lg:mb-8">
                    {t("service_marketing_one")}
                  </h1>
                  <p className="text-white font-regular  md:pb-0 pb-10 md:my-10 lg:my-0  sm:text-md lg:text-xl ">
                    {t("service_marketing_two")}
                  </p>
                </Fade>
              </div>
            </div>
            <div className="left col-span-3 md:-mt-0 -mt-12 md:col-span-2">
              <img
                className="lg:w-full md:h-96 md:w-full"
                src={MarketingBG}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default ServiceMarketing;

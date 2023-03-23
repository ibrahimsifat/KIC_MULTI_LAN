import cookies from "js-cookie";
import React from "react";
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import graphicBG from "../../img/graphicService.png";
const GraphicDesignService = () => {
  const IsArabic = cookies.get("i18next") === "ar";
  const { t } = useTranslation();
  return (
    <>
      {" "}
      <div className="mb-6 ">
        <div>
          <div className="grid md:grid-cols-2">
            <div className="left">
              <img
                className="lg:w-full md:h-96 md:w-full"
                src={graphicBG}
                alt=""
              />
            </div>
            <div className=" right bg-graphic flex justify-center items-center lg-pt-0 pt-8 h-96 ">
              <div className=" px-8 md:px-16">
                <Fade right>
                  <h1 className=" tracking-tighter font-extrabold uppercase text-white text-3xl sm:text-5xl md:text-4xl lg:text-5xl mb-6 lg:mb-8">
                    {t("service_Graphic")}
                  </h1>
                  <p className="text-white font-regular  mb-4 md:my-10 lg:my-0  sm:text-md lg:text-xl ">
                    {t("service_Graphic_tow")}
                  </p>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GraphicDesignService;

import React from "react";
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import "../../App.css";
import VisionsBg from "../../img/visions-bg.jpg";
const Vision = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="grid md:grid-cols-2">
        <div className="left bg-indigo-600 bg-opacity-20">
          <img src={VisionsBg} alt="" className="bg-indigo-600 bg-opacity-20" />
        </div>

        <div className=" right bgred flex justify-center items-center lg-pt-0 pt-8 ">
          <div className="px-8 md:px-16 ">
            <Fade right>
              <h1 className=" tracking-tighter font-extrabold	text-white text-3xl sm:text-5xl md:text-4xl lg:text-5xl mb-6 lg:mb-8">
                {t("home_vision_first")}
              </h1>
              <p className="text-white  mb-4 md:my-10 lg:my-0  sm:text-md lg:text-md ">
                {t("home_vision_second")}
              </p>
              <p className="text-white  mb-4 md:my-10 lg:my-0  sm:text-md lg:text-md ">
                {t("home_vision_second2")}
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;

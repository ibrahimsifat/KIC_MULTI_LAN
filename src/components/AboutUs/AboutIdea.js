import cookies from "js-cookie";
import React from "react";
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import IdeaIcon from "../../img/aboutIdeaicon.png";
import "./AboutUs.css";
const AboutIdea = () => {
  const IsArabic = cookies.get("i18next") === "ar";
  const { t } = useTranslation();
  return (
    <div className="aboutIdeaBg flex flex-col   justify-center items-center ">
      <div className="grid sm:grid-cols-4 px-4 gap-4 pb-8 container">
        <div className="col-span-2">
          <Fade left>
            <img src={IdeaIcon} alt="" />
          </Fade>
        </div>
        <Fade left>
          <div className="flex justify-center items-center md:mr-44   col-span-2   ">
            <div className={IsArabic ? " md:ml-0 ml-6 " : " md:ml-44 ml-6  "}>
              <h1 className=" text-3xl font-extrabold sm:text-4xl md:text-4xl lg:text-5xl text-transparent uppercase strokeme">
                {t("home_idea_first")}
              </h1>
              <h1 className=" text-3xl font-extrabold sm:text-4xl md:text-4xl lg:text-5xl text-transparent uppercase strokeme">
                {t("home_idea_second")}
              </h1>
              <h1 className=" text-3xl font-extrabold sm:text-4xl md:text-4xl lg:text-5xl text-transparent uppercase strokeme">
                {t("home_idea_three")}
              </h1>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default AboutIdea;

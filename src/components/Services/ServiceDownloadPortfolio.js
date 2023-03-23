import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import Shap from "../../img/service-portfolio-save.png";
import "./Serivces.css";
const chevronIcon = <FontAwesomeIcon icon={faChevronLeft} />;
const chevronRightIcon = <FontAwesomeIcon icon={faChevronRight} />;
const ServiceDownloadPortfolio = () => {
  const { t } = useTranslation();
  return (
    <div className="downloadPortfolio_bg my-4 relative">
      <div>
        <img
          className="lg:w-32  md:w-28 w-24 absolute -top-20 md:right-32 right-28 lg:right-44"
          src={Shap}
          alt=""
        />
      </div>
      <Fade left>
        <div className=" flex justify-center items-center">
          <i
            className="fas fa-chevron-right  text-gray-400 
             text-3xl sm:text-4xl md:text-3xl lg:text-4xl mb-6 lg:mb-8  sm:mr-2 md:mr-10 "
          >
            {chevronRightIcon}
          </i>
          <a
            href="../Profile.pdf"
            download="KIC Portfolio"
            className=" fromLeft  tracking-tighter font-extrabold uppercase py-9 text-white text-md sm:text-2xl border-line lg:text-4xl mb-6 lg:mb-8 no-underline md:mx-16 mx-2"
          >
            {t("service_portfolio_one")}
          </a>
          <i className="fas fa-chevron-left text-3xl sm:text-4xl md:text-3xl lg:text-4xl mb-6 lg:mb-8 md:ml-10 sm:ml-2 text-gray-400 ">
            {chevronIcon}
          </i>
        </div>
      </Fade>
    </div>
  );
};

export default ServiceDownloadPortfolio;

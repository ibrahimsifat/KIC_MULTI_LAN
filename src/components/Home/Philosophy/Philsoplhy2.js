import cookies from "js-cookie";
import React from "react";
import { useTranslation } from "react-i18next";
import LeftIcon from "../../../img/philosophyIcon.png";
import TextRighttIcon from "../../../img/philosophyleftIcon.png";
import RightIcon from "../../../img/printiconrightICOn.png";
const Philsoplhy2 = () => {
  const { t } = useTranslation();
  const IsArabic = cookies.get("i18next") === "ar";
  return (
    <div>
      <div
        className={
          !IsArabic
            ? "md:ml-32 mt-40 ml-5 grid grid-cols-5 "
            : "md:mr-32 mr-5 mt-40 4 grid grid-cols-5 "
        }
      >
        <div className="col-span-4">
          <h1
            className={
              !IsArabic
                ? " py-2 md:my-2 md:text-xl text-sm  "
                : "my-2 md:my-2 text-sm lg:text-xl  "
            }
          >
            {t("home_PHILOSOPHY_second")}
          </h1>
        </div>
        <div>
          <img src={TextRighttIcon} alt="" />
        </div>
      </div>
      {!IsArabic ? (
        <div className="flex justify-between items-center mb-8">
          <img className="md:w-40 w-24 " src={LeftIcon} alt="" />
          <img className=" md:w-52 w-32 " src={RightIcon} alt="" />
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <img className="" src={RightIcon} alt="" />
          <img className="" src={LeftIcon} alt="" />
        </div>
      )}
    </div>
  );
};

export default Philsoplhy2;

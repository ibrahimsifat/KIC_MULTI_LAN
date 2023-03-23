import cookies from "js-cookie";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import usePortfolio from "../../shared/usePortfolio";
import SinglePortfolio from "./SinglePortfolio";

const ProtfolioBanner2 = () => {
  const { t } = useTranslation();
  const [portfolios] = usePortfolio();

  const IsArabic = cookies.get("i18next") === "ar";
  return (
    <div>
      <div
        className=" m-0 p-0 bg-cover bg-bottom bgImage "
        style={{ height: "400px", maxHeight: "460px" }}
      >
        <div className="  mx-auto text-center break-normal">
          <p className="text-white pt-32 font-extrabold text-3xl md:text-5xl">
            {t("allPortfolio_one")}
          </p>
          <div className="mx-auto text-center flex justify-center">
            <p className="text-white font-semibold text-xl flex  mx-auto text-center mt-2">
              <Link className="nav_hover text-white no-underline" to="/">
                {t("service_allClients_two")}
              </Link>
              <span className="mx-2">/</span>{" "}
              <span className="nav_hover ">{t("allPortfolio_two")}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="my_container flex w-10/12 mx-auto rounded shadow  ">
        <div className="bg-blue-100 grid sm:grid-cols-3    ">
          <div className="col-span-2">
            <img
              src="https://i.ibb.co/rZrJpmS/43.jpg"
              className=" h-full "
              alt=""
            />
          </div>

          <div className="w-full flex flex-col flex-grow items-center h-full flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none bg-purple-50 md:pt-44 ">
              <div className="w-full font-bold text-xl text-gray-900 px-6 mb-7 mt-3">
                👋 {t("allPortfolio_four")}
              </div>
              <p className="text-gray-800 font-serif md:text-xl text-base px-6 mb-4">
                {t("allPortfolio_five")}
              </p>
              <div className="mx-4">
                <Link
                  className="bg-btn lg:px-4 px-2 py-2 mb-4 mx-auto inline-block 
                           lg:text-xl md:text-md text-sm font-semibold no-underline duration-500 rounded-md mx-12 text-white"
                  to="../Profile.pdf"
                  target="_blank"
                  download
                >
                  {t("allPortfolio_six")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" my-20 text-center">
        <h1 className="md:text-4xl text-2xl uppercase  sm:text-3xl font-bold ">
          {t("allPortfolio_seven")}
        </h1>
        <p className="text-gray-700 mt-2 text-sm">
          - {t("allPortfolio_eight")} -
        </p>
      </div>
      <div className="container grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-1 mt-16 pb-16">
        {portfolios.map((portfolio) => (
          <SinglePortfolio
            key={portfolio._id}
            portfolio={portfolio}
          ></SinglePortfolio>
        ))}
      </div>
    </div>
  );
};

export default ProtfolioBanner2;

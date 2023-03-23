import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";

import { NavLink } from "react-router-dom";
import "../../App.css";
import useClients from "../../shared/useClients";

const AllclientDetails = () => {
  const { clientId } = useParams();
  const [clients] = useClients();
  // console.log(clients);
  const matchClient = clients.filter((client) => client._id === clientId);
  // console.log(matchClient);
  // console.log("clientId", clientId);
  const { t } = useTranslation();
  return (
    <div>
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
            {t("Navigation_Clients")}
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/allclients"
            className="flex justify-center  items-center     mx-auto"
          >
            <button class="inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-black text-white text-sm font-bold rounded-md">
              <div className="px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
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
      {/* {!IsArabic&&  <div className='container flex justify-start  items-center my-5'>
       <NavLink to='/allclients' className='flex justify-center mx-14 items-center bg-gray-400 no-underline text-black font-semibold px-2 hover:bg-gray-600 duration-500 hover:text-white '> 
            <div className='mx-2 text-white duration-500 text-4xl no-underline'> 
            <span >{arrowIcon}</span></div>
            <span className=' text-md md:text-xl text-white mb-1'>Back</span>
        </NavLink>
        </div>} */}

      {matchClient.map((singleClient, i) => (
        <SingleDetails key={i} singleClient={singleClient}></SingleDetails>
      ))}
    </div>
  );
};
const SingleDetails = ({ singleClient }) => {
  const { img2, img3, img4 } = singleClient;
  return (
    <>
      <div className="flex justify-center items-center ">
        {!img2 ? (
          <div className="text-5xl font-extrabold uppercase">
            there is no images avalible
          </div>
        ) : (
          <div className="carousel-main ">
            {img2 && img3 && img4 && (
              <div
                id="carouselExampleDark"
                className="carousel carousel-dark md:w-8/12 w-9/12 mx-auto slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div
                    className="carousel-item active"
                    data-bs-interval="10000"
                  >
                    <img src={img2} className="d-block  h-auto" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      {/* <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p> */}
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="1000">
                    <img src={img3} className="d-block  h-auto" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      {/* <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p> */}
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={img4} className="d-block  h-auto" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      {/* <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p> */}
                    </div>
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
            )}
            {!img4 && img2 && img3 && (
              <div
                id="carouselExampleDark"
                className="carousel carousel-dark md:w-8/12 w-9/12 h-auto mx-auto slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div
                    className="carousel-item active"
                    data-bs-interval="10000"
                  >
                    <img src={img2} className="d-block  h-auto" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      {/* <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p> */}
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="1000">
                    <img src={img3} className="d-block  h-auto" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      {/* <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p> */}
                    </div>
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
            )}

            {!img3 && !img4 && img2 && (
              <div className="">
                <img
                  className=" mx-auto  md:my-16 my-3 w-full md:w-11/12 border-3 border-purple-900 h-auto"
                  src={img2}
                  alt=""
                />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};
export default AllclientDetails;

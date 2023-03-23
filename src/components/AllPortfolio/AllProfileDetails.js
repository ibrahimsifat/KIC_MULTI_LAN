import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import "../../App.css";
import usePortfolio from "../../shared/usePortfolio";
const AllProfileDetails = () => {
  const { portfoliotId } = useParams();
  const [clients] = usePortfolio();
  const matchClient = clients.filter((client) => client._id === portfoliotId);

  return (
    <div>
      {matchClient.map((singleClient) => (
        <SingleDetails
          key={singleClient._id}
          singleClient={singleClient}
        ></SingleDetails>
      ))}
    </div>
  );
};
const SingleDetails = ({ singleClient }) => {
  const { t } = useTranslation();
  const { img } = singleClient;
  return (
    <>
      <div className="container mx-auto mt-8 px-3 md:px-6 rounded-lg ">
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
              to="/allportfolio"
            >
              {t("Navigation_Portfolio")}
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/allportfolio"
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

        <img
          className="md:my-16 my-3 w-full md:w-10/12 mx-auto border-3 border-purple-900"
          src={img}
          alt={img}
        />
      </div>
    </>
  );
};

// const CloseSVG=()=>{
//     return(
//         <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" className="h-6 w-6 mr-2" fill="red" viewBox="0 0 1792 1792">
//         <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
//         </path>
//     </svg>
//     )
// }

// const RightSVG=()=>{
//     return(
//  <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
//                                 <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
//                                 </path>
//                             </svg>
//     )
// }
export default AllProfileDetails;

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../App.css";
// import Jump from 'react-reveal/Jump';

// const cart = <FontAwesomeIcon icon={faShoppingCart} />
import Zoom from "react-reveal/Zoom";
const search = <FontAwesomeIcon icon={faSearch} />;
const SingleClients = ({ client, handleClientDetails }) => {
  const { img, _id } = client;
  // console.log("id", _id);
  return (
    <div className=" mx-auto  img-hover duration-700  ">
      <div className=" transition duration-300 ease-in-out  cursor-pointer group">
        <Zoom>
          <div
            className="overflow-hidden relative  rounded-md item-zoom shadow-md border-2 border-gray-100"
            onClick={() => handleClientDetails(_id)}
          >
            <img
              className="w-full transition duration-700  "
              src={img}
              alt=""
            />

            <div className="absolute bottom-0  h-full w-full flex justify-center items-center from-gray-500 bg-gray-900 group-hover:bg-opacity-75   transition duration-500 ease-in-out opacity-0 group-hover:opacity-100 ">
              <div className="flex flex-col  justify-center items-center ">
                {/* <h2 className=' text-2xl font-semibold text-white'></h2>
                <p className='text-white text-md mt-1'></p> */}
                <i
                  className=" text-white  font-bold uppercase text-2xl hover:text-3xl px-4 py-2 rounded  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-500"
                  type="button"
                >
                  <i className="fas fa-search ">{search}</i>
                </i>
              </div>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default SingleClients;

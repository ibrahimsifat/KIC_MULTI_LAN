import React from "react";

const ScrollTop = ({ scrollToTop }) => {
  return (
    <div>
      <button
        onClick={scrollToTop}
        id="topButton"
        className="fixed z-10 hover:bg-purple-800 hover:text-red-700 duration-300  md:p-3 sm:p-2 px-1 py-2 bg-white bg-opacity-75 rounded shadow-md bottom-10 right-4 "
      >
        <svg
          className="md:w-8 md:h-8 w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default ScrollTop;

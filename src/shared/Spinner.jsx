import React from "react";
import SpinnerImage from "../img/spinner.png";
const Spinner = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-none ">
      {/* <h1>Loading.....</h1> */}
      <img className="animate-ping  md:w-52 w-24 " src={SpinnerImage} alt="" />
    </div>
  );
};

export default Spinner;

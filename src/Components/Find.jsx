import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { PiInstagramLogoBold } from "react-icons/pi";
import PictureSide from "./PictureSide";

const Find = () => {
  return (
    <div>
      <h2 className="font-semibold text-xl mt-5 text-start">Find Us On</h2>
      <div className="join flex flex-col mt-5 border-2 gap-1   join-vertical">
        <button className="btn join-item p-3   bg-gray-100 flex  items-center gap-3 justify-start">
          <FaSquareFacebook />
          Facebook
        </button>
        <button className="btn join-item p-3  bg-gray-100 flex  items-center gap-3">
          <FaTwitterSquare />
          Twitter
        </button>
        <button className="btn join-item p-3  bg-gray-100 flex  items-center gap-3">
          <PiInstagramLogoBold />
          Intragram
        </button>
      </div>
      <PictureSide></PictureSide>
    </div>
  );
};

export default Find;

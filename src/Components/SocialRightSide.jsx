import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Find from "./Find";

const SocialRightSide = () => {
  return (
    <div className="">
      <h2 className="text-xl font-semibold mb-5 text-start ">Login With</h2>
      <div className="w-full space-y-3">
        <button className="btn bg-gray-100 p-4 flex gap-3 items-center rounded-xl">
          <FcGoogle />
          Login With Google
        </button>
        <button className="btn bg-gray-100 p-4rounded-xl flex gap-3 items-center p-4 rounded-xl">
          <FaGithub />
          Login With Github
        </button>
      </div>

      <Find></Find>
      
    </div>
  );
};

export default SocialRightSide;

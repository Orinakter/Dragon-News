import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex space-x-4 items-center justify-center p-5 bg-gray-100">
      <div className="">
        <p className="bg-[#D72050] text-base-200 p-3">Latest</p>
      </div>
      <Marquee pauseOnHover ={true} className="space-x-8">
        <Link to="/">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora,
          dignissimos minus. Quos ullam, reprehenderit inventore possimus nam
          itaque laboriosam odio ipsa, officia exercitationem, voluptates
          dignissimos?
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;

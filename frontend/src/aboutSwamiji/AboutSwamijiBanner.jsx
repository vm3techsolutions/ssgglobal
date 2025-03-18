import React from "react";
import swamijibanner from "../assets/AboutSwamijiBanner2.jpg";

const Banner = () => {
  return (
    <div
      className="relative bg-cover bg-center Banner flex items-center md:h-[490px] h-[170px] "
      style={{
        backgroundImage: `url(${swamijibanner})`,
      }}
    >
      {/* Content */}
      {/* <div className="relative container mx-auto py-4   text-white flex">
        <div className="max-w-full  ">
          <h1 className="fw-bold text-4xl ml-36 md:text-5xl ">
            Explore Divine Knowledge and Spiritual Insights{" "}
          </h1>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;

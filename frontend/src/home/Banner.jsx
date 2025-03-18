import React from 'react';
import bannerImage from "../assets/HomeBanner2.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="relative bg-cover bg-center Banner flex items-center md:h-[490px] h-[180px]"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      {/* Content */}
      <div className="relative container mx-auto px-6 text-gray-700">
        {/* Hide text on mobile */}
        <h1 className="hidden sm:block fw-bold text-xs sm:text-sm md:text-5xl max-w-sm md:-ml-10">
          Experience Divine Blessings with the Sacred Ashtalakshmi Puja
        </h1>

        <Link to="/about-puja" className="md:-ml-10  ">
          <button
            onClick={() => window.scrollTo(0, 0)}
            className="md:mt-4 primary-btn font-bold md:py-2 md:px-6 px-1 transition"
          >
            Know More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;

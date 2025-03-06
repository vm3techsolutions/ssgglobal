import React from 'react'
import bannerImage from "../assets/HomeBanner2.png";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <>
            <div
      className="relative bg-cover bg-center Banner flex items-center"
      style={{
        backgroundImage: `url(${bannerImage})`, // Replace with your image path
      }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

      {/* Content */}
      <div className="relative container mx-auto px-6 text-gray-700 ">
        <h1 className="fw-bold text-4xl md:text-5xl max-w-sm -ml-10">
        Experience Divine Blessings with the Sacred Ashtalakshmi Puja
        </h1>
        
        <Link to="/about-puja" className='-ml-10'>
        <button onClick={() => window.scrollTo(0, 0)} className="mt-4 primary-btn font-bold py-2 px-6  transition">
          Know More
        </button>
        </Link>
      </div>
    </div>
        </>
    )
}

export default Banner;
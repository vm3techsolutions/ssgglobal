import React from 'react'
import bannerImage from "../assets/ContactBanner 2.png";

const Banner = () => {
    return (
        <>
            <div
      className="relative Banner flex items-start"
      style={{
        backgroundImage: `url(${bannerImage})`, 
      }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

      {/* Content */}
      <div className="relative container mx-auto py-4  text-gray-700 flex">
                <div className="max-w-full  ">
                    <h1 className="text-center md:ml-44 fw-bold text-4xl md:text-5xl">
                    We’re here to assist you with all your spiritual needs. Reach out to us anytime!</h1>
                </div>
            </div>
    </div>
        </>
    )
}

export default Banner;
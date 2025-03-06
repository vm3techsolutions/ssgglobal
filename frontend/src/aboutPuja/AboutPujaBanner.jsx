import React from 'react';
import bannerImage from "../assets/AshtalaxmiBanner2.jpg";

const Banner = () => {
    return (
        <div
            className=" relative Banner flex items-center"
            style={{
                backgroundImage: `url(${bannerImage})`,
            }}
        >
            {/* Yellow overlay */}
            <div className="absolute inset-0 bg-purple-800 opacity-40 "></div>

            {/* Content */}
            <div className="absolute container mx-auto px-6 text-white flex justify-end  ">
                <div className="max-w-md md:mr-40">
                    <h1 className="fw-bold text-4xl md:text-5xl max-w-md ">
                        Discover the sacred ritual that blesses every aspect of your life with the divine grace of the eight forms of Goddess Lakshmi!
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;

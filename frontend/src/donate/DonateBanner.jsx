import React from 'react';
import bannerImage from "../assets/DonateBanner3.png";

const Banner = () => {
    return (
        <div
            className="relative Banner flex items-center "
            style={{
                backgroundImage: `url(${bannerImage})`,
            }}
        >
            {/* Yellow overlay */}
            <div className="absolute inset-0 bg-purple-800 opacity-40"></div>

            {/* Content */}
            <div className="relative container mx-auto px-6 text-white flex justify-center">
                <div className="max-w-md">
                    <h1 className="fw-bold text-4xl md:text-5xl DonateText max-w-md ">Spread Prosperity Donate for a Divine Purpose ! </h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;

import React from 'react';
import bannerImage from "../assets/AboutUsBanner2.jpg";

const Banner = () => {
    return (
        <div
            className="relative Banner flex items-center"
            style={{
                backgroundImage: `url(${bannerImage})`,
            }}
        >
            {/* Pink overlay */}
            <div className="absolute inset-0 bg-pink-500 opacity-25"></div>

            {/* Content */}
            <div className="relative container mx-auto px-6 text-white flex  justify-end">
                <div className="max-w-md">
                    <h1 className="fw-bold text-4xl md:text-5xl max-w-md ">
                        At SSSSG Global, we bring you closer to the divine through authentic spiritual practices.
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;

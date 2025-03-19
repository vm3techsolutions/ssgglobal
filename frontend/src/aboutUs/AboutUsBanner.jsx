import React from 'react';
import bannerImage from "../assets/AboutUsBanner2.jpg";

const Banner = () => {
    return (
        <div
            className="relative bg-cover bg-center Banner flex items-center md:h-[490px] h-[180px] sm:h-[300px]"
            style={{
                backgroundImage: `url(${bannerImage})`,
            }}
        >
            {/* Pink overlay */}
            <div className="absolute inset-0 bg-pink-500 opacity-25"></div>

            {/* Content */}
            <div className="relative container mx-auto px-6 text-white flex  justify-end">
                <div className="max-w-md">
                <h1 className="heading ">
    At SSSSG Global, we bring you closer to the divine through authentic spiritual practices.
</h1>

                </div>
            </div>
        </div>
    );
};

export default Banner;

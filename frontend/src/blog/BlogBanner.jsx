import React from 'react';
import blogbanner from "../assets/BlogBanner 2.jpg";

const Banner = () => {
    return (
        <div
            className="relative bg-cover bg-center Banner flex items-start md:h-[490px] h-[180px]"
            style={{
                backgroundImage: `url(${blogbanner})`,
            }}
        >
            {/* Content */}
            <div className="relative container mx-auto py-4  text-white flex">
                <div className="max-w-full  ">
                    <h1 className="hidden sm:block text-center md:ml-44 fw-bold text-4xl md:text-5xl  ">
                    Explore Divine Knowledge and Spiritual Insights                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;

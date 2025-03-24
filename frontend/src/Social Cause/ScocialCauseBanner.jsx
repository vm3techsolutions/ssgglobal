import React from 'react';
import blogbanner from "../assets/SocialCauseBanner.png";

const Banner = () => {
    return (
        <div
            className="relative bg-cover bg-center Banner flex items-start md:h-[490px] h-[150px]"
            style={{
                backgroundImage: `url(${blogbanner})`,
            }}
        >
            {/* Content */}
            <div className="relative container mx-auto py-4  text-black grid">
                <div className="max-w-full  ">
                    <h1 className="SocialHeading  ">
                    Serving Humanity, Spreading Light</h1>
                </div>

                <div className="hidden md:block mt-14 ml-72">
          <a
            href="/donate"
            className="bg-[#800080] text-white px-5 py-3 rounded-full font-semibold hover:bg-yellow-600 transition "
          >
            Donate
          </a>
        </div>
                
            </div>

            
        </div>
    );
};

export default Banner;

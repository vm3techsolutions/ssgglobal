import React from "react";
import headingIcon from "../assets/icon.png";

const MissionVision = () => {
  return (
    <section className="bg-[#800080] text-white py-10 px-6 mt-5 md:px-16  lg:px-24 text-center">
      <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2">
                <img src={headingIcon} className="h-12" /> {/* Left Icon */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl fw-bold primaryColortext-white">Our Mission & Vision</h2>
                <img src={headingIcon} className="h-12" /> {/* Right Icon */}
              </div>
            </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Mission</h3>
        <p className="mt-2  max-w-2xl mx-auto text-gray-100 text-sm sm:text-base md:text-lg">
          To empower individuals and families with the divine blessings of the Ashtalakshmi Puja, fostering prosperity, harmony, and spiritual well-being.
        </p>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Vision</h3>
        <p className="mt-2  max-w-2xl mx-auto text-gray-100 text-sm sm:text-base md:text-lg">
          To be a trusted global platform for authentic Vedic rituals, bridging the gap between tradition and modernity.
        </p>
      </div>
    </section>
  );
};

export default MissionVision;

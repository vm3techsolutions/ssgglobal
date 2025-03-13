import React from "react";
import headingIcon from "../assets/icon.png"; 
export default function WhySSSSGGlobal() {
    return (
      <div className="max-w-3xl mx-auto py-16 pb-10 bg-white ">
          <div className="text-center mb-8">
                      <div className="flex items-center justify-center gap-2">
                        <img src={headingIcon} className="h-12" /> {/* Left Icon */}
                        <h2 className="text-2xl sm:text-3xl md:text-4xl fw-bold primaryColor text-center">Why SSSSG Global?</h2>
                        <img src={headingIcon} className="h-12" /> {/* Right Icon */}
                      </div>
                    </div>
       
        <ul className="mt-4 space-y-4 text-gray-700 pr-5 md:pr-0">
          <li className="flex items-start gap-2">
            <span className="text-[#800080] text-lg">&#8226;</span>
            <span className="text-gray-600 text-sm sm:text-base md:text-lg"><strong className="text-[#800080] text-xl">Authenticity:</strong> Our rituals are performed by experienced and certified priests with strict adherence to Vedic scriptures.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#800080] text-lg">&#8226;</span>
            <span className="text-gray-600 text-sm sm:text-base md:text-lg"><strong className="text-[#800080] text-xl">Personalized Service:</strong> We customize every puja to meet your specific spiritual needs and intentions.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#800080] text-lg">&#8226;</span>
            <span className="text-gray-600 text-sm sm:text-base md:text-lg"><strong className="text-[#800080] text-xl">Convenience:</strong> Perform pujas at your preferred location, whether at home, in a temple, or online.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#800080] text-lg">&#8226;</span>
            <span className="text-gray-600 text-sm sm:text-base md:text-lg"><strong className="text-[#800080] text-xl">Trusted by Many:</strong> With years of experience and countless satisfied devotees, we are a name you can trust.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#800080] text-lg">&#8226;</span>
            <span className="text-gray-600 text-sm sm:text-base md:text-lg"><strong className="text-[#800080] text-xl">Holistic Experience:</strong> Beyond rituals, we offer spiritual guidance, mantras, and blessings to enrich your life.</span>
          </li>
        </ul>
      </div>
    );
  }
  
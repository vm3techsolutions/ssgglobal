import React, { useState } from "react";
import headingIcon from "../assets/icon.png";

import img3 from "../assets/UpcomingBanner.png";
import video1 from "../assets/UpcomingVideo.mp4";

export default function SeeOurProducts() {
  const [activeLink, setActiveLink] = useState("Upcoming Events");

  const links = [
    // { name: "Past Events", image: img1, video: video1 },
    // { name: "Ongoing Events", image: img2, video: video2 },
    { name: "Upcoming Events", image: img3, video: video1 },
  ];

  const activeEvent = links.find((link) => link.name === activeLink);

  return (
    <div className="min-h-screen flex flex-col items-center pt-20">
      {/* Heading with Icons */}
      <div className="flex items-center justify-center gap-4">
        <img src={headingIcon} className="h-12" alt="Icon" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl fw-bold primaryColor">
          Swamiji Events
        </h2>
        <img src={headingIcon} className="h-12" alt="Icon" />
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-wrap justify-center items-center container mx-auto py-12 px-4 gap-4">
        {links.map((link) => (
          <button
            key={link.name}
            onClick={() => setActiveLink(link.name)}
            className={`px-4 py-2 text-lg sm:text-lg md:text-xl font-bold rounded-lg border-2 transition ${
              activeLink === link.name
                ? "bg-[#800080] text-white border-[#800080]"
                : "text-black border-[#800080]"
            }`}
          >
            {link.name}
          </button>
        ))}
      </nav>

      {/* Content Section with Image on Left and Video on Right */}
      {activeEvent && (
        <div className="flex flex-col md:flex-row justify-center items-center gap-20 md:gap-32 px-4">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={activeEvent.image}
              alt={activeLink}
              className="w-full h-full max-w-md object-cover rounded-lg shadow-lg"
            />
          </div>
          
          {/* Right Side - Video */}
          <div className="w-full  md:w-1/2 flex justify-center">
            <video
              controls
              autoPlay
              muted
              loop
              className="w-full h-full max-w-md rounded-lg shadow-lg"
            >
              <source src={activeEvent.video} type="video/mp4" />
              
            </video>
          </div>
        </div>
      )}
    </div>
  );
}
import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/WhatsApp Image 2025-01-21 at 11.07.58.jpeg";
import img2 from "../assets/about3.png";
import img3 from "../assets/temple.jpg";
import img4 from "../assets/thumbnail_large.png";

export default function ImageHoverEffect() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex w-full h-screen overflow-hidden">
      {[
        { src: img1, color: "bg-red-500/50", text: "Swamiji", link: "/about-swamiji" },
        { src: img2, color: "bg-blue-500/50", text: "Ashtalakshmi Puja", link: "/about" },
        { src: img3, color: "bg-green-500/50", text: "Temple", link: "/about-puja" },
        { src: img4, color: "bg-yellow-500/50", text: "Image 4", link: "/blog" },
      ].map((item, index) => (
        <div
          key={index}
          className="group relative h-full flex-1 transition-all duration-500 hover:flex-[2]"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Image with slight blur on hover */}
          <img
            src={item.src}
            alt={`Image ${index + 1}`}
            className={`h-full w-full object-cover transition-all duration-500 ${
              hoveredIndex === index ? "scale-105 blur-sm" : "scale-100 blur-0"
            }`}
          />

          {/* Overlay stays visible */}
          <div
            className={`absolute inset-0 ${item.color} flex flex-col justify-center items-center transition-all duration-500 ${
              hoveredIndex === index ? "opacity-100" : "opacity-80"
            }`}
          >
            <h2 className="text-white text-2xl font-bold">{item.text}</h2>
            <Link to={item.link}>
              <button
                onClick={() => window.scrollTo(0, 0)}
                className="mt-4 bg-white text-black font-bold py-2 px-6 rounded-md shadow-lg hover:bg-gray-200 transition duration-300"
              >
                Know More
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

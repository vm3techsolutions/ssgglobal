import React from 'react';
import { FaLinkedin } from "react-icons/fa6";
import {FaYoutubeSquare} from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import  { useEffect } from "react";

const Header = () => {

   useEffect(() => {
            AOS.init({ duration: 1000 });
          }, []);

  return (
    <header className="bg-[#800080] text-white py-2  md:px-6">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        {/* Left - Contact */}
        <div className="flex flex-wrap items-center md:space-x-4 -ml-3 sm:mb-0">
          <a href="tel:+91 9923607845" className="text-white hover:text-gray-400">
            Volunteer | Call Us: +91 9923607845
          </a>
        </div>

        {/* Right - Social Media Icons */}
        <div className="flex space-x-3">
          <a
           data-aos="flip-up"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaLinkedin className="text-white text-xl hover:text-blue-600" />
          </a>
          <a
           data-aos="flip-up"
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaYoutubeSquare className="text-white text-xl hover:text-red-600" />
          </a>
          <a
           data-aos="flip-up"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaInstagramSquare className="text-white text-xl hover:text-pink-600" />
          </a>
          <a
           data-aos="flip-up"
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaFacebook className="text-white text-xl hover:text-blue-600" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

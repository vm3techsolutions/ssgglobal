import React from "react";
import logo from '../assets/Swami LOgo.png';
import { Link } from 'react-router-dom';
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";
import {FaYoutubeSquare} from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import  { useEffect } from "react";
import logo1 from '../assets/SSG-Logo.mp4';


const Footer = () => {

   useEffect(() => {
              AOS.init({ duration: 1500 });
            }, []);


  return (
    <div className="mt-15">
      <footer className="bg-[#800080] text-white py-6 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-16 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Left Section - Logo */}
          <div className="text-center lg:text-left mt-3">
             {/* Logo */}
                    <Link to="/" className="flex flex-rows items-center space-x-2">
              <video src={logo1} alt="Logo1" className="h-44 w-auto" autoPlay loop muted>
                
              </video>
            </Link>
            
          </div>  

          {/* Left Section - Text */}
          <div className="text-start mr-9 lg:text-left mt-2">
            <p className="text-gray-100 text-sm sm:text-base md:text-lg">
            Our expertise lies in performing the sacred Ashtalakshmi Puja, a powerful ritual that invokes the blessings of the eight forms of Goddess Lakshmi.  
            </p>
          </div>

          {/* Quick Links */}
          <div  className="md:ml-5">
            <h3 className="text-lg font-semibold mb-2 mt-2 ">Quick Links</h3>
            <ul className="space-y-1 text-start -ml-6">
            <li><Link to="/" onClick={() => window.scrollTo(0, 0)}  className="text-white hover:text-blue-900 transition-colors duration-300">Home</Link></li>
<li><Link to="/about" onClick={() => window.scrollTo(0, 0)}  className="text-white hover:text-blue-900 transition-colors duration-300">About Us</Link></li>
<li><Link to="/about-puja" onClick={() => window.scrollTo(0, 0)}  className="text-white hover:text-blue-900 transition-colors duration-300">About Puja</Link></li>
<li><Link to="/blog" onClick={() => window.scrollTo(0, 0)}  className="text-white hover:text-blue-900 transition-colors duration-300">Blog</Link></li>
<li><Link to="/gallery" onClick={() => window.scrollTo(0, 0)}  className="text-white hover:text-blue-900 transition-colors duration-300">Gallery</Link></li>
<li><Link to="/contact" onClick={() => window.scrollTo(0, 0)}  className="text-white hover:text-blue-900 transition-colors duration-300">Contact</Link></li>
<li><Link to="/donate" onClick={() => window.scrollTo(0, 0)}  className="text-white hover:text-blue-900 transition-colors duration-300">Donate</Link></li>

            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-1 mt-2 ">Contact Us</h3>
            
            <p className="flex items-center space-x-2"><span><IoCallOutline /> </span> <a href="tel:+91 9923607845" className="text-white hover:text-gray-400">+91 9923607845 <br/> +91 9822965257 </a></p>
            <p className="flex items-center space-x-2"><span><CiMail /></span> <a href="mailto:subramhnyamgiriswami@gmail.com" className="text-white hover:text-gray-400">subramhnyamgiriswami@gmail.com</a>
            </p>

            <p className="flex items-center space-x-2"><span><CiLocationOn /></span> <span>Kasili, Kopargaon, Ahmednagar</span></p>
            
            {/* Social Media Icons */}
            <div  className="flex justify-start space-x-4 mt-2">
              <a href="#" className="text-lg hover:text-gray-300 transition-colors duration-300"><FaLinkedin className="text-white mt-3 text-2xl hover:text-blue-600"/></a>
              <a href="#" className="text-lg hover:text-gray-300 transition-colors duration-300"><FaYoutubeSquare className="text-white mt-3 text-2xl hover:text-blue-600"/></a>
              <a href="#" className="text-lg hover:text-gray-300 transition-colors duration-300"><FaInstagramSquare className="text-white mt-3 text-2xl hover:text-blue-600"/></a>
              <a href="#" className="text-lg hover:text-gray-300 transition-colors duration-300"><FaFacebook className="text-white mt-3 text-2xl hover:text-blue-600"/></a>
            </div>
          </div>
        </div>
      </footer>
      {/* Bottom Section */}
      <div className="bg-yellow-500 text-center text-lg py-1 text-black">
        Designed & Developed by: <strong>VM3 Tech Solutions LLP</strong>
      </div>
    </div>
  );
};

export default Footer;

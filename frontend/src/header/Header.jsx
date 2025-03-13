import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/SSG-Logo.mp4";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 w-full z-50">
      <div className="container mx-auto px-6 lg:px-16 flex justify-between items-center py-">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 md:-ml-7">
          <video
            src={logo}
            alt="Logo"
            className="h-20 w-auto"
            autoPlay
            loop
            muted
          ></video>
        </Link>

        {/* Desktop Menu */}
        <ul className=" hidden md:flex space-x-5 text-xl mt-3 mr-5 font-semibold ">
          <li>
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              className="  transition "
            ></Link>
          </li>
          <li>
            <Link
              to="/about-swamiji"
              onClick={() => window.scrollTo(0, 0)}
              className="transition headercolor "
            >
              About Swamiji
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => window.scrollTo(0, 0)}
              className="transition headercolor"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/about-puja"
              onClick={() => window.scrollTo(0, 0)}
              className="transition headercolor "
            >
              Ashtalakshmi Puja
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              onClick={() => window.scrollTo(0, 0)}
              className="transition headercolor"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              onClick={() => window.scrollTo(0, 0)}
              className="transition headercolor"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => window.scrollTo(0, 0)}
              className="transition headercolor"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Donation Button */}
      <div className="flex justify-around">
      <div className="hidden md:block mr-2">
          <a
            href="/donate"
            className="bg-[#800080] text-white px-3 py-2 rounded-full font-semibold hover:bg-yellow-600 transition "
          >
            Donate
          </a>
        </div>

        {/* CTA Button (Hidden on Mobile) */}
        <div className="hidden md:block ">
          <a
            href="#ReserveForm"
            className="bg-[#800080] text-white px-3 py-2 rounded-full font-semibold hover:bg-yellow-600 transition "
          >
            Reserve Your Puja
          </a>
        </div>
      </div>
        

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X size={28} className="text-purple-800" />
          ) : (
            <Menu size={28} className="text-purple-800" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-[#800080] text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition -transform duration-300 ease-in-out`}
      >
        <button
          className="absolute top-5 right-6"
          onClick={() => setIsOpen(false)}
        >
          <X size={32} />
        </button>
        <div className="flex flex-col items-center justify-center h-full space-y-6 text-lg font-medium ">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-white"
          ></Link>
          <Link
            to="/about-swamiji"
            onClick={() => setIsOpen(false)}
            className="text-white"
          >
            About Swamiji
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="text-white"
          >
            About Us
          </Link>
          <Link
            to="/about-puja"
            onClick={() => setIsOpen(false)}
            className="text-white"
          >
            Ashtalakshmi Puja
          </Link>
          <Link
            to="/blog"
            onClick={() => setIsOpen(false)}
            className="text-white"
          >
            Blog
          </Link>
          <Link
            to="/gallery"
            onClick={() => setIsOpen(false)}
            className="text-white"
          >
            Gallery
          </Link>
         
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="text-white"
          >
            Contact Us
          </Link>

          <Link
            to="/donate"
            onClick={() => setIsOpen(false)}
            className="text-white"
          >
            Donate
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

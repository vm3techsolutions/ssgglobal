import React from 'react';
import headingIcon from "../assets/icon.png"; // Import an icon (you can change it)
import aboutImg3 from "../assets/Our1.png";
import aboutImg2 from "../assets/Our2.png";
import { Container, Image, ListGroup, Button   } from "react-bootstrap";


const Puja = () => {
  return (
    <>
   
      <section className="container mx-auto px-6 py-12 ">
        {/* Heading with Icons */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center md:gap-4 sm:gap-1">
            <img src={headingIcon} className="h-12" /> {/* Left Icon */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl fw-bold primaryColor">Our Story</h2>
            <img src={headingIcon} className="h-12" /> {/* Right Icon */}
          </div>
        </div>

        {/* New Section with Image and Content */}
        <Container >
        <div className="d-flex flex-column flex-md-row align-items-center gap-4">
          {/* Left Column - Image */}
          <div className="w-100 w-md-50 grid grid-cols-2 rounded relative">
  <Image
    src={aboutImg3}
    alt="Puja"
    className="w-96 h-[30vh] lg:h-[48vh] rounded mb-44 transition-transform duration-300 hover:scale-110"
  />
  <Image
    src={aboutImg2}
    alt="Puja"
    className="absolute w-52 h-[30vh] lg:h-[48vh] lg:w-70 rounded mt-48 lg:ml-44 ml-36 transition-transform duration-300 hover:scale-110"
  />
</div>
  
          {/* Right Column - Content */}
          <div className="  col-12 col-md-6 md:mt-4 mt-md-0">
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            Founded with the vision of preserving ancient Vedic traditions, SSSSG Global is dedicated to spreading the light of spirituality and devotion. Our expertise lies in performing the sacred Ashtalakshmi Puja, a powerful ritual that invokes the blessings of the eight forms of Goddess Lakshmi.
            </p>
            
           <p className="text-gray-600 text-sm sm:text-base md:text-lg">With a deep understanding of scriptures and rituals, our team of experienced priests ensures that every puja is conducted with authenticity, precision, and utmost devotion. Whether at home, temple, or online, we strive to make spiritual practices accessible and meaningful for everyone.</p>

           <p className="text-gray-600 text-sm sm:text-base md:text-lg">Founded with the vision of preserving ancient Vedic traditions, SSSSG Global is dedicated to spreading the light of spirituality and devotion. Our expertise lies in performing the sacred Ashtalakshmi Puja, a powerful ritual that invokes the blessings of the eight forms of Goddess Lakshmi.</p>
            
  
          </div>
        </div>
      </Container>

      </section>
    </>
  );
};

export default Puja;

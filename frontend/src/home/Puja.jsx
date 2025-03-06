import React from 'react';
import headingIcon from "../assets/icon.png"; // Import an icon (you can change it)
import aboutImg3 from "../assets/about5.png";
import { Container, Image, ListGroup, Button   } from "react-bootstrap";
import { MdKeyboardDoubleArrowRight } from "react-icons/md"; 

const Puja = () => {
  return (
    <>
      <section className="container mx-auto px-6 py-10">
        {/* Heading with Icons */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4">
            <img src={headingIcon} className="h-12" /> {/* Left Icon */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl fw-bold primaryColor">The Ashtalakshmi Puja</h2>
            <img src={headingIcon} className="h-12" /> {/* Right Icon */}
          </div>
        </div>

        {/* New Section with Image and Content */}
        <Container>
        <div className="d-flex flex-column flex-md-row align-items-center gap-4">
          {/* Left Column - Image */}
          <div className="w-100 md:w-50">
            <Image src={aboutImg3} alt="Puja" className=" rounded shadow-md" />
          </div>
  
          {/* Right Column - Content */}
          <div className="w-100 w-md-50">
            <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-3">
              The Ashtalakshmi Puja is a powerful Vedic ritual that invokes the blessings of the eight forms of Goddess Lakshmi, the deity of wealth, prosperity, and well-being. Each form represents a unique aspect of life, such as knowledge, strength, abundance, and victory. By performing this puja, devotees invite holistic blessings into their lives.
            </p>
            
            <Container>
            <p className="text-2xl -ml-3 primaryColor font-bold"> Eight Forms of Lakshmi :</p>
      <ListGroup as="ol" >
        <ListGroup.Item as="li" className="border-0">
          <strong className='text-xl primaryColor'>1  - Adi Lakshmi</strong> <span className='text-gray-600 text-sm sm:text-base md:text-lg'> – The primal energy, representing eternal wealth and strength.</span>
        </ListGroup.Item>
        <ListGroup.Item as="li" className="border-0">
          <strong className='text-xl primaryColor'>2 - Dhana Lakshmi</strong> <span className='text-gray-600 text-sm sm:text-base md:text-lg'> – The goddess of material wealth and financial stability.</span>
        </ListGroup.Item>
        <ListGroup.Item as="li" className="border-0">
          <strong className='text-xl primaryColor'>3 - Dhanya Lakshmi</strong> <span className='text-gray-600 text-sm sm:text-base md:text-lg'> – The harbinger of agricultural prosperity and nourishment.</span>
        </ListGroup.Item>
        <ListGroup.Item as="li" className="border-0">
          <strong className='text-xl primaryColor'>4 - Gaja Lakshmi</strong> <span className='text-gray-600 text-sm sm:text-base md:text-lg'> – The symbol of royalty, power, and grandeur.</span>
        </ListGroup.Item>
      </ListGroup>
    </Container>


      <a href='/about-puja'>      
    <Button 
        variant="link" 
        className="mt-auto flex d-flex  no-underline"
        style={{ color: 'orange', textDecoration: 'none' }}
      >
        Read More <MdKeyboardDoubleArrowRight className="ml-2 text-[#800080] text-2xl" />
      </Button></a>

      
          </div>
        </div>
      </Container>

      </section>
    </>
  );
};

export default Puja;

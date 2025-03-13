import React from 'react'
import headingIcon from "../assets/icon.png"; 
import { Container, Row, Col, Button } from "react-bootstrap";

export default function WhyPerform() {
  return (
    <Container fluid="md" className='py-12 container'>
      <div className="text-center mb-4 ">
        <div className="d-flex align-items-center justify-content-center gap-4">
          <img src={headingIcon} className="h-12" alt="Icon Left" /> {/* Left Icon */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl fw-bold primaryColor">
            Why Perform the Ashtalakshmi Puja?
          </h2>
          <img src={headingIcon} className="h-12" alt="Icon Right" /> {/* Right Icon */}
        </div>
      </div>

      {/* Benefits List */}
      <Row className="justify-content-center ">
        <Col md={8} sm={10} xs={12}>
          <ul className="text-start mx-auto list-disc  text-gray-600 text-sm sm:text-base md:text-lg" style={{ maxWidth: "600px", lineHeight: "1.8" }}>
            <li className='md:ml-6 '>Enhances spiritual growth and inner peace.</li>
            <li className='md:ml-6 '>Invokes blessings for family harmony and health.</li>
            <li className='md:ml-6 '>Ensures success in personal and professional endeavors.</li>
            <li className='md:ml-6 '>Brings peace, positivity, and divine energy into your life.</li>
            <li className='md:ml-6 '>Removes financial obstacles and promotes prosperity.</li>
          </ul>
        </Col>
      </Row>

      
    </Container>
  );
}

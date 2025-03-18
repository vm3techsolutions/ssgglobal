import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import headingIcon from "../assets/icon.png"; 
import AOS from "aos";
import "aos/dist/aos.css";
import  { useEffect } from "react";
import icon1 from "../assets/ph_flower-lotus-light.png";
import icon2 from "../assets/ph_coins-light.png"
import icon3 from "../assets/fluent_food-grains-20-regular.png"
import icon4 from "../assets/emojione-monotone_elephant.png"
import icon5 from "../assets/Group 25.png"
import icon6 from "../assets/Group 30.png"
import icon7 from "../assets/fluent-emoji-high-contrast_open-book.png"
import icon8 from "../assets/et_flag.png"

const BlessingsGrid = () => {

   useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);

  const blessings = [
    {
      img: icon1, 
      title: "Adi Lakshmi:",
      description: "Bestows eternal wealth and spiritual strength.",
    },
    {
      img: icon2,
      title: "Dhana Lakshmi:",
      description: "Brings financial abundance and prosperity.",
    },
    {
      img: icon3,
      title: "Dhanya Lakshmi:",
      description: "Blesses agricultural bounty and nourishment.",
    },
    {
      img: icon4,
      title: "Gaja Lakshmi:",
      description: "Grants royal power, success, and prestige.",
    },
    {
      img: icon5,
      title: "Santana Lakshmi:",
      description: "Blesses with offspring and family harmony.",
    },
    {
      img: icon6,
      title: "Veera Lakshmi:",
      description: "Offers courage, strength, and resilience.",
    },
    {
      img: icon7,
      title: "Vidya Lakshmi",
      description: "Embodies knowledge, wisdom, and education.",
    },
    {
      img: icon8,
      title: "Vijaya Lakshmi:",
      description: "Ensures victory and success in endeavors.",
    },
  ];

  return (
    <Container className=" container ">
      {/* Heading Section */}
      <div className="text-center mb-8 ">
        <div className="d-flex align-items-center justify-content-center md:gap-4 sm:gap-1">
          <img src={headingIcon} className="h-12" alt="Icon Left" /> {/* Left Icon */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl fw-bold primaryColor text-center">The Blessings of the Ashtalakshmi</h2>
          <img src={headingIcon} className="h-12" alt="Icon Right" /> {/* Right Icon */}
        </div>
      </div>

      {/* Blessings Grid */}
      <Row>
        {blessings.map((blessing, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card  data-aos="flip-left"  className="text-center border-0 " style={{ backgroundColor: "#FFFFF0", padding: "10px", height: "230px"}} >
              <Card.Img
              
                variant="top"
                src={blessing.img}
                alt={blessing.title}
                className="mx-auto"
                style={{ width: "50px", height: "50px" }}
              />
              <Card.Body>
                <p className="primaryColor text-xl font-semibold">{blessing.title}</p>
                <p  className=" text-gray-600 text-sm sm:text-base md:text-lg">{blessing.description}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BlessingsGrid;

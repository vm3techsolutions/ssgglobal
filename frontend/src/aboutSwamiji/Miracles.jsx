import React, { useEffect } from "react";
import headingIcon from "../assets/icon.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Row, Col, Card } from "react-bootstrap";

export default function Miracles() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const blessings = [
    {
      title: "Blessings for Parenthood:",
      description:
        "Numerous couples who had lost hope of conceiving have experienced the joy of parenthood after seeking Swamiji’s blessings, with many attributing this transformation to his divine grace.",
    },
    {
      title: "Healing the Ailing:",
      description:
        "Swamiji has been known to inspire recovery in those facing physical or mental health challenges. Many individuals, after interacting with him, report a renewed sense of vitality and well-being.",
    },
    {
      title: "Restoring Abilities:",
      description:
        "In some remarkable cases, people struggling with severe disabilities or sensory impairments, such as difficulty walking, blindness, or hearing loss, have shown significant improvements after Swamiji’s guidance and blessings.",
    },
    {
      title: "Guiding the Lost:",
      description:
        "Beyond physical healing, Swamiji has profoundly impacted individuals searching for clarity, direction, or peace in their lives. Many devotees credit him with helping them overcome hardships, achieve stability, and find renewed purpose.",
    },
  ];

  return (
    <div className="container py-8 px-4 md:py-10">
      <div className="flex flex-wrap items-center justify-center gap-4 pb-5 text-center">
        <img src={headingIcon} className="h-12  " alt="Heading Icon" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl fw-bold primaryColor">
          Miracles and Transformative Experiences
        </h2>
        <img src={headingIcon} className="h-12  " alt="Heading Icon" />
      </div>

      <p className="text-gray-600 text-sm sm:text-base md:text-lg text-center">
        Swamiji’s impact on people’s lives is often shared through deeply
        personal stories that reflect his compassion and spiritual presence:
      </p>

      <Row className="g-4">
        {blessings.map((blessing, index) => (
          <Col key={index} xs={12} sm={6} md={6} lg={3}>
            <Card
              data-aos="flip-left"
              className="text-center border-2 shadow-md rounded-lg p-4 d-flex flex-column h-100"
              style={{ borderColor: "#800080" }}
            >
              <Card.Body className="d-flex flex-column">
                <h3 className="primaryColor text-lg sm:text-xl font-semibold">
                  {blessing.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 flex-grow-1">
                  {blessing.description}
                </p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

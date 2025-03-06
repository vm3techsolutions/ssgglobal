import React, { useState } from "react";
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";
import headingIcon from "../assets/icon.png";
import img1 from "../assets/Swami LOgo.png";

const BlogSlider = () => {
  const [blogs] = useState([
    {
      id: 1,
      name: "Spiritual Awakening",
      description: "A guide to spiritual awakening and meditation practices.",
      image: img1,
      slug: "spiritual-awakening",
    },
    {
      id: 2,
      name: "Puja and Rituals",
      description: "An introduction to various pujas and their significance.",
      image: img1,
      slug: "puja-and-rituals",
    },
    {
      id: 3,
      name: "The Power of Mantras",
      description: "Exploring the power and significance of mantras in daily life.",
      image: img1,
      slug: "the-power-of-mantras",
    },
    {
      id: 4,
      name: "Meditation Techniques",
      description: "Different techniques for effective meditation and mindfulness.",
      image: img1,
      slug: "meditation-techniques",
    },
  ]);

  return (
    <Container>
      <div className="container text-center py-12">
        <div className="d-flex align-items-center justify-content-center gap-4">
          <img src={headingIcon} className="h-12" alt="Icon Left" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl fw-bold primaryColor">
            What Our Devotees Say
          </h2>
          <img src={headingIcon} className="h-12" alt="Icon Right" />
        </div>
      </div>

      <div className="carousel-container">
        <Carousel
          interval={3000}
          wrap={true}
          slide={true}
          
        >
          {blogs.length > 0 &&
            blogs
              .reduce((acc, blog, index) => {
                if (index % 2 === 0) acc.push(blogs.slice(index, index + 2));
                return acc;
              }, [])
              .map((group, index) => (
                <Carousel.Item key={index}>
                  <Row>
                    {group.map((blog) => (
                      <Col key={blog.id} md={6}>
                        <Card className="blog-card border-0 text-center" style={{ backgroundColor: "#fffff0" }}>
                          <Card.Img
                            variant="top"
                            src={blog.image}
                            alt={blog.name}
                            style={{
                              height: "100px",
                              width: "100px",
                              borderRadius: "50px",
                              margin: "auto",
                            }}
                          />
                          <Card.Body>
                            <Card.Title>{blog.name}</Card.Title>
                            <Card.Text className="text-gray-600 text-sm sm:text-base md:text-lg">
                              {blog.description.length > 50
                                ? `${blog.description.substring(0, 50)}...`
                                : blog.description}
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>
              ))}
        </Carousel>
      </div>

      {/* Additional CSS */}
      <style jsx>{`
        .carousel-container {
          overflow: hidden; /* Hide overflow */
          position: relative;
        }
      `}</style>
    </Container>
  );
};

export default BlogSlider;

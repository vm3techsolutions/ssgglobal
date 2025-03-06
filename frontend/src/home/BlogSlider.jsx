import React, { useState, useEffect } from "react";
import { Carousel, Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import headingIcon from "../assets/icon.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const BlogSlider = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/Blogs.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  return (
    <Container className="container py-5 overflow-hidden"> {/* Prevent Overflow */}
      <div className="text-center mb-4 mt-8">
        <div className="d-flex align-items-center justify-content-center gap-4">
          <img src={headingIcon} className="h-12" alt="Icon Left" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl fw-bold primaryColor">
            Spiritual Insights & Puja Guides
          </h2>
          <img src={headingIcon} className="h-12" alt="Icon Right" />
        </div>
      </div>

      <Carousel
        interval={5000}
        wrap={true}
        slide={true}
        nextIcon={<span className="carousel-control-next-icon" />}
        prevIcon={<span className="carousel-control-prev-icon" />}
        indicators={false}
        controls={true}
        className="overflow-hidden"
      >
        {blogs.length > 0 &&
          blogs
            .reduce((acc, blog, index) => {
              if (index % 3 === 0) acc.push(blogs.slice(index, index + 3));
              return acc;
            }, [])
            .map((group, index) => (
              <Carousel.Item key={index}>
                <Row className="overflow-hidden"> {/* Prevents Row Overflow */}
                  {group.map((blog) => (
                    <Col key={blog.id} md={4}>
                      <Card className="blog-card border-0 overflow-hidden"> {/* Prevents Card Overflow */}
                        <Card.Img
                          variant="top"
                          src={blog.image}
                          alt={blog.name}
                          style={{ objectFit: "cover", height: "200px" }} // Keeps images contained
                        />
                        <Card.Body>
                          <Card.Title>{blog.name}</Card.Title>
                          <Card.Text className="text-gray-600 text-sm sm:text-base md:text-lg">
                            {blog.description.length > 50
                              ? `${blog.description.substring(0, 50)}...`
                              : blog.description}
                          </Card.Text>
                          <div className="text-right">
                            <Link to={`/blog/${blog.slug}`}>
                              <Button
                                variant="link"
                                className="mt-auto d-flex align-items-center"
                                style={{
                                  color: "orange",
                                  textDecoration: "none",
                                }}
                              >
                                Read More{" "}
                                <MdKeyboardDoubleArrowRight className="ml-2 text-[#800080] text-2xl" />
                              </Button>
                            </Link>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
      </Carousel>
    </Container>
  );
};

export default BlogSlider;

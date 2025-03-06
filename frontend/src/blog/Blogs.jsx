import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { MdKeyboardDoubleArrowRight } from "react-icons/md"; // Import arrow icon from react-icons
import { Link } from "react-router-dom";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/Blogs.json')  // Ensure the path is correct
      .then(response => response.json()) // Parse the response as JSON
      .then(data => {
        setBlogs(data); // Update the blogs state with the fetched data
        console.log(data); // Log the fetched data
      })
      .catch(error => console.error('Fetch error:', error));
  }, []);

  // Function to truncate the description to the first 10 words
  const truncateDescription = (text) => {
    const words = text.split(" ");
    return words.slice(0, 10).join(" ") + (words.length > 10 ? "..." : "");
  };

  return (
    <>
      <Container className="pt-12">
        <Row>
          {blogs.map((blog) => (
            <Col md={4} key={blog.id} className="mb-5 ">
              <Card className="d-flex flex-column  border-0" style={{ backgroundColor: "#FFFFF0", height: "500px" }}>
                <Card.Img variant="top" src={blog.image} alt={blog.name}/>
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{blog.name}</Card.Title>
                 <Card.Text className="text-gray-600 text-sm sm:text-base md:text-lg">
                 {blog.created_date}
                  </Card.Text>
                  
                  <Card.Text className="flex-grow-1 text-gray-600 text-sm sm:text-base md:text-lg">
                    {truncateDescription(blog.description)}
                  </Card.Text>
                         
                  
                  {/* Read More button at the bottom, aligned to the right */}
                 
                  <Link to={`/blog/${blog.slug}`}>
  <Button 
    variant="link" 
    className="mt-auto flex d-flex Blog no-underline"
    style={{ color: 'orange', textDecoration: 'none' }}
  >
    Read More <MdKeyboardDoubleArrowRight className="ml-2 text-[#800080] text-2xl" />
  </Button>
</Link>
                 

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Blogs
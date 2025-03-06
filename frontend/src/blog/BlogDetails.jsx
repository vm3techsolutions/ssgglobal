import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";


const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch("/Blogs.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedBlog = data.find((blog) => blog.slug === slug);
        setBlog(selectedBlog);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, [slug]);

  return (
    <Container className="py-12">
      {blog ? (
        <Card className="border-0">
          <Card.Img variant="top" src={blog.image} alt={blog.name} />
          <Card.Body>
            <Card.Title style={{ fontSize: "25px" }}>{blog.name}</Card.Title>
            <Card.Text className="text-gray-600 text-sm sm:text-base md:text-lg">{blog.description}</Card.Text>

            {/* <a href="/blog">
              <Button
                variant="link"
                className="mt-auto flex d-flex  no-underline"
                style={{ color: "orange", textDecoration: "none" }}
              >
                <FaArrowLeft className="mr-2 mt-1 text-[#800080]" /> Back to
                Blogs
              </Button>
            </a> */}

            
          </Card.Body>
        </Card>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default BlogDetails;

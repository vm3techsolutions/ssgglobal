import React from 'react'
import headingIcon from "../assets/icon.png"; 
import { Container, Row, Col, Card } from "react-bootstrap";
import Contact from "../assets/contact.png"
import Email from "../assets/email.png"
import Location from "../assets/location.png"
export default function GetInTouch() {
  return (
    <Container className="">
      <Card className="text-center p-4 "  style={{ border: "0"}}>
      <div className="text-center mb-4 pb-3">
                <div className="d-flex align-items-center justify-content-center gap-4">
                  <img src={headingIcon} className="h-12" alt="Icon Left" /> {/* Left Icon */}
                  <h2 className="text-2xl sm:text-3xl md:text-4xl fw-bold primaryColor">Get In Touch</h2>
                  <img src={headingIcon} className="h-12" alt="Icon Right" /> {/* Right Icon */}
                </div>
              </div>
              <Row className="mb-4 py-">
  <Col md={4} className="d-flex flex-column align-items-center py-3"  style={{ backgroundColor: "#FFFFF0"}}>
    <div><img src={Contact} className="h-9 md:h-9 mb-2" alt="Icon Right" /></div>
    <p style={{ backgroundColor: "#FFFFF0", paddingLeft: "50px", paddingRight: "50px" }}><a href="tel:+91 9923607845" className=" hover:text-gray-400 text-lg">+91 9923607845 <br/> +91 9822965257 </a></p>
  </Col>
  <Col md={4} className="d-flex flex-column align-items-center py-3"  style={{ backgroundColor: "#FFFFF0"}}>
    <div ><img src={Email} className="h-9 md:h-9 mb-2" alt="Icon Right" /></div>
    <p style={{ backgroundColor: "#FFFFF0", paddingLeft: "50px", paddingRight: "50px" }}><a href="mailto:subramhnyamgiriswami@gmail.com" className=" hover:text-gray-400 text-lg">subramhnyamgiriswami@gmail.com</a></p>
  </Col>
  <Col md={4} className="d-flex flex-column align-items-center py-3"  style={{ backgroundColor: "#FFFFF0"}}>
   <div><img src={Location} className="h-9 md:h-9 mb-2" alt="Icon Right" /></div>
    <p style={{ backgroundColor: "#FFFFF0", paddingLeft: "50px", paddingRight: "50px"}} className='text-lg'>Kasili, Kopargaon, Ahmednagar</p>
  </Col>
</Row>

        <div className="map-container" style={{ height: "300px", overflow: "hidden", borderRadius: "10px" }}>
          <iframe
            title="Google Map"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240184.3879276773!2d74.36077904346487!3d19.844984871807036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc4202a517aacd%3A0x2a96ce02ceb1726a!2sShree%20Saishakti%20Ashrram%20kasli!5e0!3m2!1sen!2sin!4v1738655813053!5m2!1sen!2sin"
            allowFullScreen
          ></iframe>
        </div>
      </Card>
    </Container>

  )
}



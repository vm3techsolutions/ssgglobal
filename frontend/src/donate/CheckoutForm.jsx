  import { useState } from "react";
  import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
  import { Container, Form, Button, Card, Alert, Row, Col } from "react-bootstrap";
  // import headingIcon from "../assets/icon.png";

  const countries = [
    { code: "US", name: "United States" },
    { code: "UK", name: "United Kingdom" },
    { code: "IN", name: "India" },
    { code: "CA", name: "Canada" },
    { code: "AU", name: "Australia" },
    { code: "SG", name: "Singapore" },
    { code: "MY", name: "Malaysia" },
    { code: "SE", name: "Sweden" },
    { code: "ID", name: "Indonesia" },
    { code: "PH", name: "Philippines" },
  ];

  const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [processing, setProcessing] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      address: "",
      country: "",
      amount: "",
    });

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setProcessing(true);
      setErrorMessage("");
      setSuccessMessage("");

      if (!stripe || !elements){
        setProcessing(false);
        return;
      } 

      const cardElement = elements.getElement(CardElement);

      try{
      const response = await fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: formData.amount * 100, // Convert to cents
          fullName: formData.fullName,
          email: formData.email,
          address: formData.address,
          country: formData.country,
        }),
      });

      const data = await response.json();
      console.log("Payment Intent Response:", data); // Debugging log
      
      // Check if clientSecret is valid
      if (!data.clientSecret) {
        throw new Error("Payment intent creation failed. No client secret received.");
      }

      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: formData.fullName,
            email: formData.email,
            address: { line1: formData.address, country: formData.country },
          },
        },
      });

      if (result.error) {
        throw new Error(result.error.message);
      }

      if (result.paymentIntent.status === "succeeded") {
        setSuccessMessage("Payment Successful!");
      }
    }catch (error) {
      setErrorMessage(error.message);
    } finally {
      setProcessing(false);
    }
    };

    return (
      <Container className="mt- mb-">
        <Row className="justify-content-center">
          <Col md={10}>
            <Card className="shadow-lg p-4">
              <Card.Body>
                {/* <div className="d-flex justify-content-center align-items-center gap-2 mb-4"> */}
                  {/* <img src={headingIcon} className="h-14" alt="icon" /> */}
                  {/* <h2 className="text-2xl sm:text-3xl md:text-4xl fw-bold primaryColor">Your Contribution Builds a Stronger Community !</h2> */}
                  {/* <img src={headingIcon} className="h-14" alt="icon" /> */}
                {/* </div> */}

                {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                {successMessage && <Alert variant="success">{successMessage}</Alert>}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={12}>
                      <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="fullName"
                          placeholder="Enter your full name"
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={12}>
                      <Form.Group className="mb-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          type="text"
                          name="address"
                          placeholder="Enter your address"
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <Form.Group className="mb-3">
                        <Form.Label>Country</Form.Label>
                        <Form.Select name="country" onChange={handleChange} required>
                          <option value="">Select Country</option>
                          {countries.map((country) => (
                            <option key={country.code} value={country.code}>
                              {country.name} ({country.code})
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Donation Amount ($)</Form.Label>
                    <Form.Control
                      type="number"
                      name="amount"
                      placeholder="Enter amount"
                      min="1"
                      step="1"
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Card Details</Form.Label>
                    <div className="p-2 border rounded">
                      <CardElement />
                    </div>
                  </Form.Group>

                  <Button variant="" type="submit" className="fw-bold w-100 Donatebtn text-white" disabled={!stripe || processing}>
                    {processing ? "Processing..." : "Donate"}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  };

  export default CheckoutForm;
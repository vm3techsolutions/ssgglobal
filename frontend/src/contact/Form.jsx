import { Card, Container } from "react-bootstrap";
import headingIcon from "../assets/icon.png";
import { useState } from "react";
import axios from "axios";

export default function Form() {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    preferredDate: "",
    address: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [errors, setErrors] = useState({});

  // Validation function
  const validateForm = () => {
    let newErrors = {};
    const nameRegex = /^[A-Za-z\s]+$/;
    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    // Ensure the preferred date is from the next day onward
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const selectedDate = new Date(formData.preferredDate);
    selectedDate.setHours(0, 0, 0, 0);

    if (!nameRegex.test(formData.fullname)) {
      newErrors.fullname = "Full Name should contain only letters and spaces.";
    }

    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (formData.preferredDate && selectedDate < tomorrow) {
      newErrors.preferredDate = "Preferred Date should be from tomorrow onwards.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post(
        `${apiUrl}/submit-form`,
        formData
      );
      setResponseMessage(response.data.message);
      setFormData({
        fullname: "",
        phone: "",
        email: "",
        preferredDate: "",
        address: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("Submission failed. Try again.");
    }
  };

  return (
    <Container id="ReserveForm" className="-mt-16">
      <Card style={{ border: "0" }}>
        <div className="text-center mb-4 mt-8">
          <div className="d-flex align-items-center justify-content-center md:gap-4 sm:gap-1">
            <img src={headingIcon} className="h-12" alt="Icon Left" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl fw-bold primaryColor">
              Reserve Your Puja Now
            </h2>
            <img src={headingIcon} className="h-12" alt="Icon Right" />
          </div>
          <p className="pr-16 pl-16 p-3 text-gray-600 text-sm sm:text-base md:text-lg">
            Take the first step towards inviting prosperity and harmony into
            your life. Reserve your puja today and let us help you connect with
            divine blessings.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 p-9"
          style={{ backgroundColor: "#FFFFF0" }}
        >
          {/* First Row - Full Name & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
              {errors.fullname && <p className="text-red-500 text-xs">{errors.fullname}</p>}

            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone No.
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
              {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
            </div>
          </div>

          {/* Second Row - Email & Preferred Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Date
              </label>
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
                min={new Date().toISOString().split("T")[0]} // Ensure it's at least tomorrow
              />
              {errors.preferredDate && <p className="text-red-500 text-xs">{errors.preferredDate}</p>}
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#800080] px-4 py-2 text-white font-semibold hover:bg-yellow-600 transition"
            >
              SUBMIT
            </button>
          </div>

          {/* Response Message */}
          {responseMessage && (
            <p className="text-green-500 text-center">{responseMessage}</p>
          )}
        </form>
      </Card>
    </Container>
  );
}

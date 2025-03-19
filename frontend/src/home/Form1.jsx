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

  const [errors, setErrors] = useState({});
  const [responseMessage, setResponseMessage] = useState("");

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/submit-form`,
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
      setErrors({});
    } catch (error) {
      console.error("Error", error);
      setResponseMessage("Submission failed, try again.");
    }
  };

  return (
    <Container id="ReserveForm" className="-mt-16">
      <Card style={{ border: "0" }}>
        <div className="text-center mb-4 mt-8">
          <div className="d-flex align-items-center justify-content-center gap-4">
            <img src={headingIcon} className="h-12" alt="Icon Left" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl fw-bold primaryColor">
              Reserve Your Puja Now
            </h2>
            <img src={headingIcon} className="h-12" alt="Icon Right" />
          </div>
          <p className="pr-16 pl-16 p-3 text-gray-600 text-sm sm:text-base md:text-lg">
            Take the first step towards inviting prosperity and harmony into your life. Reserve your puja today and let us help you connect with divine blessings.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 md:p-9" style={{ backgroundColor: "#FFFFF0" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
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

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone No.</label>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
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

            {/* Preferred Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
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
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
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
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pb-2">
            <button
              type="submit"
              className="bg-[#800080] px-4 py-2 text-white font-semibold hover:bg-yellow-600 transition"
            >
              SUBMIT
            </button>
          </div>

          {/* Response Message */}
          {responseMessage && <p className="text-green-500">{responseMessage}</p>}
        </form>
      </Card>
    </Container>
  );
}

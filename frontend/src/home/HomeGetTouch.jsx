import React from "react";
import headingIcon from "../assets/icon.png";
import Contact from "../assets/contact.png";
import Email from "../assets/email.png";
import Location from "../assets/location.png";

export default function ContactUs() {
  return (
    <div className="container pt-10 px-4 md:px-8 lg:px-16">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-4">
          <img src={headingIcon} className="h-12" alt="Heading Icon" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl fw-bold primaryColor">
            Get In Touch
          </h2>
          <img src={headingIcon} className="h-12" alt="Heading Icon" />
        </div>
      </div>

      {/* Contact Container */}
      <div className="max-w-6xl mx-auto p-6 md:p-8 flex flex-col md:flex-row gap-10 md:gap-20">
        {/* Map Section */}
        <div className="w-full md:w-2/2 md:-ml-14">
          <iframe
            title="Google Map"
            className="w-full h-64 md:h-96 lg:h-96 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240184.3879276773!2d74.36077904346487!3d19.844984871807036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc4202a517aacd%3A0x2a96ce02ceb1726a!2sShree%20Saishakti%20Ashrram%20kasli!5e0!3m2!1sen!2sin!4v1738655813053!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Details Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
          <div className="flex items-center gap-4 text-lg text-gray-700">
            <img src={Contact} className="h-6 md:h-8" alt="Phone Icon" />
            <a href="tel:+919923607845" className="hover:text-gray-400">
              +91 9923607845 <br /> +91 9822965257
            </a>
          </div>
          <div className="flex items-center gap-4 text-lg text-gray-700">
            <img src={Email} className="h-6 md:h-8" alt="Email Icon" />
            <a
              href="mailto:subramhnyamgiriswami@gmail.com"
              className="hover:text-gray-400"
            >
              subramhnyamgiriswami@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4 text-lg text-gray-700">
            <img src={Location} className="h-6 md:h-8" alt="Location Icon" />
            <span>Kasili, Kopargaon, Ahmednagar</span>
          </div>
        </div>
      </div>
    </div>
  );
}

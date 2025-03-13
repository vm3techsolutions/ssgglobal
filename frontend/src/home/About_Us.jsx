import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import headingIcon from "../assets/icon.png";
import img1 from "../assets/WhatsApp Image 2025-01-21 at 11.07.58.jpeg";
import img2 from "../assets/about3.png";
import img3 from "../assets/temple.jpg";
import img4 from "../assets/thumbnail_large.png";

const AboutUs = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-13">
      {/* Heading with Icons */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-4">
          <img src={headingIcon} className="h-12" alt="Icon" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl fw-bold primaryColor">About Us</h2>
          <img src={headingIcon} className="h-12" alt="Icon" />
        </div>
        <p className="mt-4 text-start md:text-center mx-auto max-w-3xl text-gray-600 text-sm sm:text-base md:text-lg">
        Swamiji’s work extends far beyond Shirdi, as he travels the world sharing the teachings and blessings of Shirdi Sai Baba. His message of universal love, selfless service, and spiritual growth resonates with people from diverse faiths and cultures, making him a beacon of hope in a fragmented world.

        Swamiji’s life is not just a story of miracles—it is an invitation to experience the profound impact of faith, surrender, and divine grace. Those who have sought his blessings and guidance have found not just solutions to their problems but a renewed sense of purpose and connection to the divine.


        </p>
      </div>

      {/* Responsive Image Grid */}
      <div className="md:flex xl:flex 2xl:flex w-full h- overflow-hidden">
            {[
              { src: img1, color: "bg-red-500/50", text: "Swamiji", link: "/about-swamiji" },
              { src: img2, color: "bg-blue-500/50", text: "Ashtalakshmi Puja", link: "/about" },
              { src: img3, color: "bg-green-500/50", text: "Temple", link: "/about-puja" },
              { src: img4, color: "bg-yellow-500/50", text: "Image 4", link: "/blog" },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative h-96 flex-1 transition-all duration-500 hover:flex-[2]"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={item.src}
                  alt={`Image ${index + 1}`}
                  className="h-full w-full object-cover transition-all duration-500"
                />
      
                <div
                  className={`absolute inset-0 ${item.color} flex flex-col justify-center items-center transition-opacity duration-500 ${hoveredIndex === index ? "opacity-100" : "opacity-80"}`}
                >
                  <h2 className="text-white text-2xl font-bold">{item.text}</h2>
                  <Link to={item.link}>
                    <button
                      onClick={() => window.scrollTo(0, 0)}
                      className="mt-4 primary-btn font-bold py-2 px-6 transition-opacity duration-300 opacity-100 translate-y-0"
                    >
                      Know More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>


      {/* Additional Content */}
      <p className="md:text-center  max-w-3xl mx-auto mb-6 mt-5 text-gray-600 text-sm sm:text-base md:text-lg">
      Founded with the vision of preserving ancient Vedic traditions while embracing the modern world, SSSG Global is a beacon of spirituality, devotion, and service to humanity. Rooted in the timeless wisdom of the Vedas, our mission is to make spiritual practices accessible, meaningful, and relevant to people of all cultures, faiths, and walks of life.
      At the heart of our offerings is the Ashtalakshmi Puja, a sacred and transformative ritual that invokes the blessings of the eight divine manifestations of Goddess Lakshmi—the embodiment of wealth, prosperity, knowledge, courage, fertility, and harmony. This ritual is not just a celebration of abundance but a spiritual journey toward inner peace and holistic well-being.
      </p>

      {/* Button */}
      <div className="text-center">
        <Link to="/about">
          <button
            onClick={() => window.scrollTo(0, 0)}
            className="mt-4 primary-btn text-white font-bold py-2 px-4 sm:px-6 rounded-lg shadow-md transition duration-300 hover:bg-primary-dark"
          >
            Know More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default AboutUs;

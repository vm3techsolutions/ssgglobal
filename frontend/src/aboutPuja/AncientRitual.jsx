import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import headingIcon from "../assets/icon.png";
import aboutImg1 from "../assets/about1.png";
import aboutImg2 from "../assets/about2.png";
import aboutImg3 from "../assets/about3.png";
import aboutImg4 from "../assets/about4.png";

const About_Us = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-12 py-14">
      {/* Heading with Icons */}
      <div className="text-center mb-10">
        <div className="flex items-center justify-center md:gap-4 sm:gap-1 flex-wrap">
          <img src={headingIcon} className="h-12" alt="Icon Left" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl fw-bold primaryColor">
            An Ancient Ritual for Modern Times
          </h2>
          <img src={headingIcon} className="h-12" alt="Icon Right" />
        </div>
        

        <p className="mt-4 mx-auto max-w-3xl text-gray-600 text-sm sm:text-base md:text-lg">Ashtalaxmi Authenticity and Devotion in Every Step
        </p>


        <p className="mt- mx-auto max-w-3xl text-gray-600 text-sm sm:text-base md:text-lg">Led by the renowned Swami Subrahmanyam Giri, a master of Vedic traditions and rituals, every Ashtalakshmi Puja conducted through SSSG Global is steeped in authenticity, precision, and heartfelt devotion. Swamiji’s deep understanding of sacred scriptures and his dedication to spiritual service ensure that every puja resonates with divine energy, enriching the lives of those who participate.
        </p>

        <p className="mt- mx-auto max-w-3xl text-gray-600 text-sm sm:text-base md:text-lg">Led by the renowned Whether conducted in the serene sanctity of a home, a temple, or through online ceremonies that connect devotees across the globe, we strive to make these ancient rituals both accessible and impactful. By blending traditional practices with modern convenience, SSSG Global ensures that the transformative power of the Ashtalakshmi Puja reaches people everywhere, regardless of geographical boundaries.
        </p>

        {/* <p className="mt-4 mx-auto max-w-3xl text-gray-600 text-sm sm:text-base md:text-lg">
          At SSG Global, we are dedicated to helping you experience the spiritual energy and blessings of traditional Hindu rituals. 
          Our team of experienced priests and spiritual practitioners specializes in conducting the sacred Ashtalakshmi Puja, ensuring it is performed with utmost devotion and authenticity.
        </p> */}
      </div>

      {/* Image Grid with AOS Flip-Up Effect */}
      {/* <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10 px-4 sm:px-0">
        <img data-aos="flip-up" src={aboutImg1} alt="About 1" className="w-full rounded-lg shadow-lg" />
        <img data-aos="flip-up" src={aboutImg2} alt="About 2" className="w-full rounded-lg shadow-lg" />
        <img data-aos="flip-up" src={aboutImg3} alt="About 3" className="w-full rounded-lg shadow-lg" />
        <img data-aos="flip-up" src={aboutImg4} alt="About 4" className="w-full rounded-lg shadow-lg" />
      </div> */}

      {/* Additional Content */}
      {/* <p className="text-center text-gray-700 max-w-3xl mx-auto text-base sm:text-lg">
        The Ashtalakshmi Puja is a powerful and auspicious ritual rooted in Vedic traditions. It invokes the blessings of the eight manifestations of Goddess Lakshmi, each representing different facets of prosperity, including wealth, health, knowledge, courage, and spiritual growth.
        This puja is ideal for those seeking divine guidance to overcome challenges, achieve success, and bring harmony to their personal and professional lives.
      </p> */}
    </section>
  );
};

export default About_Us;
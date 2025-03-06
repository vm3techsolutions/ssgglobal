import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import headingIcon from "../assets/icon.png";

const About_Us = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="container mx-auto px-4 sm:px-6 ">
      {/* Heading with Icons */}
      <div className="text-center  ">
        {/* <div className="flex items-center justify-center gap- flex-wrap">
          <img src={headingIcon} className="h-12 " alt="Icon Left" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl fw-bold primaryColor">
          Serving Humanity Through Spirituality
          </h2>
          <img src={headingIcon} className="h-12" alt="Icon Right" />
        </div> */}
        

        <div className="py-10 md:pl-16 text-start">
        <p className=" mx-auto max-w-3xl text-gray-600 text-sm sm:text-base md:text-lg">At SSSG Global, we believe that spirituality transcends religious and cultural differences. Our work is driven by the universal principles of compassion, generosity, and service to humanity. Through the Ashtalakshmi Puja, we aim not only to invoke material and spiritual prosperity but also to inspire a deeper connection to the divine, fostering peace, harmony, and gratitude in every participant's life.

        </p>

        <p className="mt- mx-auto max-w-3xl text-gray-600 text-sm sm:text-base md:text-lg">In a world longing for balance and meaning, SSSG Global stands as a bridge between ancient wisdom and modern living, inviting people of all beliefs to partake in the light of spirituality and the blessings of divine grace. Together, let us preserve these sacred traditions and build a future filled with abundance, harmony, and hope.
        </p>
        </div>
        
      </div>

    </section>
  );
};

export default About_Us;
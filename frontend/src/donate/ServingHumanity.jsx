import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import headingIcon from "../assets/icon.png";

const About_Us = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="container mx-auto px-4 sm:px-6 py-6">
      {/* Heading with Icons */}
      

      <div className="overflow-x-auto flex justify-center">
  <table className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-2xl text-left text-sm sm:text-base">
    <thead>
      <tr className="text-white bg-gradient-to-r from-[#800080] via-[#ad06ad] to-[#800080]">
        <th className="py-3 px-4 sm:px-6 text-left font-semibold w-1/2 border-1 BorderColor">Field</th>
        <th className="py-3 px-4 sm:px-6 text-left font-semibold w-1/2 border-1 BorderColor">Details</th>
      </tr>
    </thead>
    <tbody>
      {[
        { field: "NAME", detail: "SAISHAKTI SANT SWAMI SUBRAMHNYAMGIRI MAH", color: "text-blue-700" },
        { field: "BANK NAME", detail: "STATE BANK OF INDIA" },
        { field: "CURRENT A/C NO.", detail: "43595237806", color: "text-red-600" },
        { field: "IFSC", detail: "SBIN0000414", color: "text-purple-700" },
        { field: "BRANCH", detail: "ACB KOPARGAON" },
        { field: "BANK ADDRESS", detail: "GODAM ROAD, DIST - AHMED NAGAR, TALUKA - KOPARGAON, MAHARASHTRA - 423 001" },
        { field: "E-MAIL", detail: "subramhnyamgiriswami@gmail.com" },
      ].map((item, index) => (
        <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-[#FFFFF0]"}>
          <td className="font-semibold py-3 px-4 sm:px-6 border-1 BorderColor">{item.field}</td>
          <td className={`py-3 px-4 font-semibold sm:px-6 border-1 BorderColor ${item.color || ""}`}>{item.detail}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


      <div className="py-9 text-center sm:text-left ">
        <p className="mx-auto max-w-3xl text-gray-600 text-sm sm:text-base md:text-lg">
          At SSSG Global, we believe that spirituality transcends religious and cultural differences. Our work is driven by the universal principles of compassion, generosity, and service to humanity. Through the Ashtalakshmi Puja, we aim not only to invoke material and spiritual prosperity but also to inspire a deeper connection to the divine, fostering peace, harmony, and gratitude in every participant's life.
        </p>

        <p className="mt-4 mx-auto max-w-3xl text-gray-600 text-sm sm:text-base md:text-lg">
          In a world longing for balance and meaning, SSSG Global stands as a bridge between ancient wisdom and modern living, inviting people of all beliefs to partake in the light of spirituality and the blessings of divine grace. Together, let us preserve these sacred traditions and build a future filled with abundance, harmony, and hope.
        </p>
      </div>
    </section>
  );
};

export default About_Us;

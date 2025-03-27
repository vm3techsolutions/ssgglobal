import React, { useState } from "react";
import headingIcon from "../assets/icon.png";
import Social1 from "../assets/socialTemple.png";
import Social2 from "../assets/socialCow.png";
import Social3 from "../assets/socialAnnathan.png";
import Social4 from "../assets/socialSick.png";
import Social5 from "../assets/socialFinancial.png";

const SocialCauses = () => {
  const [activeTab, setActiveTab] = useState(2);

  
  // Array to store data for tabs
  const tabs = [
    {
      id: 1,
      title: "Construction of a Temple",
      image: Social1,
      details: (
        <div className="text-start">
          <h2 className="primaryColor fw-bold mb-4  text-center">Construction of a Temple</h2>
          <p className="  max-w-3xl mx-auto mb-6 mt-2 text-gray-600 text-sm sm:text-base md:text-lg">
          Under the divine guidance of Swamiji, 17 temples dedicated to Sai Nath have already been built, and the 18th temple and Ashram are currently under construction at Kopergaon. This sacred mission will continue as Swamiji envisions building more temples worldwide to spread spirituality and serve devotees. The temple at Kopergaon will serve as a place of worship, spiritual guidance, and healing. The Kalasa of Sai Baba in this temple stands at 141 feet, making it the tallest in the world for a Baba temple. The trust remains committed to expanding its spiritual mission to reach more devotees globally.

          </p>
        </div>
      ),
    },
    {
      id: 2,
      title: "Feeding and Caring for Cows (Gaushala)",
      image: Social2,
      details: (
        <div className="text-start">
          <h2 className="primaryColor fw-bold mb-4 text-center">
          Feeding and Caring for Cows (Gaushala)
          </h2>
          
          <p className="  max-w-3xl mx-auto mb-6 mt-2 text-gray-600 text-sm sm:text-base md:text-lg">
          Cows are considered sacred and a symbol of purity and prosperity. Our Gaushala provides shelter, food, and medical care to injured, abandoned, and malnourished cows. We ensure that these sacred beings receive the love and care they deserve. Additionally, we promote sustainable practices by using cow dung and urine for organic farming, producing eco-friendly products that benefit the environment and community.
          </p>
          <h5 className="text-start fw-bold max-w-3xl mx-auto">How you can help:</h5>
<ul className=" list-disc  max-w-2xl -ml-5" >
  <li className="fw-bold">Adopt a cow and support its well-being through monthly contributions.</li>
  <li className="fw-bold">Donate for food and medical care to help sustain their nourishment and treatment.</li>
  <li className="fw-bold">Volunteer to help in feeding, cleaning, and maintaining the Gaushala, ensuring a clean and safe space for the cows.</li>
</ul>


        </div>
      ),
    },
    {
      id: 3,
      title: "Annathan (Free Food for the Needy)",
      image: Social3,
      details: (
        <div className="text-start">
          <h2 className="primaryColor fw-bold mb-4 text-center">Annathan (Free Food for the Needy)</h2>
          <p className="  max-w-3xl mx-auto mb-6 mt-2 text-gray-600 text-sm sm:text-base md:text-lg">
           
We believe that no one should go hungry. Our Annathan program serves free meals to the underprivileged, ensuring that everyone who visits the temple receives nourishment and care. A dedicated dining hall is under construction to accommodate more people and serve food efficiently. This initiative helps thousands of people daily, fostering a sense of community and kindness.

          </p>
        </div>
      ),
    },
    {
      id: 4,
      title: "Healing the Sick",
      image: Social4,
      details: (
        <div className="text-start">
          <h2 className="primaryColor fw-bold mb-4 text-center">Healing the Sick        </h2>
          <p className="  max-w-3xl mx-auto mb-6 mt-2 text-gray-600 text-sm sm:text-base md:text-lg">
           
We provide medical assistance and support to those in need, helping the sick recover with dignity. This includes financial aid for treatments, access to healthcare, and wellness programs that promote physical and spiritual healing. Special healing prayers and rituals are conducted to offer divine blessings and comfort to those suffering from illnesses. Our aim is to ensure that no one is left without care due to financial hardships.

          </p>
        </div>
      ),
    },
    {
      id: 5,
      title: "Financial Assistance to the Underprivileged",
      image: Social5,
      details: (
        <div className="text-start">
          <h2 className="primaryColor fw-bold mb-4 text-center">Financial Assistance to the Underprivileged
          </h2>
          <p className="  max-w-3xl mx-auto mb-6 mt-2 text-gray-600 text-sm sm:text-base md:text-lg">
          We extend support to families struggling with financial hardships. This includes providing educational assistance, basic necessities, and emergency aid to ensure a better quality of life for the underprivileged. Many individuals and families have benefitted from our financial aid programs, allowing them to rebuild their lives and find hope in difficult times.

          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="p-4 flex flex-col items-center min-h-screen">
      {/* Heading with Icons */}
      <div className="flex items-center justify-center md:gap-4 py-10">
        <img src={headingIcon} className="h-12" alt="Icon" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl fw-bold primaryColor">
          Serving Humanity, Spreading Light
        </h2>
        <img src={headingIcon} className="h-12" alt="Icon" />
      </div>

      

      {/* Tabs Section */}
      <div className="flex flex-wrap justify-center gap-4 mb-14">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`tab cursor-pointer ${
              activeTab === tab.id ? "active" : ""
            }`}
          >
            <img
              src={tab.image}
              alt={tab.title}
              className={`w-full object-cover rounded-md transition-all ${
                activeTab === tab.id ? "h-48" : "h-36"
              }`}
            />
            {activeTab !== tab.id && (
              <h3 className="primaryColor fw-bold mt-2">{tab.title}</h3>
            )}
          </div>
        ))}
      </div>

      {/* Active Tab Content Section */}
      <div className="bg-[#FFFFF0] rounded-lg p-6 max-w-5xl text-center">
        {tabs.find((tab) => tab.id === activeTab)?.details}
      </div>
    </div>
  );
};

export default SocialCauses;

import React, { useState } from "react";
import headingIcon from "../assets/icon.png";
import Social1 from "../assets/Social1.jpg";
import Social2 from "../assets/Social2.jpg";
import Social3 from "../assets/Social3.jpg";

const SocialCauses = () => {
  const [activeTab, setActiveTab] = useState(2);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

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
      <div className="flex flex-col md:flex-row gap-4 items-center mb-14">
        {/* Tab 1 */}
        <div
          onClick={() => handleTabClick(1)}
          className={`tab ${activeTab === 1 ? "active" : ""}`}
        >
          <img
            src={Social1}
            alt="Social Cause 1"
            className={`w-full object-cover rounded-md transition-all ${
              activeTab === 1 ? "h-48" : "h-36"
            }`} // Increased height for active tab
          />
          {activeTab !== 1 && (
            <h2 className="primaryColor fw-bold mt-2">Social Cause 1</h2>
          )}
        </div>

        {/* Tab 2 */}
        <div
          onClick={() => handleTabClick(2)}
          className={`tab ${activeTab === 2 ? "active" : ""}`}
        >
          <img
            src={Social2}
            alt="Social Cause 2"
            className={`w-full object-cover rounded-md transition-all ${
              activeTab === 2 ? "h-48" : "h-36"
            }`} // Increased height for active tab
          />
          {activeTab !== 2 && (
            <h2 className="primaryColor fw-bold mt-2">Social Cause 2</h2>
          )}
        </div>

        {/* Tab 3 */}
        <div
          onClick={() => handleTabClick(3)}
          className={`tab ${activeTab === 3 ? "active" : ""}`}
        >
          <img
            src={Social3}
            alt="Social Cause 3"
            className={`w-full object-cover rounded-md transition-all ${
              activeTab === 3 ? "h-48" : "h-36"
            }`} // Increased height for active tab
          />
          {activeTab !== 3 && (
            <h2 className="primaryColor fw-bold mt-2">Social Cause 3</h2>
          )}
        </div>
      </div>

      {/* Active Tab Content Section */}
      <div className="bg-[#FFFFF0] rounded-lg p-6 max-w-5xl text-center">
        {activeTab === 1 && (
          <div>
            <h2 className="primaryColor fw-bold mb-4">Social Cause 1</h2>
            <p>
              Details about Social Cause 1 go here. This may include rescue
              missions, services, or awareness campaigns.
            </p>
          </div>
        )}
        {activeTab === 2 && (
          <div className="text-start">
            <h2 className="primaryColor fw-bold mb-4 text-center">
              Saving and Serving Cows: A Sacred Duty
            </h2>
            <h5 className="text-start fw-bold">
              Honoring the Divine Gift of Gaumata
            </h5>
            <p>
              Cows have been revered for centuries as a symbol of purity,
              abundance, and compassion. At our Gaushala (Cow Shelter), we are
              committed to protecting, nurturing, and serving these sacred
              beings who give so much to humanity.
            </p>
            <h5 className="text-start fw-bold">Our Mission: Protect, Care & Serve</h5>
            <ul className="list-disc -ml-4">
              <li>
                <strong>Rescue & Rehabilitation –</strong> Saving injured,
                abandoned, and malnourished cows.
              </li>
              <li>
                <strong>Shelter & Healthcare – </strong>Providing safe havens
                with nutritious food, medical care, and love.
              </li>
              <li>
                <strong>Promoting Ahimsa & Awareness – </strong>Encouraging
                people to support and protect cows.
              </li>
              <li>
                <strong>Organic Sustainability –</strong> Utilizing cow dung
                and cow urine for eco-friendly farming and products.
              </li>
            </ul>
            <h5 className="text-start fw-bold">
              How You Can Support This Noble Cause
            </h5>
            <ul className="list-disc -ml-4">
              <li>
                <strong>Adopt a Cow – </strong> Support the well-being of a
                rescued cow through monthly contributions.
              </li>
              <li>
                <strong>Donate for Food & Medical Care – </strong> Help provide
                nutritious fodder, medicines, and shelter.
              </li>
              <li>
                <strong>Volunteer at the Gaushala –</strong>Join hands in
                feeding, cleaning, and taking care of the cows.
              </li>
              <li>
                <strong>Spread Awareness –</strong> Educate others about the
                importance of cow protection and ethical dairy practices.
              </li>
            </ul>
          </div>
        )}
        {activeTab === 3 && (
          <div>
            <h2 className="primaryColor fw-bold mb-4">Social Cause 3</h2>
            <p>
              Details about Social Cause 3 go here. Include any special missions
              or partnerships.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialCauses;

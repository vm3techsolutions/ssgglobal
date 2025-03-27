import React from "react";

export default function DonateButton() {
  return (
    <div className="pt-10 ">
      <div className="bg-[#FFFFF0] py-4 ">
        <div className="max-w-full">
          <h1 className="fw-bold fs-2 primaryColor py- text-center">
            Be a Part of This Noble Mission
          </h1>
          <p className="text-center md:px-32 ">
            Your contributions, big or small, play a vital role in serving the
            community and preserving faith. Together, we can make a meaningful
            impact and spread love, kindness, and devotion.
          </p>

          <h1 className="fw-bold fs-2 primaryColor pb-4 text-center">
            Donate Today & Be a Part of a Divine Cause!
          </h1>
        </div>

        <div className="text-center mb-2">
          <a
            href="/donate"
            className="bg-[#800080] text-white px-4 py-2  rounded-full font-semibold hover:bg-yellow-600 transition "
          >
            Donate
          </a>
        </div>
      </div>
    </div>
  );
}

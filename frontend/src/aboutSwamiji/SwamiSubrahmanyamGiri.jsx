import React from "react";
import headingIcon from "../assets/icon.png";
import img from "../assets/aboutswamijicenter.png";

const MyComponent = () => {
  return (
    <div className="flex ">
      {/* Left Div */}
      <div className="md:w-4/5 md:px-10 p-3 py-5">
        <div className="flex items-center justify-center gap-4 mr-10">
          <img src={headingIcon} className="h-12" /> {/* Left Icon */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl fw-bold primaryColor text-center">
            Swami Subrahmanyam Giri{" "}
          </h2>
          <img src={headingIcon} className="h-12" /> {/* Right Icon */}
        </div>


        <div className="md:px-15 mr-5">
          <p className="pt-4 text-gray-600 text-sm sm:text-base md:text-lg ml-6 md:ml-0" >
            Swami Subrahmanyam Giri, hailing from the serene lands of
            Kanyakumari, Tamil Nadu, is a revered Astha Yogi whose life is an
            extraordinary blend of devotion, compassion, and transformation. For
            the past 42 years, Swamiji has dedicated his life to serving
            humanity in the sacred town of Shirdi, drawing countless seekers
            from around the globe to experience his divine energy and blessings.
            Widely recognized as the "Miracle Man of the World," Swamiji has
            traveled to numerous countries, bringing hope, healing, and
            spiritual upliftment to people of all faiths and walks of life.
          </p>
          <ul className="list-none ">
            <li className="fw-bold text-xl before:content-['\25B6'] before:mr-2">
              A Journey of Surrender and Faith{" "}
            </li>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">
              Swamiji’s journey to Shirdi is a testament to his unwavering faith
              and devotion. Once a successful Architectural Engineer in Dubai,
              he felt a powerful calling from Shirdi Sai Baba. Abandoning his
              career, he set out on a life-changing pilgrimage. Along the way,
              he faced unimaginable challenges, including losing all his
              belongings and money in Mumbai. Undeterred, Swamiji walked over
              200 kilometers from Mumbai to Shirdi, surviving on alms and sheer
              determination. By the time he reached Shirdi, he was
              unrecognizable, living as a beggar on the streets, consumed by his
              longing for Sai Baba’s divine presence. One fateful night, Swamiji
              experienced a life-altering encounter with Sai Baba. This divine
              meeting became the turning point of his life, inspiring him to
              renounce the material world and dedicate himself entirely to the
              service of humanity.
            </p>

            <li className="fw-bold before:content-['\25B6'] before:mr-2 text-xl">
              Symbols of Divine Energy{" "}
            </li>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">
              Swamiji is known to bear sacred symbols of the Chakra (Wheel) and
              Sankha (Conch) on his hands and feet—marks revered as signs of
              immense spiritual power. These symbols are believed to radiate
              divine energy, bringing prosperity, health, and spiritual growth
              wherever he goes. His presence alone has transformed the lives of
              countless individuals.
            </p>

            <li className="fw-bold before:content-['\25B6'] before:mr-2 text-xl">
              Healing Miracles and Blessings{" "}
            </li>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">
              Swamiji’s miraculous ability to heal transcends all boundaries of
              faith and belief. His divine interventions have left an indelible
              mark on the lives of many
            </p>

            <li className="fw-bold before:content-['\25B6'] before:mr-2 text-xl">
              Maha Lakshmi Yajna: A Ritual of Abundance
            </li>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">
              Out of his boundless compassion, Swamiji performs the sacred
              Goddess Lakshmi Yajna, a powerful ritual aimed at bringing
              prosperity, peace, and well-being to devotees. With unwavering
              dedication, Swamiji has conducted an astounding 500000 yajnas to
              date. Countless individuals who have participated in these yajnas
              under his guidance have reported transformative experiences,
              witnessing an abundance of wealth, health, and
              success in their lives.
            </p>
          </ul>
        </div>
      </div>
      {/* Center Image */}
      <div className="md:w-2/5 relative bg-[#800080] md:h-[165vh] hidden sm:hidden lg:block">
  <img
    className="py-20 left-0 transform -translate-x-1/6 h-[165vh]"
    src={img}
    alt="Center Image"
  />

      </div>
    </div>
  );
};

export default MyComponent;

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../assets/WhatsApp Image 2025-01-21 at 11.07.58.jpeg";
import img2 from "../assets/WhatsApp Image 2025-01-21 at 11.08.11.jpeg";
import img3 from "../assets/WhatsApp Image 2025-01-21 at 11.08.14 (1).jpeg";
import img4 from "../assets/WhatsApp Image 2025-01-21 at 11.08.15.jpeg";
import img5 from "../assets/WhatsApp Image 2025-01-21 at 11.08.15 (1).jpeg";
import img6 from "../assets/WhatsApp Image 2025-01-21 at 11.08.16.jpeg";
import img7 from "../assets/WhatsApp Image 2025-01-21 at 11.08.17.jpeg";
import img8 from "../assets/WhatsApp Image 2025-01-21 at 11.08.17 (1).jpeg";
import img9 from "../assets/WhatsApp Image 2025-01-21 at 11.08.18.jpeg";
import img10 from "../assets/WhatsApp Image 2025-01-21 at 11.08.18 (1).jpeg";
import img12 from "../assets/WhatsApp Image 2025-01-21 at 11.08.20.jpeg";
import img13 from "../assets/WhatsApp Image 2025-01-21 at 11.08.20 (1).jpeg";
import img14 from "../assets/WhatsApp Image 2025-01-21 at 11.08.21.jpeg";
import img15 from "../assets/WhatsApp Image 2025-01-21 at 11.08.21 (1).jpeg";
import img16 from "../assets/WhatsApp Image 2025-01-21 at 11.08.22.jpeg";
import img17 from "../assets/WhatsApp Image 2025-01-21 at 11.08.23.jpeg";
import img20 from "../assets/WhatsApp Image 2025-01-21 at 11.08.24 (1).jpeg";
import img21 from "../assets/WhatsApp Image 2025-01-21 at 11.08.25.jpeg";
import img24 from "../assets/WhatsApp Image 2025-01-21 at 11.08.27.jpeg";
import img26 from "../assets/WhatsApp Image 2025-01-21 at 11.08.28.jpeg";
import img28 from "../assets/WhatsApp Image 2025-01-21 at 11.08.29.jpeg";
import img29 from "../assets/WhatsApp Image 2025-01-21 at 11.08.30.jpeg";
import img30 from "../assets/WhatsApp Image 2025-01-21 at 11.08.30 (1).jpeg";
import img31 from "../assets/WhatsApp Image 2025-01-21 at 11.08.31.jpeg";
import img32 from "../assets/WhatsApp Image 2025-01-21 at 11.08.32.jpeg";
import img33 from "../assets/WhatsApp Image 2025-01-21 at 11.08.31 (1).jpeg";
import img34 from "../assets/WhatsApp Image 2025-01-21 at 11.08.32 (1).jpeg";
import img35 from "../assets/WhatsApp Image 2025-01-21 at 11.08.33.jpeg";
import img36 from "../assets/WhatsApp Image 2025-01-21 at 11.08.33 (1).jpeg";
import img37 from "../assets/WhatsApp Image 2025-01-21 at 11.08.33 (2).jpeg";
import img38 from "../assets/WhatsApp Image 2025-01-21 at 11.08.34.jpeg";
import img39 from "../assets/WhatsApp Image 2025-01-21 at 11.08.36.jpeg";
import img40 from "../assets/WhatsApp Image 2025-01-21 at 11.08.35 (1).jpeg";
import img41 from "../assets/WhatsApp Image 2025-01-21 at 11.08.35.jpeg";
import img42 from "../assets/WhatsApp Image 2025-01-21 at 11.08.37.jpeg";
import img44 from "../assets/WhatsApp Image 2025-01-21 at 11.43.33.jpeg";
import img45 from "../assets/WhatsApp Image 2025-01-21 at 11.43.34.jpeg";
import img46 from "../assets/WhatsApp Image 2025-01-21 at 11.43.35.jpeg";
import img47 from "../assets/WhatsApp Image 2025-01-21 at 11.43.35 (1).jpeg";
import img48 from "../assets/WhatsApp Image 2025-01-21 at 11.43.36.jpeg";
import img49 from "../assets/WhatsApp Image 2025-01-21 at 11.43.47.jpeg";
import img50 from "../assets/WhatsApp Image 2025-01-21 at 11.44.09.jpeg";

import img51 from "../assets/IMG-20250206-WA0053.jpg";
import img52 from "../assets/IMG-20250206-WA0054.jpg";
import img53 from "../assets/IMG-20250206-WA0055.jpg";
import img54 from "../assets/IMG-20250206-WA0056.jpg";
import img55 from "../assets/IMG-20250206-WA0057.jpg";
import img56 from "../assets/IMG-20250206-WA0058.jpg";
import img57 from "../assets/IMG-20250206-WA0059.jpg";
import img59 from "../assets/IMG-20250206-WA0061.jpg";
import img61 from "../assets/IMG-20250206-WA0063.jpg";
import img62 from "../assets/IMG-20250206-WA0064.jpg";
import img63 from "../assets/IMG-20250206-WA0065.jpg";
import img64 from "../assets/IMG-20250206-WA0066.jpg";
import img65 from "../assets/IMG-20250206-WA0067.jpg";
import img66 from "../assets/IMG-20250206-WA0068.jpg";
import img68 from "../assets/IMG-20250206-WA0070.jpg";
import img69 from "../assets/IMG-20250206-WA0071.jpg";
import img71 from "../assets/IMG-20250206-WA0073.jpg";
import img72 from "../assets/IMG-20250206-WA0074.jpg";
import img73 from "../assets/IMG-20250206-WA0075.jpg";
import img74 from "../assets/IMG-20250206-WA0076.jpg";
import img75 from "../assets/IMG-20250206-WA0057.jpg";

const images = [img51, img52, img53, img54, img55, img56, img57, , img59, img61,  img62, img63,img64,img65,img66,img68,img69,img71, img72, img73, img74, img75,img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,  img12, img13,img14,img15,img16,img17,img20,img21,img24,img26,img28,img29,img30,img31,img32,img33,img34,img35,img36,img37,img38,img39,img40,img41,img42,img44,img45,img46,img47,img48,img49,img50];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <img
              data-aos="flip-left"
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-[400px] h-96 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              onClick={() => setSelectedImage(image)}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative">
            <button
              className="absolute top-2 right-2 bg-gray-800 text-white px-3 py-1 rounded-full hover:bg-gray-600"
              onClick={() => setSelectedImage(null)}
            >
              &#x2715;
            </button>
            <img src={selectedImage} alt="Popup" className="max-w-[900px] max-h-screen rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;

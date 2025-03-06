import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import headingIcon from "../assets/icon.png";

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

const folders = [
  { id: 1, name: "Perth, Australia", images: [ img52, img53, img54, img55, img56, img57, , img59, img61,  img62, img63,img64,img65,img66,img68,img69,img71, img72, img73, img74, img75] },
  
  { id: 2, name: "Singapore", images: [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,  img12, img13,img14,img15,img16,img17,img20,img21,img24,img26,img28,img29,img30,img31,img32,img33,img34,img35,img36,img37,img38,img39,img40,img41,img42,img44,img45,img46,img47,img48,img49,img50] },
];

const FolderViewer = () => {
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="py-3">
    <div className="flex flex-col items-center ">
  {/* Folder Selection */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4 md:w-[150vh] ">
    {folders.map((folder) => (
      <button
        key={folder.id}
        className="p-3 border rounded-lg shadow-md bg-white hover:bg-gray-100"
        onClick={() => setSelectedFolder(folder)}
      >
        <div className="flex flex-col items-center">
          {folder.images.length > 0 && (
            <img
              src={folder.images[0]}
              alt={folder.name}
              className="w-full h-44 sm:h-80 object-cover rounded-md"
            />
          )}
          <span className="text-lg font-semibold pt-2">{folder.name}</span>
          <span className="text-gray-500 text-sm">({folder.images.length} Photos)</span>
        </div>
      </button>
    ))}
  </div>
</div>


      {/* Folder Images */}
      {selectedFolder && (
        <div className="pt-10">
          <div className="flex items-center justify-center gap-2">
            <img src={headingIcon} className="h-8 md:h-10" alt="Icon Left" />
            <h2 className="text-2xl md:text-3xl fw-bold primaryColor">{selectedFolder.name}</h2>
            <img src={headingIcon} className="h-8 md:h-10" alt="Icon Right" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-5">
            {selectedFolder.images.map((image, index) => (
              <img
                data-aos="flip-right"
                key={index}
                src={image}
                alt={selectedFolder.name}
                className="w-full h-32 sm:h-48 md:h-84 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 p-4">
          <div className="relative">
            <button
              className="absolute top-4 right-4 bg-white p-2 rounded-full text-black text-xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-[80vh] sm:max-w-[90vw] sm:max-h-[90vh] rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FolderViewer;

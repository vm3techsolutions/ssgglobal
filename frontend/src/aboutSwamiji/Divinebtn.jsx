import React from 'react';
import headingIcon from "../assets/icon.png"; 

const MiraclesAndHealing = () => {
  return (
    <div className='md:pt-12'>
    <div className=" bg-[#FFFFF0] py-8 px- md:py-5 md:px-12 lg:px-52">         

      <div className=' p-5 rounded-lg '>
        <p className=" mb-4 text-center text-2xl sm:text-3xl md:text-4xl fw-bold primaryColor">
        Want to be part of this divine journey?
        </p>
        <p className="  mb-4 text-center text-gray-600 text-sm sm:text-base md:text-lg">
        Join the spiritual movement and experience the grace of Swamiji.
        </p>

        <div className="flex  md:flex justify-center mt-4">
  <a href="/contact" className="bg-[#800080] text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition">
    Contact Us
  </a>
</div>

        
      </div>
    </div>
    </div>
  );
};

export default MiraclesAndHealing;

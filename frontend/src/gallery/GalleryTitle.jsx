import React from 'react'
import headingIcon from "../assets/icon.png";

export default function GalleryTitle() {
  return (
    <div className='py-12'>
         <div className="text-center">
                <div className="flex items-center justify-center md:gap-4 sm:gap-1">
                  <img src={headingIcon} className="h-12" alt="Icon Left" />
                  <h2 className="text-2xl sm:text-3xl md:text-4xl text- fw-bold primaryColor text-center">Glimpses of Swamiji's Spiritual Travels and Special Invitations</h2>
                  <img src={headingIcon} className="h-12" alt="Icon Right" />
                </div>
                </div>
    </div>
  )
}

import React from 'react'
import GalleryImg from './GalleryImg'
import GalleryBanner from './GalleryBanner'
import GalleryTitle from './GalleryTitle'
import GalleryFolder from './GalleryFolder'

export default function Gallery() {
  return (
    <div>
        <GalleryBanner/>
        <GalleryTitle/>
        <GalleryFolder/>
        {/* <GalleryImg/> */}
    </div>
  )
}

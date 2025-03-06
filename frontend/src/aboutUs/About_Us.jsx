import React from 'react'
import OurStory from './OurStory'
import AboutUsBanner from './AboutUsBanner'
import MissionVision from './MissionVision'
import WhySSG from './WhySSG'
// import Img4 from '../home/Img4'
import InviteButton from './InviteButton'
import TrusteeTable from './TrusteeTable'

export default function About_Us() {
  return (
    <div>
      <AboutUsBanner/>
        <OurStory/>
        <MissionVision/>
        <WhySSG/>
        <TrusteeTable/>
        {/* <Img4/> */}
        <InviteButton/>
    </div>
  )
}

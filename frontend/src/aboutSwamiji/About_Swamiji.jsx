import React from 'react'
import SwamiSubrahmanyamGiri from './SwamiSubrahmanyamGiri'
import AboutSwamijiBanner from './AboutSwamijiBanner'
import AboutSwamiji4img from './AboutSwamiji4img'
import DivineBlessing from './DivineBlessing'
import Divinebtn from './Divinebtn'
import Miracles from './Miracles'

export default function About_Swamiji() {
  return (
    <div>
      <AboutSwamijiBanner/>
      <SwamiSubrahmanyamGiri/>
      {/* <AboutSwamiji4img/> */}
      <DivineBlessing/>
      <Miracles/>
      <Divinebtn/>
    </div>
  )
}

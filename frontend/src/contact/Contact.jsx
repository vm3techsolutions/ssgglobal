import React from 'react'
import GetInTouch from './GetInTouch'
import Form from './Form'
import ContactBanner from './ContactBanner'
import OverseasContact from './OverseasContact'

export default function Contact() {
  return (
    <div>
      <ContactBanner/> 
      <OverseasContact/> 
      <Form/>
      <GetInTouch/>       
        
    </div>
  )
}

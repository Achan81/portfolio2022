import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css' 

function Contact() {
  AOS.init()
  return (

    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
      <p>CONTACT SECTION</p>
    </div>
  )
}
export default Contact
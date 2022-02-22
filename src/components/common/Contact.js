/* eslint-disable indent */
import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css' 

function Contact() {
  AOS.init()
  return (
    <section className="blurry-text" id="contact">
      <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
  
        <div className="bgClip opacity-75 title text-uppercase fw-bold">contact</div>
        <hr className="bg-dark border-5 border-top border-dark"></hr>


        <h3 className="bgClip opacity-75 fs-6 text-uppercase fw-bold">Get in touch</h3>
        <div className="container container-fluid opacity-75 col-6">


          <div className="container">
            <div className="d-flex flex-row justify-content-center">
              <a href="mailto:achan81@icloud.com" rel="noopener noreferrer" target="_blank">
                <img alt="mail" src="https://i.imgur.com/l0ehegq.png" className="icon mail-image col"/></a>

              <a href="https://github.com/Achan81/" rel="noopener noreferrer" target="_blank">
                <img alt="acgh" src="https://i.imgur.com/yWic7vC.png" className="icon acgh-image col"/></a>
            
                <a href="https://www.linkedin.com/in/achan81/" rel="noopener noreferrer" target="_blank">
                <img alt="linkedin" src="https://i.imgur.com/6j6BRm3.png" className="icon linkedin-image col"/></a>

            </div>
          </div>
        </div>       
      </div>
    </section>
  )
}
export default Contact
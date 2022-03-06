
import React from 'react'

function Contact() {

  return (
    <section className="blurry-text" id="contact">
  
      <div className="opacity-100 title text-uppercase fw-bold">contact</div>
      <hr className="border border-1 border-dark"></hr>


      <h3 className="opacity-100 fs-6 text-uppercase fw-bold">Get in touch</h3>
      <div className="container container-fluid opacity-100 col-6">


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
      
    </section>
  )
}
export default Contact
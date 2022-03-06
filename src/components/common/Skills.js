import React from 'react'

function Skills() {

  return (


    <section className="mt-50 blurry-text" id="skills">
      <div data-aos="fade-up" data-aos-delay="30" data-aos-duration="800" data-aos-easing="ease-in-out-back">
        <div className="title text-uppercase mb-0 fw-bold opacity-100">skills</div>
        <hr className="border border-1 border-dark"></hr>

        <div className="container">
          <div className="row">

            <ul className="col-6 col-md-3 fw-bold opacity-100">
              <div className="fw-bold mb-3 ">FRONT END</div>
              <div className="skills-group mb-3 fw-lighter">&bull; HTML5</div>
              <div className="skills-group mb-3 fw-lighter">&bull; CSS</div>
              <div className="skills-group mb-3 fw-lighter">&bull; JavaScript</div>
              <div className="skills-group mb-3 fw-lighter">&bull; React.js</div>
              <div className="skills-group mb-3 fw-lighter">&bull; SASS</div>
              <div className="skills-group mb-3 fw-lighter">&bull; Bulma</div>
              <div className="skills-group mb-3 fw-lighter">&bull; Bootstrap 5.0</div>
              <div className="skills-group mb-3 fw-lighter">&bull; Tailwind 3.0</div>
            </ul>

            <ul className="col-6 col-md-3 fw-bold opacity-100">
              <div className="fw-bold mb-3 fs-5">BACK END</div>
              <div className="skills-group mb-3 fw-lighter">&bull; Node.js</div>
              <div className="skills-group mb-3 fw-lighter">&bull; MongoDB</div>
              <div className="skills-group mb-3 fw-lighter">&bull; Mongoose</div>
              <div className="skills-group mb-3 fw-lighter">&bull; Python 3</div>
              <div className="skills-group mb-3 fw-lighter">&bull; Django</div>
              <div className="skills-group mb-3 fw-lighter">&bull; Insomnia</div>
              <div className="skills-group mb-3 fw-lighter">&bull; TablePlus</div>
            </ul>

            <ul className="col-6 col-md-3 fw-bold opacity-100">
              <div className="fw-bold mb-3 fs-5">PACKAGE</div>
              <div className="skills-group mb-3 fw-lighter">&bull; npm</div>
              <div className="skills-group mb-3 fw-lighter">&bull; pip</div>
              <br></br>
              <div className="fw-bold mb-3 fs-5">STORAGE</div>
              <div className="skills-group mb-3 fw-lighter">&bull; Heroku</div>
              <div className="skills-group mb-3 fw-lighter">&bull; Netlify</div>
              <div className="skills-group mb-3 fw-lighter">&bull; Cloudinary</div>
            </ul>


            <ul className="col-6 col-md-3 fw-bold opacity-100">
              <div className="fw-bold mb-3 fs-5">VERSION CONTROLS</div>
              <div className="skills-group mb-3 fw-lighter">&bull; Git</div>
              <div className="skills-group mb-3 fw-lighter">&bull; GitHub</div>
              <br></br>
              <div className="fw-bold mb-3 fs-5">DESIGN</div>
              <div className="skills-group mb-3 fw-lighter">&bull; Adobe Illustrator</div>
              <div className="skills-group mb-3 fw-lighter">&bull; Adobe Photoshop</div>
              <div className="skills-group mb-3 fw-lighter">&bull; Excalidraw (planning)</div>
            </ul>

          </div>

        </div>
        <hr className="border border-1 border-dark"></hr>
      </div>
    </section>

    
  )
}
export default Skills
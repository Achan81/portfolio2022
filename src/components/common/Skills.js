import AOS from 'aos'
import 'aos/dist/aos.css' 

function Skills() {
  AOS.init()
  return (

    <section className="bgClip mt-50 blurry-text opacity-75" id="skills">
      <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
        <div className="title text-uppercase mb-0 fw-bold">skills</div>
        <hr className="col-12 bg-dark border-5 border-top border-dark"></hr>

        <div className="container">
          <div className="row">

            <ul className="col">
              <div className="fw-bold mb-3">FRONT END</div>
              <li className="mb-3 fw-lighter">HTML5</li>
              <li className="mb-3 fw-lighter">CSS</li>
              <li className="mb-3 fw-lighter">JavaScript</li>
              <li className="mb-3 fw-lighter">React.js</li>
              <li className="mb-3 fw-lighter">SASS</li>
              <li className="mb-3 fw-lighter">Bulma</li>
              <li className="mb-3 fw-lighter">Bootstrap 5.0</li>
              <li className="mb-3 fw-lighter">Tailwind 3.0</li>
            </ul>

            <ul className="col">
              <div className="fw-bold mb-3">BACK END</div>
              <li className="mb-3 fw-lighter">Node.js</li>
              <li className="mb-3 fw-lighter">MongoDB</li>
              <li className="mb-3 fw-lighter">Mongoose</li>
              <li className="mb-3 fw-lighter">Python 3</li>
              <li className="mb-3 fw-lighter">Django</li>
              <li className="mb-3 fw-lighter">Insomnia</li>
              <li className="mb-3 fw-lighter">TablePlus</li>
            </ul>

            <ul className="col">
              <div className="fw-bold mb-3">PACKAGE</div>
              <li className="mb-3 fw-lighter">npm</li>
              <li className="mb-3 fw-lighter">pip</li>
              <br></br>
              <div className="fw-bold mb-3">STORAGE</div>
              <li className="mb-3 fw-lighter">Heroku</li>
              <li className="mb-3 fw-lighter">Netlify</li>
              <li className="mb-3 fw-lighter">Cloudinary</li>
            </ul>


            <ul className="col">
              <div className="fw-bold mb-3">VERSION CONTROLS</div>
              <li className="mb-3 fw-lighter">Git</li>
              <li className="mb-3 fw-lighter">GitHub</li>
              <br></br>
              <div className="fw-bold mb-3">DESIGN</div>
              <li className="mb-3 fw-lighter">Adobe Illustrator</li>
              <li className="mb-3 fw-lighter">Adobe Photoshop</li>
              <li className="mb-3 fw-lighter">Excalidraw (planning)</li>
            </ul>

          </div>

        </div>
        <hr className="bg-dark border-5 border-top border-dark"></hr>
      </div>
    </section>
  )
}
export default Skills
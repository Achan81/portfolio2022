import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css' 

function About() {
  AOS.init()
  return (

    <section className="blurry-text" id="about">
      <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">

        <div className="bgClip opacity-75 title text-uppercase fw-bold">about me</div>        
        <hr className="bg-dark bgClip border-5 border-top border-dark"></hr>
        <div className="bgClip opacity-75 fw-normal fs-6 mb-0">
        After spending over a decade in menswear fashion design, I wanted to move into a career that would challenge me and allow me to combine my design background and experience into programming.
          <br></br><br></br>
        A 12 week bootcamp at General Assembly (Software Engineering Immersive) was the perfect kick start to building my foundation skills and understanding. 
          <br></br><br></br>
        I now look forward to the next part of this journey to further my skills within creative and driven teams to contribute my experiences and continue to grow as a developer.</div>
      </div>
    </section>
  )
}
export default About
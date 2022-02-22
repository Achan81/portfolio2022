import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css' 

function Interests() {
  AOS.init()
  return (
    <section className="blurry-text" id="interests">
      <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
  
        <div className="bgClip opacity-75 title text-uppercase fw-bold">interests</div>
        <hr className="bg-dark border-5 border-top border-dark"></hr>

        <div className="container container-fluid opacity-75">
          <div className="row gy-3">
            <img src= "https://i.imgur.com/TgX2rf8.jpg?1" className= "interests-img col-3" alt="interests img" />
            <img src= "https://i.imgur.com/vmenHXH.png?1" className= "interests-img col-3" alt="interests img" />
            <img src= "https://i.imgur.com/IVd0x0f.png?1" className= "interests-img col-3" alt="interests img" />
            <img src= "https://i.imgur.com/STuo8fk.jpg?1" className= "interests-img col-3" alt="interests img" />
            <img src= "https://i.imgur.com/uGwFxmM.png?1" className= "interests-img col-3" alt="interests img" />
            <img src= "https://i.imgur.com/M7uFXjn.jpg?1" className= "interests-img col-3" alt="interests img" />
            <img src= "https://i.imgur.com/XbIqIZ9.jpg?1" className= "interests-img col-3" alt="interests img" />
            <img src= "https://i.imgur.com/jQoBVS7.jpg?1" className= "interests-img col-3" alt="interests img" />
          
          </div>      
      
        </div>       
        <hr className="bg-dark border-5 border-top border-dark"></hr>
      </div>
      




    </section>
  )
}
export default Interests
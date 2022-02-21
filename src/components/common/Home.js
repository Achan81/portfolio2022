import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css' 


function Home() {
  AOS.init()
  return (

    <div className="home">
      <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
        <div className="container-fluid justify-content-center blurry-text text-uppercase" id="home">
          <div className="bgClip">
            <hr className="bg-dark border-5 border-top border-dark"></hr>
            <div className="col display-4 fw-normal">junior</div>
            <div className="col display-2 fw-bold mt-n05">software</div>
            <div className="titledev col display-1 fw-normal mt-n10">developer</div>
          
            <div className="d-inline-flex mt-n15">
              <div className="bgClip display-1 fw-bold mt-n10">
                <span className="fs-2 fw-normal">in </span>london . . .</div>
            </div>
            <div className="ascii display-1 fw-bold mt-n20">ˁ(OᴥO)ˀ</div>  
            <p className="apps fw-normal"> react | javaScript | python | css</p>
            <hr className="bg-dark border-5 border-top border-dark"></hr>
          </div>
        </div>
      </div>
    </div>


  )
}
export default Home
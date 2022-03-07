import React from 'react'


function Home() {

  return (

    <div className="home">
      <div data-aos="fade-up" data-aos-duration="400" data-aos-easing="ease-in-out-back">
      
        <div className="container-fluid justify-content-center blurry-text text-uppercase opacity-100" id="home">
          <div className="main">
            <hr className="border border-1 border-dark"></hr>
            <div className="col display-4 fw-normal">_junior_</div>
            <div className="col display-2 fw-bold mt-n05">software</div>
            <div className="titledev col display-1 fw-normal mt-n10">developer</div>
          
            <div className="d-inline-flex mt-n05">
              <div className="display-1 fw-bold mt-n05">
                <span className="fs-2 fw-normal">in_</span>london...</div>
            </div>
            <div className="ascii display-1 fw-bold mt-n10">ˁ(OᴥO)ˀ</div>  
            <div className="apps fw-normal"> javaScript | python | css</div>
            <hr className="border border-1 border-dark"></hr>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Home
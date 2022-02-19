function Home() {
  return (

    <section className="homecontainer-fluid d-flex flex-column mt-50" id="home">

      <div className="blurry-text opacity-75 homegroup ">
        
        <div className="container-fluid text-uppercase d-flex flex-column">
          

          <p className="titlehome fw-normal mt-n60">junior</p>
          <p className="software outline titlehome fst-italic fw-normal mt-n55">software</p>

          <p className="titledev fw-bold mt-n60">developer</p>
    
        </div>

        <div className="container mt-n25 text-uppercase ">
          <div className="d-flex flex-row justify-content-lg-center">
            <p className="fs-normal mt-n20 fw-bold fs-1">in</p>
            <p className="titlehome outline mt-n35 fw-bolder pl-4 ">london</p>
            <p className="title">...</p>
          </div>

          <p className="subtitle text-uppercase fw-bold fs-6 mt-n30"> react | javaScript | python | css</p>
          <hr className="bg-dark border-5 border-top border-dark"></hr>
        </div>

      </div>

      {/* with graphic & fashion design background */}

    </section>
  )
}
export default Home
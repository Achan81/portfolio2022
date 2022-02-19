
function NavBar() {
  return (

    <nav className="navbar navbar-expand-md navbar-black" aria-label="navbar">
      
      <div className="container-lg blurry-text"> 
        <a className="navbar-brand bgClip container ms-3 mt-4 fixed-top" //* top left home link
          id="square" href="#">
          <div className="row flex-column justify-content-start">
            <p className="col link-dark fs-6 fw-bolder ms-0">PORTFOLIO</p>
            <p className="col link-dark fs-6 fw-bolder mt-n10">OF ALEX</p>
            <p className="col link-dark fs-6 fw-bolder mt-n10">CHAN</p>
          </div>
        </a>
    
        <button className="navbar-toggler"  //* burger menu to fix 
          type="button" data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navlist bgClip me-3 mb-3 collapse navbar-collapse fixed-bottom" //* bottom right navbar-list 
          id="navbar"> 
          
          <ul className="navbar-nav d-flex flex-column text-uppercase fw-bolder ms-auto mb-1 mb-md-0"> 
            
            <li className="nav-item">
              <a className="nav-link link-dark mt-n10" aria-current="page"  href="#">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link link-dark mt-n10"  href="#about">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link link-dark mt-n10" href="#skills">Skills</a>
            </li>
              
            <li className="nav-item">
              <a className="nav-link link-dark mt-n10" href="#projects">Projects</a>
            </li>

            <li className="nav-item">
              <a className="nav-link link-dark mt-n10" href="#experience">Experience</a>
            </li>
            
            
            <li className="nav-item">
              <a className="nav-link link-dark mt-n10" href="#interests">Interests</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link link-dark mt-n10" href="#contact">Contact</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>

  )
}

export default NavBar


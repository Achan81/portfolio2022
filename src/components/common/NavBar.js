
function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-black bg-none fixed-top" aria-label="navbar">
      <div className="container-lg blurry-text">
        
        <a className="navbar-brand container ms-3 mt-4 fixed-top" id="square" href="#">
          <div className="row justify-content-start">
            <p className="col link-dark fs-6 fw-bolder ms-0">PORTFOLIO</p>
            <p className="col link-dark fs-6 fw-bolder mt-n15">OF ALEX</p>
            <p className="col link-dark fs-6 fw-bolder mt-n15">CHAN</p>
          </div>
        </a>
        
        <button className="navbar-toggler" 
          type="button" data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">
          
          <ul className="navbar-nav text-uppercase ms-auto mb-1 mb-md-0">
            <li className="nav-item">
              <a className="nav-link link-dark" aria-current="page" href="#about">About</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link link-dark" href="#skills">Skills</a>
            </li>
              
            <li className="nav-item">
              <a className="nav-link link-dark" href="#projects">Projects</a>
            </li>

            <li className="nav-item">
              <a className="nav-link link-dark" href="#experience">Experience</a>
            </li>
            
            
            <li className="nav-item">
              <a className="nav-link link-dark" href="#interests">Interests</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link link-dark" href="#contact">Contact</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>

  )
}

export default NavBar


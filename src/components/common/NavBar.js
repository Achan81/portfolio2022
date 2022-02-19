
function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-black bg-none fixed-top" aria-label="navbar">
      <div className="container-lg blurry-text opacity-75">
        <a className="navbar-brand ms-1 ms-lg-0" href="#">
          {/* <img src={logo} className="logo"></img> */}
          <div className="link-dark fs-6"> PORTFOLIO OF </div>
          <hr className="bg-dark border-3 border-top border-dark mt-0"></hr>
          <div className="link-dark fs-6 mt-n10">ALEX CHAN</div>
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



function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-black bg-none fixed-top" aria-label="navbar">
      <div className="container-lg">
        <a className="navbar-brand ms-4 ms-lg-0" href="#">
          {/* <img src={logo} className="logo"></img> */}
          HOME</a>
        
        <button className="navbar-toggler" 
          type="button" data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">
          
          <ul className="navbar-nav ms-auto mb-1 mb-md-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#about">About</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
              
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#experience">Experience</a>
            </li>
            
            
            <li className="nav-item">
              <a className="nav-link" href="#interests">Interests</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>

  )
}

export default NavBar


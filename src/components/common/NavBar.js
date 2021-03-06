import React from 'react'

import { Navbar, Container, Nav } from 'react-bootstrap'

function NavBar() {

  return (

    <Navbar bg="transparent" expand="md" variant="dark light">
      
      <Navbar.Brand className="opacity-100 col-3 nb fixed-top mt-0 blurry-text" href="#">
        <div className="nb ms-2 ">
          <p className="fs-6 fw-bolder">PORTFOLIO</p>
          <p className="fs-6 fw-bolder mt-n15">OF ALEX</p>
          <p className="fs-6 fw-bolder mt-n15">CHAN</p>
        </div>
      </Navbar.Brand>

      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">

        
          <Nav className="nb"  
            aria-current="page"> 

            <div className="nav-list container text-decoration-none text-uppercase fw-bold fixed-bottom d-flex flex-column me-0 text-end ">
              <Nav.Link className="mt-n20" href="#about"><p className="opacity-100">About</p></Nav.Link>
              <Nav.Link className="mt-n20" href="#skills"><p className="opacity-100">Skills</p></Nav.Link>
              <Nav.Link className="mt-n20" href="#projects"><p className="opacity-100">Projects</p></Nav.Link>
              <Nav.Link className="mt-n20" href="#sideprojects"><p className="opacity-100">Side Projects</p></Nav.Link>
              <Nav.Link className="mt-n20" href="#experience"><p className="opacity-100">Experience</p></Nav.Link>
              <Nav.Link className="mt-n20" href="#interests"><p className="opacity-100">Interests</p></Nav.Link>
              <Nav.Link className="mt-n20" href="#contact"><p className="opacity-100">Contact</p></Nav.Link>


              {/* <Nav.Link className="linky" href="#about">About</Nav.Link>
              <Nav.Link className="text-danger mt-n05" href="#skills">Skills</Nav.Link>
              <Nav.Link className="text-danger mt-n05" href="#projects">Projects</Nav.Link>
              <Nav.Link className="text-danger mt-n05" href="#experience">Experience</Nav.Link>
              <Nav.Link className="text-danger mt-n05" href="#interests">Interests</Nav.Link>
              <Nav.Link className="text-danger mt-n05 mb-4" href="#contact">Contact</Nav.Link> */}
            </div>
          </Nav>
 
        </Navbar.Collapse>
      </Container>
      
    </Navbar>

  )
}
export default NavBar

    
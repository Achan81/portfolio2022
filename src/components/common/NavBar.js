import React from 'react'

import { Navbar, Container, Nav } from 'react-bootstrap'

function NavBar() {

  return (

    <Navbar bg="transparent" expand="md">
      
      <Navbar.Brand className="opacity-25 col-3 nb fixed-top ms-1 mt-3 blurry-text" href="#">
        <div className="nb ms-4">
          <p className="fs-6 fw-bolder">PORTFOLIO</p>
          <p className="fs-6 fw-bolder mt-n10">OF ALEX</p>
          <p className="fs-6 fw-bolder mt-n10">CHAN</p>
        </div>
      </Navbar.Brand>

      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
        
          <Nav className="nb" 
            aria-current="page"> 

            <div className="opacity-50 container nav-list text-decoration-none text-uppercase fw-bold fixed-bottom
          d-flex flex-column me-2 text-end">
              <Nav.Link className="text-end" href="#about">About</Nav.Link>
              <Nav.Link className="text-end mt-n05" href="#skills">Skills</Nav.Link>
              <Nav.Link className="text-end mt-n05" href="#projects">Projects</Nav.Link>
              <Nav.Link className="text-end mt-n05" href="#experience">Experience</Nav.Link>
              <Nav.Link className="text-end mt-n05" href="#interests">Interests</Nav.Link>
              <Nav.Link className="text-end mt-n05 mb-4" href="#contact">Contact</Nav.Link>
            </div>
          </Nav>
 
        </Navbar.Collapse>
      </Container>
      
    </Navbar>

  )
}
export default NavBar

    

import { Navbar, Container, Nav } from 'react-bootstrap'

function NavBar() {

  return (

    <Navbar bg="transparent" expand="md">
      
      <Navbar.Brand className="col-3 nb fixed-top bgClip ms-1 mt-3 blurry-text" href="#">
        
        <div className="nb">
          <p className="fs-6 fw-bolder ms-0">PORTFOLIO</p>
          <p className="fs-6 fw-bolder mt-n10">OF ALEX</p>
          <p className="fs-6 fw-bolder mt-n10">CHAN</p>
        </div>
    
      </Navbar.Brand>

      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav">
        
          {/* <Nav className="nb top-nav text-decoration-none text-uppercase fw-bold" aria-current="page"> 
              <Nav.Link className="text-end" href="#about">About</Nav.Link>
              <Nav.Link className="text-end" href="#skills">Skills</Nav.Link>
              <Nav.Link className="text-end" href="#projects">Projects</Nav.Link>
              <Nav.Link className="text-end" href="#experience">Experience</Nav.Link>
              <Nav.Link className="text-end" href="#interests">Interests</Nav.Link>
              <Nav.Link className="text-end" href="#contact">Contact</Nav.Link>
            </Nav> */}

          <Nav className="nb" 
            aria-current="page"> 
            <div className="container col-3 nav-list bgClip text-decoration-none text-uppercase fw-bold fixed-bottom
          d-flex flex-column me-0 text-end opacity-75 ">
            
              <Nav.Link className="text-end mt-n10" href="#about">About</Nav.Link>
              <Nav.Link className="text-end mt-n10" href="#skills">Skills</Nav.Link>
              <Nav.Link className="text-end mt-n10" href="#projects">Projects</Nav.Link>
              <Nav.Link className="text-end mt-n10" href="#experience">Experience</Nav.Link>
              <Nav.Link className="text-end mt-n10" href="#interests">Interests</Nav.Link>
              <Nav.Link className="text-end mt-n10" href="#contact">Contact</Nav.Link>
            </div>
          </Nav>
 
          
        </Navbar.Collapse>
      </Container>
      
    </Navbar>

  )
}
export default NavBar

    
{/* <ul className="">
              <li className="nav-item">
                <a className="nav-link active mt-n10" aria-current="page"  href="#">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link mt-n10"  href="#about">About</a>
              </li>

              <li className="nav-item">
                <a className="nav-link mt-n10" href="#skills">Skills</a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link mt-n10" href="#projects">Projects</a>
              </li>

              <li className="nav-item">
                <a className="nav-link mt-n10" href="#experience">Experience</a>
              </li>
            
              <li className="nav-item">
                <a className="nav-link mt-n10" href="#interests">Interests</a>
              </li>
            
              <li className="nav-item">
                <a className="nav-link mt-n10" href="#contact">Contact</a>
              </li>
            </ul> */}
           



//           {/* <ul className="navbar-nav me-auto"> */}

//           <div className="navlist bgClip me-3 mb-3 fixed-bottom">
//             <ul className="navbar-nav d-flex flex-column text-uppercase fw-bolder ms-auto mb-1 mb-md-0">
            
//               <li className="nav-item">
//                 <a className="nav-link active mt-n10" aria-current="page"  href="#">Home</a>
//               </li>

//               <li className="nav-item">
//                 <a className="nav-link mt-n10"  href="#about">About</a>
//               </li>

//               <li className="nav-item">
//                 <a className="nav-link mt-n10" href="#skills">Skills</a>
//               </li>
              
//               <li className="nav-item">
//                 <a className="nav-link mt-n10" href="#projects">Projects</a>
//               </li>

//               <li className="nav-item">
//                 <a className="nav-link mt-n10" href="#experience">Experience</a>
//               </li>
            
//               <li className="nav-item">
//                 <a className="nav-link mt-n10" href="#interests">Interests</a>
//               </li>
            
//               <li className="nav-item">
//                 <a className="nav-link mt-n10" href="#contact">Contact</a>
//               </li>

//             </ul>
//           </div>
//           {/* </ul> */}
//         </Navbar.Collapse>
//       </div>
//     </Navbar>   
//   )
// }
// export default NavBar





















// // function NavBar() {

// //   return (
// //     <nav className="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
// //       <div className="container-fluid">
// //         <a className="navbar-brand" href="#">Expand at md</a>
// //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
// //           <span className="navbar-toggler-icon"></span>
// //         </button>

// //         <div className="collapse navbar-collapse" id="navbarsExample04">
// //           <ul className="navbar-nav me-auto mb-2 mb-md-0">
// //             <li className="nav-item">
// //               <a className="nav-link active" aria-current="page" href="#">Home</a>
// //             </li>
// //             <li className="nav-item">
// //               <a className="nav-link" href="#">Link</a>
// //             </li>
// //             <li className="nav-item">
// //               <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
// //             </li>
// //             <li className="nav-item dropdown">
// //               <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
// //               <ul className="dropdown-menu" aria-labelledby="dropdown04">
// //                 <li><a className="dropdown-item" href="#">Action</a></li>
// //                 <li><a className="dropdown-item" href="#">Another action</a></li>
// //                 <li><a className="dropdown-item" href="#">Something else here</a></li>
// //               </ul>
// //             </li>
// //           </ul>
// //           <form>
// //             <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
// //           </form>
// //         </div>
// //       </div>
// //     </nav>

// //   )
// // }
// // export default NavBar




// // function NavBar() {

// //   return (

// //     <nav className="navbar navbar-expand-md navbar-black" aria-label="navbar">
      
// //       <div className="container-fluid blurry-text"> 
// //         <a className="navbar-brand bgClip container ms-3 mt-4 fixed-top" //* top left home link
// //           id="square" href="#">
// //           <div className="row flex-column justify-content-start">
// //             <p className="col link-dark fs-6 fw-bolder ms-0">PORTFOLIO</p>
// //             <p className="col link-dark fs-6 fw-bolder mt-n10">OF ALEX</p>
// //             <p className="col link-dark fs-6 fw-bolder mt-n10">CHAN</p>
// //           </div>
// //         </a>
    
// //         <button className="navbar-toggler"
// //           type="button" data-bs-toggle="collapse" 
// //           data-bs-target="#navbarNav" 
// //           aria-controls="navbarNav" 
// //           aria-expanded="false" 
// //           aria-label="Toggle navigation">
// //           <span className="navbar-toggler-icon"></span>
// //         </button>

// //         <div className="navlist bgClip me-3 mb-3 collapse navbar-collapse fixed-bottom" //* bottom right navbar-list 
// //           id="navbarNav"> 
          
// //           <ul className="navbar-nav d-flex flex-column text-uppercase fw-bolder ms-auto mb-1 mb-md-0"> 
            
// //             <li className="nav-item">
// //               <a className="nav-link active mt-n10" aria-current="page"  href="#">Home</a>
// //             </li>

// //             <li className="nav-item">
// //               <a className="nav-link mt-n10"  href="#about">About</a>
// //             </li>

// //             <li className="nav-item">
// //               <a className="nav-link mt-n10" href="#skills">Skills</a>
// //             </li>
              
// //             <li className="nav-item">
// //               <a className="nav-link mt-n10" href="#projects">Projects</a>
// //             </li>

// //             <li className="nav-item">
// //               <a className="nav-link mt-n10" href="#experience">Experience</a>
// //             </li>
            
// //             <li className="nav-item">
// //               <a className="nav-link mt-n10" href="#interests">Interests</a>
// //             </li>
            
// //             <li className="nav-item">
// //               <a className="nav-link mt-n10" href="#contact">Contact</a>
// //             </li>

// //           </ul>
// //         </div>
// //       </div>
// //     </nav>

// //   )
// // }

// // export default NavBar


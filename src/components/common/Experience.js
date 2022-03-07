import React from 'react'

import { Collapse } from 'react-bootstrap'

function Experience() {

  const [openDM, setOpenDM ] = React.useState(false)
  const [openSD, setOpenSD ] = React.useState(false)
  const [openD, setOpenD ] = React.useState(false)
  const [openFGD, setOpenFGD ] = React.useState(false)
  const [openFree, setOpenFree ] = React.useState(false)

  return (
  
    <div className="blurry-text" id="experience">
      <div data-aos="fade-up" data-aos-duration="400" data-aos-easing="ease-in-out-back">
        <div className="title text-uppercase fw-bold opacity-100">experience</div>
        <hr></hr>

        <a
          className="project-title bg-transparent text-decoration-none text-uppercase text-dark border-none btn-outline-dark fw-bold opacity-100 fs-5"
          onClick={() => setOpenDM(!openDM)}
          aria-controls="collapse-text1"
          aria-expanded={openDM}
        > Design Manager/Head of Design - The 1922 Clothing Company Ltd (2014 - 2020)
        </a>
        <Collapse in={openDM}>
          <div id="collapse-text1" className="container content opacity-100">
            <div className="hidden-text fw-normal exp fs-6 mt-0">
              <div>&bull; 2014 - Promoted to Design Manager/Head of Design - overseeing the design team and designing for multiple brands supplying to the UK high street.</div>
              <div>&bull; Brands include Next mens shirts, River Island mens & boys shirts/jersey, TK Maxx men & boys shirts/jersey, Slaters Menswear Shirts, M&S shirts, Asos shirts, Urban Outfitters etc.</div>
              <div>&bull; Involved on all new accounts strategy & product development, design and development, sourcing, sampling, costing.</div>
            </div>
          </div> 
        </Collapse>        
        <hr className="bg-dark border-1 border-top border-dark"></hr>

        <a
          className="project-title bg-transparent text-decoration-none text-uppercase text-dark border-none btn-outline-dark fw-bold opacity-100 fs-5"
          onClick={() => setOpenSD(!openSD)}
          aria-controls="collapse-text1"
          aria-expanded={openSD}
        > Senior Designer - The 1922 Clothing Company Ltd (2009 - 2014)
        </a>
        <Collapse in={openSD}>
          <div id="collapse-text1" className="container content opacity-100">
            <div className="hidden-text fw-normal exp fs-6 mt-0">
              <div>&bull; Promoted to Senior Designer, leading a small team of designers on my team.</div>
              <div>&bull; Recruiting and training Junior Designers.</div>
              <div>&bull; In charge of product development for seasonal concepts ownbrand and customer brands.</div>
              <div>&bull; Account management & merchandising, trained to cost CMT product whilst designing to the customers need to meet required margins for both the customer and the company.</div>
              <div>&bull; In charge of Fabric sourcing and development - source and development latest fabric trends relevant to customer base.</div>
            </div>
          </div> 
        </Collapse>        
        <hr className="bg-dark border-1 border-top border-dark"></hr>

        <a
          className="project-title bg-transparent text-decoration-none text-uppercase text-dark border-none btn-outline-dark fw-bold opacity-100 fs-5"
          onClick={() => setOpenD(!openD)}
          aria-controls="collapse-text1"
          aria-expanded={openD}
        > Designer - The 1922 Clothing Company Ltd (2007 - 2009)
        </a>
        <Collapse in={openD}>
          <div id="collapse-text1" className="container content opacity-100">
            <div className="hidden-text fw-normal exp fs-6 mt-0">
              <div>&bull; 1922 is a whole sale supplier to the UK High Street.</div>
              <div>&bull; Initially working with a small customer base specialising in short leadtime product.</div>
              <div>&bull; My role was to cad / design for all customers and liase with factories to ensure samples were made correctly.</div> 
              <div>&bull; Product range from Casual and Formal Woven Shirts, Polo shirts, Sweaters, Tees, Nightwear.</div>  
            </div>
          </div> 
        </Collapse>        
        <hr className="bg-dark border-1 border-top border-dark"></hr>


        <a
          className="project-title bg-transparent text-decoration-none text-uppercase text-dark border-none btn-outline-dark fw-bold opacity-100 fs-5"
          onClick={() => setOpenFGD(!openFGD)}
          aria-controls="collapse-text1"
          aria-expanded={openFGD}
        > Fashion Graphic Designer  - Focus Brands (2005 - 2007)
        </a>
        <Collapse in={openFGD}>
          <div id="collapse-text1" className="container content opacity-100">
            <div className="hidden-text fw-normal exp fs-6 mt-0">
              <div>&bull; Original company name, Focus International - the company specialised in license sportswear brands (garments and footwear).</div>
              <div>&bull; I joined the fashion department as a Graphic/Fashion Designer assisting established Fashion Designers to help cad hand sketched product to be factory ready for sampling and development.</div>
              <div>&bull; Customer base was a mixture of ownbrand (UaRe) supplying to the UK independants, and supplying SMU (special make up) to UK highstreet brands.</div>
              <div>&bull; During this time, I was able to train and apply my learnings into understanding fashion garment construction.</div>
              <div>&bull; Brands that I designed for: Jack Purcell (Converse), UaReU, Next Mens, Stiff Records.</div>  
            </div>
          </div> 
        </Collapse>        
        <hr className="bg-dark border-1 border-top border-dark"></hr>

        <a
          className="project-title bg-transparent text-decoration-none text-uppercase text-dark border-none btn-outline-dark fw-bold opacity-100 fs-5"
          onClick={() => setOpenFree(!openFree)}
          aria-controls="collapse-text1"
          aria-expanded={openFree}
        > Freelance Graphic Designer (2004 - 2005)
        </a>
        <Collapse in={openFree}>
          <div id="collapse-text1" className="container content opacity-100">
            <div className="hidden-text fw-normal exp fs-6 mt-0">
              <div>&bull; Fresh out of University, I was headhunted to contract freelance for a High Street brand called &quot;Pash&quot; (Girlswear) - head office located in Droitwich Spa. (contract period approx 6 months)</div>
              <div>&bull; My main duties were to cad garments and graphics for both factory sampling and catalogue presentation.</div>
              <div>&bull; My next long term contract was designing at Scratch Distribution / The Krunch in Worcester.</div>
              <div>&bull; Here I was working inhouse as a Graphic designer doing all promotional instore Graphics.</div>
              <div>&bull; And worked on multiple ventures, from start-up fashion brands and product import graphics.</div>
              <br></br>
              <div>&bull; Other freelance jobs:</div>
              <div>&nbsp; - company brand for local business clients focusing on traditional graphic design.</div>
              <div>&nbsp; - events flyers / banners graphics.</div> 
            </div>
          </div> 
        </Collapse>        
        <hr></hr>

      </div>
    </div>
  )
}
//*** NOTE: I know how to use ul/li but had issues with bullet points not appearing on browsers (chrome/safari) apart from Firefox Developer. 
//***So a work around was to change the <li> to <div> and manually place &bull; ***  

export default Experience
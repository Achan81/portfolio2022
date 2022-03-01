import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css' 
import { Collapse } from 'react-bootstrap'

function Experience() {
  AOS.init()

  const [openDM, setOpenDM ] = React.useState(false)
  const [openSD, setOpenSD ] = React.useState(false)
  const [openD, setOpenD ] = React.useState(false)
  const [openFGD, setOpenFGD ] = React.useState(false)
  const [openFree, setOpenFree ] = React.useState(false)

  return (
  
    <div className="blurry-text" id="experience">
      <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
        <div className="bgClip title text-uppercase fw-bold opacity-75">experience</div>
        <hr className="bg-dark border-5 border-top border-dark"></hr>

        <a
          className="project-title bg-transparent text-decoration-none text-uppercase text-dark border-none btn-outline-dark fw-bold opacity-75 fs-5"
          onClick={() => setOpenDM(!openDM)}
          aria-controls="collapse-text1"
          aria-expanded={openDM}
        > Design Manager/Head of Design - The 1922 Clothing Company Ltd (2014 - 2020)
        </a>
        <Collapse in={openDM}>
          <div id="collapse-text1" className="bgClip container content opacity-75">
            <div className="hidden-text fw-normal exp fs-6 mb-0">
              <p>&bull; 2014 - Promoted to Design Manager/Head of Design - overseeing the design team and designing for multiple brands supplying to the UK high street.</p>
              <p>&bull; Brands include Next mens shirts, River Island mens & boys shirts/jersey, TK Maxx men & boys shirts/jersey, Slaters Menswear Shirts, M&S shirts, Asos shirts, Urban Outfitters etc.</p>
              <p>&bull; Involved on all new accounts strategy & product development, design and development, sourcing, sampling, costing.</p>
            </div>
          </div> 
        </Collapse>        
        <hr className="bg-dark border-1 border-top border-dark"></hr>

        <a
          className="project-title bg-transparent text-decoration-none text-uppercase text-dark border-none btn-outline-dark fw-bold opacity-75 fs-5"
          onClick={() => setOpenSD(!openSD)}
          aria-controls="collapse-text1"
          aria-expanded={openSD}
        > Senior Designer - The 1922 Clothing Company Ltd (2009 - 2014)
        </a>
        <Collapse in={openSD}>
          <div id="collapse-text1" className="bgClip container content opacity-75">
            <div className="hidden-text fw-normal exp fs-6 mb-0">
              <p>&bull; Promoted to Senior Designer, leading a small team of designers on my team.</p>
              <p>&bull; Recruiting and training Junior Designers.</p>
              <p>&bull; In charge of product development for seasonal concepts ownbrand and customer brands.</p>
              <p>&bull; Account management & merchandising, trained to cost CMT product whilst designing to the customers need to meet required margins for both the customer and the company.</p>
              <p>&bull; In charge of Fabric sourcing and development - source and development latest fabric trends relevant to customer base.</p>
            </div>
          </div> 
        </Collapse>        
        <hr className="bg-dark border-1 border-top border-dark"></hr>

        <a
          className="project-title bg-transparent text-decoration-none text-uppercase text-dark border-none btn-outline-dark fw-bold opacity-75 fs-5"
          onClick={() => setOpenD(!openD)}
          aria-controls="collapse-text1"
          aria-expanded={openD}
        > Designer - The 1922 Clothing Company Ltd (2007 - 2009)
        </a>
        <Collapse in={openD}>
          <div id="collapse-text1" className="bgClip container content opacity-75">
            <div className="hidden-text fw-normal exp fs-6 mb-0">
              <p>&bull; 1922 is a whole sale supplier to the UK High Street.</p>
              <p>&bull; Initially working with a small customer base specialising in short leadtime product.</p>
              <p>&bull; My role was to cad / design for all customers and liase with factories to ensure samples were made correctly.</p> 
              <p>&bull; Product range from Casual and Formal Woven Shirts, Polo shirts, Sweaters, Tees, Nightwear).</p>  
            </div>
          </div> 
        </Collapse>        
        <hr className="bg-dark border-1 border-top border-dark"></hr>


        <a
          className="project-title bg-transparent text-decoration-none text-uppercase text-dark border-none btn-outline-dark fw-bold opacity-75 fs-5"
          onClick={() => setOpenFGD(!openFGD)}
          aria-controls="collapse-text1"
          aria-expanded={openFGD}
        > Fashion Graphic Designer  - Focus Brands (2005 - 2007)
        </a>
        <Collapse in={openFGD}>
          <div id="collapse-text1" className="bgClip container content opacity-75">
            <div className="hidden-text fw-normal exp fs-6 mb-0">
              <p>&bull; Original company name, Focus International - the company specialised in license sportswear brands (garments and footwear).</p>
              <p>&bull; I joined the fashion department as a Graphic/Fashion Designer assisting established Fashion Designers to help cad hand sketched product to be factory ready for sampling and development.</p>
              <p>&bull; Customer base was a mixture of ownbrand (UaRe) supplying to the UK independants, and supplying SMU (special make up) to UK highstreet brands.</p>
              <p>&bull; During this time, I was able to train and apply my learnings into understanding fashion garment construction.</p>
              <p>&bull; Brands that I designed for: Jack Purcell (Converse), UaReU, Next Mens, Stiff Records.</p>  
            </div>
          </div> 
        </Collapse>        
        <hr className="bg-dark border-1 border-top border-dark"></hr>

        <a
          className="project-title bg-transparent text-decoration-none text-uppercase text-dark border-none btn-outline-dark fw-bold opacity-75 fs-5"
          onClick={() => setOpenFree(!openFree)}
          aria-controls="collapse-text1"
          aria-expanded={openFree}
        > Freelance Graphic Designer (2004 - 2005)
        </a>
        <Collapse in={openFree}>
          <div id="collapse-text1" className="bgClip container content opacity-75">
            <div className="hidden-text fw-normal exp fs-6 mb-0">
              <p>&bull; Fresh out of University, I was headhunted to contract freelance for a High Street brand called &quot;Pash&quot; (Girlswear) - head office located in Droitwich Spa. (contract period approx 6 months)</p>
              <p>&bull; My main duties were to cad garments and graphics for both factory sampling and catalogue presentation.</p>
              <p>&bull; My next long term contract was designing at Scratch Distribution / The Krunch in Worcester.</p>
              <p>&bull; Here I was working inhouse as a Graphic designer doing all promotional instore Graphics.</p>
              <p>&bull; And worked on multiple ventures, from start-up fashion brands and product import graphics.</p>
              <br></br>
              <p>&bull; other freelance jobs:</p>
              <p> - company brand for local business clients focusing on traditional graphic design.</p>
              <p> - events flyers / banners graphics.</p> 
            </div>
          </div> 
        </Collapse>        
        <hr className="bg-dark border-5 border-top border-dark"></hr>

      </div>
    </div>
  )
}

export default Experience
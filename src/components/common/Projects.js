import React from 'react'
import { Collapse } from 'react-bootstrap'

function Projects() {

  
  const [open1, setOpen1 ] = React.useState(false)
  const [open2, setOpen2 ] = React.useState(false)
  const [open3, setOpen3 ] = React.useState(false)
  const [open4, setOpen4 ] = React.useState(false)

  return (

    <div className="mt-50 blurry-text" id="projects">
      <div data-aos="fade-up" data-aos-duration="400" data-aos-easing="ease-in-out-back">
        <div className="title text-uppercase mb-0 fw-bold opacity-100">projects</div>
        <hr className="border border-1 border-dark"></hr>
        <div className="fs-6 mb-0 fw-bold opacity-100">General Assembly - Software Engineering Immersive Course:</div>
        <div className="fs-6 mb-0 opacity-100">London UK (Remote) - NOV 2021 - FEB 2022</div>
        <div className="fw-normal fs-6 mb-0 fst-italic opacity-100">
          A 12-week immersive course learning fundamentals of web programming from front end to back end (focussed on JavaScript, React.js, HTML and CSS). 
          The course consisted of daily stand-ups, online-lessons, labs, pair-coding, group & individual projects where we learnt how to build Full-Stack applications.
        </div>
        <hr className="border border-1 border-dark"></hr>

    
        {/* PROJECT 1 * * * * * */}

        <a
          className="project-title fs-5 text-decoration-none bg-transparent text-uppercase text-dark border-none btn-outline-dark opacity-100 fw-bold"
          onClick={() => setOpen1(!open1)}
          aria-controls="collapse-text1"
          aria-expanded={open1}
        > space invaders | solo project | 7 days
        </a>

        <Collapse in={open1}>
          <div id="collapse-text1" className="container content fw-normal">
            <div className="col hidden-text opacity-100 mt-1">A grid based shoot em up game built in JavaScript, HTML & CSS.
            Here, I was able to apply everything learnt in the first few weeks and present it in the form of a single player game.
            <br></br><br></br> 
            Although a classic arcade game, I focused on making sure the player controls and gameplay runs smoothly. I also added up down controls feature to allow the user experience to be more advanced. The styling is a mix of retro and contemporary, with a space themed background.
            <br></br><br></br>
            Future improvement would include making mobile responsive and adding sound files.
            </div>

            <div className="container">
              <div className="d-flex flex-row justify-content-center mt-1">
                <a href="https://achan81.github.io/sei-project-01/" rel="noopener noreferrer" target="_blank">
                  <img alt="project1" src="https://i.imgur.com/jYp35wH.png" className="darkmode-ignore icon project1-image col"/></a>

                <a href="https://github.com/Achan81/sei-project-01/blob/main/readme.md" rel="noopener noreferrer" target="_blank">
                  <img alt="readme1" src="https://i.imgur.com/yWic7vC.png" className="project-images icon readme1-image col"/></a>
              </div>

            </div>
            <a href="https://achan81.github.io/sei-project-01/" rel="noopener noreferrer" target="_blank">
              <img src= "https://i.imgur.com/9F1ukTo.png" className="darkmode-ignore col-6 rounded border border-1 border-dark interests-img"/></a>
          </div>
        </Collapse>    

        <hr className="border border-1 border-dark"></hr>

        {/* PROJECT 2 * * * * * */}
        <a
          onClick={() => setOpen2(!open2)}
          aria-controls="collapse-text2"
          aria-expanded={open2}
          className="project-title fs-5 text-decoration-none bg-transparent text-uppercase text-dark border-none btn-outline-dark fw-bold opacity-100"
        > heros & villains db | pair project | 48 hours hackathon
        </a>
        <Collapse in={open2}>
          <div id="collapse-text2" className="content fw-normal">
            <div className="hidden-text opacity-100 mt-1">As a pair, we built a React.js app which used an external Superhero-API (Multiple universes superheroes open-source REST API). 
              <br></br><br></br> 
            The project allowed me to learn to pair-code, project plan, and call data from existing API’s. Bulma CSS Framework was used for the first time. 
              <br></br><br></br> 
            This project helped me to understand my own strengths and weaknesses at this stage of the course. The app functions as a database for searching and filtering from a variety of heroes/villains from various publishers to see and compare stats.</div>
            
            <div className="container">
              <div className="d-flex flex-row justify-content-center mt-1">
                <a href="https://havdb.netlify.app/" rel="noopener noreferrer" target="_blank">
                  <img alt="project2" src="https://i.imgur.com/XlwKBFw.png" className="darkmode-ignore icon project2-image col"/></a>
                  
                <a href="https://github.com/Achan81/sei-project-02/blob/main/README.md" rel="noopener noreferrer" target="_blank">
                  <img alt="readme2" src="https://i.imgur.com/yWic7vC.png" className="icon readme2-image col"/></a>
              </div>
            </div>
            <a href="https://havdb.netlify.app/" rel="noopener noreferrer" target="_blank">
              <img src= "https://i.imgur.com/TRddwqX.png" className="darkmode-ignore col-6 rounded border border-1 border-dark interests-img"/></a>
          </div>
        </Collapse>      

        <hr className="border border-1 border-dark"></hr>

        {/* PROJECT 3 * * * * * */}
        <a
          className="project-title fs-5 text-decoration-none bg-transparent text-uppercase text-dark border-none btn-outline-dark fw-bold opacity-100"
          onClick={() => setOpen3(!open3)}
          aria-controls="collapse-text3"
          aria-expanded={open3}
        > placebook | group project | 7 days
        </a>
        <Collapse in={open3}>
          <div id="collapse-text3" className="content fw-normal">
            <div className="hidden-text opacity-100 mt-1">Full-Stack MERN app with CRUD functionality - MongoDB, Express.js, React.js & Node.js. 
              <br></br><br></br> 
            As a group, we created an app which allowed users to share travel memories in the form of photo uploads and geo mapping locations that linked with memories based on field input. We all worked Full-Stack, while my specific focus was on building the front end structure, CSS and designing to be mobile ready. 
              <br></br><br></br> 
            The CSS framework used on this project was Bootstrap 5.0 and React Bootstrap.
            </div>
            <div className="container">
              <div className="d-flex flex-row justify-content-center mt-1">
                <a href="https://placebookapp.netlify.app/" rel="noopener noreferrer" target="_blank">
                  <img alt="project3" src="https://i.imgur.com/ZC3Y6Hc.png?1" className="icon project3-image col"/></a>
                <a href="https://github.com/Achan81/sei-project-three-frontend/blob/main/README.md" rel="noopener noreferrer" target="_blank">
                  <img alt="readme3" src="https://i.imgur.com/yWic7vC.png" className="icon readme3-image col"/></a>
              </div>
            </div>
            <a href="https://placebookapp.netlify.app/" rel="noopener noreferrer" target="_blank">
              <img src= "https://i.imgur.com/uj97fLV.png" className="col-6 rounded border border-1 border-dark interests-img"/></a>
          </div>
        </Collapse>        

        <hr className="border border-1 border-dark"></hr>

        {/* PROJECT 4 * * * * * */}
        <a
          className="project-title fs-5 text-decoration-none bg-transparent text-uppercase text-dark border-none btn-outline-dark fw-bold opacity-100"
          onClick={() => setOpen4(!open4)}
          aria-controls="collapse-text4"
          aria-expanded={open4}
        > pawhub | group project | 7 days
        </a>
        <Collapse in={open4}>
          <div id="collapse-text4" className="content fw-normal">
            <div className="hidden-text opacity-100 mt-1">Full-Stack MERN app with CRUD functionality using Python, Django API and SQL database, with React.js & TailwindCSS.    
              <br></br><br></br> 
            As a group, we made a clone app of the Dogs Trust website (renamed as Pawhub). Aside from styling the site closely to its original, its key features mirrored things we learnt over the course, such as secure registration & log in, presenting dog index and search functionality, and show pages. 
              <br></br><br></br> 
            Collectively, we completed the Back End and seeded a database together. On the Front End, we each had pages to build, my main contributions were the questionnaire forms and the donation page. CSS framework used on this project was Tailwind 3.0.</div>
            <div className="container">
              <div className="d-flex flex-row justify-content-center mt-1">
                <a href="https://pawhubz.netlify.app/" rel="noopener noreferrer" target="_blank">
                  <img alt="project4" src="https://i.imgur.com/xB9oxFs.png" className="icon project4-image col"/></a>
                <a href="https://github.com/Achan81/sei-project-four-fe/blob/main/README.md" rel="noopener noreferrer" target="_blank">
                  <img alt="readme4" src="https://i.imgur.com/yWic7vC.png" className="icon readme4-image col"/></a>
                  
              </div>
            </div>
            <a href="https://pawhubz.netlify.app/" rel="noopener noreferrer" target="_blank">
              <img src= "https://i.imgur.com/IbSn5i5.png" className="col-6 rounded border border-1 border-dark interests-img"/></a>
          </div>
        </Collapse>        
        <hr className="border border-1 border-dark"></hr>

      </div>
    </div>
  )
}
export default Projects
    












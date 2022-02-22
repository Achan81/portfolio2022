import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css' 
import { Collapse } from 'react-bootstrap'



function Projects() {
  AOS.init()
  
  const [open1, setOpen1 ] = React.useState(false)
  const [open2, setOpen2 ] = React.useState(false)
  const [open3, setOpen3 ] = React.useState(false)
  const [open4, setOpen4 ] = React.useState(false)

  return (

    <section className="mt-50 blurry-text opacity-75 bgClip" id="projects">
      <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
        <div className="bgClip title text-uppercase mb-0 fw-bold">projects</div>
        <hr className="bg-dark border-5 border-top border-dark"></hr>
        <div className="bgClip fs-6 mb-0 fw-bold">General Assembly - Software Engineering Immersive Course:</div>
        <div className="bgClip fs-6 mb-0 mt-n20">London UK (Remote) - NOV 2021 - FEB 2022</div>
        <div className="bgClip fw-lighter fs-6 mb-0 fst-italic mt-n20">
          A 12-week immersive course learning fundamentals of web programming from front end to back end (focussed on JavaScript, React.js, HTML and CSS). 
          The course consisted of daily stand-ups, online-lessons, labs, pair-coding, group & individual projects where we learnt how to build Full-Stack applications.
        </div>
        <hr className="bg-dark border-1 border-top border-dark"></hr>

    
        {/* PROJECT 1 * * * * * */}

        <a
          className="bgClip project-title text-decoration-none bg-transparent text-uppercase text-dark border-none btn-outline-dark fw-bold"
          onClick={() => setOpen1(!open1)}
          aria-controls="collapse-text1"
          aria-expanded={open1}
        > space invaders | solo project | 7 days
        </a>

        <Collapse in={open1}>
          <div id="collapse-text1" className="container content fw-lighter">
            <p className="col hidden-text bgClip">A grid based shoot em up game built in JavaScript, HTML & CSS.
              Here I was able to apply everything learnt in the first few weeks and present it in the form of a single player game. 
              Although a classic arcade game, I focused on making sure the player controls and gameplay runs smoothly. 
              I also added up down controls feature to allow the user experience to be more advanced. 
              The styling is a mix of retro and contemporary, with a space themed background. 
              The game is not mobile friendly and sound files were corrupted when deploying. 
              I would very much like to revisit and improve the game further.</p>

            <div className="container">
              <div className="d-flex flex-row justify-content-center mt-n20">
                <a href="https://achan81.github.io/sei-project-01/" rel="noopener noreferrer" target="_blank">
                  <img alt="project1" src="https://i.imgur.com/jYp35wH.png" className="icon project1-image col"/></a>
                <a href="https://github.com/Achan81/sei-project-01/blob/main/readme.md" rel="noopener noreferrer" target="_blank">
                  <img alt="readme1" src="https://i.imgur.com/yWic7vC.png" className="icon readme1-image col"/></a>
              </div>
            </div>
            <img src= "https://i.imgur.com/9F1ukTo.png" className="col-6 rounded border border-1 border-dark"/>
          </div>
        </Collapse>    

        <hr className="bg-dark border-1 border-top border-dark"></hr>

        {/* PROJECT 2 * * * * * */}
        <a
          className="bgClip project-title text-decoration-none bg-transparent text-uppercase text-dark border-none btn-outline-dark fw-bold"
          onClick={() => setOpen2(!open2)}
          aria-controls="collapse-text2"
          aria-expanded={open2}
        > heros & villains db | pair project | 48 hours hackathon
        </a>
        <Collapse in={open2}>
          <div id="collapse-text2" className="content fw-lighter">
            <p className="hidden-text bgClip ">As a pair, we built a React.js app which used an external Superhero-API (Multiple universes superheroes open-source REST API). 
        The project allowed me to learn to pair-code, project plan, and call data from existing API’s. 
        Bulma CSS Framework used for the first time. 
        This project helped me to understand my own strengths and weaknesses at this stage of the course. 
        The app functions as a database for searching and filtering from a variety of heroes/villains from various publishers to see and compare stats.</p>
            
            <div className="container">
              <div className="d-flex flex-row justify-content-center mt-n20">
                <a href="https://havdb.netlify.app/" rel="noopener noreferrer" target="_blank">
                  <img alt="project2" src="https://i.imgur.com/XlwKBFw.png" className="icon project2-image col"/></a>
                  
                <a href="https://github.com/Achan81/sei-project-02/blob/main/README.md" rel="noopener noreferrer" target="_blank">
                  <img alt="readme2" src="https://i.imgur.com/yWic7vC.png" className="icon readme2-image col"/></a>
              </div>
            </div>
            <img src= "https://i.imgur.com/TRddwqX.png" className="col-6 rounded border border-1 border-dark"/>
          </div>
        </Collapse>      

        <hr className="bg-dark border-1 border-top border-dark"></hr>

        {/* PROJECT 3 * * * * * */}
        <a
          className="bgClip project-title text-decoration-none bg-transparent text-uppercase text-dark border-none btn-outline-dark fw-bold"
          onClick={() => setOpen3(!open3)}
          aria-controls="collapse-text3"
          aria-expanded={open3}
        > placebook | group project | 7 days
        </a>
        <Collapse in={open3}>
          <div id="collapse-text3" className="content fw-lighter">
            <p className="hidden-text bgClip ">As a pair, we built a React.js app which used an external Superhero-API (Multiple universes superheroes open-source REST API). 
            Full-Stack MERN app with CRUD functionality - MongoDB, Express.js, React.js & Node.js. 
          As a group, we created an app which allowed users to share travel memories in the form of photo uploads and geo mapping locations that linked with memories based on field input. 
          We all worked Full-Stack, while my specific focus was on building the front end structure, CSS and designing to be mobile ready. 
          CSS framework used on this project was Bootstrap and part React Bootstrap.</p>
            <div className="container">
              <div className="d-flex flex-row justify-content-center mt-n20">
                <a href="https://placebookapp.netlify.app/" rel="noopener noreferrer" target="_blank">
                  <img alt="project3" src="https://i.imgur.com/XUaI8kk.png" className="icon project3-image col"/></a>
                <a href="https://github.com/Achan81/sei-project-three-frontend/blob/main/README.md" rel="noopener noreferrer" target="_blank">
                  <img alt="readme3" src="https://i.imgur.com/yWic7vC.png" className="icon readme3-image col"/></a>
              </div>
            </div>
            <img src= "https://i.imgur.com/uj97fLV.png" className="col-6 rounded border border-1 border-dark"/>
          </div>
        </Collapse>        

        <hr className="bg-dark border-1 border-top border-dark"></hr>

        {/* PROJECT 4 * * * * * */}
        <a
          className="bgClip project-title text-decoration-none bg-transparent text-uppercase text-dark border-none btn-outline-dark fw-bold"
          onClick={() => setOpen4(!open4)}
          aria-controls="collapse-text4"
          aria-expanded={open4}
        > pawhub | group project | 7 days
        </a>
        <Collapse in={open4}>
          <div id="collapse-text4" className="content fw-lighter">
            <p className="hidden-text bgClip bgClip">Full-Stack MERN app with CRUD functionality using Python, Django API and SQL database, with React.js & TailwindCSS. 
          As a group, we made a clone app of the Dogs Trust website (renamed as Pawhub). 
          Aside from styling the site closely to its original, its key features mirrored things we learnt over the course. 
          Such as secure registration & log in, presenting dog index and search functionality, show pages. 
          Collectively we completed the Back End and seeded a database together. On the Front End we each had pages to build, my main contributions were the questionnaire forms and donation page. 
          CSS framework used on this project was Tailwind.</p>
            <div className="container">
              <div className="d-flex flex-row justify-content-center mt-n20">
                <a href="https://pawhubz.netlify.app/" rel="noopener noreferrer" target="_blank">
                  <img alt="project4" src="https://i.imgur.com/xB9oxFs.png" className="icon project4-image col"/></a>
                <a href="https://github.com/Achan81/sei-project-four-fe/blob/main/README.mdpaw" rel="noopener noreferrer" target="_blank">
                  <img alt="readme4" src="https://i.imgur.com/yWic7vC.png" className="icon readme4-image col"/></a>
              </div>
            </div>
            <img src= "https://i.imgur.com/IbSn5i5.png" className="col-6 rounded border border-1 border-dark"/>
          </div>
        </Collapse>        
        <hr className="bg-dark border-5 border-top border-dark"></hr>

      </div>
    </section>
  )
}
export default Projects
    












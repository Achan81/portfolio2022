import React from 'react'
import { Collapse } from 'react-bootstrap'

function SideProjects() {

  const [open1, setOpen1 ] = React.useState(false)

  return (
    <div className="mt-50 blurry-text" id="sideprojects">
      <div data-aos="fade-up" data-aos-duration="400" data-aos-easing="ease-in-out-back">
        <div className="title text-uppercase mb-0 fw-bold opacity-100">side projects</div>
        <hr className="border border-1 border-dark"></hr>
        <div className="fs-6 mb-0 opacity-100">additional developments made to improve or learn new skills</div>
        <hr className="border border-1 border-dark"></hr>

    
        {/* SIDE PROJECT 1 * * * * * */}

        <a
          className="project-title fs-5 text-decoration-none bg-transparent text-uppercase text-dark border-none btn-outline-dark opacity-100 fw-bold"
          onClick={() => setOpen1(!open1)}
          aria-controls="collapse-text1"
          aria-expanded={open1}
        > To-Do-List
        </a>

        <Collapse in={open1}>
          <div id="collapse-text1" className="container content fw-normal">
            <div className="col hidden-text opacity-100 mt-1">A To-Do-List built in JavaScript, HTML & CSS.
              <br></br>Here, I was able to reapply something I learnt during my SEI studies to make a useful app.
              <br></br>The app is responsive and suitable for both desktop and phone. Personally I think it is more convenient to be used on a phone.
              <br></br><br></br>FEATURES: 
              <br></br>Light mode & Dark mode
              <br></br>This app uses simple local storage to hold/save tasks on the page even if you close the page. 
              <br></br>Two methods of removing tasks (remove / remove completed tasks)
            </div>

            <div className="container">
              <div className="d-flex flex-row justify-content-center mt-1">
                <a href="https://achan81-todolist.netlify.app/" rel="noopener noreferrer" target="_blank">
                  <img alt="project1" src="https://i.imgur.com/pjbucbe.png" className="darkmode-ignore icon project1-image col"/></a>

                <a href="https://github.com/Achan81/to-do-list/blob/main/README.md" rel="noopener noreferrer" target="_blank">
                  <img alt="readme1" src="https://i.imgur.com/yWic7vC.png" className="project-images icon readme1-image col"/></a>
              </div>

            </div>
            <a href="https://achan81-todolist.netlify.app/" rel="noopener noreferrer" target="_blank">
              <img src= "https://i.imgur.com/yN6hPeH.png" className="darkmode-ignore col-6 rounded border border-1 border-dark interests-img"/></a>
          </div>
        </Collapse>    

        <hr className="border border-1 border-dark"></hr>

       

      </div>
    </div>
  )
}
export default SideProjects
    












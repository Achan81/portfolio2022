import React from 'react'

import NavBar from './components/common/NavBar'
import Home from './components/common/Home'
import About from './components/common/About'
import Experience from './components/common/Experience'
import Projects from './components/common/Projects'
import SideProjects from './components/common/SideProjects'
import Skills from './components/common/Skills'
import Interests from './components/common/Interests'
import Contact from './components/common/Contact'
import Footer from './components/common/Footer'

function App() {
  return (
    <>
      <NavBar />
      <div className="container-lg">
        <div className="row justify-content-center">
          <div className="mainapp col-11">
            <Home/>
            <About/>
            <Skills/>
            <Projects/>
            <SideProjects/>
            <Experience/>
            <Interests/>
            <Contact/>
            <Footer/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

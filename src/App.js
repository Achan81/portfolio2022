import React from 'react'

import NavBar from './components/common/NavBar'
import Home from './components/common/Home'
import About from './components/common/About'
import Experience from './components/common/Experience'
import Projects from './components/common/Projects'
import Skills from './components/common/Skills'
import Interests from './components/common/Interests'
import Contact from './components/common/Contact'

function App() {
  return (
    <>
      <NavBar />
      <div className="container-lg">
        <div className="row justify-content-center">
          <div className="col-12">
            <Home/>
            <About/>
            <Skills/>
            <Projects/>
            <Experience/>
            <Interests/>
            <Contact/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

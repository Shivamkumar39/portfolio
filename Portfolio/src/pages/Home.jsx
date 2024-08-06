import React, { useState } from 'react'
import HomePage from './Homepage'
import Project from './Project'
import Footer from './Footer'
import Contact from './Contact'
import Aboutme from './Aboutme'
import Skills from './Education'

const Home = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
        {/* <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/> */}
        <HomePage/>
        <Aboutme/>
        <Skills/>
        <Project/>
        <Contact/>
        <Footer/>

    </div>
  )
}

export default Home
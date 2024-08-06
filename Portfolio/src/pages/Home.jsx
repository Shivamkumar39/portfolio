import React from 'react'
import Navbar from './NavBar'
import HomePage from './Homepage'
import Project from './Project'
import Footer from './Footer'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HomePage/>
        <Project/>
        <Contact/>
        <Footer/>

    </div>
  )
}

export default Home
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Project from './components/Project'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {
  return (
    <main className='font-light text-white antialiased selection:bg-lime-300 selection:text-black'>
      <Navbar/>
      <Hero/>
      <Marquee/>
      <Project/>
      <About/>
      <Contact/>
    </main>
  )
}

export default App
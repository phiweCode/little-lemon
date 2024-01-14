import {Fragment, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import Highlights from './components/Highlights/Highlights'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'
import About from './components/About/About'

function App() {


  return (
    <Fragment>
      <Header />
        <main>
          <HeroSection />
          <Highlights />
          <Testimonials />
          <About />
        </main>
      <Footer />
    </Fragment>
  )
}

export default App

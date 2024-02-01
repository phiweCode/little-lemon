import React, {Fragment} from 'react'
import Header from '../components/Header/Header'
import HeroSection from '../components/HeroSection/HeroSection'
import Highlights from '../components/Highlights/Highlights'
import Testimonials from '../components/Testimonials/Testimonials'
import Footer from '../components/Footer/Footer'
import About from '../components/About/About'

function Homepage() {
  return (
    <Fragment>

    <main>
      <HeroSection />
      <Highlights />
      <Testimonials />
      <About />
    </main>
  
    </Fragment>
  )
}

export default Homepage

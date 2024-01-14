import React, {Fragment} from 'react'
import HeroImage from '../../assets/images/HeroImage.jpg'
import './HeroSection.css'

function HeroSection() {
  return (
    <Fragment>
        <section className='hero-section' >
            <article className='hero-section-text'>
                <h1>Little Lemon</h1>
                <p id="hero-location-text">Chicaco</p>
                <p id="hero-description-text">
                    Dolor ea enim dolor nostrud veniam ut id culpa do deserunt. Adipisicing ex veniam magna adipisicing. Adipisicing excepteur magna consectetur id tempor magna do amet labore amet ipsum exercitation consectetur.
                </p>
                <button type='button' className='trial-btn'>
                    Start trial now
                </button>
            </article>

            <article className='hero-section-img'>
               
            </article>
        </section>
    </Fragment>
  )
}

export default HeroSection

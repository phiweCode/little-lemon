import React, {Fragment} from 'react'
import review1 from '../../assets/images/image-review-1.jpg'
import review2 from '../../assets/images/image-review-2.jpg'
import review3 from '../../assets/images/image-review-3.jpg'
import review4 from '../../assets/images/image-review-4.jpg'

import fullstar from '../../assets/fullstar.svg'
import hollowstar from '../../assets/hollowstar.svg'
import halffilledstar from '../../assets/halffilledstar.svg'

import './Testimonials.css'

function Testimonials() {
  return (
    <Fragment>
        <section className='testimonial-section'>
            <article className='testimonial-header'>
            <p>Hear what other's are tasting...</p>
            </article>
            <article className='testimonial-cards'>
                <article  className="testimonial-grid">

                    <article className='testimonial-card'>
                        <article className='testimonial-profile'>
                            <img src={review1} />
                        </article>
                        <article className='testimonial-title'>
                            <p>Lisa Jenkins</p>
                        </article>
                        <article className='testimonial-review-message'>
                            <p>
                                Sunt amet excepteur non velit quis minim cillum laborum in irure. Dolore aute sit tempor in laborum anim duis anim tempor. 
                            </p>
                        </article>
                        <article className='review-star'>
                            <span>
                            <img src={fullstar} />
                            <img src={fullstar} />
                            <img src={fullstar} />
                            <img src={fullstar} />
                            <img src={hollowstar} />
                            </span>
                        </article>
                    </article>

                    <article className='testimonial-card'>
                        <article className='testimonial-profile'>
                            <img src={review4} />
                        </article>
                        <article className='testimonial-title'>
                            <p>Mia Johnsons</p>
                        </article>
                        <article className='testimonial-review-message'>
                            <p>
                                rure cillum do veniam culpa occaecat tempor. Cillum dolor aliquip ea adipisicing ex exercitation fugiat sit non elit.
                            </p>
                        </article>
                        <article className='review-star'>
                            <span>
                            <img src={fullstar} />
                            <img src={fullstar} />
                            <img src={fullstar} />
                            <img src={fullstar} />
                            <img src={hollowstar} />
                            </span>
                        </article>
                    </article>

                    <article className='testimonial-card'>
                        <article className='testimonial-profile'>
                            <img src={review2} />
                        </article>
                        <article className='testimonial-title'>
                            <p>Rishad Naidoo</p>
                        </article>
                        <article className='testimonial-review-message'>
                            <p>
                                Sunt amet excepteur non velit quis minim cillum laborum in irure. Dolore aute sit tempor in laborum anim duis anim tempor.
                            </p>
                        </article>
                        <article className='review-star'>
                            <span>
                            <img src={fullstar} />
                            <img src={fullstar} />
                            <img src={fullstar} />
                            <img src={fullstar} />
                            <img src={hollowstar} />
                            </span>
                        </article>
                    </article>

                    <article className='testimonial-card'>
                        <article className='testimonial-profile'>
                            <img src={review3} />
                        </article>
                        <article className='testimonial-title'>
                            <p>Alfred Kurumba</p>
                        </article>
                        <article className='testimonial-review-message'>
                            <p>
                                Sunt amet excepteur non velit quis minim cillum laborum in irure. Dolore aute sit tempor in laborum anim duis anim tempor. Culpa irure cillum do veniam culpa occaecat tempor.
                            </p>
                        </article>
                        <article className='review-star'>
                            <span>
                            <img src={fullstar} />
                            <img src={fullstar} />
                            <img src={fullstar} />
                            <img src={fullstar} />
                            <img src={hollowstar} />
                            </span>
                        </article>
                    </article>

                </article>
            </article>
        </section>
    </Fragment>
  )
}

export default Testimonials

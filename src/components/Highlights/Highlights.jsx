import React, {Fragment} from 'react'
import Truck from '../../assets/Truck.svg'
import './Highlights.css'

function Highlights() {
  return (
    <Fragment>
        <section className='highlights'>
            <article className='highlight-header'>
                <p>This week's Specials</p>
                <article className='on-the-menu'>
                <p>Online menu</p>
                </article>
            </article>
            <article className='meal-cards'>
                <article className='meal-grid'>
                    <article className='meal-card'>
                        <article className='meal-image meal-1'>

                        </article>
                        <article className='card-text'>

                        <article className='meal-name-and-price'>
                        <span><p>Green Salad</p></span>
                        <span><p>$25.89c</p></span>
                        </article>
                        <article className='meal-description'>
                        <p>
                            Ullamco reprehenderit cupidatat veniam officia fugiat anim nisi id reprehenderit. Dolor ullamco anim Lorem anim sit nostrud eu officia exercitation quis mollit. Duis laborum duis sunt anim id sint fugiat veniam reprehenderit ipsum fugiat cupidatat elit.
                        </p>
                        </article>
                        <article className='meal-delivery'>
                            <span><p>Order a delivery</p></span>
                            <span><img src={Truck} /></span>
                        </article>
                        </article>
                    </article>
                    <article className='meal-card'>
                        <article className='meal-image meal-2'>

                        </article>
                        <article className='card-text'>


                        <article className='meal-name-and-price'>
                        <span><p>Green Salad</p></span>
                        <span><p>$25.89c</p></span>
                        </article>
                        <article className='meal-description'>
                        <p>
                            Ullamco reprehenderit cupidatat veniam officia fugiat anim nisi id reprehenderit. Dolor ullamco anim Lorem anim sit nostrud eu officia exercitation quis mollit. Duis laborum duis sunt anim id sint fugiat veniam reprehenderit ipsum fugiat cupidatat elit.
                        </p>
                        </article>
                        <article className='meal-delivery'>
                            <span><p>Order a delivery</p></span>
                            <span><img src={Truck} /></span>
                        </article>
                        </article>
                    </article>
                    <article className='meal-card'>
                        <article className='meal-image meal-3'>

                        </article>

                        <article className='card-text'>


                        <article className='meal-name-and-price'>
                        <span><p>Green Salad</p></span>
                        <span><p>$25.89c</p></span>
                        </article>
                        <article className='meal-description'>
                        <p>
                            Ullamco reprehenderit cupidatat veniam officia fugiat anim nisi id reprehenderit. Dolor ullamco anim Lorem anim sit nostrud eu officia exercitation quis mollit. Duis laborum duis sunt anim id sint fugiat veniam reprehenderit ipsum fugiat cupidatat elit.
                        </p>
                        </article>
                        <article className='meal-delivery'>
                            <span><p>Order a delivery</p></span>
                            <span><img src={Truck} /></span>
                        </article>

                        </article>
                    </article>
                </article>
            </article>
        </section>
    </Fragment>
  )
}

export default Highlights

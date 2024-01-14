import React, {Fragment} from 'react'
import Logo from '../../assets/Logo.svg'
import './Footer.css'

function Footer() {
  return (
    <Fragment>
        <footer className='main-footer'>
            <article className='footer-content-container'>
                <article className='footer-logo'>
                    <img src={Logo} />
                </article>
                <article className='copyright-content'>
                    <article className='contacts'>
                        <article className='footer-subheader'>
                            <p>Contacts</p>
                        </article>

                        <article className='footer-details'>
                            <ul>
                                <li>call: +27 11 505 6899</li>
                                <li>email: littlelemonservice@domain.com</li>
                                <li>fax: +27 11 504 6899</li>
                                <li>address:Lemon Grove Street, Zestyville, Citrusland, 1234
                                </li>
                            </ul>

                        </article>

                    </article>
                    <article className='social-media-links'>
                        <article className='footer-subheader'>
                        <p>Social media</p>
                    </article>

                    <article className='footer-details'>
                        <ul>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                        </ul>

                    </article>
                    </article>
                    <article className='sitemap'>
                        <article className='footer-subheader'>
                        <p>Site map</p>
                        </article>

                        <article className='footer-details'>
                        <ul>
                        <li class='nav-links'><a href="#">- Home</a></li>
                        <li class='nav-links'><a href="#">- About</a></li>
                        <li class='nav-links'><a href="#">- Menu</a></li>
                        <li class='nav-links'><a href="#">- Reservations</a></li>
                        <li class='nav-links'><a href="#">- Order online</a></li>
                        <li class='nav-links'><a href="#">- Login</a></li>
                    </ul>

                    </article>
                    </article>
                </article>
            </article>
        </footer>
    </Fragment>
  )
}

export default Footer

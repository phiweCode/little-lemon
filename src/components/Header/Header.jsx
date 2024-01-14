import React, {Fragment} from 'react'
import Logo from '../../assets/Logo.svg'
import './Header.css'

function Header() {
  return (
    <Fragment>
      <header className='main-header'>

        <article id="logo">
            <img src={Logo} />
        </article>
        
        <nav id="main-nav">
            <ul>
                <a><li className='nav-links'>Home</li></a>
                <a><li className='nav-links'>About</li></a>
                <a><li className='nav-links'>Menu</li></a>
                <a><li className='nav-links'>Reservations</li></a>
                <a><li className='nav-links'>Order online</li></a>
                <a><li className='nav-links'>Login</li></a>
            </ul>
        </nav>
        </header>
    </Fragment>
  )
}

export default Header

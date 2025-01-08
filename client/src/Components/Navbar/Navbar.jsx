import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div>
        <nav>
            <ul>
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/water-coolers'>WATER COOLERS</Link></li>
                <li><Link to='/ice-machines'>ICE MACHINES</Link></li>
                <li><Link to='/why-choose-us'>WHY CHOOSE US?</Link></li>
                <li><Link to='/about-us'>ABOUT US</Link></li>
                <li><Link to='/contact-us'>CONTACT US</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
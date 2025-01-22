import React, { useState} from 'react'
import logo from '../../Assets/cwc-logo-1-nobg.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

function Navbar() {

  // Menu functionality
  const [showMenu, setShowMenu] = useState(false);

   // Toggle menu visibility
   const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
        <nav>
            <a href="/">
              <img src={logo} alt="Capital Water Coolers"  className='logo'/>
            </a>
            <ul className={showMenu ? "active" : ""}>
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/water-coolers'>WATER COOLERS</Link></li>
                <li><Link to='/ice-machines'>ICE MACHINES</Link></li>
                <li><Link to='/why-choose-us'>WHY CHOOSE US?</Link></li>
                <li><Link to='/about-us'>ABOUT US</Link></li>
                <li><Link to='/contact-us'>CONTACT US</Link></li>
                <FontAwesomeIcon icon={faXmark} onClick={toggleMenu}/>
            </ul>
            <FontAwesomeIcon icon={faBars} onClick={toggleMenu}/>
        </nav>
    </div>
  )
}

export default Navbar
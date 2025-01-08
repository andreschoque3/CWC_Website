import React from 'react'
import './Strip.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

function Strip() {
  return (
    <div>
        <div className='strip'>
            <div className='text'>
                <p>SERVING THE WASHINGTON DC METRO AREA WITH THE INDUSTRY'S BEST OFFICE WATER AND ICE DISPENSERS</p>
            </div>
            <div className='icons'>
                <a href='https://facebook.com'><FontAwesomeIcon icon={faFacebookSquare}/></a>
                <a href="https://linkedin.com"><FontAwesomeIcon icon={faLinkedin}/></a>
                <Link to='/contact-us'><FontAwesomeIcon icon={faPhone}/></Link>
                <Link to='/contact-us'><FontAwesomeIcon icon={faEnvelope}/></Link>
            </div>
        </div>
    </div>
  )
}

export default Strip
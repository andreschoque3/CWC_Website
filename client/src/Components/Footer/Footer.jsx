import React from 'react'
import './Footer.css'
import bbb from '../../Assets/bbb.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

function Footer() {

    const handleImgClick = (url) => {
        window.open(url, '_blank', 'nonopener, noreferrer')
    }

  return (
    <div className='footer'>
        <div className='container'>
            <div className='text-cols'>
                <div className='info-c'>
                    <h3>Capital Water Coolers</h3>
                    <hr  className='line'/>
                    <div className='i-al'>
                        <FontAwesomeIcon icon={faPhone} className='phone'/>
                        <p>(703)-229-8613</p>
                    </div>
                    <div className='i-al'>
                        <FontAwesomeIcon icon={faEnvelope} className='email'/>
                        <p>info@capitalwatercoolers.com</p>
                    </div>
                </div>
                <div className='service-a'>
                    <h3>Our Service Areas</h3>
                    <hr  className='line'/>
                    <p>Washington, DC Metro Area including:</p>
                    <br />
                    <p>Northern Virginia counties of Arlington, Fairfax, Loudoun & Alexandria
                    Major Virginia cities include Arlington, Rosslyn, Alexandria, Reston, Herndon, Dulles, McLean & Tysons Corner</p>
                    <br />
                    <p>Maryland Counties including Montgomery and Prince Georges Counties</p>
                    <br />
                    <p>Major cities including Silver Spring, Columbia, Baltimore, Germantown, Federick</p>
                </div>
                <div className='bbb'>
                    <h3>BBB Accredited</h3>
                    <hr  className='line'/>
                    <img src={bbb} alt="bbb-rating" onClick={() => handleImgClick("https://https://www.bbb.org/us/md/aspen-hill/profile/bottleless-water-cooler/capital-water-coolers-0241-236025697#sealclick")} />
                </div>
            </div>
            <div className='copyright'>
                <p>© 2025 Capital Water Coolers</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
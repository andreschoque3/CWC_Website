import React, { useEffect } from 'react'
import './Contact.css'
import Navbar from '../../Components/Navbar/Navbar'
import Strip from '../../Components/Strip/Strip'
import Footer from '../../Components/Footer/Footer'

function Contact() {

  useEffect(() => {
    document.title = 'Contact Us - Capital Water Coolers';
  }, []);

  return (
    <div>
        <Strip/>
        <Navbar/>
        <div className='details'>
            <div className='container'>
                <div className='title'>
                    <h1>Contact Us</h1>
                </div>
                <div className='contact'>
                    <div className='map'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d774.5180243834242!2d-77.11646293039733!3d39.05927109823065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7cdcd3695f07f%3A0x4ba343c5d6b6ff61!2s5709%20Frederick%20Ave%2C%20Rockville%2C%20MD%2020852!5e0!3m2!1sen!2sus!4v1736714320165!5m2!1sen!2sus"
                            width="600"
                            height="450"
                            style={{ border: '0', borderRadius: '10px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        ></iframe>
                    </div>
                    <div className='form-c'>
                        <form action="">
                            <input type="text" name="Name" placeholder='Name' required />
                            <input type="email" name="Email" placeholder='Email' required />
                            <input type="text" name='Subject' placeholder='Subject' required />
                            <textarea name="Message" rows='6' placeholder='Message'></textarea>
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div className='message'>
            <div className='container'>
            <h1>Call Capital Water Coolers now in Northern Virginia, MD and Washington, D.C.</h1>
            <p>Call now for the best water coolers and ice machines in the greater metro area. We provide top quality equipment rentals and service. Try us free for seven days. Fill out the form or call now to learn more.</p>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default Contact
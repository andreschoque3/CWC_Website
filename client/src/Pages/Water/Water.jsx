import React, { useEffect, useRef } from 'react'
import './Water.css'
import cooler1 from '../../Assets/cooler1-1.png';
import cooler2 from '../../Assets/cooler2-2.png'
import cooler3 from '../../Assets/cooler3-3.png'
import cooler4 from '../../Assets/cooler4-4.png'
import cooler5 from '../../Assets/cooler5-5.png'
import Strip from '../../Components/Strip/Strip';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Coolers from '../../Components/Coolers/Coolers';

function Water() {

  useEffect(() => {
      document.title = 'Water Coolers - Capital Water Coolers';
    }, []);

  const targetRef = useRef(null);
    
      // Function to handle scrolling
      const scrollToSection = () => {
          targetRef.current.scrollIntoView({ behavior: 'smooth' });
      };

  const coolerInfo = [
    {
      img: cooler1,
      alt: 'option-1',
      title: 'WL-250 Countertop',
    },
    {
      img: cooler2,
      alt: 'option-2',
      title: 'WL-250 Tower'
    },
    {
      img: cooler3,
      alt: 'option-3',
      title: 'WL-290 HC Tower'
    },
    {
      img: cooler4,
      alt: 'option-4',
      title: 'WL-3 Firewall'
    },
    {
      img: cooler5,
      alt: 'option-5',
      title: 'Borg & Overström B4'
    }
  ]

  return (
    <div>
      <div className='water'>
        <Strip/>
        <Navbar/>
        <div className='container'>
            <div className='simple-txt'>
              <h1>Cleaner Safer Reliable Water</h1>
              <p>Call us today and let us guide you.</p>
              <button className='btn' onClick={scrollToSection}>Learn More</button>
            </div>
        </div>
      </div>

      <div className='info-abt' ref={targetRef}>
        <div className='container'>
          <h1>Our Water Machines at a Glance</h1>
          <p>Give your employees the perfect water cooler to gather around. Capital Water Coolers 
            stocks the latest models that offer features like hot and cold water dispensers, no-mess 
            drain trays, and UV protection to keep your drinking water safer and cleaner.</p>
          <br />
          <p>We understand that you have a lot of models to consider. Each one is named with a series 
            of numbers and letters that doesn’t really tell you much about the model and what it offers. 
            That is why we are here to help. As water cooler rental and service specialists, we can give 
            you honest answers to any of your questions and help you pick out the model that is ideal 
            for your office environment.</p>
          <br />
          <p>Find the storage capacity and level of output that will serve your employees, clients, vendors, 
            and of course the boss. If you need it, we carry just the model. Call now and take advantage of 
            our seven-day trial, where you get to try our equipment absolutely free for one whole week.</p>
          
          <h1>All Products</h1>
          <div className='products'>
            <div className='cols'>
              {coolerInfo.map((items, index) => (
                <Coolers
                  key={index}
                  alt={items.alt}
                  img={items.img}
                  title={items.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Water
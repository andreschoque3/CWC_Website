import React, { useEffect, useRef } from 'react'
import './Ice.css'
import ice1 from '../../Assets/ice1-1.png';
import ice2 from '../../Assets/ice2-2.png';
import ice3 from '../../Assets/ice3-3.png';
import ice4 from '../../Assets/ice4-4.png';
import ice5 from '../../Assets/ice5-5.png';
import ice6 from '../../Assets/ice6-6.jpg';
import ice7 from '../../Assets/ice7-7.jpg';
import Strip from '../../Components/Strip/Strip';
import Navbar from '../../Components/Navbar/Navbar';
import Coolers from '../../Components/Coolers/Coolers';

function Ice() {

  useEffect(() => {
        document.title = 'Water Coolers - Capital Water Coolers';
      }, []);
  
  const targetRef = useRef(null);
      
      // Function to handle scrolling
      const scrollToSection = () => {
          targetRef.current.scrollIntoView({ behavior: 'smooth' });
      };

   const iceInfo = [
      {
        img: ice1,
        alt: 'option-1',
        title: 'Follett 7-Series Countertop',
      },
      {
        img: ice2,
        alt: 'option-2',
        title: 'Follett 7-Series Tower'
      },
      {
        img: ice3,
        alt: 'option-3',
        title: 'Follett 15-Series Countertop'
      },
      {
        img: ice4,
        alt: 'option-4',
        title: 'Follett 15-Series Tower'
      },
      {
        img: ice5,
        alt: 'option-5',
        title: 'WL-900'
      },
      {
        img: ice6,
        alt: 'option-6',
        title: 'Wellsys i15 Countertop or Tower'
      },
      {
        img: ice7,
        alt: 'option-7',
        title: 'Wellsys i16 Countertop or Tower'
      }
    ]

  return (
    <div>
      <div className='ice'>
      <Strip/>
      <Navbar/>
      <div className='container'>
            <div className='simple-txt'>
              <h1>Get Perfect Ice Every Time</h1>
              <p>Call us today and let us show you.</p>
              <button className='btn' onClick={scrollToSection}>Learn More</button>
            </div>
        </div>
      </div>

      <div className='info-abt' ref={targetRef}>
        <div className='container'>
            <h1>Our Ice Machines at a Glance</h1>
            <p><strong>WL-900:</strong> The WL Ice 900 offers advanced reverse osmosis filtration, ensuring clean and pure water 
              while producing 44 lbs of crystal-clear gourmet ice daily with an 8 lbs storage capacity. It provides 
              separate hot, cold, and ambient water options alongside ice, making it versatile for high-traffic 
              environments. Its energy-efficient system, touch-sensitive controls, and sleek design enhance user 
              convenience and style.</p>
            <br />
            <p><strong>Wellsys i15:</strong> Compact and versatile, the Wellsys i15 produces 125 lbs of chewable ice daily and 
              features 7 lbs of storage. It offers hot and ambient water options, with advanced hygiene features like LED UV 
              technology to maintain cleanliness. The SafeTouch™ surface with antimicrobial technology and touch-activated sensors 
              ensure a safe and user-friendly experience.</p>
            <br />
            <p><strong>Wellsys i16:</strong> The Wellsys i16 is a high-capacity ice machine producing 165 lbs of chewable ice daily with 16.5 lbs 
              of storage. It provides hot and ambient water options and features LED UV sanitization in both the ice bin and water 
              path for superior hygiene. Its compact design and optional freestanding base make it suitable for a variety of spaces.</p>
            <br />
            <p><strong>Follett 7 Series:</strong> The Follett 7 Series is compact and ideal for smaller spaces, producing 100 lbs of chewable ice daily 
              with 7 lbs of storage. It features touch-activated dispensing to minimize contamination and antimicrobial protection on 
              key components, ensuring hygiene and ease of use. It requires no drain, making installation simple and flexible.</p>
            <br />
            <p><strong>Follett 15 Series:</strong> Designed for medium to large workplaces, the Follett 15 Series produces 100 lbs of chewable ice daily 
              with 15 lbs of storage. It offers touch-activated dispensing, antimicrobial protection, and flexible installation options. 
              The environmentally friendly refrigerant and high-capacity design make it an efficient and reliable choice.</p>
            
            <h1>All Products</h1>

            <div className='products'>
              <div className='cols'>
              {iceInfo.map((items, index) => (
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
    </div>
  )
}

export default Ice
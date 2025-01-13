import React, { useEffect, useRef } from 'react'
import { toast } from 'react-toastify';
import './Why.css'
import Navbar from '../../Components/Navbar/Navbar';
import Strip from '../../Components/Strip/Strip';
import Footer from '../../Components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

function Why() {

  useEffect(() => {
      document.title = 'Why Choose Us - Capital Water Coolers';
    }, []);

    const targetRef = useRef(null);
    
        // Function to handle scrolling
        const scrollToSection = () => {
            targetRef.current.scrollIntoView({ behavior: 'smooth' });
        };
    
        const handleDownloadPDF = (pdfFileName, fileName) => {
            try {
              const pdfFileUrl = process.env.PUBLIC_URL + `/${pdfFileName}`;
          
              fetch(pdfFileUrl)
                .then((response) => {
                  if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                  }
          
                  return response.blob();
                })
                .then((blob) => {
                  const blobUrl = URL.createObjectURL(blob);
                  const link = document.createElement('a');
                  link.href = blobUrl;
                  link.download = fileName;
          
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                })
                .catch((error) => {
                  console.error(`Error fetching or processing the PDF file (${pdfFileName}):`, error);
                  toast.error('Error fetching or processing the PDF file.')
                  
                });
            } catch (error) {
              console.error(`Error constructing PDF file URL (${pdfFileName}):`, error);
              toast.error('Error constructing PDF file URL.')
            }
          };

  return (
    <div>
        <div className='why'>
            <Strip/>
            <Navbar/>
            <div className='container'>
                <div className='simple-txt'>
                    <h1>Why Choose Us?</h1>
                    <button className='btn'onClick={scrollToSection}>Learn More</button>
                </div>
            </div>
        </div>

        <div className='info-abt' ref={targetRef}>
            <div className='container'>
                <h3>Our Office Water Coolers Keep You Refreshed & Satisfied as Our Customer</h3>
                <p>When you want cleaner and safer water and ice, your only choice should be Capital Water Coolers. We conveniently 
                    service the Northern Virginia, MD and Washington, DC territories and can deliver the model you want fast to your 
                    office door. And we only carry the best models on the market. </p>
                <h3>A Full Line of State-of-the-Art Water Coolers & Ice Makers</h3>
                <p>Capital Water Coolers is an authorized distributor for all the better commercial brands of ice and water cooler machines. 
                    offer the kinds of features we want for you, our valued customer.</p>
                <br />
                <p>Our water coolers and ice makers come with sealed, in-tank sterilization systems, advanced filtration, and reverse osmosis 
                    filtration systems. The touch surfaces are made with safe, tested, antibacterial materials such as BioCote, and silver oxide 
                    that prevent the spread of bacteria and disease. All of this translates into cleaner, safer and more dependable water and ice 
                    for your office environment</p>
                <h3>People Need Water & We Care About People</h3>
                <p>We started Capital Water Coolers because we work in an office and we know how important it is to have cleaner, safer, and more 
                    reliable water and ice. We got tired of services that failed to deliver on the promises they made. We grew weary of using equipment 
                    that did not stand up to constant use. And we wanted to work with models that only focused on sterilized water for ultimate safety 
                    and health. That is why we deliver Waterlogic, Wellsys, Borg & Overstrom, and Follett water coolers and ice makers to offices throughout 
                    Northern Virginia, MD and Washington, DC. Our customers know they can rely on us for the best equipment and customer service found in 
                    the greater metro area.</p>
                <h3>What Sets Our Brand Apart</h3>
                <p>Not only do we provide excellent brand equipment and a fast delivery service, but we can repair your equipment and fix your service issues 
                    anytime you have the need. As certified and trained brand distributors and service agents, we can diagnose your issue and have your water 
                    or ice machine working in quick order. That is our promise to you as our Capital Water Coolers partner.</p>
                <h3>Try Us Free for 7 Days</h3>
                <p>Our focus on convenience even extends to a free seven-day trial offer. We understand that renting a water cooler or ice machine requires a 
                    commitment. We want you to feel comfortable with your choice of equipment and service. For that reason, we invite you to get a countertop 
                    or standalone water cooler or ice machine for your office. Try the equipment for seven days and then decide if the brand in question is 
                    the right one for you.</p>
                <div className='pdf-dn'>
                    <h3>Ready to Rent a Water Cooler or Ice Machine for Less? Download this PDF to get an in-depth explanation.</h3>
                    <div className='pdf-al'>
                        <button className='btn' onClick={() => handleDownloadPDF('capital-water-coolers-presentation.pdf', 'Capital Water Coolers Presentation.pdf')}>Download PDF <FontAwesomeIcon icon={faFileDownload}/> </button>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default Why
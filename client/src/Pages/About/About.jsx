import React, { useEffect, useRef }  from 'react'
import './About.css'
import Navbar from '../../Components/Navbar/Navbar'
import Strip from '../../Components/Strip/Strip'
import Footer from '../../Components/Footer/Footer'

function About() {

  useEffect(() => {
    document.title = 'About Us - Capital Water Coolers';
  }, []);

  const targetRef = useRef(null);

    // Function to handle scrolling
    const scrollToSection = () => {
        targetRef.current.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <div>
        <div className='about'>
            <Strip/>
            <Navbar/>
            <div className='container'>
                <div className='simple-txt'>
                    <h1>About Us</h1>
                    <button className='btn' onClick={scrollToSection}>Read More</button>
                </div>
            </div>
        </div>
        <div className='info-abt' ref={targetRef}>
            <div className='container'>
                <h1>Office Water Cooler & Ice Machine Rentals and Service by Experienced Technicians</h1>
                <h3>Water coolers are not all the same</h3>
                <p>We rent the industry’s best bottleless water coolers and ice makers to customers in the 
                    Washington, D.C. Region. Because your health is important, you should get the best water 
                    and ice dispensers available at an affordable price. Offices inevitably have users who 
                    are sick with dirty hands and drinking glasses that can and do pass on viruses and bacteria 
                    to dispensers that can make other users sick. Untreated equipment surfaces, un-sanitized water 
                    tanks and open ice bins can quickly become breeding grounds for harmful bacteria and viruses that 
                    you do not want to touch or ingest. As water experts, we know the risks of our competitors' equipment, 
                    but the average user does not. Many water and ice machines are cheap, poorly designed, and not durable. 
                    Over the years we tested various brands and models and were disappointed with the quality of many. </p>
                <h3>Get the best water and ice dispensers available</h3>
                <p>Our product research efforts, finally, led us to be the best-in-class commercially available bottleless 
                    water coolers and office ice makers that we can confidently offer to our customers. At Capital Water Coolers, 
                    we seek to treat our customers the way we would like to be treated. Our reputation is important to us. If you 
                    are looking for Cleaner, Safer, Dependable, Eco-friendly, Cost Effective, and Smartly Designed water and ice 
                    dispensers for your company or organization, then give us a call or fill out the contact form.</p>
                <h3>We are local, accessible, and accountable</h3>
                <p>If you ever have a question or problem, you can get a real person on the phone to assist you. We are a small, 
                   family-owned business that lives and works in the same community as our customers. We are members of the Better 
                   Business Bureau and our local Chamber of Commerce. Our office and warehouse are in Silver Spring, Maryland near 
                   Washington, D.C., and Northern Virgnia.</p>
                <h3>We serve the Washington, DC Metro Area</h3>
                <p>We serve Washington, DC and surrounding areas including Northern Virginia counties of Arlington, Fairfax, Loudoun, 
                    and Alexandria. Some of the major Virginia cities we serve include Arlington, Rosslyn, Alexandria, Reston, Herndon, 
                    Dulles, McLean, and Tysons Corner. In Maryland we serve Montgomery and Prince George’s Counties. Some of the Suburban 
                    Maryland cities around DC that we serve include Silver Spring, Rockville, Bethesda, College Park, the I-270 Tech Corridor, 
                    Gaithersburg, and Germantown.</p>
                <h3>Get your Free Trial Today</h3>
                <p>Please take us up on our free one-week water cooler trial at your location. We want you to be able to make an informed 
                    risk-free decision. We hope you will try us. You will not regret it.</p>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default About
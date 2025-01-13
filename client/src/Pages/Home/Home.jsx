import React, { useEffect } from 'react'
import './Home.css'
import office from '../../Assets/office.jpg'
import germs from '../../Assets/germs.jpg'
import chart from '../../Assets/chart.jpg'
import lab from '../../Assets/lab.jpg'
import product from '../../Assets/product1.jpg'
import Navbar from '../../Components/Navbar/Navbar'
import Strip from '../../Components/Strip/Strip';
import Cases from '../../Components/cases/Cases'
import Footer from '../../Components/Footer/Footer'

function Home() {

  useEffect(() => {
    document.title = 'Home - Capital Water Coolers';
  }, []);

  const casesInfo = [
    {
      img: office,
      alt: "Office",
      title: "A More Hygienic Office Space",
      desc: "Employees bringing bottled water to the office spreads germs and harms the environment. Bottleless water and ice machines are eco-friendly and healthier all around."
    },
    {
      img: germs,
      alt: "Office",
      title: "A Case Study in the H1N1 Virus",
      desc: "Prevent the flu and other deadly illnesses by renting a water bottle and ice machine from us, your local service provider."
    },
    {
      img: chart,
      alt: "Office",
      title: "Help Reduce Your Carbon Footprint",
      desc: "Renting a water cooler and ice machine saves water and energy costs. It's excellent for the environment and prevents landfills being stuffed with millions of tiny plastic bottles."
    },
    {
      img: lab,
      alt: "Office",
      title: "Fully Certified and Customer Focused",
      desc: "When you rent a water bottle and ice machine from us, you get the best prices, most professional service, and purified ice and water whenever you want."
    }
  ]

  return (
    <div>
      <div className='header'>
        <Strip/>
        <Navbar/>
        <div className='container'>
            <div className='head-txt'>
              <h1>Isn't it Time you Had Cleaner, Safer, Reliable Water and Ice at Work?</h1>
              <p>Let <em>Capital Water Coolers</em> show you the way today.</p>
              <div className='btn-div'>
                <button className='btn'>Learn More</button>
              </div>
            </div>
        </div>
      </div>

      <div className='products'>
        <div className='container'>
          <h1>The Best Water Cooler & Ice Machine Rentals and Service</h1>
          <p>We give you safer, cleaner, and more reliable water in Northern Virginia, MD, and Washington, DC.</p>
          <div className='img-align'>
            <img src={product} alt="" />

            {/* slider logic */}
          </div>
        </div>
      </div>

      <div className='sec-mes'>
        <div className='container'>
          <h1>Experience the Latest Advancements in Water Cooler and Ice Machine Technology</h1>
          <p>Capital Water Coolers carries a full line of state-of-the-art water coolers and ice machines. Each model comes with unique features that make for the ideal fit in your office environment. 
            Get cold or hot water whenever you please and perfectly formed ice every time. This is refreshing convenience at its best, and you can find it by calling Capital Water Coolers, now serving 
            businesses throughout Northern Virginia, MD, and Washington, DC.</p>
        </div>
      </div>

      <div className='trial'>
        <div className='container'>
          <div className='grp'>
            <div className='text'>
              <h2>Sign Up for Our Free Seven-Day Trial</h2>
              <p>Try a new water cooler or ice machine in your office FREE – no commitment required.</p>
            </div>
            <div className='btn-aln'>
              <button>SIGN UP NOW</button>
            </div>
          </div>
        </div>
      </div>

      <div className='cases'>
        <div className='container'>
          <h1>Learn Why More Offices are Choosing Water Coolers & Ice Machine Rentals</h1>

          <div className='cols'>
            {casesInfo.map((val, index) => (
              <Cases
                key={index}
                img={val.img}
                alt={val.alt}
                title={val.title}
                desc={val.desc}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer/>

    </div>
  )
}

export default Home
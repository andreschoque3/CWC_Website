import React, { useEffect } from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Strip from '../../Components/Strip/Strip';

function Home() {

  useEffect(() => {
    document.title = 'Home - Capital Water Coolers';
  }, []);

  return (
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
  )
}

export default Home
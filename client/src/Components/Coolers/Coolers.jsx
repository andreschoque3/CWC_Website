import React from 'react'

const Coolers = ( {img, alt, title} ) => {
  return (
    <div className='info-cd'>
        <img src={img} alt={alt} />
        <h3>{title}</h3>
        <div className='btn-a'>
            <button className='btn'>Learn More</button>
        </div>
    </div>
  )
}

export default Coolers
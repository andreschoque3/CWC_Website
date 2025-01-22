import React from 'react'

const Carousel = ({img, alt}) => {
  return (
    <div className='vid-et'>
        <img src={img} alt={alt} />
    </div>
  )
}

export default Carousel
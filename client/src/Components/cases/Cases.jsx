import React from 'react'

const Cases = ({img, alt, title, desc}) => {
  return (
    <div className='info-cd'>
        <img src={img} alt={alt} />
        <h3>{title}</h3>
        <p>{desc}</p>
    </div>
  )
}

export default Cases
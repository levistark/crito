import React from 'react'
import FiveStars from '../icons/FiveStars'

const Testimonial = ({text, imgUrl, imgAlt, name, position}) => {
  return (
    <>
        <div className="grid-item">
            <FiveStars/>
            <p>{text}</p>
            <div className="title-container">
                <div className="img-container">
                    <img src={imgUrl} loading="lazy" alt={imgAlt}/>
                </div>
                <div className="text-container">
                    <h5>{name}</h5>
                    <p>{position}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Testimonial
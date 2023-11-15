import React from 'react'

const ServiceCard = ({title, text}) => {
  return (
    <>
        <div>
            <span>------</span>                        
            <h5>{title}</h5>
            <p>{text}</p>
            <button><i className="fa-solid fa-arrow-right"></i></button>
        </div>
    </>
  )
}

export default ServiceCard
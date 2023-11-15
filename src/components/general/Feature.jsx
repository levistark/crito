import React from 'react'

const Feature = ({icon, title, text, className}) => {
  return (
    <div className={className}>
        {icon}
        <h5>{title}</h5>
        <p>{text}</p>
    </div>
  )
}

export default Feature
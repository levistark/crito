import React from 'react'

const TeamMember = ({imgUrl, imgAlt, name, position}) => {
  return (
    <>
        <div className="grid-item">
            <div className="img-container">
                <img src={imgUrl} loading="lazy" alt={imgAlt}/>
            </div>
            <h5>{name}</h5>
            <p>{position}</p>
        </div>
    </>
  )
}

export default TeamMember
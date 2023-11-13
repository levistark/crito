import React from 'react'
import imgVectorThick from '../../assets/images/Showcase/Vector.svg'
import imgVectorThin from '../../assets/images/Showcase/Vector-2.svg'
import { Link } from 'react-router-dom'

const SimpleShowcase = (props) => {
  return (
    <>
        <section className="simple-showcase">
          <div className="simple-showcase-container container">
              <Link to="/">Home</Link>
              <Link to={props.toUrl}><strong>{props.currentLink}</strong></Link>
              <h1><strong>News & Articles</strong></h1>
          </div>

          <img src={imgVectorThick} alt="flow vector image" className="img-vector-thick"/>
          <img src={imgVectorThin} alt="flow vector image" className="img-vector-thin"/>
        </section>
    </>
  )
}

export default SimpleShowcase
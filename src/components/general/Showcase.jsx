import React from 'react'
import showcaseImageMan from '../../assets/images/Showcase/bg-image.png'
import imgVectorThick from '../../assets/images/Showcase/Vector.svg'
import imgVectorThin from '../../assets/images/Showcase/Vector-2.svg'
import { Link } from 'react-router-dom'

const Showcase = () => {
  return (
    <>
        <section className="showcase">
            <div className="showcase-container container">
                <div className="content">
                    <h1><strong>We provide The <br/>Best Business <br/>Solutions</strong></h1>
                    <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                    <Link to='/contact' className="btn-consult">Get Consulting<i className="fa-solid fa-arrow-right"></i></Link>
                    <Link to='/contact' className="btn-learn">Learn More<i className="fa-solid fa-arrow-right"></i></Link>
                </div>
                <img src={showcaseImageMan} alt="showcase image of a man with a tablet" className="img-bg"/>
            </div>
            <img src={imgVectorThick} alt="flow vector image" className="img-vector-thick"/>
            <img src={imgVectorThin} alt="flow vector image" className="img-vector-thin"/>
        </section>
    </>
  )
}

export default Showcase
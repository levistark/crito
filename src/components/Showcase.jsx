import React from 'react'
import showcaseImageMan from '../assets/images/Showcase/bg-image.png'
import vector from '../assets/images/Showcase/Vector.svg'
import vector2 from '../assets/images/Showcase/Vector-2.svg'

const Showcase = () => {
  return (
    <>
        <section className="showcase">
            <div className="showcase-container container">
                <div className="content">
                    <h1><strong>We provide The <br/>Best Business <br/>Solutions</strong></h1>
                    <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                    <button className="btn-consult">Get Consulting<i className="fa-solid fa-arrow-right"></i></button>
                    <button className="btn-learn">Learn More<i className="fa-solid fa-arrow-right"></i></button>
                </div>
                <img src={showcaseImageMan} alt="showcase image of a man with a tablet" className="img-bg"/>
            </div>
            <img src={vector} alt="flow vector image" className="img-vector-thick"/>
            <img src={vector2} alt="flow vector image" className="img-vector-thin"/>
        </section>
    </>
  )
}

export default Showcase
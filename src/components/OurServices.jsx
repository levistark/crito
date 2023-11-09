import React from 'react'

const OurServices = () => {
  return (
    <>
        <section className="our-services">
            <div className="our-services-container container">
                <h4>Our Services</h4>
                <h2>We Provide The Best Service For Consulting</h2>
                <div className="service-grid">
                    <div>
                        <span>------</span>                        
                        <h5>Business Advice</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <button><i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                    <div>
                        <span>------</span>                        
                        <h5>Startup Business</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <button><i className="fa-solid fa-arrow-right"></i></button>

                    </div>
                    <div>
                        <span>------</span>                        
                        <h5>Financial Advice</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <button><i className="fa-solid fa-arrow-right"></i></button>

                    </div>
                    <div>
                        <span>------</span>                        
                        <h5>Risk Management</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <button><i className="fa-solid fa-arrow-right"></i></button>

                    </div>
                </div>
            </div>
            <button className="btn-browse">Browse Services<i className="fa-solid fa-arrow-right"></i></button>
            
            <img src="/images/Showcase/Vector.svg" alt="flow vector image" className="img-vector-thick"/>
            <img src="/images/Showcase/Vector-2.svg" alt="flow vector image" className="img-vector-thin"/>
        </section>
    </>
  )
}

export default OurServices
import React from 'react'
import whyChooseUsImage from '../assets/images/Workplace/Compressed/amy-hirschi-K0c8ko3e6AA-unsplash.jpg'

const WhyChooseUs = () => {
  return (
    <>
        <section className="why-choose-us">
            <div className="why-choose-us-container container">
                <div className="why-text">
                    <h4>Why Choose Us</h4>
                    <h2>Why We Are The <br/>Best Business <br/>Consulting Agency</h2>
                    <div className="reasons-container">
                        <div className="reasons">
                            <div>
                                <i className="fa-thin fa-thumbs-up"></i>
                                <span>
                                    <h5>Process Excellence</h5>
                                    <p>Lorem, ipsum dolor sit amet consectetur.</p>
                                </span>
                            </div>
                            <div>                 
                                <i className="fa-thin fa-gem"></i>
                                <span>
                                    <h5>Strategic Planning</h5>
                                    <p>Lorem, ipsum dolor sit amet consectetur.</p>
                                </span>
                            </div>   
                            <div>
                                <i className="fa-thin fa-pen-nib"></i>                        
                                <span>
                                    <h5>Experience Design</h5>
                                    <p>Lorem, ipsum dolor sit amet consectetur.</p>
                                </span>
                            </div>
                            <div>
                                <i className="fa-thin fa-shuttle-space"></i>
                                <span>
                                    <h5>Artificial Intelligence</h5>
                                    <p>Lorem, ipsum dolor sit amet consectetur.</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={whyChooseUsImage} alt="two business woman diskussing at a table"/>
                </div>
            </div>
            <div id="beige-box"></div>
            <div className="reasons-container-scale container">
                <div className="reasons">
                    <div>
                        <i className="fa-thin fa-thumbs-up"></i>
                        <span>
                            <h5>Process Excellence</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </span>
                    </div>
                    <div>                 
                        <i className="fa-thin fa-gem"></i>
                        <span>
                            <h5>Strategic Planning</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </span>
                    </div>   
                    <div>
                        <i className="fa-thin fa-pen-nib"></i>                        
                        <span>
                            <h5>Experience Design</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </span>
                    </div>
                    <div>
                        <i className="fa-thin fa-shuttle-space"></i>
                        <span>
                            <h5>Artificial Intelligence</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default WhyChooseUs
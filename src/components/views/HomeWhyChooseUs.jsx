import React from 'react'
import whyChooseUsImage from '../../assets/images/Workplace/Compressed/amy-hirschi-K0c8ko3e6AA-unsplash.jpg'
import ThumbsUp from '../icons/ThumbsUp'
import Gem from '../icons/Gem'
import Pen from '../icons/Pen'
import SpaceShuttle from '../icons/SpaceShuttle'

const HomeWhyChooseUs = ({h2, h4}) => {
  return (
    <>
        <section className="why-choose-us">
            <div className="why-choose-us-container container">
                <div className="why-text">
                    <h4>{h4}</h4>
                    <h2>{h2}</h2>
                    <div className="reasons-container">
                        <div className="reasons">
                            <div>
                                <ThumbsUp/>
                                <span>
                                    <h5>Process Excellence</h5>
                                    <p>Lorem, ipsum dolor sit amet consectetur.</p>
                                </span>
                            </div>
                            <div>                 
                                <Gem/>
                                <span>
                                    <h5>Strategic Planning</h5>
                                    <p>Lorem, ipsum dolor sit amet consectetur.</p>
                                </span>
                            </div>   
                            <div>
                                <Pen/>
                                <span>
                                    <h5>Experience Design</h5>
                                    <p>Lorem, ipsum dolor sit amet consectetur.</p>
                                </span>
                            </div>
                            <div>
                                <SpaceShuttle/>
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
                        <ThumbsUp/>
                        <span>
                            <h5>Process Excellence</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </span>
                    </div>
                    <div>                 
                        <Gem/>
                        <span>
                            <h5>Strategic Planning</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </span>
                    </div>   
                    <div>
                        <Pen/>
                        <span>
                            <h5>Experience Design</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </span>
                    </div>
                    <div>
                        <SpaceShuttle/>
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

export default HomeWhyChooseUs
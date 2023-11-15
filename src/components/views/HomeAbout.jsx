import React from 'react'
import aboutImage from '../../assets/images/Workplace/daria-pimkina-tYaccl19A3Q-unsplash.jpg'
import aboutGraphic from '../../assets/images/Graphics/EWlement.png'

const HomeAbout = ({h4, h2}) => {
  return (
    <>
        <section className="about">
            <div className="about-company container">
                <div className="about-img">
                    <img src={aboutImage} loading="lazy" alt="A smiling woman walking though an office corridor" id="founder-img"/>
                    <img src={aboutGraphic} alt="white-graphic" loading="lazy" id="white-graphic"/>
                    <div id="info-card">
                        <h5>Samantha Brown, <span>Founder</span></h5>
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                    </div>
                </div>
                <div className="about-text">
                    <h4>{h4}</h4>
                    <h2>{h2}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos. </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos. </p>
                    <button className="btn-learn">Learn More<i className="fa-solid fa-arrow-right"></i></button>
                    <button className="btn-play"><i className="fa-solid fa-play"></i>Intro Video</button>
                </div>
            </div>
            <div className="btn-container-scale container">
                <button className="btn-learn-scale">Learn More<i className="fa-solid fa-arrow-right"></i></button>
                <button className="btn-play-scale"><i className="fa-solid fa-play"></i>Intro Video</button>
            </div>
        </section>
    </>
  )
}

export default HomeAbout
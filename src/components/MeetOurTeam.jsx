import React from 'react'
import teamImage1 from '../assets/images/Workplace/Compressed/Team/1st.jpg'
import teamImage2 from '../assets/images/Workplace/Compressed/Team/2nd.jpg'
import teamImage3 from '../assets/images/Workplace/Compressed/Team/3rd.jpg'
import teamImage4 from '../assets/images/Workplace/Compressed/Team/4th.jpg'

const MeetOurTeam = () => {
  return (
    <>
        <section className="our-team">
            <div className="our-team-container container">
                <div className="heading-container">
                    <div className="heading">
                        <h4>Meet Our Team</h4>
                        <h2>Experience Team Members</h2>
                    </div>
                    <button className="btn-browse">Browse Team<i className="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className="team-grid">
                    <div className="grid-item">
                        <div className="img-container">
                            <img src={teamImage1} loading="lazy" alt="Kristine Palmer, Chef Operation Officer"/>
                        </div>
                        <h5>Kristine Palmer</h5>
                        <p>Chef Operation Officer</p>
                    </div>
                    <div className="grid-item">
                        <div className="img-container">
                            <img src={teamImage2} loading="lazy" alt="Mark Aubri, Senior Consultant"/>    
                        </div>
                        <h5>Mark Aubri</h5>
                        <p>Senior Consultant</p>
                    </div>
                    <div className="grid-item">
                        <div className="img-container">
                            <img src={teamImage3} loading="lazy" alt="Kimberly Hansen, Senior Consultant"/>
                        </div>
                        <h5>Kimberly Hansen</h5>
                        <p>Senior Consultant</p>
                    </div>
                    <div className="grid-item">
                        <div className="img-container">
                            <img src={teamImage4} loading="lazy" alt="Justin Willoman, Senior Tech Consultant"/>
                        </div>
                        <h5>Justin Willoman</h5>
                        <p>Senior Tech Consultant</p>
                    </div>
                </div>
                <div className="dots">
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                </div>
            </div>   
        </section>
    </>
  )
}

export default MeetOurTeam
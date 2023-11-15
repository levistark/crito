import React from 'react'
import teamImage1 from '../../assets/images/Workplace/Compressed/Team/1st.jpg'
import teamImage2 from '../../assets/images/Workplace/Compressed/Team/2nd.jpg'
import teamImage3 from '../../assets/images/Workplace/Compressed/Team/3rd.jpg'
import teamImage4 from '../../assets/images/Workplace/Compressed/Team/4th.jpg'
import TeamMember from '../general/TeamMember'

const HomeMeetOurTeam = ({h2, h4}) => {
  return (
    <>
        <section className="our-team">
            <div className="our-team-container container">
                <div className="heading-container">
                    <div className="heading">
                        <h4>{h4}</h4>
                        <h2>{h2}</h2>
                    </div>
                    <button className="btn-browse">Browse Team<i className="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className="team-grid">
                    <TeamMember imgUrl={teamImage1} imgAlt='Kristine Palmer, Chef Operation Officer' name='Kristine Palmer' position='Chief Operation Officer'/>
                    <TeamMember imgUrl={teamImage2} imgAlt='Mark Aubri, Senior Consultant' name='Mark Aubri' position='Senior Consultant'/>
                    <TeamMember imgUrl={teamImage3} imgAlt='Kimberly Hansen, Senior Consultant' name='Kimberly Hansen' position='Chief Consultant'/>
                    <TeamMember imgUrl={teamImage4} imgAlt='Justin Willoman, Senior Tech Consultant' name='Justin Willoman' position='Senior Tech Consultant'/>
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

export default HomeMeetOurTeam
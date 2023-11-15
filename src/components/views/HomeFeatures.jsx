import React from 'react'
import Handshake from '../icons/Handshake'
import Feature from '../general/Feature'
import Lightbulb from '../icons/Lightbulb'
import Chart from '../icons/Chart'
import MagGlassChart from '../icons/MagGlassChart'

const HomeFeatures = ({h2, h4}) => {
  return (
    <>
        <section className="features-wrapper">
            <div className="features-border">
                <div className="features container">
                    <div className="features-text">
                        <h4>{h4}</h4>
                        <h2>{h2}</h2>
                        <button className="learn-more">Learn More<i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                    <div className="features-grid">
                        <Feature className="business-advice" icon={<Handshake/>} title='Business Advice' text='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'/>
                        <Feature className="startup-business" icon={<Lightbulb/>} title='Startup Business' text='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'/>
                        <Feature className="financial-advice" icon={<Chart/>} title='Financial Advice' text='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'/>
                        <Feature className="risk-management" icon={<MagGlassChart/>} title='Risk Management' text='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'/>
                    </div>
                    <button className="learn-more-small">Learn More<i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
            
        </section>
    </>
  )
}

export default HomeFeatures
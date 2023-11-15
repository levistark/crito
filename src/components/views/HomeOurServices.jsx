import React from 'react'
import ServiceCard from '../general/ServiceCard'

const HomeOurServices = ({h2, h4}) => {
  return (
    <>
        <section className="our-services">
            <div className="our-services-container container">
                <h4>{h4}</h4>
                <h2>{h2}</h2>
                <div className="service-grid">
                    <ServiceCard 
                        title='Business Advice'
                        text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.'
                    />
                    <ServiceCard 
                        title='Startup Business'
                        text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.'
                    />
                    <ServiceCard 
                        title='Financial Advice'
                        text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.'
                    />
                    <ServiceCard 
                        title='Risk Management'
                        text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.'
                    />
                </div>
            </div>
            <button className="btn-browse">Browse Services<i className="fa-solid fa-arrow-right"></i></button>
            
            <img src="/images/Showcase/Vector.svg" alt="flow vector image" className="img-vector-thick"/>
            <img src="/images/Showcase/Vector-2.svg" alt="flow vector image" className="img-vector-thin"/>
        </section>
    </>
  )
}

export default HomeOurServices
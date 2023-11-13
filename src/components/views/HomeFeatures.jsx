import React from 'react'

const HomeFeatures = () => {
  return (
    <>
        <section className="features-wrapper">
            <div className="features-border">
                <div className="features container">
                    <div className="features-text">
                        <h4>Features</h4>
                        <h2>Our Accounting is trusted by thousands of companies</h2>
                        <button className="learn-more">Learn More<i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                    <div className="features-grid">
                        <div className="business-advice">
                            <i className="fa-light fa-handshake"></i>
                            <h5>Business Advice</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="startup-business">
                            <i className="fa-light fa-lightbulb"></i>
                            <h5>Startup Business</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    
                        </div>
                        <div className="financial-advice">
                            <i className="fa-light fa-chart-simple"></i>
                            <h5>Financial Advice</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    
                        </div>
                        <div className="risk-management">
                            <i className="fa-light fa-magnifying-glass-chart"></i>
                            <h5>Risk Management</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <button className="learn-more-small">Learn More<i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
            
        </section>
    </>
  )
}

export default HomeFeatures
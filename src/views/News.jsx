import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import imgVectorThick from '../assets/images/Showcase/Vector.svg'
import imgVectorThin from '../assets/images/Showcase/Vector-2.svg'
import { Link } from 'react-router-dom'
import Signup from '../components/Signup'
import articleImage1 from '../assets/images/Workplace/Compressed/News/1st.jpg'
import articleImage2 from '../assets/images/Workplace/Compressed/News/2nd.jpg'
import articleImage3 from '../assets/images/Workplace/Compressed/News/3rd.jpg'

const Contact = () => {

  return (
    <>
        <Header/>
        
        <section className="simple-showcase">
          <div className="simple-showcase-container container">
              <Link to="/">Home</Link>
              <Link to="/news"><strong>News</strong></Link>
              <h1><strong>News & Articles</strong></h1>
          </div>

          <img src={imgVectorThick} alt="flow vector image" className="img-vector-thick"/>
          <img src={imgVectorThin} alt="flow vector image" className="img-vector-thin"/>
        </section>  

        <main className='news-main'>
          <section className='container'>
            <h4>News & Articles</h4>
            <h2>Our News & Articles</h2>

            <div className="news-grid">
              <a href="">
                  <article>
                      <div className="grid-item">
                          <div className="img-container">
                              <img src={articleImage1} loading="lazy" alt="A smiling woman sitting by a table"/>
                              <div className="yellow-box"><strong>25</strong><br/>Mar</div>
                          </div>
                          <p>Business</p>
                          <h5>How To Use Digitalization In the class room</h5>
                          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                      </div>
                  </article>
              </a>
              <a href="">
                  <article>
                      <div className="grid-item">
                          <div className="img-container">
                              <img src={articleImage2} loading="lazy" alt="A smiling woman sitting by a table"/>
                              <div className="yellow-box"><strong>17</strong><br/>Mar</div>
                          </div>
                          <p>Business</p>
                          <h5>How To Implement Chat Gpt In Your Projects</h5>
                          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                      </div>
                  </article>
              </a>
              <a href="">
                  <article>
                      <div className="grid-item">
                          <div className="img-container">
                              <img src={articleImage3} loading="lazy" alt="A smiling woman sitting by a table"/>
                              <div className="yellow-box"><strong>13</strong><b/>Mar</div>
                          </div>
                          <p>Business</p>
                          <h5>The Guide To Support Modern CSS Design</h5>
                          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                      </div>
                  </article>
              </a>
          </div>

          </section>
        </main>

        <Signup/>

        <Footer/>
    </>
  )
}

export default Contact
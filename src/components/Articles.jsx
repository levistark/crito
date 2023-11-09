import React from 'react'
import articleImage1 from '../assets/images/Workplace/Compressed/News/1st.jpg'
import articleImage2 from '../assets/images/Workplace/Compressed/News/2nd.jpg'
import articleImage3 from '../assets/images/Workplace/Compressed/News/3rd.jpg'

const Articles = () => {
  return (
    <>
        <section className="news">
            <div className="news-container container">
                <div className="heading-container">
                    <div className="heading-text">
                        <h4>Article & News</h4>
                        <h2>Get Every Single Article & News</h2>
                    </div>
                    <button className="btn-browse">Browse Articles<i className="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className="news-grid">
                    <a href="">
                        <article>
                            <div className="grid-item">
                                <div className="img-container">
                                    <img src={articleImage1} loading="lazy" alt="A smiling woman sitting by a table"/>
                                    <div className="yellow-box"><strong>25</strong><br/>Mar</div>
                                </div>
                                <p>Business</p>
                                <h5>How To Use Digitalization In the classNameroom</h5>
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

export default Articles
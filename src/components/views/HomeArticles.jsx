import React from 'react'
import ArticleCarousel from '../general/ArticleCarousel'
import { Link } from 'react-router-dom'

const HomeArticles = ({h2, h4}) => {

  return (
    <>
        <section className="news">
            <div className="news-container container">
                <div className="heading-container">
                    <div className="heading-text">
                        <h4>{h4}</h4>
                        <h2>{h2}</h2>
                    </div>
                    <Link to={'/articles'} className="btn-browse">Browse Articles<i className="fa-solid fa-arrow-right"></i></Link>
                </div>
                <ArticleCarousel/>
            </div>
        </section>

    </>
  )
}

export default HomeArticles
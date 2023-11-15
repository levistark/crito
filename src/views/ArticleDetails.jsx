import React, { useEffect, useState } from 'react'
import Header from '../components/general/Header'
import SimpleShowcase from '../components/general/SimpleShowcase'
import Footer from '../components/general/Footer'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Spinner from '../components/general/Spinner'
import { useArticles } from '../contexts/ArticleProvider'

const ArticleDetails = () => {

    const [imgLoading, setImgLoading] = useState(true)
    const { id } = useParams()
    const { articles, article, getArticle, clearArticle } = useArticles()

    useEffect(() => {
        getArticle(id)

        return () => clearArticle()
    },[])

    const handleImageLoad = () => {
        setImgLoading(false)
    }

    const limitedArticles = articles.slice(0, 4)
    const date = new Date(article.published)
    const publishDate = date.toLocaleDateString('sv-SE')

  return (
    <>
        <Header/>
        <SimpleShowcase toUrl='' currentLink='News'/>
        <main className='article-details-wrapper'>
            <section className='article-details-container container'>
                <article>
                    <h4>Article</h4>
                    <h2>{article.title}</h2>
                    <div className='article-meta'>
                        <h6>{publishDate}</h6>
                        <div className='dot'></div>
                        <h6>{article.category}</h6>
                        <div className='dot'></div>
                        <h6>{article.author}</h6>
                    </div>

                    <div className='article-details-main'>
                        <div className='article-content'>
                            <div className='article-image'>
                                {imgLoading && <Spinner/>}
                                <img 
                                src={article.imageUrl}
                                style={{display: imgLoading ? 'none' : 'block' }}
                                alt={article.title}
                                onLoad={handleImageLoad}/>
                            </div>
                            <div className='article-text'>{article.content}</div>
                            <div className='category-buttons'>
                                <button>Digitalization</button>
                                <button>School</button>
                                <button>IT</button>
                                <button>Design</button>
                                <button>Work</button>
                                <button>Tech</button>
                            </div>
                        </div>
                        <div className='article-side'>
                            <form className='article-search' onSubmit={(e) => e.preventDefault()}>
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <input type="text" placeholder='Type to Search' />
                            </form>
                            <div className='recent-posts'>
                                <h5>Recent Posts</h5>
                                <div className='recent-posts-list'>

                                    {
                                        limitedArticles.map(article => {
                                        
                                        return (
                                            <Link to={`/articles/${article.id}`} key={article.id}>
                                                <div className='post-list-item'>
                                                    <h6>{article.title}</h6>
                                                    <small>{publishDate}</small>
                                                </div>
                                            </Link>
                                        )})
                                    }
                                </div>
                            </div>
                            <div className='categories'>
                                <h5>Categories</h5>
                                <div className='categories-list'>
                                    <div className='categories-list-item'>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                
            </section>
        </main>
        <Footer/>
    </>
  )
}

export default ArticleDetails
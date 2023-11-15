import { Link } from 'react-router-dom'
import Spinner from './Spinner'
import { useArticles } from '../../contexts/ArticleProvider'
import React, { useEffect, useState } from 'react'

const ArticleList = ({limit}) => {

    const [imageLoaded, setImageloaded] = useState(false)
    const { articles } = useArticles()

    const limitedArticles = articles.slice(0, limit)
  
    const handleImageLoaded = () => {
      setImageloaded(true)
    }
  
  return (
    <>
        <div className="news-grid">
            {
            limitedArticles.map(article => {
                const date = new Date(article.published)
                const publishDate = date.toLocaleDateString('sv-SE')
                
                return (
                
                <Link to={`/articles/${article.id}`} key={article.id}>
                <article>
                    <div className="grid-item">
                        
                        <div className="img-container">
                            {!imageLoaded && <Spinner />}
                            <img 
                            src={article.imageUrl} 
                            loading="lazy" 
                            alt={article.title}
                            style={{ display: imageLoaded ? 'block' : 'none' }}
                            onLoad={handleImageLoaded}/>
                            <div className="yellow-box">{publishDate}</div>
                        </div>
                        <p>{article.category}</p>
                        <h5>{article.title}</h5>
                        <p>{article.content}</p>
                    </div>
                </article>
                </Link>
            )})
            }
        </div>
    </>
  )
}

export default ArticleList
import { Link } from 'react-router-dom'
import Spinner from './Spinner'
import { useArticles } from '../../contexts/ArticleProvider'
import React, { useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ArticleList = () => {

    const [imageLoaded, setImageloaded] = useState(false)
    const { articles } = useArticles()
  
    const handleImageLoaded = () => {
      setImageloaded(true)
    }

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        }
      };
  
  return (
    <>
        <div className="carousel-container">
            <Carousel 
              responsive={responsive}
              showDots={true}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              renderDotsOutside={true}

            >
                {
                    articles.map(article => {
                        const date = new Date(article.published)
                        const publishDate = date.toLocaleDateString('sv-SE')
                        
                        return (
                        
                            <Link to={`/articles/${article.id}`} key={article.id}>
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
                            </Link>
                        )
                    })
                }
            </Carousel>
        </div>
    </>
  )
}

export default ArticleList
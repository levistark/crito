import React, { useEffect, useState } from 'react'
import Header from '../components/general/Header'
import Footer from '../components/general/Footer'
import Signup from '../components/general/Signup'
import SimpleShowcase from '../components/general/SimpleShowcase'
import { Link } from 'react-router-dom'

const Articles = (props) => {

  const [articles, setArticles] = useState([])

  const getArticles = async () => {
    const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')
    setArticles(await result.json())
  }

  useEffect(() => {
    getArticles()

  }, [])

  return (
    <>
        <Header/>
        
        <SimpleShowcase toUrl='/articles' currentLink='News'/>

        <main className='news-main'>
          <section className='container'>
            <h4>News & Articles</h4>
            <h2>Our News & Articles</h2>

            <div className="news-grid">
              {
                articles.map(article => {
                  const date = new Date(article.published)
                  const publishDate = date.toLocaleDateString('sv-SE')
                  
                  return (
                  
                  <Link to={`/articles/${article.id}`} key={article.id}>
                    <article>
                      <div className="grid-item">
                          <div className="img-container">
                              <img src={article.imageUrl} loading="lazy" alt=""/>
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

          </section>
        </main>

        <Signup/>

        <Footer/>
    </>
  )
}

export default Articles
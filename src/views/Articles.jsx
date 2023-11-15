import Header from '../components/general/Header'
import Footer from '../components/general/Footer'
import Signup from '../components/general/Signup'
import SimpleShowcase from '../components/general/SimpleShowcase'
import ArticleList from '../components/general/ArticleList'

const Articles = () => {

  return (
    <>
        <Header/>
        
        <SimpleShowcase toUrl='/articles' currentLink='News'/>

        <main className='news-main'>
          <section className='container'>
            <h4>News & Articles</h4>
            <h2>Our News & Articles</h2>

            <ArticleList limit={9}/>

          </section>
        </main>

        <Signup/>

        <Footer/>
    </>
  )
}

export default Articles
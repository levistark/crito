import React from 'react'
import Header from '../components/general/Header'
import SimpleShowcase from '../components/general/SimpleShowcase'
import Footer from '../components/general/Footer'

const ArticleDetails = () => {

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
        <SimpleShowcase toUrl='' currentLink='News'/>

        <Footer/>
    </>
  )
}

export default ArticleDetails
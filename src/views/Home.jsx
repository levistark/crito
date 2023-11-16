import React from 'react'
import Header from '../components/general/Header'
import Footer from '../components//general/Footer'
import Showcase from '../components/general/Showcase'
import HomeMain from '../components/views/HomeMain'
import { useArticles } from '../contexts/ArticleProvider'

const Home = () => {

  return (
    <>
        <Header />
        <Showcase />
        <HomeMain/>
        <Footer />
    </>
  )
}

export default Home
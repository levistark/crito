import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Showcase from '../components/Showcase'
import HomeMain from '../components/HomeMain'

const Home = () => {
  return (
    <div>
        <Header />
        <Showcase />
        <HomeMain/>
        <Footer />
    </div>
  )
}

export default Home
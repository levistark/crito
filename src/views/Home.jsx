import React from 'react'
import Header from '../components/general/Header'
import Footer from '../components//general/Footer'
import Showcase from '../components/general/Showcase'
import HomeMain from '../components/views/HomeMain'

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
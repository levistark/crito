import React from 'react'
import Brands from '../general/Brands'
import HomeFeatures from './HomeFeatures'
import HomeAbout from './HomeAbout'
import HomeOurServices from './HomeOurServices'
import HomeWhyChooseUs from './HomeWhyChooseUs'
import HomeProjects from './HomeProjects'
import HomeMeetOurTeam from './HomeMeetOurTeam'
import Testimonials from '../general/Testimonials'
import HomeArticles from './HomeArticles'
import Signup from '../general/Signup'

const HomeMain = () => {
  return (
    <>
        <main className="main">
            <Brands/>
            <HomeFeatures/>
            <HomeAbout/>
            <HomeOurServices/>
            <HomeWhyChooseUs/>
            <HomeProjects/>
            <HomeMeetOurTeam/>
            <Testimonials/>
            <HomeArticles/>
            <Signup/>
        </main>
    </>
  )
}

export default HomeMain
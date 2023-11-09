import React from 'react'
import Brands from './Brands'
import Features from './Features'
import About from './About'
import OurServices from './OurServices'
import WhyChooseUs from './WhyChooseUs'
import Projects from './Projects'
import MeetOurTeam from './MeetOurTeam'
import Testimonials from './Testimonials'
import Articles from './Articles'
import Signup from './Signup'

const HomeMain = () => {
  return (
    <>
        <main className="main">
            <Brands/>
            <Features/>
            <About/>
            <OurServices/>
            <WhyChooseUs/>
            <Projects/>
            <MeetOurTeam/>
            <Testimonials/>
            <Articles/>
            <Signup/>
        </main>
    </>
  )
}

export default HomeMain
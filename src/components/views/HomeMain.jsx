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
            <HomeFeatures h2='Our Accounting is trusted by thousands of companies' h4='Features'/>
            <HomeAbout h2='We Are Business Consulting & Credit Repair Expers' h4='About Company'/>
            <HomeOurServices h4='Our Services' h2='We Provide The Best Service For Consulting'/>
            <HomeWhyChooseUs h4='Why Choose Us' h2='Why We Are The Best Business Consulting Agency'/>
            <HomeProjects h4='Projects & Case Studies' h2={`Let\'s Look at Our Global Projects`}/>
            <HomeMeetOurTeam h4='Meet Our Team' h2='Experience Team Members'/>
            <Testimonials h4='Testimonials' h2='What Our Clients Says'/>
            <HomeArticles h4={'Article & News'} h2={'Get Every Single Article & News'}/>
            <Signup h2='Get News Updates By Signup'/>
        </main>
    </>
  )
}

export default HomeMain
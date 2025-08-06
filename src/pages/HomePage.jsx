import React from 'react'
import Hero from '../components/HomeComps/HeroSection'
import WhoWeAre from '../components/HomeComps/WhoWeAre'

import ServicesSection from '../components/HomeComps/ServicesSection'
import ServiceCard from '../components/HomeComps/ServicesHome'
import ProcessCard from '../components/HomeComps/ProcessCard'
import NewsFaqSection from '../components/HomeComps/NewsFaqs'
import Footer from '../components/Footer'
import Connect from '../components/AboutComps/Connect'

const HomePage = () => {
  return (
    <div>
      
      <Hero/>
      <WhoWeAre/>
      <ServiceCard/>
      <ServicesSection/>
      <ProcessCard/>
      <NewsFaqSection/>
      <Connect/>
      <Footer/>
      
      
    </div>
  )
}

export default HomePage

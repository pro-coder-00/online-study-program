import React from 'react'
import Navbar from '../Blogpage/Navtwo/Navbar'
import Hero from './Herosection/Hero'
import Coaching from '../Coursepage/coachingsection/Coaching'
import Cards from '../landingpage/Cards/Card'
import Related from '../Blogpage/Relatedblog/Related'
import Free from './Appfree/Free'
import Footer from '../landingpage/Footer/Footer'

export default function About() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Coaching/>
        <Cards/>
        <Free/> 
        <Related/>
        <Footer/>
      
    </div>
  )
}

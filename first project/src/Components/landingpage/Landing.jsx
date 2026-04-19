import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Herosection/Hero'
import Card from './Cards/Card'
import Inst from './Instructorsection/Inst'
import Features from './Features/Features'
import Resourses from './Resourses/Resourses'
import Footer from './Footer/Footer'
export default function Landing() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Card/>
        <Inst/>
        <Features/>
        <Resourses/>
        <Footer/>
        
    </div>
  )
}

import React from 'react'
import Navbar from '../Blogpage/Navtwo/Navbar'
import Hero from './Herosec/Hero'
import Choose from './choosesection/Choose'
import Coaching from './coachingsection/Coaching'
import Select from './courseseclect/Select'
import Footer from '../landingpage/Footer/Footer'


export default function Course() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Choose />
        <Coaching/>
        <Select/>
        <Footer/>
    </div>
  )
}

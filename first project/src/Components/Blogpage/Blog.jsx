import React from 'react'
import Navbar from './Navtwo/Navbar'
import Hero from './Herotwo/Hero'
import List from './Bloglist/List'
import Related from './Relatedblog/Related'
import Footer from '../landingpage/Footer/Footer'

export default function Blog() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <List/>
        <Related/>
        <Footer/>
        
    </div>
  )
}

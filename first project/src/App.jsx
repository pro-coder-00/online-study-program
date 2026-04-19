import React from 'react'
import Login from './Components/loginsection/Login'
import Register  from './Components/registersection/Register'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './Components/landingpage/Navbar/Navbar'
import Landing from './Components/landingpage/Landing'
import Blog from './Components/Blogpage/Blog'
import Course from './Components/Coursepage/Course'
import About from './Components/Aboutpage/About'
export default function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/course" element={<Course />} />
            <Route path="/about" element={<About />} />

        </Routes>
      </Router>
    </div>
  )
}

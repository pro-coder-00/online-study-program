import React, { useState, useEffect } from 'react'
import img from '../../../images/logo.png';
import { Link } from 'react-router-dom';
import img2 from '../../../images/playbtn.png';
import heroimg from '../../../images/hero.png'
import img3 from '../../../images/hero2.png'

import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="bg-[#49BBBD] overflow-x-hidden">

      {/* Navbar */}
      <div className="flex justify-between items-center px-[20px] xl:px-[60px] py-[15px]">

        {/* Logo */}
        <img data-aos="fade-right" src={img} alt="" />

        {/* Desktop Menu */}
        <ul className='hidden lg:flex gap-[40px] text-white font-thin'>
          <li data-aos="fade-down"><Link className='border-b-2 border-transparent hover:border-white transition' to="/landing">Home</Link></li>
          <li data-aos="fade-down" data-aos-delay="100"><Link className='border-b-2 border-transparent hover:border-white transition' to="/course">Courses</Link></li>
          <li data-aos="fade-down" data-aos-delay="300"><Link className='border-b-2 border-transparent hover:border-white transition' to="/Blog">Blog</Link></li>
          <li data-aos="fade-down" data-aos-delay="400"><Link className='border-b-2 border-transparent hover:border-white transition' to="/about">About Us</Link></li>
        </ul>

        {/* Desktop Buttons */}
        <div data-aos="fade-left" className="hidden lg:flex gap-5 items-center">
          <Link to='/'>
            <button className='text-black hover:text-white bg-white px-[25px] py-[10px] rounded-full hover:bg-[#49BBBD] transition'>
              Login
            </button>
          </Link>

          <button className="relative px-[25px] py-[12px] border border-white text-white rounded-full hover:bg-white hover:text-black transition duration-300">
            Sign Up
            <span className="absolute -top-1.5 right-2 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-white"></span>
            </span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div 
          data-aos="fade-left"
          className="lg:hidden text-white text-2xl cursor-pointer"
          onClick={() => {
            setOpen(!open);
            setTimeout(() => AOS.refresh(), 100);
          }}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div 
          data-aos="fade-down"
          className="lg:hidden flex flex-col items-center gap-5 pb-5 text-white"
        >
          <Link to="/landing">Home</Link>
          <Link to="/course">Courses</Link>
          <Link to="/Blog">Blog</Link>
          <Link to="/about">About Us</Link>

          <Link to = '/'>
            <button className='bg-white text-black px-5 py-2 rounded-full'>
              Login
            </button>
          </Link>

          <button className="relative px-[25px] py-[12px] border border-white text-white rounded-full hover:bg-white hover:text-black transition duration-300">
            Sign Up
            <span className="absolute -top-1.5 right-2 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-white"></span>
            </span>
          </button>
        </div>
      )}




      <div className="flex flex-col-reverse xl:flex-row justify-between items-center px-[20px] xl:px-[60px] mt-[30px] pb-5">

        <div>
          <h1 
            data-aos="fade-right"
            className='text-3xl xl:text-5xl font-semibold text-white'
          >
            <span className='text-[#F48C06]'>Studying</span> Online is now <br /> much easier
          </h1>

          <p 
            data-aos="fade-right" 
            data-aos-delay="200"
            className='mt-[20px] text-white font-thin text-sm xl:text-lg'
          >
            TOTC is an interesting platform that will teach <br />
            you in more an interactive way
          </p>

          <div 
            data-aos="fade-up" 
            data-aos-delay="400"
            className="mt-[20px] flex items-center gap-5"
          >

            <button className="relative px-[25px] py-[12px] border border-white text-white rounded-full hover:bg-white hover:text-black transition duration-300">
              Join for free
              <span className="absolute -top-1.5 right-2 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-white"></span>
              </span>
            </button>

            <img 
              data-aos="zoom-in"
              data-aos-delay="600"
              className='h-[50px] cursor-pointer animate-bounce' 
              src={img2} 
              alt="" 
            />

            <h1 className='text-lg text-[#252641]'>
              Watch how it works
            </h1>
          </div>
        </div>

        <div className="relative mb-10 xl:mb-0">
          <img data-aos="zoom-in" className='h-[50vh] xl:h-[70vh]' src={heroimg}  alt="" />
          <img data-aos="fade-up" data-aos-delay="300" className='h-[30vh] xl:h-[45vh] absolute bottom-10 right-0'   src={img3} alt="" />
        </div>

      </div>

    </div>
  )
}
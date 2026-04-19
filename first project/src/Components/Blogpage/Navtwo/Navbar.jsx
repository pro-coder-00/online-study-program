import React, { useState, useEffect } from "react";
import img1 from '../../../images/logo1.png'
import img2 from '../../../images/logo2.png'
import img3 from '../../../images/logo3.png'
import { Link } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="bg-white overflow-x-hidden">

      <div className="flex justify-between items-center px-[20px] xl:px-[60px] py-[15px]">
        <img  data-aos="fade-right" src={img1} alt="logo"  className="w-[120px]"  />

        <ul className="hidden lg:flex items-center gap-[40px]">
          <li data-aos="fade-down"><Link className="border-b border-transparent hover:border-black transition" to="/landing">Home</Link></li>
          <li data-aos="fade-down" data-aos-delay="100"><Link className="border-b border-transparent hover:border-black transition" to="/course">Courses</Link></li>
          <li data-aos="fade-down" data-aos-delay="300"><Link className="border-b border-transparent hover:border-black transition" to="/blog">Blog</Link></li>
          <li data-aos="fade-down" data-aos-delay="400"><Link className="border-b border-transparent hover:border-black transition" to="/about">About Us</Link></li>

          <div data-aos="fade-left" className="flex items-center gap-2 ml-4">
            <img src={img2} alt="" className="w-5" />
            <span>lina</span>
            <img src={img3} alt="" className="w-8 h-8 rounded-full" />
          </div>
        </ul>

        {/* Mobile Toggle */}
        <button
          data-aos="fade-left"
          className="lg:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu with AOS */}
      {open && (
        <div 
          data-aos="fade-down"
          className="lg:hidden bg-[#252641] flex flex-col items-center gap-4 py-5"
        >
          <Link className="text-white" to="/landing">Home</Link>
          <Link className="text-white" to="/course">Courses</Link>
          <Link className="text-white" to="/blog">Blog</Link>
          <Link className="text-white" to="/about">About Us</Link>

          <div className="flex items-center gap-2 mt-3 text-white">
            <img src={img2} alt="" className="w-5" />
            <span>lina</span>
            <img src={img3} alt="" className="w-8 h-8 rounded-full" />
          </div>
        </div>
      )}

    </div>
  )
}
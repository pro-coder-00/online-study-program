import React, { useEffect } from 'react'
import img1 from '../../../images/free1.png'
import img2 from '../../../images/free2.png'

import AOS from "aos";
import "aos/dist/aos.css";

export default function Free() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="px-4 md:px-10 lg:px-20 mt-[70px]">
      
      <div className="bg-[#252641] rounded-2xl flex flex-col lg:flex-row justify-between items-center gap-6 p-6 md:p-10">
        <h1 data-aos="fade-right"className="text-white font-bold text-2xl md:text-3xl text-center lg:text-left" >
          APP is available for free
        </h1>
        <div  data-aos="fade-left" className="flex flex-col sm:flex-row gap-4"  >
          <button className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-lg hover:scale-105 transition">
            <img  src={img1}   alt="android"  className="w-6 h-6 object-contain bg-white p-1 rounded"/>
            <span>Android App</span>
          </button>
          <button className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-lg hover:scale-105 transition">
            <img src={img2}  alt="ios" className="w-6 h-6 object-contain bg-white p-1 rounded" />
            <span>iOS App</span>
          </button>

        </div>

      </div>

    </div>
  )
}
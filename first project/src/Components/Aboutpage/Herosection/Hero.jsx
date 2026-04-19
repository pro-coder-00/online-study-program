import React, { useEffect } from 'react'
import img1 from '../../../images/about1.png'
import img2 from '../../../images/about2.png'
import img3 from '../../../images/about3.png'
import img4 from '../../../images/about4.png'
import img5 from '../../../images/about5.png'

import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="px-4 md:px-10 xl:px-20 py-10 overflow-x-hidden">

      {/* TITLE */}
      <h1 
        data-aos="fade-down"
        className='text-3xl md:text-4xl xl:text-5xl text-[#49BBBD] font-bold text-center'
      >
        Affordable pricing
      </h1>  

      {/* CARDS */}
      <div className="flex flex-wrap justify-center lg:justify-between gap-8 mt-10">

        {/* CARD 1 */}
        <div 
          data-aos="fade-up"
          className="w-full sm:w-[48%] lg:w-[30%] bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col"
        >
          <h1 className='text-[#49BBBD]'>Like a pro</h1>

          <h1 className='text-3xl md:text-4xl font-semibold mt-5'>
            Free <span className='text-xs'>/ FOREVER</span>
          </h1>

          <div className="mt-5 space-y-4 flex-1">
            <div className="flex items-center gap-3">
              <img src={img1} alt="" />
              <h1 className='font-thin'>Components-driven system</h1>
            </div>

            <div className="flex items-center gap-3">
              <img src={img1} alt="" />
              <h1 className='font-thin'>Sales-boosting landing pages</h1>
            </div>

            <div className="flex items-center gap-3">
              <img src={img1} alt="" />
              <h1 className='font-thin'>Awesome Feather icons pack</h1>
            </div>
          </div>

          <button className='mt-6 py-2 border rounded-xl text-[#49BBBD] hover:bg-[#49BBBD] hover:text-white transition'>
            Try for free
          </button>
        </div>


        {/* CARD 2 */}
        <div 
          data-aos="fade-up"
          data-aos-delay="200"
          className="w-full sm:w-[48%] lg:w-[30%] bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col border-2 border-[#49BBBD]"
        >

          <div className="flex justify-between items-center">
            <img src={img2} alt="" />
            <button className='border px-4 py-1 rounded-full text-sm'>BEST</button>
          </div>

          <h1 className='text-3xl md:text-4xl font-semibold mt-5'>
            $24 <span className='text-xs'>/ MONTH</span>
          </h1>

          <div className="mt-5 space-y-4 flex-1">
            <div className="flex items-center gap-3">
              <img src={img3} alt="" />
              <h1 className='font-thin'>Components-driven system</h1>
            </div>

            <div className="flex items-center gap-3">
              <img src={img3} alt="" />
              <h1 className='font-thin'>Sales-boosting landing pages</h1>
            </div>

            <div className="flex items-center gap-3">
              <img src={img3} alt="" />
              <h1 className='font-thin'>Awesome Feather icons pack</h1>
            </div>

            <div className="flex items-center gap-3">
              <img src={img3} alt="" />
              <h1 className='font-thin'>Themed into 3 different styles</h1>
            </div>

            <div className="flex items-center gap-3">
              <img src={img3} alt="" />
              <h1 className='font-thin'>Will help to learn Figma</h1>
            </div>
          </div>

          <button className='mt-6 py-2 border rounded-xl text-[#49BBBD] hover:bg-[#49BBBD] hover:text-white transition'>
            Regular license
          </button>
        </div>


        {/* CARD 3 (FIXED IMAGE) */}
        <div 
          data-aos="fade-up"
          data-aos-delay="400"
          className="w-full sm:w-[48%] lg:w-[30%] bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col"
        >

          {/* FIXED IMAGE */}
          <div className="w-full h-[120px] flex items-center justify-center bg-[#f3f4f6] rounded-xl">
            <img 
              src={img4} 
              alt="" 
              className="h-[80%] object-contain"
            />
          </div>

          <h1 className='text-3xl md:text-4xl font-semibold mt-5'>
            $12 <span className='text-xs'>/ EDITOR</span>
          </h1>

          <div className="mt-5 space-y-4 flex-1">
            <div className="flex items-center gap-3">
              <img src={img5} alt="" />
              <h1 className='font-thin'>Components-driven system</h1>
            </div>

            <div className="flex items-center gap-3">
              <img src={img5} alt="" />
              <h1 className='font-thin'>Sales-boosting landing pages</h1>
            </div>

            <div className="flex items-center gap-3">
              <img src={img5} alt="" />
              <h1 className='font-thin'>Awesome Feather icons pack</h1>
            </div>

            <div className="flex items-center gap-3">
              <img src={img5} alt="" />
              <h1 className='font-thin'>Themed into 3 different styles</h1>
            </div>
          </div>

          <button className='mt-6 py-2 border rounded-xl text-[#49BBBD] hover:bg-[#49BBBD] hover:text-white transition'>
            Extended license
          </button>
        </div>

      </div>

    </div>
  )
}
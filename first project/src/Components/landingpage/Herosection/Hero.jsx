import React, { useEffect } from 'react'
import img1 from '../../../images/15K+.png'
import img2 from '../../../images/75.png'
import img3 from '../../../images/35.png'
import img4 from '../../../images/26.png'
import img5 from '../../../images/16.png'

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
    <div className='mt-[25px] overflow-x-hidden'>

      <h1   data-aos="fade-down"    className='text-center text-2xl font-bold' > Our Success </h1>

      <p   data-aos="fade-up" data-aos-delay="200" className='text-center mt-[20px] text-[10px] xl:text-xs font-extralight' >
        Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec <br />
        nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-10 mt-[50px] px-[20px] xl:px-[60px] text-center">
        
        <div  data-aos="zoom-in" className="hover:scale-110 transition duration-500 cursor-pointer" >
          <img className='h-[6.8vh] mx-auto' src={img1} alt="" />
          <h1 className='text-xl mt-3 text-[#010514]'>Students</h1>
        </div>

        <div  data-aos="zoom-in" data-aos-delay="100" className="hover:scale-110 transition duration-500 cursor-pointer" >
          <img className='h-[6.8vh] mx-auto' src={img2} alt="" />
          <h1 className='text-xl mt-3 text-[#010514]'>Total Success</h1>
        </div>

        <div data-aos="zoom-in" data-aos-delay="200" className="hover:scale-110 transition duration-500 cursor-pointer" >
          <img className='h-[6.8vh] mx-auto' src={img3} alt="" />
          <h1 className='text-xl mt-3 text-[#010514]'>Main Questions</h1>
        </div>

        <div   data-aos="zoom-in"   data-aos-delay="300" className="hover:scale-110 transition duration-500 cursor-pointer" >
          <img className='h-[6.8vh] mx-auto' src={img4} alt="" />
          <h1 className='text-xl mt-3 text-[#010514]'>Chief Experts</h1>
        </div>

        <div  data-aos="zoom-in" data-aos-delay="400" className="hover:scale-110 transition duration-500 cursor-pointer"  >
          <img className='h-[6.8vh] mx-auto' src={img5} alt="" />
          <h1 className='text-xl mt-3 text-[#010514]'>Years Of Experience</h1>
        </div>

      </div>
      <h1 data-aos="fade-right" className='text-[#2F327D] text-center text-3xl md:text-4xl font-bold mt-[80px]' >
        All-In-One <span className='text-[#00CBB8]'>Cloud Software.</span>
      </h1>

      <p  data-aos="fade-up" data-aos-delay="200" className='text-[#696984] text-center text-[12px] md:text-lg font-extralight mt-[20px]'   >
        TOTC is one powerful online software suite that combines all the tools <br />
        needed to run a successful school or office.
      </p>

    </div>
  )
}
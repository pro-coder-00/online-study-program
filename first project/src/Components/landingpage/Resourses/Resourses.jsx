import React, { useEffect } from 'react'
import img1 from '../../../images/Resourse4.png'
import img2 from '../../../images/Resourse1.png'
import img3 from '../../../images/Resourse2.png'
import img4 from '../../../images/Resourse3.png'

import AOS from "aos";
import "aos/dist/aos.css";

export default function Resourses() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="mt-[80px] px-[20px] xl:px-[60px] overflow-hidden">

      <h1 data-aos="fade-down" className="text-center text-2xl md:text-4xl font-bold text-[#2F327D]">
        Latest News and Resources
      </h1>
      <p data-aos="fade-up" data-aos-delay="200" className="text-center text-[#696984] mt-[10px] text-sm md:text-lg">
        See the developments that have occurred to TOTC in the world
      </p>

      <div className="flex flex-col xl:flex-row gap-10 mt-[50px]">

        <div data-aos="fade-right" className="xl:w-1/2 flex flex-col">
          <img className="w-full rounded-xl hover:scale-105 transition duration-500" src={img1} alt="" />
          <button className="relative mt-[20px] px-[25px] py-[10px] border border-[#00CBB8] text-[#00CBB8] rounded-full hover:bg-[#00CBB8] hover:text-white transition duration-300 w-fit">
            NEWS
            <span className="absolute -top-1.5 right-4 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00CBB8] opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-[#00CBB8]"></span>
            </span>
          </button>
          <p className="mt-[20px] text-[#2F327D] font-semibold text-lg">
            Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution
          </p>
          <p className="mt-[10px] text-[#696984] text-sm">
            Class, launched less than a year ago by Blackboard co-founder Michael Chasen...
          </p>
          <button className='mt-[20px] text-[#696984] font-light border-b-2 border-[#696984] hover:text-[#00CBB8] hover:border-[#00CBB8] transition duration-300 w-fit'> 
            Read more
          </button>
        </div>

        <div className="xl:w-1/2 flex flex-col gap-6">

          <div data-aos="fade-left" data-aos-delay="100" className="flex gap-4">
            <img className="w-[130px] h-[90px] object-cover rounded-lg hover:scale-105 transition duration-500" src={img2} alt="" />
            <div>
              <p className="text-[#2F327D] font-semibold text-sm md:text-base">
                Class Technologies Inc. Closes $30 Million Series A Financing
              </p>
              <p className='mt-[5px] text-[#696984] text-xs md:text-sm'>
                Class Technologies Inc., the company that created Class,...
              </p>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-delay="200" className="flex gap-4">
            <img className="w-[130px] h-[90px] object-cover rounded-lg hover:scale-105 transition duration-500" src={img3} alt="" />
            <div>
              <p className="text-[#2F327D] font-semibold text-sm md:text-base">
                Zoom’s earliest investors are betting millions on better Zoom
              </p>
              <p className='mt-[5px] text-[#696984] text-xs md:text-sm'>
                Zoom was never created to be a consumer product...
              </p>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-delay="300" className="flex gap-4">
            <img className="w-[130px] h-[90px] object-cover rounded-lg hover:scale-105 transition duration-500" src={img4} alt="" />
            <div>
              <p className="text-[#2F327D] font-semibold text-sm md:text-base">
                Former Blackboard CEO Raises $16M to Bring LMS Features
              </p>
              <p className='mt-[5px] text-[#696984] text-xs md:text-sm'>
                This year, investors have reaped big financial returns...
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}
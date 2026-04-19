import React, { useEffect } from 'react'
import img1 from '../../../images/inst1.png'
import img2 from '../../../images/inst2.png'
import img3 from '../../../images/inst3.png'

import AOS from "aos";
import "aos/dist/aos.css";

export default function Inst() {

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
    <div className='mt-[80px] px-[20px] xl:px-[60px] overflow-hidden'>
      <h1 data-aos="fade-down" className='text-[#2F327D] text-center text-2xl md:text-4xl font-bold'>
        What is <span className='text-[#00CBB8]'>TOTC?</span>
      </h1>
      <p data-aos="fade-up" data-aos-delay="200" className='text-[#696984] text-center text-sm md:text-lg font-extralight mt-[20px]'>
        TOTC is a platform that allows educators to create online classes whereby they can 
        <br className="hidden md:block"/>
        store course materials online; manage assignments, quizzes and exams; monitor
        <br className="hidden md:block"/>
        due dates; grade results and provide students with feedback all in one place.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-[50px]'>
        <div data-aos="fade-right" className="first-child relative">
          <img className='h-[30vh] md:h-[35vh] w-full object-cover rounded-xl hover:scale-105 transition duration-500' src={img1} alt="" />
          <h1 className='absolute bottom-5 left-5 text-white text-xl font-semibold'>
           For Students
          </h1>
        </div>

        <div data-aos="fade-left" className="second-child relative">
          <img className='h-[30vh] md:h-[35vh] w-full object-cover rounded-xl hover:scale-105 transition duration-500' src={img2} alt="" />
          <h1 className='absolute bottom-5 left-5 text-white text-xl font-semibold'>
           For Instructors
          </h1>
        </div>
      </div>

     <div className="mt-[80px]">
  <div className="flex flex-col xl:flex-row items-center gap-10">


    <div 
      data-aos="fade-right"
      data-aos-duration="1200"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
      className=""
    >
      <h1 className='text-2xl md:text-3xl xl:text-4xl text-[#2F327D] font-semibold leading-snug'>
        Everything you can do in a physical 
        <br className="hidden md:block"/>
        classroom, <span className='text-[#00CBB8]'>you can do with TOTC</span>
      </h1>
      <p className='mt-[20px] text-sm md:text-lg text-[#696984] font-extralight'>
        TOTC’s school management software helps traditional <br /> and online schools manage scheduling,
        attendance, <br /> payments and virtual classrooms all in one secure cloud- <br />based system.
      </p>
      <button className='mt-[20px] text-[#696984] font-light border-b-2 border-[#696984] hover:text-[#00CBB8] hover:border-[#00CBB8] transition duration-300'>
        Learn more
      </button>
    </div>

  
    <div 
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-delay="200"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
      className="overflow-hidden rounded-xl"
    >
      <img 
        className='h-[30vh] md:h-[40vh] xl:h-[45vh] object-contain transition-transform duration-500 ease-in-out hover:scale-105' 
        src={img3} 
        alt="TOTC Illustration" 
      />
    </div>

  </div>
</div>

    </div>
  )
}
import React from 'react'
import img2 from '../../../images/Resourse4.png'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Hero() {
    useEffect(() => {
  AOS.init({
    duration: 1000, 
    once: true,     
  });
}, []);
  return (

 <div>
  <div className="flex flex-col lg:flex-row justify-between items-center px-[20px] xl:px-[60px] py-[30px] mt-[20px] gap-10 bg-[#f9fafb] overflow-x-hidden ">

    <div 
      className="text-center lg:text-left max-w-[600px]"  data-aos="fade-right" >
      
      <h1 className="text-sm md:text-base">
        By Themadbrains in <span className="font-semibold text-[#49BBBD]">inspiration</span>
      </h1>

      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug mt-3 text-[#2F327D]">
        Why Swift UI Should Be on the <br className="hidden md:block" />
        Radar of Every Mobile <br className="hidden md:block" />
        Developer
      </h1>

      <p className="text-sm md:text-base mt-4 text-[24px] font-md text-[#696984]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
        sed do eiusmod tempor Lorem ipsum dolor sit amet,<br />
        consectetur adipiscing elit.
      </p>

      <button className="relative mt-6 px-[25px] py-[12px] border border-[#00CBB8] text-[#00CBB8] rounded-full hover:bg-[#00CBB8] hover:text-white transition duration-300">
        Join for free

        <span className="absolute -top-1.5 right-2 flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00CBB8] opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-[#00CBB8]"></span>
        </span>
      </button>

    </div>

    <div  className="w-full lg:w-[45%] flex justify-center" data-aos="fade-left" >
      <img  src={img2}  alt="hero"  className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-full " />
    </div>

  </div>
</div>
  )
}

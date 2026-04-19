import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Coaching() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="px-4 md:px-10 xl:px-20">

      <div data-aos="fade-up" className="text-center mt-10 bg-[#252641] py-10 px-4 md:px-10 rounded-xl" >
        <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-semibold leading-snug'>
          Online coaching lessons for remote learning.</h1>
        <p className='text-white font-thin pt-5 text-sm sm:text-base md:text-lg max-w-3xl mx-auto'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </p>

        <button className="relative mt-8 px-6 py-3 border border-[#00CBB8] text-[#00CBB8]  rounded-full hover:bg-[#00CBB8] hover:text-white transition duration-300" > Start learning now
          <span className="absolute -top-1.5 right-2 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00CBB8] opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-[#00CBB8]"></span>
          </span>
        </button>

      </div>
    </div>
  )
}
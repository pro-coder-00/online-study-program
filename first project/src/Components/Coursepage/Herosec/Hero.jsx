import React, { useEffect } from 'react'
import img1 from '../../../images/Resourse4.png'
import img2 from '../../../images/logo2.png'
import img3 from '../../../images/course1.png'
import img4 from '../../../images/course2.png'
import img5 from '../../../images/course3.png'

import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Hero() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // ✅ Cards data
  const cards = [
    { topImg: img1, courseImg: img3 },
    { topImg: img4, courseImg: img3 },
    { topImg: img5, courseImg: img3 },
  ];

  return (
    <div className="px-4 md:px-10 xl:px-20 overflow-x-hidden bg-[#f9fafb]">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row mt-[20px] justify-between items-center gap-3">

        <h1
          data-aos="fade-right"
          className='text-[#252641] text-xl md:text-2xl font-semibold text-center md:text-left'
        >
          Welcome back, ready for your next lesson?
        </h1>

        <h1
          data-aos="fade-left"
          className='text-[#49BBBD] font-semibold cursor-pointer hover:underline'
        >
          View history
        </h1>

      </div>

      {/* SWIPER SECTION */}
      <div className="mt-8" data-aos="fade-up">

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={800}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >

          {/* 🔥 Repeat cards multiple times for smooth infinite effect */}
          {[...cards, ...cards, ...cards].map((card, index) => (
            <SwiperSlide key={index}>

              <div className="mt-[20px] bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition duration-500 hover:-translate-y-2">

                {/* Top Image */}
                <img
                  src={card.topImg}
                  alt=""
                  className="rounded-lg w-full"
                />

                {/* Title (unchanged) */}
                <h1 className='text-[#252641] pt-5 font-semibold'>
                  AWS Certified Solutions Architect
                </h1>

                {/* Author */}
                <div className="flex items-center gap-5 mt-3">
                  <img src={img2} alt="" className="w-6 h-6" />
                  <h1>Lina</h1>
                </div>

                {/* Progress Image */}
                <img
                  src={card.courseImg}
                  alt=""
                  className='mt-5 w-full'
                />

                <h1 className='text-end text-xs pt-5'>
                  Lesson 5 of 7
                </h1>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </div>
  )
}
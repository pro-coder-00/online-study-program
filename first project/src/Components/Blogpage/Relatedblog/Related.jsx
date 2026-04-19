import React, { useEffect } from 'react'
import img1 from '../../../images/inst2.png'
import img2 from '../../../images/logo2.png'
import img3 from '../../../images/eye.png'
import img4 from '../../../images/Resourse4.png'

import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Related() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const cards = [
    { img: img1, name: "Lina" },
    { img: img4, name: "Lina" },
    { img: img1, name: "Lina" },
    { img: img4, name: "Lina" },
    { img: img1, name: "Lina" },
  ];

  return (
    <div className="py-10 px-4 sm:px-6 md:px-10 xl:px-20 bg-[#f9fafb] mt-[70px]">

      {/* Header */}
      <div className="flex justify-between items-center flex-wrap gap-3">
        <h1 className='font-bold text-xl sm:text-2xl text-[#2F327D]'>
          Related Blog
        </h1>

        <button className='text-sm sm:text-base text-[#696984] border-b-2 border-[#696984] hover:text-[#00CBB8] hover:border-[#00CBB8] transition duration-300'>
          See all
        </button>
      </div>

      {/* Swiper */}
      <div className="mt-8 sm:mt-12" data-aos="fade-up">

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >

          {cards.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-4 sm:p-5 rounded-xl shadow-sm hover:shadow-lg transition duration-300">

                {/* IMAGE */}
                <img
                  className='h-[200px] sm:h-[220px] md:h-[240px] w-full object-cover rounded-lg'
                  src={item.img}
                  alt=""
                />

                {/* TITLE */}
                <p className='text-[#252641] text-base sm:text-lg font-semibold pt-4 leading-snug'>
                  Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution
                </p>

                {/* AUTHOR */}
                <div className="flex items-center gap-3 pt-4">
                  <img className="w-8 h-8 sm:w-10 sm:h-10" src={img2} alt="" />
                  <h1 className='font-medium text-sm sm:text-base'>{item.name}</h1>
                </div>

                {/* DESCRIPTION */}
                <p className='text-[#696984] text-sm sm:text-base font-light pt-4 line-clamp-3'>
                  Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
                </p>

                {/* FOOTER */}
                <div className="flex justify-between items-center pt-4">

                  <button className='text-sm text-[#696984] border-b-2 border-[#696984] hover:text-[#00CBB8] hover:border-[#00CBB8] transition duration-300'>
                    Read more
                  </button>

                  <div className="flex gap-2 items-center text-sm">
                    <img className="w-4 h-4" src={img3} alt="" />
                    <h1>252,232</h1>
                  </div>

                </div>

              </div>
            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </div>
  )
}
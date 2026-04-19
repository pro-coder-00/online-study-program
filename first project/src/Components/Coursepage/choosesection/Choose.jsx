import React, { useEffect } from 'react'
import img1 from '../../../images/choose1.png'
import img2 from '../../../images/choose2.png'
import img3 from '../../../images/choose3.png'
import img4 from '../../../images/choose4.png'
import img5 from '../../../images/choose5.png'
import img6 from '../../../images/choose6.png'
import img7 from '../../../images/choose7.png'

import AOS from "aos";
import "aos/dist/aos.css";

export default function Choose() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const items = [
    { img: img1, title: "Design" },
    { img: img2, title: "Development" },
    { img: img3, title: "Development" },
    { img: img4, title: "Business" },
    { img: img5, title: "Marketing" },
    { img: img6, title: "Photography" },
    { img: img7, title: "Acting" },
    { img: img4, title: "Business" },
  ];

  return (
    <div className="px-4 md:px-10 xl:px-20 py-12 overflow-hidden">

      {/* TITLE */}
      <h1
        data-aos="fade-up"
        className="text-xl md:text-3xl font-bold text-center text-[#2F327D]"
      >
        Choice favourite course from top category
      </h1>

      {/* FLEX CONTAINER */}
      <div className="flex flex-wrap justify-center gap-6 mt-12">

        {items.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 80}
            className="w-full sm:w-[45%] lg:w-[22%] bg-white p-5 rounded-xl text-center 
            hover:shadow-xl hover:-translate-y-2 transition duration-300"
          >

            <img
              src={item.img}
              alt=""
              className="mx-auto w-20 h-20 object-contain hover:scale-110 transition duration-300"
            />

            <h1 className="font-semibold text-xl mt-4 text-[#252641]">
              {item.title}
            </h1>

            <p className="text-sm text-gray-500 mt-3 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmodadipiscing elit, sed do eiusmod
            </p>

          </div>
        ))}

      </div>
    </div>
  )
}
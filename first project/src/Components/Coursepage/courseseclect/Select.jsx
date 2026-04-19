import React, { useEffect } from 'react'
import img1 from '../../../images/choose8.png'
import img2 from '../../../images/select2.png'
import img3 from '../../../images/select1.png'
import img4 from '../../../images/logo2.png'
import img5 from '../../../images/select3.png'
import img6 from '../../../images/Resourse4.png'

import AOS from "aos";
import "aos/dist/aos.css";

export default function Select() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const Card = ({ img, delay }) => (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="w-full sm:w-[48%] lg:w-[23%] bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2 flex flex-col"
    >

      {/* IMAGE FIXED SIZE */}
      <div className="w-full h-[200px] overflow-hidden rounded-t-xl">
        <img
          src={img}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4 flex flex-col flex-1">

        <div className="flex justify-between items-center">
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </div>

        <h1 className="text-lg md:text-xl text-[#252641] pt-4 font-semibold">
          AWS Certified solutions <br /> Architect
        </h1>

        <p className="text-sm text-[#696984] pt-3 flex-1">
          Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor
        </p>

        <div className="flex justify-between items-center mt-4">

          <div className="flex items-center gap-3">
            <img src={img4} alt="" />
            <h1>Lina</h1>
          </div>

          <div className="flex items-center gap-3">
            <img src={img5} alt="" />
            <h1 className="font-bold text-[#49BBBD]">$80</h1>
          </div>

        </div>

      </div>
    </div>
  )

  return (
    <div className="px-4 md:px-10 xl:px-20 py-10 overflow-x-hidden">

      {/* HEADER */}
      <div className="flex justify-between items-center flex-wrap gap-3">
        <h1 className="text-xl md:text-2xl font-semibold text-[#252641]">
          Get choice of your course
        </h1>
        <h1 className="text-[#49BBBD] font-semibold cursor-pointer hover:underline">
          See all
        </h1>
      </div>

      {/* CARDS */}
      <div className="flex flex-wrap justify-between gap-6 mt-6">

        <Card img={img1} delay={100} />
        <Card img={img6} delay={200} />
        <Card img={img1} delay={300} />
        <Card img={img6} delay={400} />

      </div>

    </div>
  )
}
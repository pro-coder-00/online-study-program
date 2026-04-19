import React, { useEffect } from 'react'
import img1 from '../../../images/footer.png'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div>
      <div className="bg-[#252641] mt-[80px] px-[20px] py-[50px] overflow-x-hidden">

        <div data-aos="zoom-in" className="flex justify-center">
          <img src={img1} alt="Logo" className="h-[80px] md:h-[100px]" />
        </div>

        <p data-aos="fade-up" data-aos-delay="200" className="text-[#B2B3CF] text-center mt-[20px] text-lg md:text-xl">
          Subscribe to get our Newsletter
        </p>

        <div data-aos="fade-up" data-aos-delay="400" className="flex flex-col md:flex-row justify-center items-center gap-[15px] mt-[30px]"> 
          <input  className="w-full md:w-[350px] px-[25px] py-[12px] rounded-full outline-none focus:ring-2 focus:ring-[#00CBB8] transition duration-300"type="text"  placeholder="Your Email"  />
          <button className="relative px-[25px] py-[12px] border border-[#00CBB8] text-[#00CBB8] rounded-full hover:bg-[#00CBB8] hover:text-white transition duration-300">
            Subscribe
            <span className="absolute -top-1.5 right-2 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00CBB8] opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-[#00CBB8]"></span>
            </span>
          </button>
        </div>

        <div data-aos="fade-up" data-aos-delay="600" className="text-[#B2B3CF] flex flex-col md:flex-row gap-[15px] justify-center items-center mt-[40px] text-sm md:text-base">
          <h1 className="hover:text-white cursor-pointer transition">Careers | </h1>
          <h1 className="hover:text-white cursor-pointer transition">Privacy Policy |</h1>
          <h1 className="hover:text-white cursor-pointer transition">Terms & Conditions</h1>
        </div>

        <h1 data-aos="fade-up" data-aos-delay="800" className="text-[#B2B3CF] text-center mt-[20px] text-sm">
          © 2021 Class Technologies Inc.
        </h1>

      </div>
    </div>
  )
}
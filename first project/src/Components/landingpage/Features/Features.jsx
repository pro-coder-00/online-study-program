import React, { useEffect } from 'react'
import img1 from '../../../images/feature1.png'
import img2 from '../../../images/feature2.png'
import img3 from '../../../images/feature3.png'
import img4 from '../../../images/feature4.png'
import img5 from '../../../images/feature5.png'

import AOS from "aos";
import "aos/dist/aos.css";

export default function Features() {

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
      offset: 80,
    });
  }, []);

  const imageHover =
    "transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl";

  return (
    <div className="mt-16 px-4 sm:px-6 md:px-10 xl:px-20 overflow-x-hidden">

      {/* Heading */}
      <div className="text-center max-w-[700px] mx-auto">
        <h1
          data-aos="fade-down"
          className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-[#2F327D]"
        >
          Our <span className="text-[#00CBB8]">Features</span>
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="mt-4 text-gray-500 text-sm sm:text-base md:text-lg font-light"
        >
          These extraordinary features make learning activities more efficient
        </p>
      </div>

      {/* SECTION 1 */}
      <div className="flex flex-col xl:flex-row items-center mt-12 md:mt-16 gap-8 md:gap-10">
        <div data-aos="fade-right" className="xl:w-1/2 text-center xl:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold text-[#2F327D] leading-snug">
            <span className="text-[#00CBB8]">Tools</span> For Teachers <br className="hidden md:block"/>
            And Learners
          </h2>

          <p className="mt-4 text-gray-500 text-sm sm:text-base md:text-lg font-light">
            Class has a dynamic set of teaching tools built to be deployed and used during class.
            Teachers can handout assignments in real-time for students to complete and submit.
          </p>
        </div>

        <div data-aos="zoom-in" className={`xl:w-1/2 ${imageHover}`}>
          <img
            className="w-full h-[220px] sm:h-[300px] md:h-[380px] xl:h-[420px] object-contain rounded-xl"
            src={img1}
            alt=""
          />
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="flex flex-col xl:flex-row items-center mt-12 md:mt-16 gap-8 md:gap-10">
        <div data-aos="zoom-in" className={`xl:w-1/2 ${imageHover}`}>
          <img
            className="w-full h-[220px] sm:h-[300px] md:h-[380px] xl:h-[420px] object-contain rounded-xl"
            src={img2}
            alt=""
          />
        </div>

        <div data-aos="fade-left" className="xl:w-1/2 text-center xl:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold text-[#2F327D]">
            Assessments,<br />
            <span className="text-[#00CBB8]">Quizzes,</span> Tests
          </h2>

          <p className="mt-4 text-gray-500 text-sm sm:text-base md:text-lg font-light">
            Easily launch live assignments, quizzes, and tests. Student results are automatically entered.
          </p>
        </div>
      </div>

      {/* SECTION 3 */}
      <div className="flex flex-col xl:flex-row items-center mt-12 md:mt-16 gap-8 md:gap-10">
        <div data-aos="fade-right" className="xl:w-1/2 text-center xl:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold">
            <span className="text-[#00CBB8]">Class Management</span><br />
            <span className="text-[#2F327D]">Tools for Educators</span>
          </h2>

          <p className="mt-4 text-gray-500 text-sm sm:text-base md:text-lg font-light">
            Manage class roster, attendance, and grading with real-time tools.
          </p>
        </div>

        <div data-aos="zoom-in" className={`xl:w-1/2 ${imageHover}`}>
          <img
            className="w-full h-[220px] sm:h-[300px] md:h-[380px] xl:h-[420px] object-contain rounded-xl"
            src={img3}
            alt=""
          />
        </div>
      </div>

      {/* SECTION 4 */}
      <div className="flex flex-col xl:flex-row items-center mt-12 md:mt-16 gap-8 md:gap-10">
        <div data-aos="zoom-in" className={`xl:w-1/2 ${imageHover}`}>
          <img
            className="w-full h-[220px] sm:h-[300px] md:h-[380px] xl:h-[420px] object-contain rounded-xl"
            src={img4}
            alt=""
          />
        </div>

        <div data-aos="fade-left" className="xl:w-1/2 text-center xl:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold text-[#2F327D]">
            One-on-One <br />
            <span className="text-[#00CBB8]">Discussions</span>
          </h2>

          <p className="mt-4 text-gray-500 text-sm sm:text-base md:text-lg font-light">
            Teachers and assistants can talk privately with students easily.
          </p>
        </div>
      </div>

      {/* TESTIMONIAL */}
      <div className="mt-16 md:mt-20 flex flex-col xl:flex-row items-center gap-10">
        
        <div data-aos="fade-right" className="xl:w-1/2 text-center xl:text-left">
          
          <div className="flex items-center justify-center xl:justify-start gap-3">
            <div className="w-12 h-[2px] bg-[#00CBB8]"></div>
            <h3 className="text-[#2F327D] text-sm tracking-widest">TESTIMONIALS</h3>
          </div>

          <h2 className="mt-4 text-2xl md:text-3xl xl:text-4xl font-bold text-[#2F327D]">
            What They Say?
          </h2>

          <p className="mt-4 text-gray-500 text-sm md:text-lg font-light">
            TOTC has got more than 100k positive ratings worldwide.
          </p>

          <button
            data-aos="zoom-in"
            className="relative mt-6 px-6 py-2 border border-[#00CBB8] text-[#00CBB8] rounded-full hover:bg-[#00CBB8] hover:text-white transition duration-300"
          >
            Write your assessment

            <span className="absolute -top-1.5 right-2 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00CBB8] opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-[#00CBB8]"></span>
            </span>
          </button>
        </div>

        <div data-aos="zoom-in" className={`xl:w-1/2 ${imageHover}`}>
          <img
            className="w-full h-[220px] sm:h-[300px] md:h-[380px] xl:h-[420px] object-contain rounded-xl"
            src={img5}
            alt=""
          />
        </div>

      </div>

    </div>
  )
}
import React, { useEffect } from 'react'
import img1 from '../../../images/card1.png'
import img2 from '../../../images/card2.png'
import img3 from '../../../images/card3.png'

import AOS from "aos";
import "aos/dist/aos.css";

export default function Card() {

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
      offset: 80,
    });
  }, []);

  const cards = [
    {
      img: img1,
      title: "Online Billing, Invoicing, & Contracts",
      desc: "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts",
      aos: "fade-up"
    },
    {
      img: img2,
      title: "Easy Scheduling & Attendance Tracking",
      desc: "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
      aos: "fade-up",
      delay: 150
    },
    {
      img: img3,
      title: "Customer Tracking",
      desc: "Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization",
      aos: "fade-up",
      delay: 300
    }
  ];

  return (
    <div className="mt-16 px-4 sm:px-6 md:px-10 xl:px-20 overflow-x-hidden">

      <div className="flex flex-wrap justify-center gap-6">

        {cards.map((card, index) => (
          <div  
            key={index}
            data-aos={card.aos}
            data-aos-delay={card.delay || 0}
            className="w-full sm:w-[48%] lg:w-[30%] bg-white border rounded-2xl px-6 py-6 
            shadow-md transition-all duration-300 
            hover:-translate-y-3 hover:shadow-xl 
            cursor-pointer text-center flex flex-col"
          >

            {/* IMAGE (FIXED SIZE) */}
            <div className="flex justify-center mb-4 h-[120px] items-center overflow-hidden">
              <img 
                src={card.img} 
                alt="" 
                className="h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* TITLE */}
            <h1 className='text-[#2F327D] text-lg md:text-xl xl:text-2xl font-semibold transition-colors duration-300 hover:text-[#49BBBD]'>
              {card.title}
            </h1>

            {/* DESCRIPTION */}
            <p className='mt-4 text-[#696984] text-sm font-light flex-1'>
              {card.desc}
            </p>

          </div>
        ))}

      </div>

    </div>
  )
}
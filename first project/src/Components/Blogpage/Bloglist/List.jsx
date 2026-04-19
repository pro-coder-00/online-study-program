import React, { useEffect } from 'react'
import img1 from '../../../images/list1.png'
import img2 from '../../../images/list2.png'
import img3 from '../../../images/list3.png'
import img4 from '../../../images/list4.png'

import AOS from "aos";
import "aos/dist/aos.css";

export default function List() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="py-10 px-4 md:px-10 xl:px-20 overflow-x-hidden">
  
      <h1 data-aos="fade-right" className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 text-center lg:text-left" >
        Reading Blog List
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {[img1, img2, img3, img4].map((img, index) => (
          <div key={index}  data-aos="zoom-in" data-aos-delay={index * 150} className="overflow-hidden rounded-lg cursor-pointer transform transition duration-500 hover:scale-95" >
            <img  src={img}  alt={`blog-${index}`}  className="w-full h-full object-cover" />
          </div>
        ))}

      </div>

    </div>
  )
}
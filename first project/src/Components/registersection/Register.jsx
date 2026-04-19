import React, { useEffect } from 'react';
import img from '../../images/register.png';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Register() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9f9f9] px-2 lg:px-10 py-10 overflow-x-hidden">

      <div className="flex flex-col xl:flex-row justify-around items-center w-full max-w-[1200px] gap-10">

        <div data-aos="fade-right" className="hidden xl:block xl:w-[80vh]">
          <img  src={img} alt="Register Illustration" className="rounded-lg w-full h-auto object-cover"  />
        </div>

        <div data-aos="fade-left" className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-xl text-center font-thin">Welcome to lorem..!</h3>

          <div className="mt-8 flex justify-around py-3 rounded-full bg-[#49BBBD] transition duration-300">
            <Link to="/">
              <button className="text-white hover:text-black bg-[#49BBBD] border px-5 py-2 rounded-full hover:bg-white transition">
                Login
              </button>
            </Link>
            <button className="text-white hover:text-black bg-[#49BBBD] border px-5 py-2 rounded-full hover:bg-white transition">
              Register
            </button>
          </div>

          <p className="mt-6 text-center text-sm sm:text-lg font-thin text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

          <div className="mt-8">
            <h5 className="mb-2 font-thin">Email Address</h5>
            <input
              type="text"
              placeholder="Enter your Email Address"
              className="w-full py-3 px-4 rounded-full border border-[#49BBBD] outline-none focus:ring-2 focus:ring-[#00CBB8] transition duration-300"
            />
          </div>

          <div className="mt-6">
            <h5 className="mb-2 font-thin">User name</h5>
            <input
              type="text"
              placeholder="Enter your User name"
              className="w-full py-3 px-4 rounded-full border border-[#49BBBD] outline-none focus:ring-2 focus:ring-[#00CBB8] transition duration-300"
            />
          </div>

          <div className="mt-6">
            <h5 className="mb-2 font-thin">Password</h5>
            <input
              type="password"
              placeholder="Enter your Password"
              className="w-full py-3 px-4 rounded-full border border-[#49BBBD] outline-none focus:ring-2 focus:ring-[#00CBB8] transition duration-300"
            />
          </div>

          <div className="mt-8 flex justify-center">
            <Link to='/landing'>
              <button className="bg-[#49BBBD] px-16 py-3 rounded-full text-white hover:text-black hover:bg-white hover:border hover:border-[#49BBBD] transition duration-300">
                Register
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
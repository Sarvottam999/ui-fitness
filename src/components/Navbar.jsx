import React from 'react';

import logo from "../assets/LOGO.png"

const Navbar = () => {
  return (
    <nav className="bg-black p-4">
      <div className="    flex justify-between items-center mx-[300px]">
    
        <div className="flex space-x-20 justify-between items-center  ">
        <a href="/" className="text-white text-lg font-normal hover:text-gray-300">
            <img src={logo} className='h-14' alt="" />
          </a>
          <div></div>
          
          <a href="/blog" className="text-white text-lg font-normal hover:text-gray-300  ">
            ABOUT
          </a>
          <a href="/blog" className="text-white text-lg font-normal hover:text-gray-300">
            SCHEDULE
          </a>
          
          
          <a href="/login" className="text-white text-lg font-normal hover:text-gray-300">
            STORE
          </a>
        <a href="/login" className="text-white text-lg font-normal hover:text-gray-300">
            CONTACT
          </a>

        </div>

        <div className='flex space-x-2'>
          <div   className="bg-customlightBlack text-white  py-2 rounded-full px-5  text-sm hover:bg-blue-700">
            JOIN OUR GYM
          </div>
          <div className='rounded-full bg-customYellow p-3 flex justify-center items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4   rounded-full ">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
</svg>


          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

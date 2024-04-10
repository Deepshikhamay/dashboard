import React, { useState } from 'react'
import { FaCaretDown } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import desktop from "../image/pic.jpg"
function Nav() {
    const[toggle, setToggle] = useState(false);
    return (
  
        <div className="bg-white p-4  ">
        <div className="max-w-[1240px] py-15px items-center flex justify-between mx-auto ">

            {/* desktop menu */}

          <div className='h-[55px] w-[60px] mx-[80px]'>  
          <img src={desktop} alt=" " />
          </div>


          {toggle ? (
            <AiOutlineClose
              onClick={() => setToggle(!toggle)}
              className=" text-black text-2xl md:hidden block "
            />
          ) : (
            <AiOutlineMenu
              onClick={() => setToggle(!toggle)}
              className=" text-black text-2xl md:hidden block"
            />
          )}

          <ul className=" hidden md:flex text-[gray] gap-10 ">
            <li className=" hover:text-black mt-1 cursor-pointer ">Home </li>
            <li className=" hover:text-black mt-1 cursor-pointer ">Availabilty</li>
            <li className=" hover:text-black mt-1 cursor-pointer ">Integrations</li>
            <li className=" hover:text-black mt-1 cursor-pointer ">Help</li>
            <FaCaretDown  className='cursor-pointer mt-2 hover:text-black '/>
         <li className='cursor-pointer w-[40px] h-[40px] p-1 py-2 text-center border border-slate-600 shadow-inner 
         shadow-[gray] rounded-full bg-gray-300 text-black'>J</li>
        <li className=" hover:text-black mt-1 cursor-pointer ">Account</li>
        <FaCaretDown  className='cursor-pointer mt-2 hover:text-black'/>
          </ul>
         


          {/* Responsive menu*/}
          <ul className={ `duration-300 md:hidden w-full h-screen text-[gray] fixed bg-white top-[65px]
           ${toggle ? 'left-[0]' : 'left-[-100%]'}
           `}>
  
            <li className="p-6 hover:text-black cursor-pointer ">Home</li>
            <li className="p-6 hover:text-black cursor-pointer ">Availabilty</li>
            <li className="p-6 hover:text-black cursor-pointer ">Integrations</li>
            <li className="p-6 hover:text-black cursor-pointer ">Help</li>
            <li className='cursor-pointer w-[40px] h-[40px] mx-6 py-2 text-center border border-slate-600 shadow-inner
             shadow-[gray] rounded-full bg-gray-300 text-black '>J</li>
        <li className="p-6 hover:text-black cursor-pointer ">Account</li>
          </ul>
        </div>
        <div className="h-0.5 bg-gray-200 w-full mt-3"></div>

      </div>

  )
}

export default Nav
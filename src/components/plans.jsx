import React from "react";
import desktop from "../image/pic1.jpg";
import laptop from "../image/pic3.jpg";

function Plans() {
  return (
    <div className="md:ml-[14%] mx-[6%] md:mr-5 mb-10">
      {/* boxs section */}
      <div className="mt-9 text-2xl">What can I do as a team?</div>
      <div className="md:flex md:justify-between mt-[5%]">
      
           {/* box1 */}
        <div className="h-[400px]  md:h-[300px] md:w-[500px] w-full shadow-sm shadow-slate-400">
          <img src={desktop} alt="1stimage" className="mt-4 ml-4" />
          <div className="mt-5">
            <div className="mx-[30%] -mt-20 font-bold">
              Round Robin Scheduling
            </div>
            <div className="mx-[20%] mt-10 ">
              Automatically assign meetings based on what makes the most sense
              for your team's goals - whether by availability, priority, or
              equity.
            </div>
            <div className="cursor-pointer mt-8 mx-[30%] text-xl p-1 text-blue-500">
              watch vedio
            </div>
          </div>
        </div>

        {/* box2 */}

        <div className=" h-[400px] md:h-[300px] md:w-[500px] w-full shadow-sm shadow-slate-400">
          <img src={laptop} alt="1stimage" className="mt-4 ml-4" />
          <div className="mt-5">
            <div className="mx-[20%] -mt-20 font-bold">
              Access Powerful Management Tools
            </div>
            <div className="mx-[15%] mt-10 ">
              Get new and existing users up to speed and engaged with event type
              templates to make sure everyone's set up for efficent scheduling,
              all managed through one centralized billing solution.
            </div>
            <div className="cursor-pointer mt-4 mx-[30%] text-xl p-1 text-blue-500">
              watch vedio
            </div>
          </div>
        </div>

        {/* button */}
        <div className="my-6 md:my-0">
          <button className="py-3 px-6 mr-5 text-lg bg-gray-700 rounded-xl text-[#FFFF]">
            Getting started
          </button>
          <p className="h-6 w-6 hidden md:block bg-red-600 text-[#FFF] rounded-full pl-[7px] -pt-2 ml-[80%] -mt-[68px] z-100">
            3
          </p>
        </div>
      </div>
    </div>
  );
}

export default Plans;

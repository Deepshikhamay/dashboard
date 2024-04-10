import React, { useState } from "react";

function Head() {
  const [selectedTab, setSelectedTab] = useState("All people");

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };
  return (
    <div className="shadow-xl pb-4 md:pb-0">
      <div className="ml-[14%]">
        {/* header section */}

        <div className="mt-1 font-medium text-2xl md:flex">
          <div>Admin Management</div>
          <div className="text-[gray] font-normal mt-3 text-[17px] ml-3 md:mt-0.5">
            1/1 seats occupied{" "}
          </div>
        </div>
        <div className="flex justify-end md:mr-40 mr-10 -mt-9">
          <div>
            <button className="text-blue-500 border border-blue-500 rounded-full p-2 px-4 hover:bg-sky-600 hover:text-white shadow-10 shadow-blue-400 ">
              + New User
            </button>
          </div>
        </div>

        {/* tab section */}

        <div className="md:flex">
          <div
            className={`cursor-pointer mr-6 w-19 mt-10 pb-4 text-[gray] ${
              selectedTab === "All people" &&
              "border-b-[4px]  border-blue-600 text-black"
            } `}
            onClick={() => handleTabClick("All people")}
          >
            All people
          </div>
          <div
            className={`cursor-pointer mr-6 w-18 mt-10 pb-4 text-[gray] ${
              selectedTab === "Groups" &&
              "border-b-[4px]  border-blue-600 text-black"
            } `}
            onClick={() => handleTabClick("Groups")}
          >
            Groups
          </div>
          <div
            className={`cursor-pointer mr-6 w-18 mt-10 pb-4 text-[gray] ${
              selectedTab === "Managed events" &&
              "border-b-[4px]  border-blue-600 text-black"
            } `}
            onClick={() => handleTabClick("Managed events")}
          >
            Managed events
          </div>
          <div
            className={`cursor-pointer mr-4 w-1/6 md:w-[4.5%] mt-10 mb-4 bg-blue-500 text-white px-3 p-1 rounded-lg text-[12px] sm:font-bold ${
              selectedTab === "BETA" && "border-b-[4px]  border-blue-600"
            } `}
            onClick={() => handleTabClick("BETA")}
          >
            BETA
          </div>
        </div>
      </div>
    </div>
  );
}

export default Head;

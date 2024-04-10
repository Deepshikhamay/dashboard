import React from "react";

function InviteUser() {
  return (
    <div className="md:flex md:flex-col md:justify-center md:items-center mt-[6%] mx-[6%] md:mx-0 ">
      <div className="text-2xl font-bold mt-12 ">
        Start building your organization
      </div>
      <div className="mt-8">
        Invite users to unlock unique team scheduling features starting as low
        as $12 per user/mo.
      </div>
      <div className="mt-8 bg-blue-600 w-1/3 md:w-[8%] rounded-full p-3 text-white px-3 font-medium">
        <button>Invite Users</button>
      </div>
      <div className="bg-white py-4 px-7 ml-[97%] hidden md:block -rotate-90 -mt-[5%] rounded-lg shadow-sm shadow-slate-600">
        <button className="text-[gray]">Feedback</button>
      </div>
      <div className="h-[1px] w-[75%] mt-[13%] bg-gray-200"></div>
    </div>
  );
}

export default InviteUser;

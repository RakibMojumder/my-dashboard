import React from "react";
import { IoMdNotifications } from "react-icons/io";

const NavItems = () => {
  return (
    <div className="flex gap-3 items-center">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="relative">
          <IoMdNotifications size={25} color="#767CF2" />
          <span className="h-5 w-5 rounded-full flex justify-center items-center font-medium bg-cyan-400 text-[10px] absolute -top-3.5 -right-2">
            11
          </span>
        </div>
      ))}
    </div>
  );
};

export default NavItems;

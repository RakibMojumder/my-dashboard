import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBox = () => {
  return (
    <div className="hidden sm:block w-1/2 md:w-[30%] xl:w-1/3 text-slate-400 relative">
      <input
        type="text"
        placeholder="Search Here"
        className="w-full py-2 md:py-3.5 pl-10 md:pl-14 text-sm rounded-full bg-[#211A75] focus:outline-none"
      />

      <FiSearch className="rotate-90 absolute top-2.5 left-3 md:left-5 md:text-2xl" />
    </div>
  );
};

export default SearchBox;

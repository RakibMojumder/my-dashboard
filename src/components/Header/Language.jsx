import React from "react";
import UkFlag from "../../../public/uk-flag.png";
import Image from "next/image";
import { BiChevronDown } from "react-icons/bi";

const Language = () => {
  return (
    <div className="hidden md:flex gap-1.5 lg:gap-2.5 items-center px-1 lg:px-4 py-1 lg:py-2 bg-[#211A75] rounded-full">
      <Image
        alt="uk flag"
        src={UkFlag}
        height={20}
        width={20}
        className="h-5 w-5 rounded-full"
      />
      <h3 className="text-white text-xs uppercase hidden lg:block">English</h3>
      <BiChevronDown size={24} className="text-purple" />
    </div>
  );
};

export default Language;

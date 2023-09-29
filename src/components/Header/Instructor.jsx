import React from "react";
import InstructorImg from "../../../public/instructor.jpg";
import Image from "next/image";
import { BiChevronDown } from "react-icons/bi";

const Instructor = () => {
  return (
    <div className="flex gap-2 items-center">
      <Image
        src={InstructorImg}
        height={40}
        width={40}
        alt="Instructor image"
        className="h-7 lg:h-10 w-7 lg:w-10 rounded-lg"
      />
      <div className="text-white hidden md:block">
        <h3 className="text-sm">Instructor Day</h3>
        <p className="text-xs">Super Admin</p>
      </div>
      <BiChevronDown size={24} className="text-purple" />
    </div>
  );
};

export default Instructor;

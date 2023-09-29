import React from "react";
import Logo from "../../../public/companyLogo.png";
import Image from "next/image";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { MdOutlineMessage, MdOutlinePeople } from "react-icons/md";
import Peoples from "../Peoples";
import Progressbar from "../Progressbar";

const Hero = () => {
  return (
    <div className="p-5 bg-secondary rounded-lg">
      <div className="flex gap-3">
        <div className="h-6 w-6 p-1 rounded-full bg-[#A5A5A5] hidden lg:block">
          <HiOutlineArrowNarrowLeft size={16} />
        </div>
        <div className="flex-1">
          <div className="flex flex-col md:flex-row justify-between gap-y-6 md:gap-y-0">
            <div>
              <h3 className="text-xl font-medium mb-2 text-white">
                School November Tasks
              </h3>
              <p className="text-xs text-gray-500">
                Created by Instructor Day on November 31, 2022
              </p>
            </div>
            <div className="flex gap-2">
              <div>
                <h5 className="text-sm text-white">Centered Martial Arts</h5>
                <p className="text-xs text-gray-500">Sunnyvale, Ca</p>
              </div>
              <Image
                src={Logo}
                alt="company logo"
                height={100}
                width={100}
                className="h-full w-12"
              />
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row justify-between lg:items-center mt-6 gap-y-5 lg:gap-y-0">
            <div className="flex flex-wrap md:flex-nowrap items-center gap-3">
              <Peoples data={6} size="large" />
              <button className="bg-purple h-8 text-white rounded-lg px-3 text-xs flex gap-2 justify-between items-center">
                <MdOutlinePeople size={22} />
                Invite People
              </button>
              <button className="bg-primary text-white rounded-lg px-3 h-8 text-xs border border-[#7879F1]">
                Private
              </button>
              <button className="bg-[#7879F1] text-white rounded-lg px-3 h-8 text-xs border border-[#7879F1]">
                Edit
              </button>
              <button className="bg-primary h-8 text-white rounded-lg px-3 text-xs flex gap-2 justify-between items-center border border-[#7879F1]">
                <MdOutlineMessage size={20} />
                Message
              </button>
            </div>
            <div className="flex flex-col xl:flex-row xl:items-center gap-3 xl:gap-5">
              <h3 className="text-white text-sm">Total progress 60%</h3>
              <div className="h-[6px] w-40 rounded-full bg-[#1E1C3A] relative before:absolute before:top-0 before:left-0 before:w-3/5 before:h-full before:bg-purple before:rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

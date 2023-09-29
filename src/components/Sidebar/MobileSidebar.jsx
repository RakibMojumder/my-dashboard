"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { links } from "@/data";
import bannerImg from "../../../public/banner.png";
import Image from "next/image";
import { GLOBAL_CONTEXT } from "@/context/GlobalStateProvider";
import { FiSearch } from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";
import UkFlag from "../../../public/uk-flag.png";
import { useRouter } from "next/navigation";

const MobileSidebar = () => {
  const { open, setOpen } = useContext(GLOBAL_CONTEXT);
  const router = useRouter();

  const handleNavigate = (url) => {
    setOpen((prev) => !prev);
    router.push(url, { scroll: false });
  };

  return (
    <div
      className={`text-white bg-primary p-7 pt-0 absolute top-0 left-0 h-screen w-full z-[9999] overflow-y-auto ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="py-4 flex justify-between items-center gap-4 border-b border-gray-700">
        <h2 className="text-xl font-light">weframetech</h2>
        <RxCross2
          onClick={() => setOpen((prev) => !prev)}
          size={28}
          color="#767CF2"
          className="cursor-pointer"
        />
      </div>
      <div className="mt-4 mb-20">
        {/* MOBILE SEARCH BOX */}
        <div className="w-full text-slate-400 mb-6 relative">
          <input
            type="text"
            placeholder="Search Here"
            className="w-full py-2 md:py-3.5 pl-10 md:pl-14 text-sm rounded-full bg-[#211A75] focus:outline-none"
          />

          <FiSearch className="rotate-90 absolute top-2.5 left-3 md:left-5 md:text-2xl" />
        </div>

        {/* SIDEBAR MENU */}
        <h4 className="uppercase text-xs mb-6 font-semibold">Main Menu</h4>

        <div className="space-y-7">
          {links.map(({ id, href, label, icon }) => {
            const Icon = icon;
            return (
              <button
                key={id}
                onClick={() => handleNavigate(href)}
                className="flex items-center gap-3 text-sm text-gray-500"
              >
                <Icon size={20} />
                {label}
              </button>
            );
          })}
        </div>

        <div className="w-full flex justify-between items-center px-4 py-2 bg-[#211A75] rounded-full mt-7">
          <Image
            alt="uk flag"
            src={UkFlag}
            height={20}
            width={20}
            className="h-5 w-5 rounded-full"
          />
          <h3 className="text-white text-xs uppercase block">English</h3>
          <BiChevronDown size={24} className="text-purple" />
        </div>
      </div>
      <Image
        alt="banner image"
        src={bannerImg}
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
};

export default MobileSidebar;

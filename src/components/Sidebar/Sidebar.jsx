"use client";

import Link from "next/link";
import React from "react";
import { IoMenu } from "react-icons/io5";
import { links } from "@/data";
import bannerImg from "../../../public/banner.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="text-white p-10 pt-0">
      <div className="py-7 flex justify-center items-center gap-4">
        <h2 className="text-xl font-light">weframetech</h2>
        <IoMenu size={28} color="#767CF2" />
      </div>
      <div className="mt-2 mb-20">
        <h4 className="uppercase text-xs mb-6 font-semibold">Main Menu</h4>
        <div className="space-y-7">
          {links.map(({ id, href, label, icon }) => {
            const Icon = icon;
            return (
              <Link
                key={id}
                href={href}
                className={`flex items-center gap-3 text-sm ${
                  pathname === href ? "text-purple" : "text-gray-500"
                }`}
              >
                <Icon size={20} />
                {label}
              </Link>
            );
          })}
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

export default Sidebar;

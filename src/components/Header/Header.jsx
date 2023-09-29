"use client";

import React, { useContext } from "react";
import SearchBox from "./SearchBox";
import NavItems from "./NavItems";
import Language from "./Language";
import Instructor from "./Instructor";
import { RxHamburgerMenu } from "react-icons/rx";
import { GLOBAL_CONTEXT } from "@/context/GlobalStateProvider";
import MobileSidebar from "../Sidebar/MobileSidebar";

const Header = () => {
  const { open, setOpen } = useContext(GLOBAL_CONTEXT);

  return (
    <div className="w-full py-5 px-4 sm:px-2 lg:px-8 bg-secondary flex justify-between items-center">
      <RxHamburgerMenu
        onClick={() => setOpen((prev) => !prev)}
        size={24}
        className="sm:hidden text-white cursor-pointer"
      />
      <SearchBox />
      <h3 className="text-purple underline uppercase text-xs hidden xl:block">
        Other menus
      </h3>
      <NavItems />
      <Language />
      <Instructor />

      {open && <MobileSidebar />}
    </div>
  );
};

export default Header;

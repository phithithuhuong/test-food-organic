"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Search from "./Search";
import Menu from "./Menu";
import ContactInfo from "./Contact";
import Sidebar from "./Sidebar";
const HeaderScreen = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(false);
  };
  const hideDrawer = () => {
    setOpen(true);
  };
  return (
    <div className="flex flex-row  px-5  w-full justify-between bg-white z-10">
      <div
        className="flex flex-row space-x-[5px] items-center cursor-pointer py-[18px]"
        onClick={hideDrawer}
      >
        <img src="/tree.png" alt="tree" className="w-[43px] h-[34px]" />
        <img src="/Organic.png" alt="tree" className="w-[108px] h-10" />
        <FontAwesomeIcon icon={faBars} className="pl-[15px] text-[20px]" />
      </div>
      <div className="hidden md:block py-[18px]">
        <Search />
      </div>
      <Menu />
      <ContactInfo />
      <Sidebar open={open} onClose={showDrawer} />
    </div>
  );
};

export default HeaderScreen;

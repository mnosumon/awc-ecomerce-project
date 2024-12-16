"use client";
import React, { useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import NavbarLink from "@/components/utilities/NavbarLink";
import { menuItems } from "@/components/dummyData/DummyArray";

const NavForMobile = ({ setOpen, open }) => {
  const [productOpen, setProductOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const cartRef = useRef();
  console.log(productOpen);

  const handleMenuClick = (menu) => {
    setActiveMenu((prevMenu) => (prevMenu === menu ? null : menu));
    setProductOpen(menu === "products");
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full sm:w-4/5 md:w-3/5 z-10 h-screen  transform transition-transform duration-700 ease-in-out bg-white ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Main Menu */}
      {!productOpen && (
        <div className="w-full mx-auto relative">
          <div className="flex items-center justify-between py-7 px-4">
            <span
              className="text-3xl cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <IoCloseOutline />
            </span>
            <span className="text-right block">
              <Link href="#">Sign In</Link> or <Link href="#">Register</Link>
            </span>
          </div>
          <hr className="h-[2px] bg-gray-400 border-0 w-full my-3" />
          <ul className="flex flex-col gap-4 px-4">
            {menuItems.map((item) => (
              <li
                key={item.category}
                onClick={() => handleMenuClick(item.category)}
                className="flex justify-between items-center cursor-pointer"
              >
                <NavbarLink href="#" label={item.label} />
                <span>
                  <IoIosArrowForward />
                </span>
              </li>
            ))}
          </ul>
          <hr className="h-[2px] bg-gray-400 border-0 w-full my-3" />
          <div className="flex gap-4 items-center py-3 px-4">
            <Link
              href="#"
              ref={cartRef}
              className="text-2xl text-[#4b4d4e] cursor-pointer"
            >
              <BsCart3 />
            </Link>
            <span className="uppercase text-lg font-bold">Cart</span>
          </div>
          <hr className="h-[2px] bg-gray-400 border-0 w-full my-3" />
          <button className="text-base mt-3 font-montserrat font-normal tracking-[2px] rounded-full px-5 py-2 border border-[#3434387c] text-[#343438] hover:text-[#000] hover:scale-105 transform transition-all ease-in-out duration-300 mx-4">
            WHERE TO BUY
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavForMobile;

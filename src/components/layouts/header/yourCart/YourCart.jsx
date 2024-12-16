import React from "react";
import { RxCross1 } from "react-icons/rx";
import { IoGiftSharp } from "react-icons/io5";
import Link from "next/link";

const YourCart = ({ setYourCart }) => {
  return (
    <div className="w-full bg-[#FFF] shadow-md p-4 overflow-y-auto h-screen ">
      <div className="flex justify-between items-center px-2 mb-10">
        <span className="capitalize text-base text-[#343438] font-montserrat font-bold">
          your cart
        </span>
        <span
          onClick={() => setYourCart(false)}
          className="text-xl cursor-pointer"
        >
          <RxCross1 />
        </span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-2">
          <span>$25</span>
          <h2 className="text-base italic  text-[#343438] font-montserrat ">
            away from Free Shipping
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <span>
            <IoGiftSharp />
          </span>
          <span>$25</span>
          <h2 className="text-base text-[#343438] font-montserrat italic ">
            away from Free Shipping
          </h2>
        </div>
      </div>
      <button className="w-full text-base mt-3 font-montserrat font-bold tracking-[2px] rounded-bl-2xl rounded-tr-2xl px-5 py-2 bg-[#FDCA21] text-[#343438] hover:text-[#000] hover:scale-105 transform transition-all ease-in-out duration-300">
        Checkout
      </button>
      <span className="flex items-center justify-center my-5">
        <Link
          href="#"
          className="text-base text-[#343438] font-montserrat font-bold tracking-[2px] border-b-2 border-[#FDCA21] border-opacity-0 hover:border-opacity-100 transition-all duration-500 "
        >
          Continue shopping
        </Link>
      </span>
      <hr className="pb-10" />
      <div className="">
        <h2 className="text-lg text-center font-bold  text-[#343438] font-montserrat ">
          You May Also Like
        </h2>
        <div className="mt-4">{/* <CartSlider /> */}</div>
      </div>
    </div>
  );
};

export default YourCart;

import React from "react";
import { FiSearch } from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="bg-amazon-dark min-h-[12vh] flex items-center px-10 h-full text-white gap-10">
      <Link href="/">
        <Image
          src="https://pngimg.com/d/amazon_PNG11.png"
          alt="amazon logo"
          height={100}
          width={100}
        />
      </Link>
      <div className="flex items-end gap-1 cursor-pointer">
        <div className="flex flex-col gap-0 justify-around">
          <span className="text-sm h-4">Select</span>
          <span className="font-semibold">Category</span>
        </div>
        <div className="text-xl">
          <BiChevronDown />
        </div>
      </div>
      <div className="flex-1 flex">
        <input
          type="text"
          placeholder="Search Products"
          className="w-full rounded-l-sm h-12 outline-none border-none pl-5 text-gray-100"
        ></input>
        <button className="h-12 w-14 bg-amazon-primary rounded-r-sm outline-none border-none text-xl flex items-center justify-center hover:bg-amazon-secondary transition-all duration-300"></button>
      </div>
    </nav>
  );
};

export default Navbar;

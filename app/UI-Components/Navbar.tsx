"use client";
import Image from "next/image";
import logo from "../../public/logo.png";
import { X } from "lucide-react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const handleNav = () => {
    setMenu(!menu);
  };

  return (
    <nav className=" bg-gray-200 shadow">
      <div className=" flex lg:flex-row-reverse justify-between items-center  px-3  w-full">
        <div>
          <ul className="hidden lg:flex gap-x-9 items-center">
            <li className=" ">
              <Link href="/">Home</Link>
            </li>
            <li className="">
              <Link href="/">About</Link>
            </li>
            <li className="active:font-semibold ">
              <Link href="/">Services</Link>
            </li>
            <li className="">
              <Link href="/">Deparments</Link>
            </li>
            <li className="">
              <Link href="/">Doctors</Link>
            </li>
            <li className="">
              <Link href="/">
                <Button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                  All Products
                </Button>
              </Link>
            </li>
          </ul>
        </div>
        <Image
          src={logo}
          alt="logo"
          width={100}
          height={40}
          className="rounded-full"
        />
        <div onClick={handleNav} className="lg:hidden">
          <Menu absoluteStrokeWidth />
        </div>
        <div
          className={
            menu
              ? "fixed top-0   lg:hidden h-screen w-[50%] bg-gradient-to-tr from-[#4a96e2] to-[#234669] p-10 ease-in duration-500 left-0 "
              : "left-[-100%] hidden"
          }
        >
          <div>
            <button onClick={handleNav} className="absolute top-4 right-4">
              <X />
            </button>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <ul className="flex flex-col justify-center items-center gap-y-8 ">
                <li className=" ">
                  <Link href="/">Home</Link>
                </li>
                <li className="">
                  <Link href="/">About</Link>
                </li>
                <li className="active:font-semibold ">
                  <Link href="/">Services</Link>
                </li>
                <li className="">
                  <Link href="/">Deparments</Link>
                </li>
                <li className="">
                  <Link href="/">Doctors</Link>
                </li>
                <li className=" " onClick={handleNav}>
                  <Link href="/">
                    <Button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                      All Products
                    </Button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

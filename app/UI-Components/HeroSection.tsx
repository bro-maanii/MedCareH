import Image from "next/image";
import dctr from "../../public/doctor.png";
import bg from "../../public/bg-1.jpeg";
import React from "react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="relative w-full h-[400px] sm:h-[600px] ">
      {/* Background Image */}
      <div
        className="absolute bg-fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>

      {/* Content */}
      <div className="absolute inset-0 grid md:grid-cols-3 justify-between align-middle items-center text-white z-10 ">
        <div className="col-span-2 flex flex-col justify-center items-center w-full ">
          <h1 className="text-6xl font-bold">Welcome to <span className="text-blue-500">Med Care Hospital</span></h1>
          <p className="text-lg p-3 sm:p-4 sm:px-7 sm:w-[80%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            ipsam omnis recusandae dolore? Autem molestias enim, laboriosam
            accusamus tenetur porro voluptatum minus, itaque omnis asperiores
            fugiat unde optio quisquam architecto!
          </p>
          <div className="flex gap-4">
            <Button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Learn More
            </Button>
            <Button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Make Appointment
            </Button>
          </div>
        </div>
        <div className="hidden md:flex justify-self-end w-full h-full bg-white lg:rounded-l-full rounded-ss-full">
          <Image
            src={dctr}
            alt="logo"
            width={600}
            height={500}
            className="lg:rounded-l-full hover:bg-opacity-65"
          />
        </div>
      </div>
    </div>
  );
}

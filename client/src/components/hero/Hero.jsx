"use client";

import Image from "next/image";
import React from "react";
import hand_icon from "@/assets/hand_icon.png";
import arrow from "@/assets/arrow.png";
import hero_image from "@/assets/hero_image.png";
const Hero = () => {
  return (
    <div className="flex bg-gradient-to-b from-indigo-200 via-purple-200 to-pink-50">
      <div className="flex flex-1 flex-col justify-center gap-5 pl-44">
        <h1 className="md:text-5xl font-semibold sm:text-3xl">New Arrivals Only</h1>
        <div>
          <div className="flex items-center gap-3">
            <p className="sm:text-xl md:text-3xl text-xl">New</p>
            <Image src={hand_icon} alt="img" className="w-10 sm:w-8" />
          </div>
          <p className="md:text-3xl sm:text-xl text-xl">Collection</p>
          <p className="md:text-3xl sm:text-xl text-xl">for everyone</p>
        </div>
        <div>
          <div className="flex justify-center items-center gap-4 md:w-80 md:h-20 mt-7 border border-r-2 border-black rounded-full h-10 w-56 sm:h-12 sm:w-60">
            <p className="md:text-2xl sm:text-xl cursor-pointer text-lg"> Latest collections</p>
            <Image src={arrow} alt="img" />
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <Image src={hero_image} alt="img" />
      </div>
    </div>
  );
};

export default Hero;

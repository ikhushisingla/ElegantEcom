'use client'
import React from "react";

const Newsletter = () => {
  return (
    <div className="flex flex-col items-center justify-center m-auto bg-gradient-to-b from-indigo-200 via-purple-200 to-pink-50 mt-12 h-64 gap-7">
      <h1 className="sm:text-4xl font-semibold text-2xl">Get exclusive offers on our newsletter</h1>
      <p className="text-2xl">Subscribe to our newsletter</p>
      <div className="flex items-center justify-between border border-r-2 border-black rounded-full h-16 sm:h-10">
        <input
          type="email"
          placeholder="Email"
          className="bg-transparent w-52 focus:outline-none ml-4"
        />
              <button className="cursor-pointer w-44 h-16 bg-black
         border-l-2 border-black rounded-full text-white sm:h-10 sm:w-24">Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;

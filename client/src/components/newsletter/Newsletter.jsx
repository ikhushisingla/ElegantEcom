'use client'
import React from "react";

const Newsletter = () => {
  return (
    <div className="w-2/3 flex flex-col items-center justify-center m-auto bg-gradient-to-b from-indigo-200 via-purple-200 to-pink-50 mt-12 h-64 gap-7">
      <h1 className="text-4xl font-semibold">Get exclusive offers on our newsletter</h1>
      <p className="text-2xl">Subscribe to our newsletter</p>
      <div className="flex items-center justify-between border border-r-2 border-black rounded-full h-16">
        <input
          type="email"
          placeholder="Email"
          className="bg-transparent w-52 focus:outline-none ml-4"
        />
              <button className="cursor-pointer w-44 h-16 bg-black
         border-l-2 border-black rounded-full text-white">Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;

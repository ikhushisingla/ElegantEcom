"use client";
import React, { useState } from "react";
import logo from "@/assets/logo.png";
import cart_icon from "@/assets/cart_icon.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-around items-center">
      <div className="flex items-center gap-3">
        <Image src={logo} alt="img" />
        <p className="font-semibold text-lg">3LEGANT</p>
      </div>
      <div className="flex gap-10 cursor-pointer">
        <p className={pathname === "/" && "underline underline-offset-2"}>
          <Link href="/">Shop</Link>
        </p>
        <p className={pathname === "/women" && "underline underline-offset-2"}>
          <Link href="/women">Women</Link>
        </p>
        <p className={pathname === "/men" && "underline underline-offset-2"}>
          <Link href="/men">Men</Link>
        </p>
        <p className={pathname === "/kid" && "underline underline-offset-2"}>
          <Link href="/kid">Kids</Link>
        </p>
      </div>
      <div className="flex gap-3">
        <Link href="/login">
          <button className=" text-lg border border-solid-1 rounded-full px-4">Login</button>
        </Link>
        <Link href="/cart">
          <Image src={cart_icon} alt="img" className="w-8" />
        </Link>

        <div className="w-5 h-5 flex justify-center items-center -ml-5 -mt-2 text-white bg-red-500 border rounded-full">
          0
        </div>
      </div>
    </div>
  );
};

export default Navbar;

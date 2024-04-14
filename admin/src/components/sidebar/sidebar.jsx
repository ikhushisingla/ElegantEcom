"use client";

import React from "react";
import Link from "next/link";
import addproduct from "../../assets/Product_Cart.svg";
import listproduct from "../../assets/Product_list_icon.svg";
import Image from "next/image";
const Sidebar = () => {
  return (
    <div className="flex  flex-col pt-8 gap-8 w-4/5 h-[100vh] sm:max-w-36 md:max-w-52 bg-white shadow-lg max-w-32">
      <Link href={"/addproduct"} className="no-underline">
        <div className="flex items-center justify-center gap-3 hover:bg-slate-100 ml-5 mr-5 pt-2 pb-2 cursor-pointer">
          <Image src={addproduct} />
          <p>Add Product</p>
        </div>
      </Link>
      <Link href={"/listproduct"} className="no-underline">
        <div className="flex items-center justify-center gap-3 hover:bg-slate-100 ml-5 mr-5 pt-2 pb-2 cursor-pointer">
          <Image src={listproduct} />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;

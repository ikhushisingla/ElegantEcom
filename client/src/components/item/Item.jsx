"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

const Item = (props) => {
  return (
    <div className="w-fit m-2 transition-all duration-300 hover:scale-110 lg:mr-2">
      <Link href={`/product/${props.id}`}>
        <Image src={props.image} alt="img" className="w-60" width={40} height={40}/>
      </Link>
      <p className="mt-2 mb-2 md:font-semibold md:text-lg sm:text-sm">{props.name}</p>
      <div className="flex md:gap-5 sm:gap-4">
        <div className="md:font-semibold text-slate-400">${props.new_price}</div>
        <div className="md:font-semibold text-slate-400 line-through">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;

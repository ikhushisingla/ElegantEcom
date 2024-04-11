"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

const Item = (props) => {
  return (
    <div className="w-fit m-2 transition-all duration-300 hover:scale-110">
      <Link href={`/product/${props.id}`}>
        <Image src={props.image} alt="img" className="w-60" />
      </Link>
      <p className="mt-2 mb-2 font-semibold text-lg">{props.name}</p>
      <div className="flex gap-5">
        <div className="font-semibold text-slate-400">${props.new_price}</div>
        <div className="font-semibold text-slate-400 line-through">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;

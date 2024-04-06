"use client";

import React from "react";
import data_product from "../assets/data";
import Item from "../item/Item";

const Popular = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-3xl font-semibold mt-3">Popular in Women</h1>
      <hr className="w-52" />
      <div className="mt-6 flex gap-8">
        {data_product.map((ele, idx) => {
          return (
            <Item
              key={idx}
              id={ele.id}
              name={ele.name}
              image={ele.image}
              new_price={ele.new_price}
              old_price={ele.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;

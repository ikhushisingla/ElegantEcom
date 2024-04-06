"use client";
import React from "react";
import new_collections from "../assets/new_collections";
import Item from "../item/Item";

const NewCollection = () => {
  return (
    <div className="mt-8 ml-24">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold">New Collections</h1>
        <hr className="w-60" />
      </div>

      <div className="grid grid-cols-4 mt-4">
        {new_collections.map((ele, idx) => {
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

export default NewCollection;

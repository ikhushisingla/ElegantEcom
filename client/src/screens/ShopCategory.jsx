"use client";
import { ShopContext } from "@/context/ShopContext";
import React, { useContext } from "react";
import Image from "next/image";
import dropdown from "@/components/assets/dropdown_icon.png";
import Item from "@/components/item/Item";
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div>
      <Image src={props.banner} alt="img" className="block ml-auto mr-auto mt-8 mb-8 w-4/5" />
      <div className="flex ml-40 mr-40 justify-between items-center">
        <p className="text-xl text-slate-500">
          <span className="text-2xl font-semibold text-slate-500">Showing 1-12 </span>out of 36
          products
        </p>
        <div className="flex items-center gap-3 text-slate-500">
          Sort by <Image src={dropdown} alt="img" className="h-2" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5 lg:ml-20 mt-3">
        {all_product.map((ele, idx) => {
          if (props.category === ele.category) {
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
          } else return null;
        })}
      </div>
      <div className="flex justify-center items-center ml-auto mr-auto text-lg mt-10 border border-solid-2 w-44 rounded-full p-2 hover:bg-slate-200">
        <button>Explore More</button>
      </div>
    </div>
  );
};

export default ShopCategory;
